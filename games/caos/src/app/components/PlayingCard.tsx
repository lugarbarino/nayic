import { motion } from 'motion/react';

interface PlayingCardProps {
  number: number;
  suit: string;
  isPlayable: boolean;
  isPlayed: boolean;
  onClick: () => void;
}

export function PlayingCard({ number, suit, isPlayable, isPlayed, onClick }: PlayingCardProps) {
  const getSuitSymbol = (suit: string) => {
    const symbols: { [key: string]: string } = {
      'corazones': '♥',
      'diamantes': '♦',
      'treboles': '♣',
      'picas': '♠'
    };
    return symbols[suit] || '♠';
  };

  const getSuitColor = (suit: string) => {
    return suit === 'corazones' || suit === 'diamantes' ? 'text-red-600' : 'text-gray-900';
  };

  if (isPlayed) {
    return (
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0.8, opacity: 0.3 }}
        className="w-24 h-36 bg-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center"
      >
        <span className="text-gray-400">✓</span>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={!isPlayable}
      whileHover={isPlayable ? { scale: 1.05, y: -10 } : {}}
      whileTap={isPlayable ? { scale: 0.95 } : {}}
      className={`w-24 h-36 bg-white rounded-lg border-2 shadow-lg flex flex-col items-center justify-between p-3 transition-all ${
        isPlayable
          ? 'border-green-500 cursor-pointer hover:shadow-xl'
          : 'border-gray-300 opacity-50 cursor-not-allowed'
      }`}
    >
      <div className={`${getSuitColor(suit)}`}>
        <div className="flex items-center gap-1">
          <span className="text-2xl">{number}</span>
        </div>
      </div>
      
      <div className={`text-5xl ${getSuitColor(suit)}`}>
        {getSuitSymbol(suit)}
      </div>
      
      <div className={`${getSuitColor(suit)} transform rotate-180`}>
        <div className="flex items-center gap-1">
          <span className="text-2xl">{number}</span>
        </div>
      </div>
    </motion.button>
  );
}
