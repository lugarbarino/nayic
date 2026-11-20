import { useState } from "react";
import InfiniteRunner from "./components/InfiniteRunner";
import StartScreen from "./components/StartScreen";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

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
    </div>
  );
}