import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { TetrisStartScreen } from './components/TetrisStartScreen';
import { TetrisBoard } from './components/TetrisBoard';
import { TetrisHeader } from './components/TetrisHeader';
import { MobileControls } from './components/MobileControls';
import { TabletControls } from './components/TabletControls';
import { GameOverModal } from './components/GameOverModal';
import { DesktopGameLayout } from './components/DesktopGameLayout';
import { DesktopSettings } from './components/DesktopSettings';
import { DesktopThemeSelector } from './components/DesktopThemeSelector';
import { SettingsModal } from './components/SettingsModal';
import { ThemeSelector } from './components/ThemeSelector';
import { LoadingScreen } from './components/LoadingScreen';
import svgPaths from './svg/juego';
import svgPathsLarge from './svg/juego-grande';
import svgPathsSmall from './svg/juego-chico';

// Importar imágenes de temas
import naturalezaThemeImg from './assets/temas/naturaleza.webp';
import retroThemeImg from './assets/temas/retro.webp';
import coloresThemeImg from './assets/temas/colores.webp';
import rojoThemeImg from './assets/temas/rojo.webp';
import rocasThemeImg from './assets/temas/rocas.webp';
import dulcesThemeImg from './assets/temas/dulces.webp';

// Importar imágenes de fichas especiales del modo Aventura
import bombImg from './assets/especiales/bomba.webp';
import glitterImg from './assets/especiales/brillo.webp';
import thiefImg from './assets/especiales/ladron.webp';
import fastClockImg from './assets/especiales/reloj.webp';
import stoneImg from './assets/especiales/piedra.webp';
import frozenImg from './assets/especiales/congelado.webp';

// Exportar mapeo de imágenes especiales para uso en otros componentes
export const SPECIAL_PIECE_IMAGES: Record<string, string> = {
  'BOMB': bombImg,
  'GLITTER': glitterImg,
  'THIEF': thiefImg,
  'FASTCLOCK': fastClockImg,
  'STONE': stoneImg,
  'FROZEN': frozenImg,
};

// Helper para obtener la imagen correcta de un bloque (especial o normal)
export function getBlockImage(pieceType: string, blockIndex: number, themeBlocks: string[]): string {
  // Si es una pieza especial, usar su imagen especial
  if (SPECIAL_PIECE_IMAGES[pieceType]) {
    return SPECIAL_PIECE_IMAGES[pieceType];
  }
  // Si es una pieza normal, usar el bloque del tema
  return themeBlocks[blockIndex];
}

// Hook para detectar tamaño de pantalla
function useScreenSize() {
  const [screenSize, setScreenSize] = useState<'desktop' | 'mobile-large' | 'mobile-small'>('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setScreenSize('mobile-small');
      } else if (width < 768) {
        setScreenSize('mobile-large');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenSize;
}

// Hook para detectar si el dispositivo tiene pantalla táctil
function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    // Inicializar con detección síncrona para evitar flash
    return (
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      // @ts-ignore - msMaxTouchPoints para IE
      (navigator.msMaxTouchPoints > 0)
    );
  });

  useEffect(() => {
    const checkTouch = () => {
      // Múltiples métodos de detección para mayor precisión
      const hasTouchScreen = (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        // @ts-ignore - msMaxTouchPoints para IE
        (navigator.msMaxTouchPoints > 0)
      );
      
      setIsTouchDevice(hasTouchScreen);
      
      // Debug: mostrar en consola
      console.log('Touch detection:', {
        ontouchstart: 'ontouchstart' in window,
        maxTouchPoints: navigator.maxTouchPoints,
        hasTouchScreen
      });
    };

    checkTouch();
    // No necesita listener de resize, las capacidades táctiles no cambian
  }, []);

  return isTouchDevice;
}

// Hook para detectar el viewport real visible (especialmente importante en mobile con barras del navegador)
function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    // Actualizar inmediatamente
    updateHeight();

    // Escuchar cambios de tamaño y orientación
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);

    // Timeout para asegurar que se actualice después de que las barras del navegador cambien
    const timeoutId = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  return viewportHeight;
}

const BOARD_WIDTH = 13;
const BOARD_HEIGHT = 27;

// Tetromino shapes
const SHAPES = {
  I: [[1, 1, 1, 1]],
  O: [[1, 1], [1, 1]],
  O2: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1]],
  S: [[0, 1, 1], [1, 1, 0]],
  Z: [[1, 1, 0], [0, 1, 1]],
  J: [[1, 0], [1, 1]],
  L: [[0, 0, 1], [1, 1, 1]],
  X: [[1]], // Pieza de un solo bloque
  // Fichas especiales del modo Aventura
  BOMB: [[1, 1], [1, 1]], // Bomba explosiva 2x2
  GLITTER: [[1]], // Glitter 1x1
  THIEF: [[1]], // Roba cuadrados 1x1  
  FASTCLOCK: [[1, 1], [1, 1]], // Reloj rápido 2x2
  STONE: [[1]], // Roca 1x1
  FROZEN: [[1]], // Bloque congelado 1x1
} as const;

type ShapeType = keyof typeof SHAPES;

interface Piece {
  shape: number[][];
  x: number;
  y: number;
  type: ShapeType;
  rotation: number;
  blockIndex: number;
}

interface BoardCell {
  type: ShapeType | null;
  blockIndex: number | null;
}

function createEmptyBoard(): BoardCell[][] {
  return Array(BOARD_HEIGHT).fill(null).map(() => 
    Array(BOARD_WIDTH).fill(null).map(() => ({ type: null, blockIndex: null }))
  );
}

function randomPiece(themeBlocksCount: number, randomRotation: boolean = false, gameMode: 'clasico' | 'puzzle' | 'aventura' = 'clasico', forceSpecial: boolean = false): Piece {
  let type: ShapeType;
  
  console.log(`🎲 randomPiece called - gameMode: ${gameMode}, forceSpecial: ${forceSpecial}`);
  
  // En modo aventura, verificar si se debe forzar una ficha especial
  if (gameMode === 'aventura' && forceSpecial) {
    // Usar el shuffler para obtener la siguiente pieza especial
    const specialShuffler = getSpecialPieceShuffler();
    type = specialShuffler.getNextSpecial();
    console.log(`✨ Generando pieza especial: ${type}`);
  } else {
    // Fichas normales (sin las especiales)
    const normalTypes: ShapeType[] = ['I', 'O', 'O2', 'T', 'S', 'Z', 'J', 'L', 'X'];
    type = normalTypes[Math.floor(Math.random() * normalTypes.length)];
    console.log(`🔷 Generando pieza normal: ${type}`);
  }
  
  const shuffler = getBlockShuffler(themeBlocksCount);
  const blockIndex = shuffler.getNextBlock();
  
  // Generar rotación aleatoria solo si se solicita (modo puzzle)
  const rotation = randomRotation ? Math.floor(Math.random() * 4) : 0;
  
  // Rotar la pieza según el valor de rotation
  let shape = SHAPES[type];
  for (let i = 0; i < rotation; i++) {
    shape = rotateShape(shape);
  }
  
  return {
    shape: shape,
    x: Math.floor(BOARD_WIDTH / 2) - Math.floor(shape[0].length / 2),
    y: 0,
    type,
    rotation: rotation,
    blockIndex: blockIndex,
  };
}

