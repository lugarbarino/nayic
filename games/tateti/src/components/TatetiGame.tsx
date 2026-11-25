import { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import svgPathsArrow from '../svg/flecha';
import { FICHAS_JUGADOR_1, FICHAS_JUGADOR_2 } from '../fichas';

const PLAYER1_CHARACTERS = FICHAS_JUGADOR_1;

const PLAYER2_CHARACTERS = FICHAS_JUGADOR_2;

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];
type GamePhase = 'placing' | 'moving';

// Mapa de adyacencias del tablero (qué celdas están conectadas por líneas)
const ADJACENCY_MAP: { [key: number]: number[] } = {
  0: [1, 3, 4],       // esquina superior izquierda
  1: [0, 2, 4],       // centro superior
  2: [1, 4, 5],       // esquina superior derecha
  3: [0, 4, 6],       // centro izquierda
  4: [0, 1, 2, 3, 5, 6, 7, 8], // centro (conectado a todos)
  5: [2, 4, 8],       // centro derecha
  6: [3, 4, 7],       // esquina inferior izquierda
  7: [4, 6, 8],       // centro inferior
  8: [4, 5, 7],       // esquina inferior derecha
};

// Verificar si una celda es adyacente a otra
const isAdjacent = (from: number, to: number): boolean => {
  return ADJACENCY_MAP[from]?.includes(to) || false;
};

// Verificar si un movimiento es válido (adyacente o desde el centro)
const isValidMove = (from: number, to: number): boolean => {
  // La ficha del centro puede moverse a cualquier posición
  if (from === 4) return true;
  // Las demás fichas solo pueden moverse a posiciones adyacentes
  return isAdjacent(from, to);
};

interface TatetiGameProps {
  mode: 'player' | 'computer';
  onBackToMenu: () => void;
  player1Character: number;
  player2Character: number;
  isMobile?: boolean;
}

const DND_ITEM_TYPE = 'PIECE';

interface CellComponentProps {
  cell: Cell;
  index: number;
  isWinningCell: boolean;
  isValidMove: boolean;
  isComputerTurn: boolean;
  winner: Player | 'draw' | null;
  phase: GamePhase;
  currentPlayer: Player;
  player1Image: string;
  player2Image: string;
  onCellClick: (index: number) => void;
  onDragStart: (index: number) => void;
  onDrop: (fromIndex: number, toIndex: number) => void;
  isMobile?: boolean;
}

function CellComponent({
  cell,
  index,
  isWinningCell,
  isValidMove,
  isComputerTurn,
  winner,
  phase,
  currentPlayer,
  player1Image,
  player2Image,
  onCellClick,
  onDragStart,
  onDrop,
  isMobile = false,
}: CellComponentProps) {
  // Configurar drag solo si es una ficha del jugador actual y estamos en fase de movimiento
  const canDrag = phase === 'moving' && cell === currentPlayer && !winner && !isComputerTurn;
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DND_ITEM_TYPE,
    item: { fromIndex: index },
    canDrag,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [canDrag, index]);

  // Configurar drop solo si la celda está vacía y estamos en fase de movimiento
  const canDrop = phase === 'moving' && cell === null && !winner;
  
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DND_ITEM_TYPE,
    canDrop: () => canDrop,
    drop: (item: { fromIndex: number }) => {
      onDrop(item.fromIndex, index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver() && monitor.canDrop(),
    }),
  }), [canDrop, index, onDrop]);

  const row = Math.floor(index / 3) + 1;
  const col = (index % 3) + 1;

  return (
    <button
      ref={(node) => {
        if (canDrag) drag(node);
        if (canDrop) drop(node);
      }}
      onClick={() => onCellClick(index)}
      className={`
        bg-[#1a1e31] shrink-0 overflow-visible
        ${isMobile ? 'rounded-[17.04px] size-[min(112px,27vw,calc((100dvh-230px)/3))]' : 'rounded-[20px] size-[147px]'}
        transition-all duration-200
        relative flex items-center justify-center p-3
        ${isWinningCell ? 'ring-4 ring-green-500' : ''}
        ${isValidMove ? 'ring-4 ring-purple-400' : ''}
        ${isDragging ? 'opacity-50' : ''}
        ${isOver ? 'ring-4 ring-blue-400' : ''}
        ${isComputerTurn ? 'cursor-wait' : canDrag ? 'cursor-move' : 'cursor-pointer'}
      `}
      style={{ gridColumn: col, gridRow: row }}
      disabled={winner !== null || isComputerTurn}
    >
      {cell && (
        <img 
          src={cell === 'X' ? player1Image : player2Image}
          alt={cell}
          className="w-full h-full object-contain scale-[1.2]"
        />
      )}
    </button>
  );
}

