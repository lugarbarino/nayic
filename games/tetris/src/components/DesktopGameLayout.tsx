import { useDrag } from 'react-dnd';
import { getBlockImage } from '../TetrisGameWrapper';
import svgPaths from '../svg/escritorio';
import { DraggablePiece } from './DraggablePiece';
import { GridToggle } from './GridToggle';

interface Piece {
  shape: number[][];
  x: number;
  y: number;
  type: string;
  rotation: number;
  blockIndex: number;
}

// Componente auxiliar para renderizar bloques
function BlockRenderer({ 
  block, 
  className 
}: { 
  block: string | React.ComponentType; 
  className?: string;
}) {
  // Si es un string (URL de imagen), renderizar como img
  if (typeof block === 'string') {
    return <img src={block} alt="" className={className} style={{ imageRendering: 'pixelated' }} />;
  }
  
  // Si es un componente React, renderizarlo en un div contenedor
  const BlockComponent = block;
  return (
    <div className={className} style={{ imageRendering: 'pixelated' }}>
      <BlockComponent />
    </div>
  );
}

interface DesktopGameLayoutProps {
  nextPieces: Piece[]; // 3 próximas piezas
  lines: number;
  score: number;
  themeBlocks: (string | React.ComponentType)[];
  gridEnabled: boolean;
  onToggleGrid: () => void;
  onBack: () => void;
  onSettings: () => void;
  children: React.ReactNode; // El tablero de juego
  gameMode?: 'clasico' | 'puzzle' | 'aventura';
  onPieceDrop?: (piece: Piece, index: number, clientX: number, clientY: number) => void;
}

export function DesktopGameLayout({
  nextPieces,
  lines,
  score,
  themeBlocks,
  gridEnabled,
  onToggleGrid,
  onBack,
  onSettings,
  children,
  gameMode = 'clasico',
  onPieceDrop,
}: DesktopGameLayoutProps) {
  // Tamaño de celda para las piezas preview (igual que el tablero)
  const PREVIEW_CELL_SIZE = 32; // px, igual que el tablero
  
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 overflow-auto">
      <div 
        className="relative flex gap-[100px] items-start"
        style={{
          // Escalar proporcionalmente si no cabe
          transform: 'scale(min(1, (100vw - 80px) / 920px, (100vh - 80px) / 930px))',
          transformOrigin: 'center center',
        }}
      >
        {/* Panel izquierdo - Back button + Info */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[294px]">
          <div className="content-stretch flex flex-col gap-[12.783px] items-start relative shrink-0 w-full">
            {/* Botón Back */}
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div 
                className="bg-[#005eb3] content-stretch flex items-start p-[9.296px] relative rounded-[13.945px] shrink-0 cursor-pointer hover:bg-[#004d8f] transition-colors"
                onClick={onBack}
              >
                <div className="relative shrink-0 size-[27.889px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.8893 27.8893">
                    <path d={svgPaths.p25b7af00} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.32411" />
                  </svg>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4.648px_10.458px_0px_rgba(0,0,0,0.4)]" />
              </div>
            </div>

            {/* Siguientes, Líneas, Puntos */}
            <div className="content-stretch flex gap-[18.593px] items-start relative shrink-0">
              {/* Siguientes: 3 piezas */}
              <div className="content-stretch flex flex-col gap-[9.296px] items-start relative shrink-0">
                <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21.191px] relative shrink-0 text-[#8eb0cf] text-[18.593px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Siguientes:
                </p>
                <div className="content-stretch flex flex-col gap-[32.538px] items-start relative shrink-0">
                  {nextPieces.slice(0, 3).map((piece, idx) => {
                    // Para piezas especiales 2x2, mostrar la imagen completa una sola vez
                    const is2x2Special = piece.type === 'BOMB' || piece.type === 'FASTCLOCK';
                    
                    const pieceContent = is2x2Special ? (
                      // Renderizar imagen completa para piezas especiales 2x2
                      <div className="relative" style={{ width: PREVIEW_CELL_SIZE * 2, height: PREVIEW_CELL_SIZE * 2 }}>
                        <BlockRenderer
                          block={getBlockImage(piece.type, piece.blockIndex, themeBlocks)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      // Renderizar normalmente para otras piezas
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        {piece.shape.map((row, y) => (
                          <div key={y} className="flex">
                            {row.map((cell, x) => {
                              const blockImage = getBlockImage(piece.type, piece.blockIndex, themeBlocks);
                              if (!blockImage) return <div key={x} style={{ width: PREVIEW_CELL_SIZE, height: PREVIEW_CELL_SIZE }} />;
                              
                              if (!cell) {
                                return <div key={x} style={{ width: PREVIEW_CELL_SIZE, height: PREVIEW_CELL_SIZE }} />;
                              }
                              
                              return (
                                <div 
                                  key={x} 
                                  className="relative shrink-0"
                                  style={{ width: PREVIEW_CELL_SIZE, height: PREVIEW_CELL_SIZE }}
                                >
                                  <BlockRenderer
                                    block={blockImage}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    );

                    // En modo puzzle, envolver con DraggablePiece
                    if (gameMode === 'puzzle') {
                      return (
                        <DraggablePiece
                          key={idx}
                          piece={piece}
                          index={idx}
                          enabled={true}
                        >
                          {pieceContent}
                        </DraggablePiece>
                      );
                    }

                    // En modo clásico, renderizar normalmente
                    return <div key={idx}>{pieceContent}</div>;
                  })}
                </div>
              </div>

              {/* Líneas */}
              <div className="content-stretch flex flex-col gap-[9.296px] items-start leading-[21.191px] relative shrink-0 text-[#8eb0cf]">
                <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[18.593px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Lineas:
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[23.241px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {lines}
                </p>
              </div>

              {/* Puntos */}
              <div className="content-stretch flex flex-col gap-[9.296px] items-start leading-[21.191px] relative shrink-0 text-[#f3f3f4]">
                <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[18.593px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Puntos:
                </p>
                <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[23.241px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {score}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Centro - Tablero + Toggle de grilla */}
        <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
          {/* Tablero */}
          <div className="h-[874px] relative shrink-0 w-[416px]">
            {children}
          </div>

          {/* Toggle de grilla */}
          <GridToggle enabled={gridEnabled} onToggle={onToggleGrid} />
        </div>

        {/* Botón Settings - derecha */}
        <div 
          className="bg-[#005eb3] content-stretch flex items-start p-[9.296px] relative rounded-[13.945px] shrink-0 cursor-pointer hover:bg-[#004d8f] transition-colors"
          onClick={onSettings}
        >
          <div className="relative shrink-0 size-[27.889px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.8893 27.8893">
              <g clipPath="url(#clip0_settings)">
                <path d={svgPaths.p34667380} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.32411" />
                <path d={svgPaths.p3e95c180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.32411" />
              </g>
              <defs>
                <clipPath id="clip0_settings">
                  <rect fill="white" height="27.8893" width="27.8893" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4.648px_10.458px_0px_rgba(0,0,0,0.4)]" />
        </div>
      </div>
    </div>
  );
}