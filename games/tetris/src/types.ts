// Tipos compartidos del tablero y las piezas.
// (El export de Figma Make importaba estos tipos de un archivo que no existía.)

export interface Piece {
  shape: number[][];
  x: number;
  y: number;
  type: string;
  rotation: number;
  blockIndex: number;
}

export interface BoardCell {
  type: string | null;
  blockIndex: number | null;
}

export type Board = BoardCell[][];