export function TatetiGame({ mode, onBackToMenu, player1Character, player2Character, isMobile = false }: TatetiGameProps) {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [phase, setPhase] = useState<GamePhase>('placing');
  const [piecesPlaced, setPiecesPlaced] = useState({ X: 0, O: 0 });
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [winner, setWinner] = useState<Player | 'draw' | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const isComputerTurn = mode === 'computer' && currentPlayer === 'O' && !winner;

  const player1Image = PLAYER1_CHARACTERS[player1Character];
  const player2Image = PLAYER2_CHARACTERS[player2Character];
  const currentPlayerImage = currentPlayer === 'X' ? player1Image : player2Image;

  // Función para reiniciar el juego
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setPhase('placing');
    setPiecesPlaced({ X: 0, O: 0 });
    setSelectedPiece(null);
    setWinner(null);
    setWinningLine([]);
  };

  // Verificar ganador
  const checkWinner = (currentBoard: Board): { winner: Player | 'draw' | null; line: number[] } => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontales
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticales
      [0, 4, 8], [2, 4, 6] // diagonales
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], line };
      }
    }

    return { winner: null, line: [] };
  };

  // Manejar clic en celda
  const handleCellClick = (index: number) => {
    if (winner || isComputerTurn) return;

    if (phase === 'placing') {
      // Fase de colocación
      if (board[index] === null && piecesPlaced[currentPlayer] < 3) {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        
        const newPiecesPlaced = {
          ...piecesPlaced,
          [currentPlayer]: piecesPlaced[currentPlayer] + 1
        };
        setPiecesPlaced(newPiecesPlaced);

        // Verificar si ambos jugadores colocaron las 3 fichas
        if (newPiecesPlaced.X === 3 && newPiecesPlaced.O === 3) {
          setPhase('moving');
        }

        // Verificar ganador
        const { winner: gameWinner, line } = checkWinner(newBoard);
        if (gameWinner) {
          setWinner(gameWinner);
          setWinningLine(line);
        } else {
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
      }
    } else {
      // Fase de movimiento
      if (selectedPiece === null) {
        // Seleccionar ficha propia
        if (board[index] === currentPlayer) {
          setSelectedPiece(index);
        }
      } else {
        // Mover ficha a celda vacía (adyacente o desde el centro)
        if (board[index] === null && isValidMove(selectedPiece, index)) {
          const newBoard = [...board];
          newBoard[selectedPiece] = null;
          newBoard[index] = currentPlayer;
          setBoard(newBoard);
          setSelectedPiece(null);

          // Verificar ganador
          const { winner: gameWinner, line } = checkWinner(newBoard);
          if (gameWinner) {
            setWinner(gameWinner);
            setWinningLine(line);
          } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
          }
        } else if (board[index] === currentPlayer) {
          // Cambiar selección
          setSelectedPiece(index);
        }
      }
    }
  };

  // Manejar inicio de drag
  const handleDragStart = (index: number) => {
    if (phase === 'moving' && board[index] === currentPlayer && !winner && !isComputerTurn) {
      setSelectedPiece(index);
    }
  };

  // Manejar drop
  const handleDrop = (fromIndex: number, toIndex: number) => {
    if (phase !== 'moving' || winner || isComputerTurn) return;
    
    // Verificar que la celda origen tiene la ficha del jugador actual
    if (board[fromIndex] !== currentPlayer) return;
    
    // Verificar que la celda destino está vacía
    if (board[toIndex] !== null) return;

    // Verificar que el movimiento es válido (adyacente o desde el centro)
    if (!isValidMove(fromIndex, toIndex)) return;

    const newBoard = [...board];
    newBoard[fromIndex] = null;
    newBoard[toIndex] = currentPlayer;
    setBoard(newBoard);
    setSelectedPiece(null);

    // Verificar ganador
    const { winner: gameWinner, line } = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setWinningLine(line);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  // IA para la computadora
  useEffect(() => {
    if (!isComputerTurn) return;

    const timeout = setTimeout(() => {
      if (phase === 'placing') {
        // Fase de colocación: buscar celda vacía
        const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter(idx => idx !== null) as number[];
        
        if (emptyCells.length > 0) {
          // Intentar bloquear o ganar
          const bestMove = findBestPlacingMove(board, emptyCells);
          const moveIndex = bestMove !== -1 ? bestMove : emptyCells[Math.floor(Math.random() * emptyCells.length)];
          
          const newBoard = [...board];
          newBoard[moveIndex] = 'O';
          setBoard(newBoard);
          
          const newPiecesPlaced = {
            ...piecesPlaced,
            O: piecesPlaced.O + 1
          };
          setPiecesPlaced(newPiecesPlaced);

          if (newPiecesPlaced.X === 3 && newPiecesPlaced.O === 3) {
            setPhase('moving');
          }

          const { winner: gameWinner, line } = checkWinner(newBoard);
          if (gameWinner) {
            setWinner(gameWinner);
            setWinningLine(line);
          } else {
            setCurrentPlayer('X');
          }
        }
      } else {
        // Fase de movimiento: mover una ficha
        const computerPieces = board.map((cell, idx) => cell === 'O' ? idx : null).filter(idx => idx !== null) as number[];
        const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter(idx => idx !== null) as number[];
        
        if (computerPieces.length > 0 && emptyCells.length > 0) {
          const bestMove = findBestMovingMove(board, computerPieces, emptyCells);
          
          if (bestMove.from !== -1 && bestMove.to !== -1) {
            const newBoard = [...board];
            newBoard[bestMove.from] = null;
            newBoard[bestMove.to] = 'O';
            setBoard(newBoard);

            const { winner: gameWinner, line } = checkWinner(newBoard);
            if (gameWinner) {
              setWinner(gameWinner);
              setWinningLine(line);
            } else {
              setCurrentPlayer('X');
            }
          }
        }
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [isComputerTurn, phase, board, piecesPlaced]);

  // Buscar mejor movimiento para colocar ficha
  const findBestPlacingMove = (currentBoard: Board, emptyCells: number[]): number => {
    // Intentar ganar
    for (const cell of emptyCells) {
      const testBoard = [...currentBoard];
      testBoard[cell] = 'O';
      if (checkWinner(testBoard).winner === 'O') {
        return cell;
      }
    }

    // Intentar bloquear
    for (const cell of emptyCells) {
      const testBoard = [...currentBoard];
      testBoard[cell] = 'X';
      if (checkWinner(testBoard).winner === 'X') {
        return cell;
      }
    }

    // Priorizar centro y esquinas
    const center = 4;
    const corners = [0, 2, 6, 8];
    
    if (emptyCells.includes(center)) return center;
    
    const availableCorners = corners.filter(c => emptyCells.includes(c));
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }

    return -1;
  };

  // Buscar mejor movimiento para mover ficha
  const findBestMovingMove = (currentBoard: Board, pieces: number[], targets: number[]): { from: number; to: number } => {
    // Intentar ganar con movimientos válidos
    for (const from of pieces) {
      const validTargets = targets.filter(to => isValidMove(from, to));
      for (const to of validTargets) {
        const testBoard = [...currentBoard];
        testBoard[from] = null;
        testBoard[to] = 'O';
        if (checkWinner(testBoard).winner === 'O') {
          return { from, to };
        }
      }
    }

    // Intentar bloquear con movimientos válidos
    for (const from of pieces) {
      const validTargets = targets.filter(to => isValidMove(from, to));
      for (const to of validTargets) {
        const testBoard = [...currentBoard];
        testBoard[from] = null;
        testBoard[to] = 'X';
        if (checkWinner(testBoard).winner === 'X') {
          return { from, to };
        }
      }
    }

    // Movimiento aleatorio inteligente solo a celdas válidas
    const validMoves: { from: number; to: number }[] = [];
    for (const from of pieces) {
      const validTargets = targets.filter(to => isValidMove(from, to));
      for (const to of validTargets) {
        validMoves.push({ from, to });
      }
    }
    
    if (validMoves.length > 0) {
      return validMoves[Math.floor(Math.random() * validMoves.length)];
    }
    
    return { from: -1, to: -1 };
  };

  return (
    <div 
      className="relative size-full min-h-dvh"
      data-name="tateti"
      style={{ backgroundImage: "linear-gradient(105.242deg, rgb(12, 14, 23) 0%, rgb(65, 76, 125) 115.08%)" }}
    >
      {/* MOBILE LAYOUT */}
      <div className="md:hidden relative w-full min-h-dvh flex flex-col items-center justify-center gap-[clamp(16px,4dvh,40px)] px-4 py-6">
        {/* Header - Botón Salir y Turno de */}
        <div className={`w-full max-w-[380px] flex items-center justify-between px-[6px] ${winner ? 'blur-sm' : ''}`}>
          {/* Botón Salir: solo la flecha, grande para el dedo (48px) */}
          <button
            onClick={onBackToMenu}
            aria-label="Salir"
            className="bg-[#2c3455] flex items-center justify-center size-[48px] rounded-[14px] cursor-pointer relative shrink-0"
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPathsArrow.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6px_6px_0px_rgba(0,0,0,0.3)]" />
          </button>

          {/* Turno de */}
          <div className="flex gap-[12px] items-center">
            <p className="font-['SF_Pro',sans-serif] font-bold leading-[22px] text-[#e5e1e1] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Turno de:
            </p>
            <div className="h-[clamp(56px,10dvh,80px)] w-[clamp(72px,13dvh,110px)] overflow-visible flex items-center justify-center">
              <img 
                src={currentPlayerImage}
                alt="Turno"
                className="w-full h-full object-contain scale-[1.1]"
              />
            </div>
          </div>
        </div>

        {/* Tablero */}
        <div className={`gap-[13.632px] grid-cols-[repeat(3,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid ${winner ? 'blur-sm' : ''}`}>
          {board.map((cell, index) => {
            const isWinningCell = winningLine.includes(index);
            const cellIsValidMove = phase === 'moving' && selectedPiece !== null && cell === null && isValidMove(selectedPiece, index);
            
            return (
              <CellComponent
                key={index}
                cell={cell}
                index={index}
                isWinningCell={isWinningCell}
                isValidMove={cellIsValidMove}
                isComputerTurn={isComputerTurn}
                winner={winner}
                phase={phase}
                currentPlayer={currentPlayer}
                player1Image={player1Image}
                player2Image={player2Image}
                onCellClick={handleCellClick}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                isMobile={true}
              />
            );
          })}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block relative size-full">
        {/* Tablero - Frame con blur cuando hay ganador */}
        <div className={`absolute gap-[16px] grid-cols-[repeat(3,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid left-1/2 top-[calc(50%-25px)] translate-x-[-50%] translate-y-[-50%] ${winner ? 'blur-sm' : ''}`}>
          {board.map((cell, index) => {
            const isWinningCell = winningLine.includes(index);
            const cellIsValidMove = phase === 'moving' && selectedPiece !== null && cell === null && isValidMove(selectedPiece, index);
            
            return (
              <CellComponent
                key={index}
                cell={cell}
                index={index}
                isWinningCell={isWinningCell}
                isValidMove={cellIsValidMove}
                isComputerTurn={isComputerTurn}
                winner={winner}
                phase={phase}
                currentPlayer={currentPlayer}
                player1Image={player1Image}
                player2Image={player2Image}
                onCellClick={handleCellClick}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                isMobile={false}
              />
            );
          })}
        </div>

        {/* Group - Header con botón y turno con blur cuando hay ganador */}
        <div className={`absolute contents left-1/2 top-[calc(50%-381px)] translate-x-[-50%] translate-y-[-50%] ${winner ? 'blur-sm' : ''}`}>
          {/* Texto "Turno de:" */}
          <p 
            className="absolute css-4hzbpn font-['SF_Pro',sans-serif] font-bold leading-[22px] left-[calc(50%+25.16px)] text-[#e5e1e1] text-[14px] top-[calc(50%-397.5px)] w-[71.879px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Turno de:
          </p>

          {/* Botón Salir */}
          <div className="absolute bg-[#2c3455] content-stretch flex h-[78px] items-start left-[calc(50%-196.27px)] rounded-[21px] top-[calc(50%-386.5px)] translate-x-[-50%] translate-y-[-50%] w-[80.461px]">
            <button 
              onClick={onBackToMenu}
              className="h-[78px] relative rounded-[10px] shrink-0 w-[75px] cursor-pointer bg-transparent border-0"
            >
              {/* Arrow Left */}
              <div className="absolute left-[26px] size-[24px] top-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPathsArrow.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Texto "Salir" */}
              <p 
                className="absolute css-ew64yg font-['SF_Pro',sans-serif] font-bold leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center top-[37px] translate-x-[-50%]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Salir
              </p>
            </button>
            
            {/* Shadow interno */}
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>

          {/* Personaje actual */}
          <div 
            className="absolute h-[119px] left-[calc(50%+172.67px)] overflow-visible top-[calc(50%-381px)] translate-x-[-50%] translate-y-[-50%] w-[127.665px] flex items-center justify-center p-3"
          >
            <img 
              src={currentPlayerImage}
              alt="Turno"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Modal de Ganador */}
      {winner && winner !== 'draw' && (() => {
        // Si es modo computadora y ganó la computadora (O), mostrar modal de derrota
        const isPlayerLoss = mode === 'computer' && winner === 'O';
        
        return (
          <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <div className="absolute content-stretch flex flex-col h-[447.225px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[368px]">
              <div className="bg-white h-[447px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex items-end px-[30.844px] py-[34.035px] relative size-full">
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[297.803px]">
                      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                        {/* Contenido del modal */}
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                            {/* Espaciador */}
                            <div className="h-[50px] shrink-0 w-full" />
                            
                            {/* Personaje - muestra el jugador humano si perdió, sino el ganador */}
                            <div className="overflow-clip relative shrink-0 size-[187px]">
                              <div className="absolute h-[163px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[173px]">
                                <img 
                                  src={isPlayerLoss ? player1Image : (winner === 'X' ? player1Image : player2Image)}
                                  alt={isPlayerLoss ? "Jugador" : "Ganador"}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </div>
                            
                            {/* Título */}
                            <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[42px] justify-center leading-[0] not-italic relative shrink-0 text-[#30385c] text-[32px] text-center w-[298px]">
                              <p className="css-4hzbpn leading-[36.4px]">
                                {isPlayerLoss ? 'Perdiste' : '¡Ganaste!'}
                              </p>
                            </div>
                            
                            {/* Subtítulo */}
                            <div className={`flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#1a1e31] text-[20px] text-center tracking-[1px] ${isPlayerLoss ? 'w-[225px]' : ''}`}>
                              <p className="css-4hzbpn leading-[34px]">
                                {isPlayerLoss ? 'Bueno, alguien tenía que perder.' : 'Tu estrategia habló por vos.'}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Botón Volver a jugar */}
                        <div className="bg-[#2c44b2] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px] cursor-pointer" onClick={handleRestart}>
                          <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>Volver a jugar</p>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}