import React, { useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { getBlockImage } from '@/app/TetrisGameWrapper';
import { Board, Piece } from '@/app/types/tetris';
import { DroppableBoard } from '@/app/components/DroppableBoard';

const BOARD_WIDTH = 13;
const BOARD_HEIGHT = 27;

// Componente auxiliar optimizado para renderizar bloques
const BlockRenderer = React.memo(({ 
  block, 
  className, 
  style 
}: { 
  block: string | React.ComponentType; 
  className: string; 
  style: React.CSSProperties;
}) => {
  // Validación: si el bloque es undefined o null, no renderizar nada
  if (!block) {
    return null;
  }
  
  // Si es un string (URL de imagen), renderizar como img con lazy loading
  if (typeof block === 'string') {
    return (
      <img
        src={block}
        alt=""
        className={className}
        style={style}
        loading="lazy"
        decoding="async"
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
});

interface TetrisBoardProps {
  board: Board;
  currentPiece: Piece;
  clearingLines: number[];
  isPaused: boolean;
  gameOver: boolean;
  themeBlocks: (string | React.ComponentType)[];
  layout: 'desktop' | 'mobile-large' | 'mobile-small';
  currentTheme: string;
  togglePause?: () => void;
  gridEnabled?: boolean; // Nueva prop para controlar si la grilla está activa
  toggleGrid?: () => void; // Función para toggle de grilla
  gameMode?: 'clasico' | 'puzzle' | 'aventura';
  onPieceDrop?: (piece: Piece, index: number, clientX: number, clientY: number) => void;
  bombAnimation?: { rows: number[], cols: number[] } | null; // Animación de la bomba
  stoneLines?: Set<number>; // Líneas de piedra permanentes
}

// Calcular columnas activas
function getActiveColumns(piece: Piece): Set<number> {
  const activeCols = new Set<number>();
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardX = piece.x + x;
        if (boardX >= 0 && boardX < BOARD_WIDTH) {
          activeCols.add(boardX);
        }
      }
    }
  }
  return activeCols;
}

// Obtener color de línea basado en posición
function getLineColor(lineIndex: number, leftMost: number, rightMost: number): string {
  // lineIndex representa la línea vertical (0-13 para 13 columnas)
  // leftMost y rightMost son índices de columna (0-12)
  
  // Las líneas están en los bordes de las celdas
  // Línea 0 = borde izquierdo de columna 0
  // Línea 1 = borde derecho de columna 0 / izquierdo de columna 1
  // etc.
  
  if (leftMost < 0 || rightMost < 0) {
    return '#30456D'; // Color por defecto si no hay pieza
  }
  
  // Líneas en los bordes externos de la pieza
  if (lineIndex === leftMost || lineIndex === rightMost + 1) {
    return '#689CF9';
  }
  
  // Líneas adyacentes a los bordes externos
  if (lineIndex === leftMost - 1 || lineIndex === rightMost + 2) {
    return '#45649D';
  }
  
  // Resto de líneas
  return '#30456D';
}

