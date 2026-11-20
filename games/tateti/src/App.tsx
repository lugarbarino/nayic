import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { TatetiGame } from './components/TatetiGame';
import { StartMenu } from './components/StartMenu';
import { pantallaCompletaAlJugar } from '../../_shared/pantalla-completa';

// Detectar si es touch device
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

export default function App() {
  const [gameMode, setGameMode] = useState<'menu' | 'player' | 'computer'>('menu');
  const [selectedCharacters, setSelectedCharacters] = useState({ player1: 0, player2: 0 });

  const handleStartGame = (playerCount: 1 | 2, player1Character: number, player2Character: number) => {
    pantallaCompletaAlJugar(); // en celular: sin barras del navegador
    setSelectedCharacters({ player1: player1Character, player2: player2Character });
    setGameMode(playerCount === 1 ? 'computer' : 'player');
  };

  const handleBackToMenu = () => {
    setGameMode('menu');
  };

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      {gameMode === 'menu' ? (
        <StartMenu onStartGame={handleStartGame} />
      ) : (
        <TatetiGame 
          mode={gameMode} 
          onBackToMenu={handleBackToMenu}
          player1Character={selectedCharacters.player1}
          player2Character={selectedCharacters.player2}
        />
      )}
    </DndProvider>
  );
}