function rotateShape(matrix: number[][]): number[][] {
  const N = matrix.length;
  const M = matrix[0].length;
  const rotated = Array(M).fill(null).map(() => Array(N).fill(0));
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      rotated[j][N - 1 - i] = matrix[i][j];
    }
  }
  return rotated;
}

function collides(board: BoardCell[][], piece: Piece): boolean {
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardX = piece.x + x;
        const boardY = piece.y + y;
        
        if (
          boardX < 0 ||
          boardX >= BOARD_WIDTH ||
          boardY >= BOARD_HEIGHT ||
          (boardY >= 0 && board[boardY][boardX].type)
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function mergePiece(board: BoardCell[][], piece: Piece): BoardCell[][] {
  const newBoard = board.map(row => [...row]);
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;
        if (boardY >= 0) {
          newBoard[boardY][boardX] = { type: piece.type, blockIndex: piece.blockIndex };
        }
      }
    }
  }
  return newBoard;
}


// Función para aplicar habilidades especiales
function applySpecialAbility(
  board: BoardCell[][], 
  piece: Piece, 
  onFastClockActivate?: () => void,
  onBombActivate?: (rows: number[], cols: number[]) => void,
  onFrozenActivate?: (positions: Array<{ y: number, x: number }>) => void,
  onStoneActivate?: (lineIndex: number) => void
): BoardCell[][] {
  let newBoard = board.map(row => [...row]);
  
  // BOMB: Elimina 2 filas horizontales y 2 columnas verticales completas
  if (piece.type === 'BOMB') {
    console.log('💣 BOMB activada!');
    
    // Encontrar el centro de la bomba
    const centerY = piece.y + Math.floor(piece.shape.length / 2);
    const centerX = piece.x + Math.floor(piece.shape[0].length / 2);
    
    // Determinar las 2 filas a eliminar (centradas en la posición de la bomba)
    const rowsToRemove = [
      Math.max(0, centerY - 1),
      Math.min(BOARD_HEIGHT - 1, centerY)
    ].filter(row => row >= 0 && row < BOARD_HEIGHT);
    
    // Determinar las 2 columnas a eliminar (centradas en la posición de la bomba)
    const colsToRemove = [
      Math.max(0, centerX - 1),
      Math.min(BOARD_WIDTH - 1, centerX)
    ].filter(col => col >= 0 && col < BOARD_WIDTH);
    
    console.log('💣 Eliminando filas:', rowsToRemove, 'y columnas:', colsToRemove);
    
    // Eliminar las celdas en las filas especificadas (excepto piedras)
    rowsToRemove.forEach(rowIndex => {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        // No eliminar bloques de piedra
        if (newBoard[rowIndex][x].type !== 'STONE') {
          newBoard[rowIndex][x] = { type: null, blockIndex: null };
        }
      }
    });
    
    // Eliminar las celdas en las columnas especificadas (excepto piedras)
    colsToRemove.forEach(colIndex => {
      for (let y = 0; y < BOARD_HEIGHT; y++) {
        // No eliminar bloques de piedra
        if (newBoard[y][colIndex].type !== 'STONE') {
          newBoard[y][colIndex] = { type: null, blockIndex: null };
        }
      }
    });
    
    // Activar la animación de la bomba usando el callback
    if (onBombActivate) {
      onBombActivate(rowsToRemove, colsToRemove);
    }
  }
  
  // GLITTER: Llena 5 espacios vacíos (o menos si no hay suficientes)
  if (piece.type === 'GLITTER') {
    console.log('✨ GLITTER activada!');
    // Obtener el blockIndex del glitter
    const glitterBlockIndex = piece.blockIndex;
    
    // Recolectar espacios vacíos priorizando las líneas inferiores (donde hay piezas)
    const emptyCells: [number, number][] = [];
    
    // Recorrer desde abajo hacia arriba para priorizar las líneas inferiores
    for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
      // Solo considerar líneas que tienen al menos una pieza (para "llenar huecos")
      const hasBlocks = newBoard[y].some(cell => cell.type !== null);
      if (hasBlocks) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
          if (!newBoard[y][x].type) {
            // Es un hueco vacío en una línea con piezas
            emptyCells.push([y, x]);
          }
        }
      }
    }
    
    // Si no hay suficientes huecos en líneas con piezas, agregar espacios vacíos de cualquier línea
    if (emptyCells.length < 5) {
      for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
          if (!newBoard[y][x].type && !emptyCells.some(([cy, cx]) => cy === y && cx === x)) {
            emptyCells.push([y, x]);
          }
        }
      }
    }
    
    // Llenar 5 espacios vacíos (o menos si no hay suficientes)
    const cellsToFill = Math.min(5, emptyCells.length);
    for (let i = 0; i < cellsToFill; i++) {
      // Tomar los primeros (que son los más bajos/prioritarios)
      const [y, x] = emptyCells[i];
      newBoard[y][x] = { type: 'GLITTER', blockIndex: glitterBlockIndex };
    }
    
    console.log(`✨ Glitter llenó ${cellsToFill} huecos para ayudar a completar líneas`);
  }
  
  // THIEF: Elimina 5 bloques aleatorios (o menos si no hay suficientes)
  if (piece.type === 'THIEF') {
    console.log('🦹 THIEF activada!');
    // Recolectar todas las celdas ocupadas que NO sean de piedra
    const occupiedCells: [number, number][] = [];
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        // No robar bloques de piedra ni el propio THIEF
        if (newBoard[y][x].type && newBoard[y][x].type !== 'THIEF' && newBoard[y][x].type !== 'STONE') {
          occupiedCells.push([y, x]);
        }
      }
    }
    
    // Eliminar 5 bloques aleatorios (o menos si no hay suficientes)
    const blocksToRemove = Math.min(5, occupiedCells.length);
    for (let i = 0; i < blocksToRemove; i++) {
      const randomIndex = Math.floor(Math.random() * occupiedCells.length);
      const [y, x] = occupiedCells[randomIndex];
      newBoard[y][x] = { type: null, blockIndex: null };
      occupiedCells.splice(randomIndex, 1);
    }
  }
  
  // FASTCLOCK: Activa el efecto de velocidad aumentada durante 15 segundos
  if (piece.type === 'FASTCLOCK') {
    console.log('⏰ FASTCLOCK activada! Las piezas caerán 3x más rápido durante 15 segundos');
    if (onFastClockActivate) {
      onFastClockActivate();
    }
  }
  
  // STONE: Convierte una línea en piedra
  if (piece.type === 'STONE') {
    console.log('🪨 STONE activada! Convertirá una línea en piedra permanente');
    // El callback se encargará de determinar qué línea convertir
    if (onStoneActivate) {
      // Pasar -1 como señal para que el callback determine la línea correcta
      onStoneActivate(-1);
    }
  }
  
  // FROZEN: Agrega 8 bloques temporales que no generan líneas y desaparecen en 20 segundos
  if (piece.type === 'FROZEN') {
    console.log('❄️ FROZEN activada! Agregando 8 bloques temporales');
    
    const frozenPositions: Array<{ y: number, x: number }> = [];
    
    // Recolectar todas las posiciones vacías SOLO en la mitad inferior del tablero
    // Evitar las primeras 13 líneas (mitad superior) para no bloquear el spawn de nuevas piezas
    const emptyCells: [number, number][] = [];
    const minY = Math.floor(BOARD_HEIGHT / 2); // Empezar desde la mitad del tablero (línea 13)
    
    for (let y = minY; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (newBoard[y][x].type === null) {
          emptyCells.push([y, x]);
        }
      }
    }
    
    // Agregar 8 bloques en posiciones aleatorias (o menos si no hay suficientes espacios)
    const blocksToAdd = Math.min(8, emptyCells.length);
    for (let i = 0; i < blocksToAdd; i++) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const [y, x] = emptyCells[randomIndex];
      
      // Guardar la posición del bloque frozen
      frozenPositions.push({ y, x });
      
      // Agregar bloque frozen
      newBoard[y][x] = { 
        type: 'FROZEN', 
        blockIndex: 0 // Usar el primer bloque del tema para FROZEN
      };
      
      // Remover esta posición de las disponibles
      emptyCells.splice(randomIndex, 1);
    }
    
    // Llamar al callback para registrar las posiciones frozen en el estado
    if (onFrozenActivate && frozenPositions.length > 0) {
      onFrozenActivate(frozenPositions);
    }
    
    console.log(`❄️ ${frozenPositions.length} bloques frozen agregados al tablero (solo mitad inferior)`);
  }
  
  return newBoard;
}

