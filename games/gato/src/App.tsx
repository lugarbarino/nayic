import { useState } from "react";
import InfiniteRunner from "./components/InfiniteRunner";
import StartScreen from "./components/StartScreen";
import GirarCelular, { useCelularVertical } from "./components/GirarCelular";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const celularVertical = useCelularVertical();

  const handleStart = () => {
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
