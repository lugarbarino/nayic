import { useState, useEffect } from "react";
import Home from "./components/Home";
import Game from "./components/Game";
import LoadingScreen from "./components/LoadingScreen";
import Configuracion from "./components/Configuracion";
import TemaSelector from "./components/TemaSelector";
import ModoSelector from "./components/ModoSelector";
import GuiaDeCartas from "./components/GuiaDeCartas";
import { pantallaCompletaAlJugar } from '../../_shared/pantalla-completa';

// Storage key for game progress
const STORAGE_KEY = "monster-memory-game-progress";
const THEME_STORAGE_KEY = "monster-memory-game-theme";

type Difficulty = "easy" | "medium" | "hard";

interface GameProgress {
  completedLevels: {
    easy: number[];
    medium: number[];
    hard: number[];
  };
  scores: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<
    | "home"
    | "game"
    | "settings"
    | "theme"
    | "mode"
    | "guiacartas"
  >("home");
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentDifficulty, setCurrentDifficulty] =
    useState<Difficulty>("easy");
  const [currentTheme, setCurrentTheme] = useState<
    "monstruos" | "animales" | "huerto" | "gatos"
  >("monstruos");
  const [completedLevels, setCompletedLevels] = useState<
    GameProgress["completedLevels"]
  >({
    easy: [],
    medium: [],
    hard: [],
  });
  const [scores, setScores] = useState<GameProgress["scores"]>({
    easy: 0,
    medium: 0,
    hard: 0,
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    // Load theme
    const savedTheme = localStorage.getItem(
      THEME_STORAGE_KEY,
    ) as "monstruos" | "animales" | "huerto" | "gatos" | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }

    // Load progress
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const progress: GameProgress =
          JSON.parse(savedProgress);
        setCompletedLevels(progress.completedLevels);
        setScores(
          progress.scores || { easy: 0, medium: 0, hard: 0 },
        );
      } catch (error) {
        console.error("Error loading progress:", error);
      }
    }
  }, []);

  // Save progress to localStorage whenever completedLevels or scores change
  useEffect(() => {
    const progress: GameProgress = { completedLevels, scores };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [completedLevels, scores]);

  const handleStartGame = (
    difficulty: Difficulty,
    level: number,
  ) => {
    pantallaCompletaAlJugar(); // en celular: sin barras del navegador
    setCurrentDifficulty(difficulty);
    setCurrentLevel(level);
    setCurrentScreen("game");
  };

  const handleLevelComplete = (score: number) => {
    // Mark current level as completed for the current difficulty
    if (
      !completedLevels[currentDifficulty].includes(currentLevel)
    ) {
      setCompletedLevels({
        ...completedLevels,
        [currentDifficulty]: [
          ...completedLevels[currentDifficulty],
          currentLevel,
        ],
      });
    }

    // Update score for the current difficulty
    setScores({
      ...scores,
      [currentDifficulty]: scores[currentDifficulty] + score,
    });

    // Move to next level if available
    if (currentLevel < 8) {
      setCurrentLevel(currentLevel + 1);
    } else {
      // All levels completed, go back to home
      setCurrentScreen("home");
    }
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
  };

  // Helper function to reload theme from localStorage
  const reloadTheme = () => {
    const savedTheme = localStorage.getItem(
      THEME_STORAGE_KEY,
    ) as "monstruos" | "animales" | "huerto" | "gatos" | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  };

  const handleOpenSettings = () => {
    setCurrentScreen("settings");
  };

  const handleCloseSettings = () => {
    setCurrentScreen("home");
    reloadTheme();
  };

  const handleOpenThemeSelector = () => {
    setCurrentScreen("theme");
  };

  const handleCloseThemeSelector = () => {
    setCurrentScreen("settings");
    reloadTheme();
  };

  const handleOpenModeSelector = () => {
    setCurrentScreen("mode");
  };

  const handleCloseModeSelector = () => {
    setCurrentScreen("settings");
    reloadTheme();
  };

  const handleOpenGuiaDeCartas = () => {
    setCurrentScreen("guiacartas");
  };

  const handleCloseGuiaDeCartas = () => {
    setCurrentScreen("settings");
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen
          theme={currentTheme}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : currentScreen === "home" ? (
        <Home
          onStartGame={handleStartGame}
          completedLevels={completedLevels}
          scores={scores}
          onOpenSettings={handleOpenSettings}
          currentDifficulty={currentDifficulty}
        />
      ) : currentScreen === "settings" ? (
        <Configuracion
          onClose={handleCloseSettings}
          onOpenThemeSelector={handleOpenThemeSelector}
          onOpenModeSelector={handleOpenModeSelector}
          onOpenGuiaCartas={handleOpenGuiaDeCartas}
        />
      ) : currentScreen === "theme" ? (
        <TemaSelector onClose={handleCloseThemeSelector} />
      ) : currentScreen === "mode" ? (
        <ModoSelector onClose={handleCloseModeSelector} />
      ) : currentScreen === "guiacartas" ? (
        <GuiaDeCartas
          onClose={handleCloseGuiaDeCartas}
          currentDifficulty={currentDifficulty}
        />
      ) : (
        <Game
          level={currentLevel}
          difficulty={currentDifficulty}
          onBack={handleBackToHome}
          onLevelComplete={handleLevelComplete}
          onOpenConfig={handleOpenSettings}
        />
      )}
    </>
  );
}