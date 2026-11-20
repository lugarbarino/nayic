import { useState } from 'react';
import Paletas from './components/PaletasDiseno';
import { DiceGame } from './components/DiceGame';
import { CardsGame } from './components/CardsGame';
import { PalettesGame } from './components/PalettesGame';
import { pantallaCompletaAlJugar } from '../../_shared/pantalla-completa';

type GameMode = 'menu' | 'cartas' | 'paletas' | 'dados';

export default function App() {
  const [gameMode, setGameMode] = useState<GameMode>('menu');

  const handleSelectMode = (mode: 'cartas' | 'paletas' | 'dados') => {
    pantallaCompletaAlJugar(); // en celular: sin barras del navegador
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
