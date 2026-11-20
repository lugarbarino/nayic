import { useDrag } from 'react-dnd';

interface DraggablePieceProps {
  piece: any;
  index: number;
  children: React.ReactNode;
  enabled: boolean;
}

export function DraggablePiece({ piece, index, children, enabled }: DraggablePieceProps) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'tetris-piece',
      item: { piece, index },
      canDrag: enabled,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [piece, index, enabled]
  );

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: enabled ? 'grab' : 'default',
      }}
    >
      {children}
    </div>
  );
}
