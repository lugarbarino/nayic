import { useState } from 'react';
import Paletas from '@/imports/Paletas';
import { DiceGame } from '@/app/components/DiceGame';
import { CardsGame } from '@/app/components/CardsGame';
import { PalettesGame } from '@/app/components/PalettesGame';

type GameMode = 'menu' | 'cartas' | 'paletas' | 'dados';

export default function App() {
  const [gameMode, setGameMode] = useState<GameMode>('menu');

  const handleSelectMode = (mode: 'cartas' | 'paletas' | 'dados') => {
    setGameMode(mode);
  };

  if (gameMode === 'menu') {
    return <Paletas onSelectMode={handleSelectMode} />;
  }

  if (gameMode === 'dados') {
    return <DiceGame onSelectMode={handleSelectMode} />;
  }

  if (gameMode === 'cartas') {
    return <CardsGame onSelectMode={handleSelectMode} />;
  }

  if (gameMode === 'paletas') {
    return <PalettesGame onSelectMode={handleSelectMode} />;
  }

  return null;
}