export function TetrisBoard({ 
  board, 
  currentPiece, 
  clearingLines, 
  isPaused, 
  gameOver, 
  themeBlocks,
  layout,
  currentTheme,
  togglePause,
  gridEnabled = true, // Por defecto, la grilla está activa
  toggleGrid,
  gameMode = 'clasico',
  onPieceDrop,
  bombAnimation,
  stoneLines,
}: TetrisBoardProps) {
  // Calcular columnas activas una sola vez
  const { leftMost, rightMost } = useMemo(() => {
    const activeCols = getActiveColumns(currentPiece);
    const colArray = Array.from(activeCols).sort((a, b) => a - b);
    return {
      leftMost: colArray.length > 0 ? colArray[0] : -1,
      rightMost: colArray.length > 0 ? colArray[colArray.length - 1] : -1,
    };
  }, [currentPiece]);

  // Configuración de líneas por layout
  const config = useMemo(() => {
    switch (layout) {
      case 'mobile-small':
        // 211 / 13 = 16.230769... por columna
        // 437 altura total para 27 filas
        const smallWidth = 211;
        const smallColWidth = smallWidth / 13;
        return {
          viewBox: '0 0 211 437',
          xPositions: Array.from({ length: 14 }, (_, i) => i * smallColWidth),
          height: '437',
        };
      case 'mobile-large':
        // 300 / 13 = 23.076923... por columna
        // 623.08 altura total para 27 filas (300 * 27/13)
        const largeWidth = 300;
        const largeColWidth = largeWidth / 13;
        return {
          viewBox: '0 0 300 623.08',
          xPositions: Array.from({ length: 14 }, (_, i) => i * largeColWidth),
          height: '623.08',
        };
      default: // desktop
        // 416 / 13 = 32 por columna
        return {
          viewBox: '0 0 417.001 874',
          xPositions: [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416],
          height: '874',
        };
    }
  }, [layout]);

  // Renderizar líneas animadas para clearing
  const renderClearingAnimation = () => {
    if (layout !== 'desktop') return null;

    const isRedTheme = currentTheme === 'rojo';
    const lineGradient = isRedTheme
      ? 'linear-gradient(90deg, #8B0000, #DC143C, #FF1493, #FF69B4, #FFC0CB, #FF69B4, #FF1493, #DC143C, #8B0000)'
      : 'linear-gradient(90deg, #FFB3D9, #FFC9E5, #A8D8FF, #B8E1FF, #FFF8B8, #C1F0C1, #E6D5F5, #FFD4B8, #FFB3D9)';
    
    const boxShadowColor = isRedTheme
      ? '0 0 30px rgba(255, 20, 147, 0.8), 0 0 60px rgba(220, 20, 60, 0.6)'
      : '0 0 30px rgba(255, 179, 217, 0.8), 0 0 60px rgba(168, 216, 255, 0.6)';
    
    const sparkleGradientTop = isRedTheme
      ? 'linear-gradient(180deg, rgba(255, 20, 147, 1) 0%, rgba(255, 20, 147, 0) 100%)'
      : 'linear-gradient(180deg, rgba(255, 200, 229, 1) 0%, rgba(255, 200, 229, 0) 100%)';
    
    const sparkleGradientBottom = isRedTheme
      ? 'linear-gradient(0deg, rgba(255, 20, 147, 1) 0%, rgba(255, 20, 147, 0) 100%)'
      : 'linear-gradient(0deg, rgba(255, 200, 229, 1) 0%, rgba(255, 200, 229, 0) 100%)';

    return clearingLines.map((lineIndex) => (
      <div key={`clear-desktop-${lineIndex}`} className="absolute w-full">
        <div
          className="absolute w-full"
          style={{
            top: `${lineIndex * 32}px`,
            height: '32px',
            background: lineGradient,
            backgroundSize: '200% 100%',
            animation: 'rainbow-slide 0.5s linear, pulse 0.5s ease-in-out',
            boxShadow: boxShadowColor,
            opacity: 0.9,
          }}
        />
        
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-top-${i}`}
            className="absolute"
            style={{
              left: `${i * 40 + 20}px`,
              top: `${lineIndex * 32 - 15}px`,
              width: '4px',
              height: '15px',
              background: sparkleGradientTop,
              animation: 'sparkle-rise 0.5s ease-out',
              transformOrigin: 'bottom',
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-bottom-${i}`}
            className="absolute"
            style={{
              left: `${i * 40 + 20}px`,
              top: `${lineIndex * 32 + 32}px`,
              width: '4px',
              height: '15px',
              background: sparkleGradientBottom,
              animation: 'sparkle-fall 0.5s ease-out',
              transformOrigin: 'top',
            }}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="relative size-full" data-board>
      <DroppableBoard 
        enabled={gameMode === 'puzzle'}
        onDrop={(piece, index, clientX, clientY) => {
          if (onPieceDrop) {
            onPieceDrop(piece, index, clientX, clientY);
          }
        }}
        boardWidth={BOARD_WIDTH}
        boardHeight={BOARD_HEIGHT}
        themeBlocks={themeBlocks}
        board={board}
      >
        <>
          {/* Grid lines - se muestran diferentes según el modo */}
          {gridEnabled && (gameMode === 'clasico' || gameMode === 'aventura') && (
            // Grilla dinámica solo vertical para modo clásico y aventura
            <>
              {Array.from({ length: BOARD_WIDTH - 1 }).map((_, i) => {
                const col = i + 1;
                let lineColor = '#30456D'; // Color por defecto
                
                if (currentPiece && !isPaused && !gameOver) {
                  const pieceLeft = currentPiece.x;
                  const pieceRight = currentPiece.x + currentPiece.shape[0].length - 1;
                  
                  if (col === pieceLeft || col === pieceRight + 1) {
                    lineColor = '#689CF9';
                  } else if (col === pieceLeft - 1 || col === pieceRight + 2) {
                    lineColor = '#45649D';
                  }
                }

                return (
                  <div
                    key={`v-line-${i}`}
                    className="absolute h-full transition-colors duration-200"
                    style={{
                      left: `${(col / BOARD_WIDTH) * 100}%`,
                      width: '1px',
                      backgroundColor: lineColor,
                    }}
                  />
                );
              })}
              
              {/* Borde exterior para modo clásico y aventura */}
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    outline: '6px solid #2b3d60',
                    outlineOffset: '0px',
                    pointerEvents: 'none'
                  }} 
                />
              </div>
            </>
          )}

          {gridEnabled && gameMode === 'puzzle' && (
            // Grilla cuadriculada perfectamente alineada para modo puzzle
            <div className="absolute inset-0 pointer-events-none">
              {/* Crear una grilla CSS que divida exactamente en 13x27 */}
              <div 
                className="absolute inset-0"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)`,
                  gridTemplateRows: `repeat(${BOARD_HEIGHT}, 1fr)`,
                  gap: 0,
                }}
              >
                {Array.from({ length: BOARD_WIDTH * BOARD_HEIGHT }).map((_, i) => (
                  <div
                    key={`grid-cell-${i}`}
                    style={{
                      border: '1px solid rgba(104, 156, 249, 0.3)',
                      boxSizing: 'border-box',
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Borde del tablero cuando no hay grilla */}
          {!gridEnabled && (
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute inset-0" 
                style={{ 
                  outline: '6px solid #2b3d60',
                  outlineOffset: '0px',
                  pointerEvents: 'none'
                }} 
              />
            </div>
          )}

          {/* Board content */}
          <div className="absolute inset-0">
            {/* Contenedor con CSS Grid para desktop o para modo puzzle en cualquier layout */}
            {(layout === 'desktop' || gameMode === 'puzzle') && (
              <div 
                className="absolute inset-0"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)`,
                  gridTemplateRows: `repeat(${BOARD_HEIGHT}, 1fr)`,
                  gap: 0,
                }}
              >
                {/* Celdas de fondo con bordes solo para puzzle */}
                {gridEnabled && gameMode === 'puzzle' && Array.from({ length: BOARD_WIDTH * BOARD_HEIGHT }).map((_, i) => {
                  const x = i % BOARD_WIDTH;
                  const y = Math.floor(i / BOARD_WIDTH);
                  
                  return (
                    <div
                      key={`grid-bg-${i}`}
                      style={{
                        gridColumn: `${x + 1} / ${x + 2}`,
                        gridRow: `${y + 1} / ${y + 2}`,
                        border: '1px solid #30456D',
                        boxSizing: 'border-box',
                        pointerEvents: 'none',
                      }}
                    />
                  );
                })}
                
                {/* Piezas fijas del tablero usando CSS Grid */}
                {board.map((row, y) =>
                  row.map((cell, x) => {
                    if (!cell.type || cell.blockIndex === null) return null;
                    const blockImage = getBlockImage(cell.type, cell.blockIndex, themeBlocks);
                    if (!blockImage) return null;
                    const isClearing = clearingLines.includes(y);
                    
                    return (
                      <BlockRenderer
                        key={`board-${y}-${x}`}
                        block={blockImage}
                        className="w-full h-full transition-all duration-300"
                        style={{
                          gridColumn: `${x + 1} / ${x + 2}`,
                          gridRow: `${y + 1} / ${y + 2}`,
                          imageRendering: 'pixelated',
                          opacity: isClearing ? 0 : 1,
                          filter: isClearing 
                            ? 'brightness(3) saturate(2)' 
                            : 'none',
                          transform: isClearing ? 'scale(1.2)' : 'scale(1)',
                          boxSizing: 'border-box',
                        }}
                      />
                    );
                  })
                )}

                {/* Pieza actual usando CSS Grid */}
                {gameMode !== 'puzzle' && currentPiece.shape.map((row, y) =>
                  row.map((cell, x) => {
                    if (!cell) return null;
                    
                    // Para piezas especiales 2x2 (BOMB, FASTCLOCK), solo renderizar en la esquina superior izquierda
                    const is2x2Special = currentPiece.type === 'BOMB' || currentPiece.type === 'FASTCLOCK';
                    if (is2x2Special && (x !== 0 || y !== 0)) {
                      return null; // No renderizar los otros 3 bloques
                    }
                    
                    const blockImage = getBlockImage(currentPiece.type, currentPiece.blockIndex, themeBlocks);
                    if (!blockImage) return null; // Validación adicional
                    
                    const boardX = currentPiece.x + x;
                    const boardY = currentPiece.y + y;
                    
                    return (
                      <BlockRenderer
                        key={`current-${y}-${x}`}
                        block={blockImage}
                        className="w-full h-full"
                        style={{
                          gridColumn: is2x2Special ? `${boardX + 1} / ${boardX + 3}` : `${boardX + 1} / ${boardX + 2}`,
                          gridRow: is2x2Special ? `${boardY + 1} / ${boardY + 3}` : `${boardY + 1} / ${boardY + 2}`,
                          imageRendering: 'pixelated',
                          boxSizing: 'border-box',
                        }}
                      />
                    );
                  })
                )}
              </div>
            )}

            {/* Contenedor con posicionamiento absoluto para mobile en modo clásico y aventura */}
            {layout !== 'desktop' && (gameMode === 'clasico' || gameMode === 'aventura') && (
              <>
                {/* Piezas fijas del tablero */}
                {board.map((row, y) =>
                  row.map((cell, x) => {
                    if (!cell.type || cell.blockIndex === null) return null;
                    const blockImage = getBlockImage(cell.type, cell.blockIndex, themeBlocks);
                    if (!blockImage) return null; // Validación adicional
                    const isClearing = clearingLines.includes(y);
                    
                    return (
                      <BlockRenderer
                        key={`board-${y}-${x}`}
                        block={blockImage}
                        className="absolute transition-all duration-300"
                        style={{
                          left: `${(x / 13) * 100}%`,
                          top: `${(y / 27) * 100}%`,
                          width: `${(1 / 13) * 100}%`,
                          height: `${(1 / 27) * 100}%`,
                          imageRendering: 'pixelated',
                          opacity: isClearing ? 0 : 1,
                          filter: isClearing ? 'brightness(3) saturate(2)' : 'none',
                          transform: isClearing ? 'scale(1.2)' : 'scale(1)',
                        }}
                      />
                    );
                  })
                )}

                {/* Pieza actual */}
                {currentPiece.shape.map((row, y) =>
                  row.map((cell, x) => {
                    if (!cell) return null;
                    
                    // Para piezas especiales 2x2 (BOMB, FASTCLOCK), solo renderizar en la esquina superior izquierda
                    const is2x2Special = currentPiece.type === 'BOMB' || currentPiece.type === 'FASTCLOCK';
                    if (is2x2Special && (x !== 0 || y !== 0)) {
                      return null; // No renderizar los otros 3 bloques
                    }
                    
                    const blockImage = getBlockImage(currentPiece.type, currentPiece.blockIndex, themeBlocks);
                    if (!blockImage) return null; // Validación adicional
                    
                    return (
                      <BlockRenderer
                        key={`current-${y}-${x}`}
                        block={blockImage}
                        className="absolute"
                        style={{
                          left: `${((currentPiece.x + x) / 13) * 100}%`,
                          top: `${((currentPiece.y + y) / 27) * 100}%`,
                          width: is2x2Special ? `${(2 / 13) * 100}%` : `${(1 / 13) * 100}%`,
                          height: is2x2Special ? `${(2 / 27) * 100}%` : `${(1 / 27) * 100}%`,
                          imageRendering: 'pixelated',
                        }}
                      />
                    );
                  })
                )}
              </>
            )}

            {/* Líneas de clearing simple para móvil */}
            {layout !== 'desktop' && clearingLines.map((lineIndex) => (
              <div
                key={`clear-${lineIndex}`}
                className="absolute w-full animate-pulse"
                style={{
                  top: `${(lineIndex / 27) * 100}%`,
                  height: `${(1 / 27) * 100}%`,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  animation: 'pulse 0.5s ease-in-out',
                }}
              />
            ))}

            {/* Animación de clearing para desktop */}
            {renderClearingAnimation()}

            {/* Overlay de pausa */}
            {isPaused && !gameOver && (
              <div 
                className="absolute inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-10 cursor-pointer"
                onClick={togglePause}
              >
                <p className={`font-bold text-[#8eb0cf] ${layout === 'desktop' ? 'text-4xl' : layout === 'mobile-large' ? 'text-2xl' : 'text-xl'}`}>
                  PAUSADO
                </p>
              </div>
            )}

            {/* Animación de explosión de bomba */}
            {bombAnimation && (
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Líneas horizontales (filas) */}
                {bombAnimation.rows.map((rowIndex, idx) => (
                  <div
                    key={`bomb-row-${idx}`}
                    className="absolute w-full"
                    style={{
                      top: layout === 'desktop' ? `${rowIndex * 32}px` : `${(rowIndex / 27) * 100}%`,
                      height: layout === 'desktop' ? '32px' : `${(1 / 27) * 100}%`,
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 140, 0, 0.2) 10%, rgba(255, 180, 0, 0.35) 30%, rgba(255, 200, 0, 0.4) 50%, rgba(255, 180, 0, 0.35) 70%, rgba(255, 140, 0, 0.2) 90%, transparent 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'explosion-expand 0.5s ease-out',
                      boxShadow: '0 0 15px rgba(255, 140, 0, 0.3)',
                      opacity: 0.8,
                    }}
                  />
                ))}
                
                {/* Líneas verticales (columnas) */}
                {bombAnimation.cols.map((colIndex, idx) => (
                  <div
                    key={`bomb-col-${idx}`}
                    className="absolute h-full"
                    style={{
                      left: layout === 'desktop' ? `${colIndex * 32}px` : `${(colIndex / 13) * 100}%`,
                      width: layout === 'desktop' ? '32px' : `${(1 / 13) * 100}%`,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(255, 140, 0, 0.2) 10%, rgba(255, 180, 0, 0.35) 30%, rgba(255, 200, 0, 0.4) 50%, rgba(255, 180, 0, 0.35) 70%, rgba(255, 140, 0, 0.2) 90%, transparent 100%)',
                      backgroundSize: '100% 200%',
                      animation: 'explosion-expand 0.5s ease-out',
                      boxShadow: '0 0 15px rgba(255, 140, 0, 0.3)',
                      opacity: 0.8,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Efecto visual de líneas de piedra permanentes */}
            {stoneLines && stoneLines.size > 0 && (
              <div className="absolute inset-0 pointer-events-none z-15">
                {Array.from(stoneLines.keys()).map((lineIndex) => (
                  <div
                    key={`stone-${lineIndex}`}
                    className="absolute w-full"
                    style={{
                      top: layout === 'desktop' ? `${lineIndex * 32}px` : `${(lineIndex / 27) * 100}%`,
                      height: layout === 'desktop' ? '32px' : `${(1 / 27) * 100}%`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      </DroppableBoard>
    </div>
  );
}