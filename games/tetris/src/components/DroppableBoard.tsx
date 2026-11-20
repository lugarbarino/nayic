import { useDrop } from 'react-dnd';
import { useState, useEffect } from 'react';

interface DroppableBoardProps {
  children: React.ReactNode;
  onDrop: (piece: any, index: number, x: number, y: number) => void;
  enabled: boolean;
  boardWidth: number;
  boardHeight: number;
  themeBlocks: string[];
  board: any[][];
}

export function DroppableBoard({ children, onDrop, enabled, boardWidth, boardHeight, themeBlocks, board }: DroppableBoardProps) {
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number; piece: any } | null>(null);

  const [{ isOver, item }, drop] = useDrop(
    () => ({
      accept: 'tetris-piece',
      canDrop: () => enabled,
      drop: (item: any, monitor) => {
        const clientOffset = monitor.getClientOffset();
        if (clientOffset) {
          onDrop(item.piece, item.index, clientOffset.x, clientOffset.y);
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        item: monitor.getItem(),
      }),
      hover: (item, monitor) => {
        if (!enabled) return;
        
        const clientOffset = monitor.getClientOffset();
        if (!clientOffset) return;
        
        const boardElement = document.querySelector('[data-board]');
        if (!boardElement) return;

        const boardRect = boardElement.getBoundingClientRect();
        const cellWidth = boardRect.width / boardWidth;
        const cellHeight = boardRect.height / boardHeight;

        const boardX = Math.floor((clientOffset.x - boardRect.left) / cellWidth);
        const boardY = Math.floor((clientOffset.y - boardRect.top) / cellHeight);

        setHoverPosition({ x: boardX, y: boardY, piece: item.piece });
      },
    }),
    [onDrop, enabled, boardWidth, boardHeight]
  );

  // Limpiar hover position cuando ya no está sobre el tablero
  useEffect(() => {
    if (!isOver) {
      setHoverPosition(null);
    }
  }, [isOver]);

  // Verificar si la pieza colisiona en la posición de hover
  const collides = (piece: any, x: number, y: number): boolean => {
    for (let py = 0; py < piece.shape.length; py++) {
      for (let px = 0; px < piece.shape[py].length; px++) {
        if (piece.shape[py][px]) {
          const boardX = x + px;
          const boardY = y + py;
          
          if (
            boardX < 0 ||
            boardX >= boardWidth ||
            boardY >= boardHeight ||
            (boardY >= 0 && board[boardY][boardX].type)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
      
      {/* Preview de la pieza en hover */}
      {hoverPosition && (() => {
        const isValidPosition = !collides(hoverPosition.piece, hoverPosition.x, hoverPosition.y);
        
        // Solo mostrar preview si la posición es válida
        if (!isValidPosition) return null;
        
        return (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 50,
            }}
          >
            {/* Usar CSS Grid para el preview también */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'grid',
                gridTemplateColumns: `repeat(${boardWidth}, 1fr)`,
                gridTemplateRows: `repeat(${boardHeight}, 1fr)`,
                gap: 0,
              }}
            >
              {hoverPosition.piece.shape.map((row: number[], y: number) =>
                row.map((cell: number, x: number) => {
                  if (!cell) return null;
                  
                  const boardX = hoverPosition.x + x;
                  const boardY = hoverPosition.y + y;
                  
                  if (boardX < 0 || boardX >= boardWidth || boardY < 0 || boardY >= boardHeight) {
                    return null;
                  }

                  return (
                    <div
                      key={`preview-${y}-${x}`}
                      style={{
                        gridColumn: `${boardX + 1} / ${boardX + 2}`,
                        gridRow: `${boardY + 1} / ${boardY + 2}`,
                        backgroundColor: 'rgba(104, 156, 249, 0.3)',
                        border: '2px solid #689CF9',
                        boxSizing: 'border-box',
                      }}
                    />
                  );
                })
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}