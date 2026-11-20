import { useState } from "react";
import InfiniteRunner from "./components/InfiniteRunner";
import StartScreen from "./components/StartScreen";
import GirarCelular, { useCelularVertical } from "./components/GirarCelular";
import { pantallaCompletaAlJugar } from '../../_shared/pantalla-completa';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const celularVertical = useCelularVertical();

  const handleStart = () => {
    pantallaCompletaAlJugar({ horizontal: true }); // en celular: sin barras y trabado en horizontal
    setGameStarted(true);
  };

  const handleExit = () => {
    setGameStarted(false);
  };

  return (
    <div className="size-full">
      {!gameStarted ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <InfiniteRunner onExit={handleExit} />
      )}
      {celularVertical && <GirarCelular />}
    </div>
  );
}
