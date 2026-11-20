import { motion } from 'motion/react';

interface DiceProps {
  value: number;
  isRolling: boolean;
}

export function Dice({ value, isRolling }: DiceProps) {
  const getDiceDots = (num: number) => {
    const dotPositions: { [key: number]: string[] } = {
      1: ['center'],
      2: ['top-left', 'bottom-right'],
      3: ['top-left', 'center', 'bottom-right'],
      4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
      6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
    };
    return dotPositions[num] || [];
  };

  const getDotPosition = (position: string) => {
    const positions: { [key: string]: string } = {
      'top-left': 'top-[20%] left-[20%]',
      'top-right': 'top-[20%] right-[20%]',
      'middle-left': 'top-[50%] left-[20%] -translate-y-1/2',
      'middle-right': 'top-[50%] right-[20%] -translate-y-1/2',
      'bottom-left': 'bottom-[20%] left-[20%]',
      'bottom-right': 'bottom-[20%] right-[20%]',
      'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    };
    return positions[position] || '';
  };

  return (
    <motion.div
      animate={isRolling ? { rotateX: [0, 360, 720], rotateY: [0, 360, 720] } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-20 h-20 bg-white rounded-xl shadow-lg border-2 border-gray-300 relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {getDiceDots(value).map((position, index) => (
        <div
          key={index}
          className={`absolute w-3 h-3 bg-red-600 rounded-full ${getDotPosition(position)}`}
        />
      ))}
    </motion.div>
  );
}