function clearLines(
  board: BoardCell[][], 
  frozenLines: Set<number> = new Set(), 
  stoneLines: Set<number> = new Set()
): { newBoard: BoardCell[][]; linesCleared: number; clearedLineIndices: number[] } {
  const clearedLineIndices: number[] = [];
  board.forEach((row, index) => {
    // Solo eliminar líneas que:
    // 1. Están completas (todos los bloques llenos, excepto FROZEN que no cuenta)
    // 2. NO están congeladas
    // 3. NO son líneas de piedra
    // Verificar que la línea esté completa ignorando bloques FROZEN
    const isComplete = row.every(cell => cell.type !== null && cell.type !== 'FROZEN');
    if (isComplete && !frozenLines.has(index) && !stoneLines.has(index)) {
      clearedLineIndices.push(index);
    }
  });
  
  // Filtrar solo las líneas que están en clearedLineIndices
  const newBoard = board.filter((row, index) => !clearedLineIndices.includes(index));
  const linesCleared = clearedLineIndices.length;
  
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array(BOARD_WIDTH).fill(null).map(() => ({ type: null, blockIndex: null })));
  }
  
  return { newBoard, linesCleared, clearedLineIndices };
}

// Clase para manejar el shuffle de bloques
class BlockShuffler {
  public availableBlocks: number[];
  private totalBlocks: number;

  constructor(totalBlocks: number) {
    this.totalBlocks = totalBlocks;
    this.availableBlocks = this.shuffle(Array.from({ length: totalBlocks }, (_, i) => i));
  }

  private shuffle(array: number[]): number[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  getNextBlock(): number {
    if (this.availableBlocks.length === 0) {
      this.availableBlocks = this.shuffle(Array.from({ length: this.totalBlocks }, (_, i) => i));
    }
    return this.availableBlocks.pop()!;
  }

  updateTotalBlocks(totalBlocks: number) {
    if (this.totalBlocks !== totalBlocks) {
      this.totalBlocks = totalBlocks;
      this.availableBlocks = this.shuffle(Array.from({ length: totalBlocks }, (_, i) => i));
    }
  }

  reset() {
    this.availableBlocks = this.shuffle(Array.from({ length: this.totalBlocks }, (_, i) => i));
  }
}

// Clase para manejar el shuffle de piezas especiales
class SpecialPieceShuffler {
  private availableSpecials: ShapeType[];
  private readonly specialTypes: ShapeType[] = ['BOMB', 'GLITTER', 'THIEF', 'FASTCLOCK', 'STONE', 'FROZEN'];

  constructor() {
    this.availableSpecials = this.shuffle([...this.specialTypes]);
  }

