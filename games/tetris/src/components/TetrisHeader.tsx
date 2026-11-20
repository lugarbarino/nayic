import React from 'react';
import { DraggablePiece } from './DraggablePiece';
import { getBlockImage } from '../TetrisGameWrapper';

interface BlockRendererProps {
  block: string | React.ComponentType;
  className?: string;
  style?: React.CSSProperties;
}

// Componente auxiliar para renderizar bloques (puede ser imagen o componente React)
function BlockRenderer({ 
  block, 
  className, 
  style 
}: BlockRendererProps) {
  // Si es un string (URL de imagen), renderizar como img
  if (typeof block === 'string') {
    return (
      <img
        src={block}
        alt=""
        className={className}
        style={style}
      />
    );
  }
  
  // Si es un componente React, renderizarlo en un div contenedor
  const BlockComponent = block;
  return (
    <div className={className} style={style}>
      <BlockComponent />
    </div>
  );
}

interface Piece {
  shape: number[][];
  x: number;
  y: number;
  type: string;
  rotation: number;
  blockIndex: number;
}

interface TetrisHeaderProps {
  nextPiece: Piece;
  nextPieces?: Piece[]; // Opcional, array de 3 próximas piezas
  score: number;
  lines?: number; // Nueva prop para líneas
  themeBlocks: (string | React.ComponentType)[];
  togglePause: () => void;
  resetGame: () => void;
  gameOver: boolean;
  isPaused: boolean;
  svgPaths: any;
  layout: 'desktop' | 'mobile-large' | 'mobile-small';
  onClose?: () => void;
  onSettings?: () => void; // Nueva prop para Settings
  gameMode?: 'clasico' | 'puzzle' | 'aventura'; // Nueva prop para el modo de juego
  onPieceDrop?: (piece: Piece, index: number, clientX: number, clientY: number) => void; // Nueva prop para drop
}

