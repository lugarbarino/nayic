import { useState } from "react";
import InfiniteRunner from "@/app/components/InfiniteRunner";
import StartScreen from "@/app/components/StartScreen";

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