  private shuffle(array: ShapeType[]): ShapeType[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  getNextSpecial(): ShapeType {
    if (this.availableSpecials.length === 0) {
      console.log('🔄 Todas las piezas especiales usadas, mezclando de nuevo...');
      this.availableSpecials = this.shuffle([...this.specialTypes]);
    }
    const special = this.availableSpecials.pop()!;
    console.log(`✨ Pieza especial seleccionada: ${special}. Restantes en pool: ${this.availableSpecials.length}`);
    return special;
  }

  reset() {
    this.availableSpecials = this.shuffle([...this.specialTypes]);
    console.log('🔄 Special shuffler reseteado');
  }
}

let blockShuffler: BlockShuffler | null = null;
let specialPieceShuffler: SpecialPieceShuffler | null = null;

function getBlockShuffler(themeBlocksCount: number): BlockShuffler {
  if (!blockShuffler) {
    blockShuffler = new BlockShuffler(themeBlocksCount);
  } else {
    blockShuffler.updateTotalBlocks(themeBlocksCount);
  }
  return blockShuffler;
}

function resetBlockShuffler() {
  if (blockShuffler) {
    blockShuffler.reset();
  }
}

function getSpecialPieceShuffler(): SpecialPieceShuffler {
  if (!specialPieceShuffler) {
    specialPieceShuffler = new SpecialPieceShuffler();
  }
  return specialPieceShuffler;
}

function resetSpecialPieceShuffler() {
  if (specialPieceShuffler) {
    specialPieceShuffler.reset();
  }
}

export function TetrisGameWrapper() {
  const { getThemeBlocks, currentTheme, setTheme } = useTheme();
  const themeBlocks = getThemeBlocks();
  const screenSize = useScreenSize();
  const viewportHeight = useViewportHeight();
  const isTouchDevice = useIsTouchDevice();
  
  // Resetear el shuffler cuando cambia el tema
  useEffect(() => {
    resetBlockShuffler();
    resetSpecialPieceShuffler();
  }, [themeBlocks.length]);
  
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<Piece>(() => randomPiece(themeBlocks.length, false, 'clasico'));
  const [nextPiece, setNextPiece] = useState<Piece>(() => randomPiece(themeBlocks.length, false, 'clasico'));
  const [nextPieces, setNextPieces] = useState<Piece[]>(() => [
    randomPiece(themeBlocks.length, false, 'clasico'),
    randomPiece(themeBlocks.length, false, 'clasico'),
    randomPiece(themeBlocks.length, false, 'clasico')
  ]); // Array de 3 próximas piezas
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0); // Nuevo: contador de líneas
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [level, setLevel] = useState(1);
  const [isDropping, setIsDropping] = useState(false);
  const [clearingLines, setClearingLines] = useState<number[]>([]);
  const [gridEnabled, setGridEnabled] = useState(true); // Estado para el toggle de grilla
  const [showSettings, setShowSettings] = useState(false); // Estado para mostrar configuraciones
  const [showThemeSelector, setShowThemeSelector] = useState(false); // Estado para el selector de tema
  const [gameMode, setGameMode] = useState<'clasico' | 'puzzle' | 'aventura'>('clasico'); // Estado para el modo de juego
  const [commonPiecesCount, setCommonPiecesCount] = useState(0); // Contador de piezas comunes en modo aventura
  const [debugInfo, setDebugInfo] = useState<string[]>([]); // Debug info visible
  const [fastClockActive, setFastClockActive] = useState(false); // Estado para el efecto FASTCLOCK
  const [fastClockEndTime, setFastClockEndTime] = useState<number | null>(null); // Timestamp de cuando termina el efecto
  const [bombAnimation, setBombAnimation] = useState<{ rows: number[], cols: number[] } | null>(null); // Estado para la animación de la bomba
  const [frozenLines, setFrozenLines] = useState<Map<number, { unfreezeTime: number, originalRow: BoardCell[] }>>(new Map()); // Mapa de línea -> datos de congelación
  const [nextStoneLine, setNextStoneLine] = useState<number>(26); // Próxima línea a convertir en piedra (empieza en 26)
  const [stoneLines, setStoneLines] = useState<Set<number>>(new Set()); // Set de líneas convertidas en piedra
  const [frozenBlocks, setFrozenBlocks] = useState<Map<string, number>>(new Map()); // Mapa de "y,x" -> expireTime para bloques frozen temporales

  // Orden de temas para el ciclo
  const themeOrder = ['naturaleza', 'retro', 'colores', 'rojo', 'rocas', 'dulces'];