export function TetrisHeader({
  nextPiece,
  nextPieces,
  score,
  lines,
  themeBlocks,
  togglePause,
  resetGame,
  gameOver,
  isPaused,
  svgPaths,
  layout,
  onClose,
  onSettings,
  gameMode = 'clasico',
  onPieceDrop,
}: TetrisHeaderProps) {
  // Mobile layouts (large & small use the same structure)
  if (layout !== 'desktop') {
    return (
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[350px]">
        <div className="content-stretch flex items-center justify-between relative w-full">
          {/* Botón Volver */}
          {onClose && (
            <div 
              onClick={onClose}
              className="bg-[#005eb3] content-stretch flex items-start p-[8px] relative rounded-[12px] shrink-0 cursor-pointer active:bg-[#004d8f]"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
            </div>
          )}

          {/* Sección central: Siguientes, Líneas, Puntos */}
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
            {/* Siguientes */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18.236px] relative shrink-0 text-[#8eb0cf] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Siguientes:
              </p>
              
              {/* En modo puzzle, mostrar las 3 piezas como arrastrables */}
              {gameMode === 'puzzle' && nextPieces ? (
                <div className="flex flex-col gap-[6px]">
                  {nextPieces.slice(0, 1).map((piece, index) => {
                    const pieceContent = (
                      <div className="flex flex-col gap-[2px]">
                        {piece.shape.map((row, y) => (
                          <div key={y} className="flex gap-[2px]">
                            {row.map((cell, x) => {
                              const blockImage = getBlockImage(piece.type, piece.blockIndex, themeBlocks);
                              if (!cell) {
                                return <div key={x} className="h-[16px] w-[16px]" />;
                              }
                              return (
                                <div key={x} className="h-[16px] relative shrink-0 w-[16px] overflow-hidden">
                                  <BlockRenderer
                                    block={blockImage}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ imageRendering: 'pixelated' }}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    );
                    
                    return (
                      <DraggablePiece
                        key={index}
                        piece={piece}
                        index={index}
                        enabled={true}
                      >
                        {pieceContent}
                      </DraggablePiece>
                    );
                  })}
                </div>
              ) : (
                // En modo clásico y aventura, mostrar solo la primera pieza sin drag
                <div className="flex flex-col gap-[2px] min-h-[60px]">
                  {(nextPieces && nextPieces.length > 0 ? nextPieces[0] : nextPiece).shape.map((row, y) => (
                    <div key={y} className="flex gap-[2px]">
                      {row.map((cell, x) => {
                        const piece = nextPieces && nextPieces.length > 0 ? nextPieces[0] : nextPiece;
                        const blockImage = getBlockImage(piece.type, piece.blockIndex, themeBlocks);
                        if (!cell) {
                          return <div key={x} className="h-[16px] w-[16px]" />;
                        }
                        return (
                          <div key={x} className="h-[16px] relative shrink-0 w-[16px] overflow-hidden">
                            <BlockRenderer
                              block={blockImage}
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{ imageRendering: 'pixelated' }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Líneas */}
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[18.236px] relative shrink-0 text-[#8eb0cf]">
              <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Lineas:
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                {lines || 0}
              </p>
            </div>

            {/* Puntos */}
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[18.236px] relative shrink-0 text-[#f3f3f4]">
              <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Puntos:
              </p>
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                {score}
              </p>
            </div>
          </div>

          {/* Botón Settings */}
          {onSettings && (
            <div 
              onClick={onSettings}
              className="bg-[#005eb3] content-stretch flex items-start p-[8px] relative rounded-[12px] shrink-0 cursor-pointer active:bg-[#004d8f]"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_64_883)">
                    <g>
                      <path d={svgPaths.p3cccb600} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3737f500} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_64_883">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="absolute left-[29px] top-[28px] w-[338px]">
      {/* Botones en fila - alineados con siguiente y puntos */}
      <div className="flex items-center justify-between mb-[20px] w-[332px]">
        {/* Close button - alineado con SIGUIENTE */}
        {onClose && (
          <div 
            onClick={onClose}
            className="bg-[#b93b3e] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[40px] cursor-pointer hover:bg-[#9d3134] transition-colors"
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p2edaeb50} fill="#FEF7FF" />
              </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
          </div>
        )}

        {/* Pause button - centrado */}
        <div 
          onClick={gameOver ? undefined : togglePause}
          className={`bg-[#005eb3] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0 ${gameOver ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#004d8f]'} transition-colors`}
        >
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              {isPaused ? (
                // Play icon
                <path d="M5 3L19 12L5 21V3Z" stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              ) : (
                // Pause icon
                <path d={svgPaths.p38707400} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              )}
            </svg>
          </div>
          <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            {isPaused ? 'Jugar (J)' : 'Pausar (P)'}
          </p>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
        </div>

        {/* Restart button - alineado con PUNTOS */}
        <div 
          onClick={resetGame}
          className="bg-[#005eb3] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#004d8f] transition-colors"
        >
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p12852cc0} fill="#FEF7FF" />
            </svg>
          </div>
          <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Reiniciar (R)
          </p>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
        </div>
      </div>

      {/* Next piece and score */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-[332px]">
        {/* Next piece preview - Mostrar 3 piezas */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
          <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#8eb0cf] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Siguiente:
          </p>
          <div className="flex flex-col gap-[8px] w-full">
            {(nextPieces || [nextPiece]).slice(0, 3).map((piece, index) => (
              <div key={index} className="relative flex items-center justify-start" style={{ minHeight: '32px' }}>
                <div className="flex flex-col gap-[1px]">
                  {piece.shape.map((row, y) => (
                    <div key={y} className="flex gap-[1px]">
                      {row.map((cell, x) => {
                        const blockImage = getBlockImage(piece.type, piece.blockIndex, themeBlocks);
                        if (!cell) {
                          return <div key={x} className="w-[20px] h-[20px]" />;
                        }
                        return (
                          <BlockRenderer
                            key={x}
                            block={blockImage}
                            className="w-[20px] h-[20px]"
                            style={{ imageRendering: 'pixelated' }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score */}
        <div className="content-stretch flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold gap-[6px] items-end leading-[22px] relative shrink-0 text-right w-[61px]">
          <p className="css-4hzbpn relative shrink-0 text-[#8eb0cf] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Puntos:
          </p>
          <p className="css-4hzbpn relative shrink-0 text-[#f3f3f4] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}