  // Función para ciclar al siguiente tema
  const cycleTheme = () => {
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex] as any);
  };

  // Función para activar el efecto FASTCLOCK
  const activateFastClock = useCallback(() => {
    const endTime = Date.now() + 15000; // 15 segundos
    setFastClockActive(true);
    setFastClockEndTime(endTime);
    console.log('⏰ FASTCLOCK activado hasta:', new Date(endTime).toISOString());
  }, []);

  // Función para activar la animación de la bomba
  const activateBombAnimation = useCallback((rows: number[], cols: number[]) => {
    setBombAnimation({ rows, cols });
    setTimeout(() => setBombAnimation(null), 500); // Limpiar animación después de 500ms
  }, []);

  // Función para activar el efecto FROZEN
  const activateFrozen = useCallback((positions: Array<{ y: number, x: number }>) => {
    console.log('❄️ Registrando bloques frozen temporales en el estado');
    
    const expireTime = Date.now() + 20000; // 20 segundos
    
    // Guardar las posiciones frozen
    setFrozenBlocks(prev => {
      const newMap = new Map(prev);
      positions.forEach(({ y, x }) => {
        const key = `${y},${x}`;
        newMap.set(key, expireTime);
      });
      return newMap;
    });
    
    console.log(`❄️ ${positions.length} bloques frozen registrados hasta ${new Date(expireTime).toISOString()}`);
  }, []);

  // Función para activar el efecto STONE
  const activateStone = useCallback(() => {
    setNextStoneLine(prev => {
      const lineToConvert = prev;
      if (lineToConvert >= 0 && lineToConvert < BOARD_HEIGHT) {
        // Llenar la línea con bloques de piedra
        setBoard(prevBoard => {
          const newBoard = prevBoard.map(row => [...row]);
          // Llenar toda la línea con bloques
          for (let x = 0; x < BOARD_WIDTH; x++) {
            // Usar un blockIndex aleatorio del tema actual
            const shuffler = getBlockShuffler(themeBlocks.length);
            newBoard[lineToConvert][x] = { 
              type: 'STONE', 
              blockIndex: shuffler.getNextBlock() 
            };
          }
          return newBoard;
        });
        
        // Marcar la línea como piedra permanente
        setStoneLines(prevStones => {
          const newStones = new Set(prevStones);
          newStones.add(lineToConvert);
          return newStones;
        });
        
        console.log(`🪨 Línea ${lineToConvert} convertida en piedra permanente`);
        return lineToConvert - 1; // Siguiente línea será una más arriba
      }
      return prev;
    });
  }, [themeBlocks.length]);

  // useRef para mantener referencias estables a las funciones de activación
  const activateFastClockRef = useRef(activateFastClock);
  const activateBombAnimationRef = useRef(activateBombAnimation);
  const activateFrozenRef = useRef(activateFrozen);
  const activateStoneRef = useRef(activateStone);
  
  // useRef para mantener referencia actualizada de drop
  const dropRef = useRef<() => void>(() => {});

  // Actualizar las referencias cuando cambien las funciones
  useEffect(() => {
    activateFastClockRef.current = activateFastClock;
    activateBombAnimationRef.current = activateBombAnimation;
    activateFrozenRef.current = activateFrozen;
    activateStoneRef.current = activateStone;
  }, [activateFastClock, activateBombAnimation, activateFrozen, activateStone]);

  // useEffect para desactivar FASTCLOCK cuando expire
  useEffect(() => {
    if (!fastClockActive || !fastClockEndTime) return;

    const checkExpiration = setInterval(() => {
      if (Date.now() >= fastClockEndTime) {
        setFastClockActive(false);
        setFastClockEndTime(null);
        console.log('⏰ FASTCLOCK desactivado');
      }
    }, 100); // Verificar cada 100ms

    return () => clearInterval(checkExpiration);
  }, [fastClockActive, fastClockEndTime]);

  // useEffect para descongelar líneas cuando expire el tiempo
  useEffect(() => {
    if (frozenLines.size === 0) return;

    const checkFrozenLines = setInterval(() => {
      const now = Date.now();
      const linesToUnfreeze: number[] = [];
      
      frozenLines.forEach((unfreezeData, lineIndex) => {
        if (now >= unfreezeData.unfreezeTime) {
          linesToUnfreeze.push(lineIndex);
        }
      });
      
      if (linesToUnfreeze.length > 0) {
        // Restaurar las líneas congeladas a su estado original
        setBoard(prevBoard => {
          const newBoard = prevBoard.map(row => [...row]);
          linesToUnfreeze.forEach(lineIndex => {
            const unfreezeData = frozenLines.get(lineIndex);
            if (unfreezeData) {
              // Restaurar la línea completa al estado original
              newBoard[lineIndex] = unfreezeData.originalRow.map(cell => ({ ...cell }));
              console.log(`❄️ Línea ${lineIndex} restaurada a su estado original`);
            }
          });
          return newBoard;
        });
        
        // Actualizar el mapa de líneas congeladas
        setFrozenLines(prev => {
          const newMap = new Map(prev);
          linesToUnfreeze.forEach(lineIndex => {
            newMap.delete(lineIndex);
          });
          return newMap;
        });
      }
    }, 100); // Verificar cada 100ms

    return () => clearInterval(checkFrozenLines);
  }, [frozenLines]);

  // useEffect para eliminar bloques frozen temporales cuando expiren
  useEffect(() => {
    if (frozenBlocks.size === 0) return;

    const checkFrozenBlocks = setInterval(() => {
      const now = Date.now();
      const blocksToRemove: string[] = [];
      
      frozenBlocks.forEach((expireTime, key) => {
        if (now >= expireTime) {
          blocksToRemove.push(key);
        }
      });
      
      if (blocksToRemove.length > 0) {
        // Eliminar los bloques frozen temporales
        setBoard(prevBoard => {
          const newBoard = prevBoard.map(row => [...row]);
          blocksToRemove.forEach(key => {
            const [y, x] = key.split(',').map(Number);
            newBoard[y][x] = { type: null, blockIndex: null };
            console.log(`❄️ Bloque frozen en (${y},${x}) eliminado`);
          });
          return newBoard;
        });
        
        // Actualizar el mapa de bloques frozen temporales
        setFrozenBlocks(prev => {
          const newMap = new Map(prev);
          blocksToRemove.forEach(key => {
            newMap.delete(key);
          });
          return newMap;
        });
      }
    }, 100); // Verificar cada 100ms

    return () => clearInterval(checkFrozenBlocks);
  }, [frozenBlocks]);

  // Mapeo de imágenes por tema
  const themeImages: Record<string, string> = {
    'naturaleza': naturalezaThemeImg,
    'retro': retroThemeImg,
    'colores': coloresThemeImg,
    'rojo': rojoThemeImg,
    'rocas': rocasThemeImg,
    'dulces': dulcesThemeImg
  };

  const toggleGrid = () => {
    setGridEnabled(prev => !prev);
  };

  const toggleSettings = () => {
    setShowSettings(prev => !prev);
  };

  const toggleGameMode = () => {
    setGameMode(prev => {
      const modes: ('clasico' | 'puzzle' | 'aventura')[] = ['clasico', 'puzzle', 'aventura'];
      const currentIndex = modes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % modes.length;
      return modes[nextIndex];
    });
    // Reiniciar la partida completamente cuando se cambia de modo
    resetGame();
  };

  // Función para manejar el drop de piezas en modo puzzle
  const handlePieceDrop = useCallback((droppedPiece: Piece, pieceIndex: number, clientX: number, clientY: number) => {
    if (gameMode !== 'puzzle') return;
    
    const boardElement = document.querySelector('[data-board]');
    if (!boardElement) return;

    const boardRect = boardElement.getBoundingClientRect();
    const cellWidth = boardRect.width / BOARD_WIDTH;
    const cellHeight = boardRect.height / BOARD_HEIGHT;

    const boardX = Math.floor((clientX - boardRect.left) / cellWidth);
    const boardY = Math.floor((clientY - boardRect.top) / cellHeight);

    const pieceToPlace = { ...droppedPiece, x: boardX, y: boardY };

    // Verificar si hay colisión - si hay, NO colocar la pieza
    if (collides(board, pieceToPlace)) {
      console.log('❌ Colisión detectada - no se puede colocar la pieza aquí');
      return; // Salir sin hacer nada
    }

    // Si llegamos aquí, NO hay colisión - proceder a colocar la pieza
    console.log('✅ Posición válida - colocando pieza');
    
    // Mergear la pieza en el tablero usando pieceToPlace con coordenadas correctas
    let mergedBoard = mergePiece(board, pieceToPlace);
    
    // Aplicar habilidades especiales si es una pieza especial
    mergedBoard = applySpecialAbility(mergedBoard, pieceToPlace, activateFastClockRef.current, activateBombAnimationRef.current, activateFrozenRef.current, activateStoneRef.current);
    
    // Convertir frozenLines Map a Set con las claves
    const frozenLinesSet = new Set(frozenLines.keys());
    const { newBoard, linesCleared, clearedLineIndices } = clearLines(mergedBoard, frozenLinesSet, stoneLines);
    
    if (linesCleared > 0) {
      // Primero mostrar la animación con las líneas completas
      setBoard(mergedBoard);
      setClearingLines(clearedLineIndices);
      
      // Después de 500ms, eliminar las líneas y actualizar puntuación
      setTimeout(() => {
        setBoard(newBoard);
        setScore(prev => prev + linesCleared * 100 * level);
        setLevel(prev => Math.floor((score + linesCleared * 100 * level) / 1000) + 1);
        setLines(prev => prev + linesCleared);
        setClearingLines([]);
      }, 500);
    } else {
      // No hay líneas completas, actualizar directamente
      setBoard(newBoard);
    }

    // Remover la pieza usada y agregar una nueva con rotación aleatoria
    setNextPieces(prev => {
      const newPieces = [...prev];
      newPieces.splice(pieceIndex, 1);
      // En modo aventura, aplicar la misma lógica de contador
      if (gameMode === 'aventura') {
        const nextCount = commonPiecesCount + 1;
        const shouldGenerateSpecial = nextCount >= 5;
        console.log(`🎮 Puzzle Mode - Contador: ${nextCount}, Generar especial: ${shouldGenerateSpecial}`);
        newPieces.push(randomPiece(themeBlocks.length, true, gameMode, shouldGenerateSpecial));
        setCommonPiecesCount(shouldGenerateSpecial ? 0 : nextCount);
      } else {
        newPieces.push(randomPiece(themeBlocks.length, true, gameMode)); // true = rotación aleatoria
      }
      return newPieces;
    });
  }, [board, level, themeBlocks.length, gameMode, commonPiecesCount, activateFastClockRef, activateBombAnimationRef, activateFrozenRef, activateStoneRef, frozenLines, stoneLines]);

  const moveDown = useCallback(() => {
    if (gameOver || isPaused) return;

    const newPiece = { ...currentPiece, y: currentPiece.y + 1 };
    
    if (collides(board, newPiece)) {
      let mergedBoard = mergePiece(board, currentPiece);
      
      // Aplicar habilidades especiales si es una pieza especial
      mergedBoard = applySpecialAbility(mergedBoard, currentPiece, activateFastClockRef.current, activateBombAnimationRef.current, activateFrozenRef.current, activateStoneRef.current);
      
      // Convertir frozenLines Map a Set con las claves
      const frozenLinesSet = new Set(frozenLines.keys());
      const { newBoard, linesCleared, clearedLineIndices } = clearLines(mergedBoard, frozenLinesSet, stoneLines);
      
      if (linesCleared > 0) {
        // Primero mostrar la animación con las líneas completas
        setBoard(mergedBoard);
        setClearingLines(clearedLineIndices);
        
        // Después de 500ms, eliminar las líneas y actualizar puntuación
        setTimeout(() => {
          setBoard(newBoard);
          setScore(prev => prev + linesCleared * 100 * level);
          setLevel(prev => Math.floor((score + linesCleared * 100 * level) / 1000) + 1);
          setLines(prev => prev + linesCleared);
          setClearingLines([]);
        }, 500);
      } else {
        // No hay líneas completas, actualizar directamente
        setBoard(newBoard);
      }
      
      // Actualizar las piezas siguientes
      const nextFromQueue = nextPieces[0];
      if (collides(newBoard, nextFromQueue)) {
        setGameOver(true);
      } else {
        setCurrentPiece(nextFromQueue);
        // Mover la cola: eliminar la primera y agregar una nueva al final
        // En modo aventura, verificar contador para generar ficha especial cada 5 piezas
        if (gameMode === 'aventura') {
          const nextCount = commonPiecesCount + 1;
          const shouldGenerateSpecial = nextCount >= 5;
          console.log(`🎮 Modo Aventura - Contador: ${nextCount}, Generar especial: ${shouldGenerateSpecial}`);
          setNextPieces(prev => [
            ...prev.slice(1),
            randomPiece(themeBlocks.length, false, gameMode, shouldGenerateSpecial)
          ]);
          setCommonPiecesCount(shouldGenerateSpecial ? 0 : nextCount);
        } else {
          setNextPieces(prev => [...prev.slice(1), randomPiece(themeBlocks.length, false, gameMode)]);
        }
        setNextPiece(nextPieces[0]); // Para compatibilidad con mobile
      }
    } else {
      setCurrentPiece(newPiece);
    }
  }, [board, currentPiece, nextPieces, gameOver, isPaused, level, score, themeBlocks.length, gameMode, commonPiecesCount, activateFastClockRef, activateBombAnimationRef, activateFrozenRef, activateStoneRef, frozenLines, stoneLines]);

  const moveLeft = useCallback(() => {
    if (gameOver || isPaused) return;
    const newPiece = { ...currentPiece, x: currentPiece.x - 1 };
    if (!collides(board, newPiece)) {
      setCurrentPiece(newPiece);
    }
  }, [board, currentPiece, gameOver, isPaused]);

  const moveRight = useCallback(() => {
    if (gameOver || isPaused) return;
    const newPiece = { ...currentPiece, x: currentPiece.x + 1 };
    if (!collides(board, newPiece)) {
      setCurrentPiece(newPiece);
    }
  }, [board, currentPiece, gameOver, isPaused]);

  const rotatePiece = useCallback(() => {
    if (gameOver || isPaused) return;
    const rotated = rotateShape(currentPiece.shape);
    const newPiece = { ...currentPiece, shape: rotated, rotation: (currentPiece.rotation + 1) % 4 };
    if (!collides(board, newPiece)) {
      setCurrentPiece(newPiece);
    }
  }, [board, currentPiece, gameOver, isPaused]);

  const drop = useCallback(() => {
    console.log('🔽 DROP v2.0 llamado - gameOver:', gameOver, 'isPaused:', isPaused, 'isDropping:', isDropping, 'gameMode:', gameMode);
    if (gameOver || isPaused || gameMode === 'puzzle') return;
    
    // Si ya está cayendo, no hacer nada
    if (isDropping) {
      console.log('⚠️ Ya hay un drop en progreso, ignorando');
      return;
    }
    
    console.log('✅ DROP ejecutándose...');
    setIsDropping(true);
    
    let finalY = currentPiece.y;
    while (!collides(board, { ...currentPiece, y: finalY + 1 })) {
      finalY += 1;
    }
    
    const startY = currentPiece.y;
    const distance = finalY - startY;
    
    if (distance === 0) {
      setIsDropping(false);
      return;
    }
    
    const duration = 150;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInQuad = progress * progress;
      const currentY = Math.floor(startY + distance * easeInQuad);
      
      setCurrentPiece(prev => ({ ...prev, y: currentY }));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const finalPiece = { ...currentPiece, y: finalY };
        let mergedBoard = mergePiece(board, finalPiece);
        
        // Aplicar habilidades especiales si es una pieza especial
        mergedBoard = applySpecialAbility(mergedBoard, finalPiece, activateFastClockRef.current, activateBombAnimationRef.current, activateFrozenRef.current, activateStoneRef.current);
        
        // Convertir frozenLines Map a Set con las claves
        const frozenLinesSet = new Set(frozenLines.keys());
        const { newBoard, linesCleared, clearedLineIndices } = clearLines(mergedBoard, frozenLinesSet, stoneLines);
        
        setBoard(newBoard);
        setScore(prev => prev + linesCleared * 100 * level);
        setLevel(prev => Math.floor((score + linesCleared * 100 * level) / 1000) + 1);
        setLines(prev => prev + linesCleared); // Actualizar contador de líneas
        
        // Actualizar las piezas siguientes
        const nextFromQueue = nextPieces[0];
        if (collides(newBoard, nextFromQueue)) {
          setGameOver(true);
        } else {
          setCurrentPiece(nextFromQueue);
          // Mover la cola: eliminar la primera y agregar una nueva al final
          // En modo aventura, verificar contador para generar ficha especial cada 5 piezas
          if (gameMode === 'aventura') {
            const nextCount = commonPiecesCount + 1;
            const shouldGenerateSpecial = nextCount >= 5;
            setNextPieces(prev => [
              ...prev.slice(1),
              randomPiece(themeBlocks.length, false, gameMode, shouldGenerateSpecial)
            ]);
            setCommonPiecesCount(shouldGenerateSpecial ? 0 : nextCount);
          } else {
            setNextPieces(prev => [...prev.slice(1), randomPiece(themeBlocks.length, false, gameMode)]);
          }
          setNextPiece(nextPieces[0]); // Para compatibilidad con mobile
        }
        
        setIsDropping(false);
        setClearingLines(clearedLineIndices);
        setTimeout(() => setClearingLines([]), 500);
      }
    };
    
    requestAnimationFrame(animate);
  }, [board, currentPiece, nextPieces, gameOver, isPaused, isDropping, level, score, themeBlocks.length, gameMode, commonPiecesCount, activateFastClockRef, activateBombAnimationRef, activateFrozenRef, activateStoneRef, frozenLines, stoneLines]);

  const resetGame = useCallback(() => {
    console.log(`🔄 Reset game - gameMode: ${gameMode}`);
    setBoard(createEmptyBoard());
    
    // Generar las piezas iniciales según el modo de juego
    const initialPieces = [
      randomPiece(themeBlocks.length, false, gameMode),
      randomPiece(themeBlocks.length, false, gameMode),
      randomPiece(themeBlocks.length, false, gameMode)
    ];
    
    console.log(`🎲 Piezas iniciales generadas:`, initialPieces.map(p => p.type));
    
    setCurrentPiece(randomPiece(themeBlocks.length, false, gameMode));
    setNextPiece(initialPieces[0]);
    setNextPieces(initialPieces);
    setScore(0);
    setLines(0); // Resetear líneas
    setLevel(1);
    setGameOver(false);
    setIsPaused(false);
    setCommonPiecesCount(0); // Resetear contador de piezas comunes
    setFrozenLines(new Map()); // Resetear líneas congeladas
    setNextStoneLine(26); // Resetear contador de piedra
    setStoneLines(new Set()); // Resetear líneas de piedra
    setFrozenBlocks(new Map()); // Resetear bloques frozen temporales
    console.log(`✅ Juego reseteado - Contador: 0`);
  }, [themeBlocks.length, gameMode]);

  const startGame = () => {
    setIsLoading(true);
    // El gameStarted se setea a true después que el loading complete
  };

  const handleLoadComplete = () => {
    setIsLoading(false);
    setGameStarted(true);
    resetGame();
  };

  const togglePause = useCallback(() => {
    if (!gameOver) {
      setIsPaused(prev => !prev);
    }
  }, [gameOver]);

  const handleCloseGame = useCallback(() => {
    setGameStarted(false);
    setIsLoading(false);
  }, []);

  // Actualizar dropRef cuando drop cambie
  useEffect(() => {
    dropRef.current = drop;
  }, [drop]);

  // Keyboard controls
  useEffect(() => {
    if (!gameStarted) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          moveLeft();
          break;
        case 'ArrowRight':
          e.preventDefault();
          moveRight();
          break;
        case 'ArrowDown':
          e.preventDefault();
          moveDown();
          break;
        case 'ArrowUp':
          e.preventDefault();
          rotatePiece();
          break;
        case ' ':
          e.preventDefault();
          dropRef.current(); // Usar el ref en lugar del callback directo
          break;
        case 'p':
        case 'P':
        case 'j':
        case 'J':
          e.preventDefault();
          togglePause();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          resetGame();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, moveLeft, moveRight, moveDown, rotatePiece, togglePause, resetGame]); // Removí drop de las dependencias

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused || !gameStarted || gameMode === 'puzzle') return;
    
    let speed = Math.max(100, 1000 - (level - 1) * 100);
    
    // Si FASTCLOCK está activo, aumentar la velocidad 3x (dividir el intervalo entre 3)
    if (fastClockActive) {
      speed = Math.max(33, speed / 3); // Mínimo 33ms para evitar problemas
      console.log(`⏰ Velocidad aumentada 3x: ${speed}ms`);
    }
    
    const interval = setInterval(moveDown, speed);
    return () => clearInterval(interval);
  }, [moveDown, gameOver, isPaused, level, gameStarted, gameMode, fastClockActive]);

  // Configuración del backend según el dispositivo - DEBE estar ANTES del return condicional
  const dndBackend = useMemo(() => {
    if (screenSize === 'desktop') {
      return HTML5Backend;
    }
    return TouchBackend;
  }, [screenSize]);

  const dndBackendOptions = useMemo(() => {
    if (screenSize === 'desktop') {
      return {};
    }
    // Opciones para TouchBackend
    return {
      enableMouseEvents: true, // Habilitar eventos de mouse también en mobile
      delayTouchStart: 200, // Delay para diferenciar de scroll
      touchSlop: 5, // Tolerancia para movimiento antes de activar drag
    };
  }, [screenSize]);

  if (!gameStarted) {
    return (
      <div className="min-h-screen w-full">
        {isLoading ? (
          <LoadingScreen onLoadComplete={handleLoadComplete} />
        ) : (
          <TetrisStartScreen 
            onStart={startGame}
            gameMode={gameMode}
            onGameModeChange={setGameMode}
          />
        )}
      </div>
    );
  }

  // Seleccionar SVG paths según el layout
  const svgPathsForLayout = screenSize === 'mobile-small' ? svgPathsSmall : 
                            screenSize === 'mobile-large' ? svgPathsLarge : 
                            svgPaths;

  // Configuración de layout
  const layoutConfig = {
    'desktop': {
      background: 'linear-gradient(142.81deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
      containerClass: 'relative w-[850px] h-[930px]',
      boardWrapperClass: 'absolute h-[874px] left-[406px] top-[28px] w-[416px]',
    },
    'mobile-large': {
      background: 'linear-gradient(178.613deg, rgb(21, 31, 51) 0.549%, rgb(27, 38, 58) 99.451%)',
      containerClass: 'relative w-full h-screen max-w-[393px] flex flex-col items-center justify-center',
      boardStyle: { width: 'min(300px, calc(100vw - 92px))', aspectRatio: '13/27' },
    },
    'mobile-small': {
      background: 'linear-gradient(179.026deg, rgb(21, 31, 51) 0.549%, rgb(27, 38, 58) 99.451%)',
      containerClass: 'relative w-full h-screen max-w-[400px] flex flex-col items-center justify-center',
      boardStyle: { width: 'min(210px, calc(100vw - 92px))', aspectRatio: '13/27' },
    },
  };

  const config = layoutConfig[screenSize];

  const gameContent = (
    <div 
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: config.background,
        height: screenSize !== 'desktop' ? `${viewportHeight}px` : '100vh',
        minHeight: screenSize !== 'desktop' ? `${viewportHeight}px` : '100vh',
      }}
    >
      {screenSize === 'desktop' ? (
        // Desktop layout - exacto al diseño de Figma
        <>
          {!showSettings && !showThemeSelector && (
            <div className="relative size-full overflow-hidden" style={{ backgroundImage: "linear-gradient(139.55deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
              <DesktopGameLayout
                nextPieces={nextPieces}
                lines={lines}
                score={score}
                themeBlocks={themeBlocks}
                gridEnabled={gridEnabled}
                onToggleGrid={toggleGrid}
                onBack={handleCloseGame}
                onSettings={toggleSettings}
                gameMode={gameMode}
                onPieceDrop={handlePieceDrop}
              >
                <TetrisBoard
                  board={board}
                  currentPiece={currentPiece}
                  clearingLines={clearingLines}
                  isPaused={isPaused}
                  gameOver={gameOver}
                  themeBlocks={themeBlocks}
                  layout={screenSize}
                  currentTheme={currentTheme}
                  togglePause={togglePause}
                  gridEnabled={gridEnabled}
                  toggleGrid={toggleGrid}
                  gameMode={gameMode}
                  onPieceDrop={handlePieceDrop}
                  bombAnimation={bombAnimation}
                  frozenLines={frozenLines}
                  stoneLines={stoneLines}
                />
              </DesktopGameLayout>
              {gameOver && <GameOverModal score={score} onPlayAgain={resetGame} onClose={handleCloseGame} />}
            </div>
          )}
          
          {/* Pantalla de ajustes desktop */}
          {showSettings && !showThemeSelector && (
            <div className="absolute inset-0">
              <DesktopSettings
                gridEnabled={gridEnabled}
                onToggleGrid={toggleGrid}
                currentTheme={currentTheme}
                onCycleTheme={cycleTheme}
                onBack={() => setShowSettings(false)}
                themeImages={themeImages}
                gameMode={gameMode}
                onToggleGameMode={toggleGameMode}
              />
            </div>
          )}

          {/* Selector de temas desktop - no se usa más */}
          {showThemeSelector && (
            <div className="absolute inset-0">
              <DesktopThemeSelector
                currentTheme={currentTheme}
                onSelectTheme={(theme) => {
                  setTheme(theme as any);
                  setShowThemeSelector(false);
                  setShowSettings(true);
                }}
                onBack={() => {
                  setShowThemeSelector(false);
                  setShowSettings(true);
                }}
                themeImages={themeImages}
              />
            </div>
          )}
        </>
      ) : (
        // Mobile layout - existente
        <div 
          className={config.containerClass}
          style={screenSize !== 'desktop' ? { height: `${viewportHeight}px` } : undefined}
        >
          <TetrisHeader
            nextPiece={nextPiece}
            nextPieces={nextPieces}
            score={score}
            lines={lines}
            themeBlocks={themeBlocks}
            togglePause={togglePause}
            resetGame={resetGame}
            gameOver={gameOver}
            isPaused={isPaused}
            svgPaths={svgPathsForLayout}
            layout={screenSize}
            onClose={handleCloseGame}
            onSettings={toggleSettings}
            gameMode={gameMode}
            onPieceDrop={handlePieceDrop}
          />

          <div 
            className={screenSize === 'desktop' ? config.boardWrapperClass : 'relative'}
            style={screenSize !== 'desktop' ? config.boardStyle : undefined}
          >
            <TetrisBoard
              board={board}
              currentPiece={currentPiece}
              clearingLines={clearingLines}
              isPaused={isPaused}
              gameOver={gameOver}
              themeBlocks={themeBlocks}
              layout={screenSize}
              currentTheme={currentTheme}
              togglePause={togglePause}
              gridEnabled={gridEnabled}
              toggleGrid={toggleGrid}
              gameMode={gameMode}
              onPieceDrop={handlePieceDrop}
              bombAnimation={bombAnimation}
            />
          </div>

          {/* Controles táctiles - mostrar en modo clásico y aventura en pantallas táctiles */}
          {/* Mobile: pantallas pequeñas (<768px) - Tablet/Desktop táctil: pantallas grandes (≥768px) */}
          {(gameMode === 'clasico' || gameMode === 'aventura') && isTouchDevice && (
            <>
              {screenSize === 'mobile-small' || screenSize === 'mobile-large' ? (
                <MobileControls
                  moveLeft={moveLeft}
                  moveRight={moveRight}
                  moveDown={moveDown}
                  rotatePiece={rotatePiece}
                  drop={drop}
                />
              ) : (
                <TabletControls
                  moveLeft={moveLeft}
                  moveRight={moveRight}
                  moveDown={moveDown}
                  rotatePiece={rotatePiece}
                  drop={drop}
                />
              )}
            </>
          )}

          {gameOver && <GameOverModal score={score} onPlayAgain={resetGame} onClose={handleCloseGame} />}
        </div>
      )}
      {/* Modales de configuración mobile */}
      {showSettings && !showThemeSelector && screenSize !== 'desktop' && (
        <SettingsModal
          gridEnabled={gridEnabled}
          onToggleGrid={toggleGrid}
          onClose={() => setShowSettings(false)}
          onThemeSelect={cycleTheme}
          currentTheme={currentTheme}
          themeImage={themeImages[currentTheme]}
          gameMode={gameMode}
          onToggleGameMode={toggleGameMode}
        />
      )}

      {showThemeSelector && screenSize !== 'desktop' && (
        <ThemeSelector
          currentTheme={currentTheme}
          onThemeSelect={(theme) => {
            setTheme(theme);
          }}
          onClose={() => {
            setShowThemeSelector(false);
            setShowSettings(true);
          }}
        />
      )}
    </div>
  );

  return (
    <DndProvider backend={dndBackend} options={dndBackendOptions}>
      {gameContent}
      
      {/* Panel de debug - oculto en producción */}
      {false && gameMode === 'aventura' && gameStarted && (
        <div className="fixed top-2 right-2 bg-black/80 text-white p-3 rounded-lg text-xs z-50 max-w-[200px]">
          <div className="font-bold mb-1">🐛 DEBUG</div>
          <div>Modo: {gameMode.toUpperCase()}</div>
          <div>Contador: {commonPiecesCount}/5</div>
          <div className="mt-2 font-bold">Próximas piezas:</div>
          <div className="flex flex-col gap-1">
            {nextPieces.map((piece, idx) => (
              <div key={idx} className={piece.type === 'BOMB' || piece.type === 'GLITTER' || piece.type === 'THIEF' || piece.type === 'FASTCLOCK' ? 'text-yellow-400 font-bold' : ''}>
                {idx + 1}. {piece.type} {(piece.type === 'BOMB' || piece.type === 'GLITTER' || piece.type === 'THIEF' || piece.type === 'FASTCLOCK') ? '✨' : ''}
              </div>
            ))}
          </div>
        </div>
      )}
    </DndProvider>
  );
}