import { useState, useEffect, useRef, useCallback } from 'react';
import Frame1 from './FondoDegradado';
import { esCelularVertical } from './GirarCelular';
import catBajando from '../assets/gato/bajando.webp'; // Bajando
import catSubiendo from '../assets/gato/subiendo.webp'; // Subiendo
import catMantenido from '../assets/gato/volando.webp'; // Mantenido
import Obstacle from './Obstacle';
import FloatingRock from './FloatingRock';
import CeilingObstacle from './CeilingObstacle';
import GroundFloor from './GroundFloor';
import CeilingFloor from './CeilingFloor';
import GameHeader from './GameHeader';
import MobileGameHeader from './MobileGameHeader';
import GameOverModal from './GameOverModal';
import LifePowerUp from './LifePowerUp';
import CrystalPowerUp from './CrystalPowerUp';
import StarPowerUp from './StarPowerUp';
import Bat from './Bat';
import Bubble from './Bubble';
import LoadingScreen from './LoadingScreen';
import { escalaPantalla, esPantallaBaja } from '../escala';
import { chocaConGato } from '../colision';

interface ObstacleType {
  id: number | string;
  x: number; // Posición X absoluta en el mundo
  width: number;
  height: number;
  rockType: number; // Tipo de roca (0-10: 5 rocas + 6 estalagmitas)
  colorRegion: 'lila' | 'red' | 'blue'; // Región de color (definida al pre-generar)
}

interface FloatingObstacleType {
  id: number | string;
  x: number; // Posición X absoluta en el mundo
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
  rockType: number; // Tipo de roca flotante (0-8: 4 chicas + 5 grandes)
  initialY: number; // Posición inicial Y para flotación
  floatDirection: number; // 1 = arriba, -1 = abajo
  colorRegion: 'lila' | 'red' | 'blue'; // Región de color (definida al pre-generar)
}

interface CeilingObstacleType {
  id: number | string;
  x: number; // Posición X absoluta en el mundo
  width: number;
  height: number;
  rockType: number; // Tipo de estalactita (0-5)
  colorRegion: 'lila' | 'red' | 'blue'; // Región de color (definida al pre-generar)
}

interface LifePowerUpType {
  id: number;
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
}

interface CrystalPowerUpType {
  id: number;
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
  crystalType: number; // 0 o 1 para alternar entre los dos cristales
}

interface StarPowerUpType {
  id: number;
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
  starType: number; // 0 o 1 para alternar entre los dos estrellas
}

interface BatType {
  id: number;
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
}

interface BubbleType {
  id: number;
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  size: number;
  type: number; // 0-13 para diferentes tipos (4 brillos + 10 burbujas)
  velocityX: number;
  velocityY: number;
  createdAt: number; // Timestamp de creación
}

interface InfiniteRunnerProps {
  onExit?: () => void;
}

// Ajuste del vuelo (en % del alto de la pantalla). Cambiar acá para que se sienta distinto.
const VUELO = {
  empuje: 450,       // aceleración hacia arriba mientras apretás (%/s²)
  gravedad: 400,     // aceleración hacia abajo al soltar (%/s²): alta para que al soltar baje enseguida
  subidaMaxima: 75,  // velocidad máxima subiendo (%/s)
  caidaMaxima: 95,   // velocidad máxima cayendo (%/s)
};

export default function InfiniteRunner({ onExit }: InfiniteRunnerProps) {
  const [bgPosition, setBgPosition] = useState(0);
  const [cameraX, setCameraX] = useState(0); // Posición de la cámara en el mundo (en píxeles)
  const [isFloating, setIsFloating] = useState(false);
  const [playerY, setPlayerY] = useState(50); // Posición vertical en porcentaje (0-100)
  const [obstacles, setObstacles] = useState<ObstacleType[]>([]);
  const [floatingObstacles, setFloatingObstacles] = useState<FloatingObstacleType[]>([]);
  const [ceilingObstacles, setCeilingObstacles] = useState<CeilingObstacleType[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [gameTime, setGameTime] = useState(0); // Tiempo de juego en segundos
  const [highScore, setHighScore] = useState(0); // Récord del jugador
  const [lives, setLives] = useState(7); // Sistema de vidas (7 vidas iniciales)
  const [isInvulnerable, setIsInvulnerable] = useState(false); // Invulnerabilidad temporal después del daño
  const [collisionPos, setCollisionPos] = useState<{ x: number; y: number } | null>(null); // Posición de la colisión
  const [lifePowerUps, setLifePowerUps] = useState<LifePowerUpType[]>([]); // Power-ups de vida
  const [crystalPowerUps, setCrystalPowerUps] = useState<CrystalPowerUpType[]>([]); // Power-ups de cristales
  const [starPowerUps, setStarPowerUps] = useState<StarPowerUpType[]>([]); // Power-ups de estrellas
  const [starImmunity, setStarImmunity] = useState(false); // Inmunidad activa por estrella (15 segundos)
  const [starImmunityTimer, setStarImmunityTimer] = useState<number | null>(null); // Timer para inmunidad por estrella
  const [bats, setBats] = useState<BatType[]>([]); // Murciélagos
  const [bubbles, setBubbles] = useState<BubbleType[]>([]); // Burbujas
  const [catFrame, setCatFrame] = useState(1); // Frame actual del gato (1-3)
  const [isMobile, setIsMobile] = useState(false); // Detectar si es mobile
  const [isLoading, setIsLoading] = useState(true); // Estado de carga (empezar en true para mostrar loading inmediatamente)
  const [showDebug, setShowDebug] = useState(false); // Modo debug para mostrar hitboxes
  const floatingTimeRef = useRef(0); // Tiempo que lleva flotando
  const previousVelocityRef = useRef(0); // Velocidad anterior para detectar cambios de dirección
  
  const gameLoopRef = useRef<number>();
  const obstacleTimerRef = useRef<number>();
  const floatingObstacleTimerRef = useRef<number>();
  const ceilingObstacleTimerRef = useRef<number>();
  const lifePowerUpTimerRef = useRef<number>();
  const crystalPowerUpTimerRef = useRef<number>();
  const starPowerUpTimerRef = useRef<number>();
  const batTimerRef = useRef<number>();
  const bubbleTimerRef = useRef<number>();
  const nextObstacleId = useRef(0);
  const nextFloatingObstacleId = useRef(0);
  const nextCeilingObstacleId = useRef(0);
  const nextLifePowerUpId = useRef(0);
  const nextCrystalPowerUpId = useRef(0);
  const nextStarPowerUpId = useRef(0);
  const nextBatId = useRef(0);
  const nextBubbleId = useRef(0);
  const velocityRef = useRef(0); // Velocidad vertical del jugador (negativa = sube; la usa la animación del gato)
  const vyRef = useRef(0); // Velocidad vertical en % de pantalla por segundo (positiva = sube)
  const flotandoRef = useRef(false); // ¿Está apretando? (ref para que la física lo lea al instante)
  const alternateTopBottom = useRef(true); // true = arriba, false = abajo
  
  // Sistema de rotación de assets para evitar repeticiones
  const availableGroundRocks = useRef<number[]>([]); // 7 tipos (0-6)
  const availableFloatingRocks = useRef<number[]>([]); // 6 tipos (0-5)
  const availableCeilingRocks = useRef<number[]>([]); // 5 tipos (0-4)
  
  // Almacenar TODOS los obstáculos pre-generados del nivel
  const allGroundObstacles = useRef<ObstacleType[]>([]);
  const allFloatingObstacles = useRef<FloatingObstacleType[]>([]);
  const allCeilingObstacles = useRef<CeilingObstacleType[]>([]);
  const obstaclesPreGenerated = useRef(false); // Flag para saber si ya se pre-generaron
  
  // Rastrear qué obstáculos ya fueron cargados en el estado visible
  const loadedGroundIds = useRef<Set<string>>(new Set());
  const loadedFloatingIds = useRef<Set<string>>(new Set());
  const loadedCeilingIds = useRef<Set<string>>(new Set());
  
  // Función helper para manejar colisiones con enemigos (consolidada para evitar duplicación)
  const handleCollisionDamage = useCallback(() => {
    if (starImmunity || isInvulnerable) return false;
    
    // Guardar posición de la colisión
    const screenHeight = window.innerHeight;
    const playerBottomPixels = (screenHeight * playerRef.current.y) / 100;
    const playerCenterY = screenHeight - playerBottomPixels - playerRef.current.height / 2;
    setCollisionPos({
      x: playerRef.current.x + playerRef.current.width / 2,
      y: playerCenterY
    });
    
    setLives((prev) => prev - 1);
    setIsInvulnerable(true);
    
    setTimeout(() => {
      if (!starImmunity) {
        setIsInvulnerable(false);
      }
      setCollisionPos(null);
    }, 1000); // Invulnerabilidad temporal de 1 segundo
    
    return true;
  }, [starImmunity, isInvulnerable]);
  
  // Función para shuffle de arrays
  const shuffleArray = (array: number[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Función para obtener el siguiente tipo de roca del suelo
  const getNextGroundRockType = () => {
    if (availableGroundRocks.current.length === 0) {
      // Refill con todos los tipos en orden aleatorio
      availableGroundRocks.current = shuffleArray([0, 1, 2, 3, 4, 5, 6]);
    }
    return availableGroundRocks.current.pop()!;
  };
  
  // Función para obtener el siguiente tipo de roca flotante
  const getNextFloatingRockType = () => {
    if (availableFloatingRocks.current.length === 0) {
      // Refill con todos los tipos en orden aleatorio
      availableFloatingRocks.current = shuffleArray([0, 1, 2, 3, 4, 5]);
    }
    return availableFloatingRocks.current.pop()!;
  };
  
  // Función para obtener el siguiente tipo de estalactita
  const getNextCeilingRockType = () => {
    if (availableCeilingRocks.current.length === 0) {
      // Refill con todos los tipos en orden aleatorio
      availableCeilingRocks.current = shuffleArray([0, 1, 2, 3, 4]);
    }
    return availableCeilingRocks.current.pop()!;
  };
  
  // Función para determinar la región de color actual basado en la posición del fondo
  const getCurrentColorRegion = useCallback((): 'lila' | 'red' | 'blue' => {
    // El loop completo del fondo es de 32846px
    const loopWidth = 32846;
    // Normalizar la posición al rango 0-32846
    const normalizedPosition = bgPosition % loopWidth;
    
    // Regiones de color:
    // Lila: 0-5318px y 27832-33045px
    // Rojo: 5319-15845px
    // Azul: 15846-27831px
    
    if (normalizedPosition >= 0 && normalizedPosition <= 5318) {
      return 'lila';
    } else if (normalizedPosition >= 5319 && normalizedPosition <= 15845) {
      return 'red';
    } else if (normalizedPosition >= 15846 && normalizedPosition <= 27831) {
      return 'blue';
    } else {
      // 27832-32846 es Lila final (para loop seamless)
      return 'lila';
    }
  }, [bgPosition]);
  
  // Función para determinar la región de color basada en posición X absoluta en el mundo
  const getColorRegionFromX = useCallback((xPosition: number): 'lila' | 'red' | 'blue' => {
    // Regiones de color fijas:
    // Lila: 0-5318px y 27832-33045px
    // Rojo: 5319-15845px
    // Azul: 15846-27831px
    
    if ((xPosition >= 0 && xPosition <= 5318) || (xPosition >= 27832 && xPosition <= 33045)) {
      return 'lila';
    } else if (xPosition >= 5319 && xPosition <= 15845) {
      return 'red';
    } else if (xPosition >= 15846 && xPosition <= 27831) {
      return 'blue';
    } else {
      return 'lila'; // Default
    }
  }, []);
  
  // Función para calcular la posición X del jugador según el tamaño de pantalla
  const getPlayerX = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Mobile
      return 20 * escalaPantalla(); // Más atrás en mobile para ver obstáculos con más anticipación
    } else { // Desktop
      return 150 * escalaPantalla(); // Posición original en desktop (más chica en pantallas bajas)
    }
  };

  // Función para calcular el tamaño del jugador según el tamaño de pantalla
  const getPlayerSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Mobile
      return 135 * escalaPantalla(); // 10% menos que 150 (150 * 0.9 = 135)
    } else { // Desktop
      return 180 * escalaPantalla(); // 180px en desktop (más chico en pantallas bajas)
    }
  };
  
  const playerRef = useRef<{ x: number; y: number; width: number; height: number }>({
    x: getPlayerX(),
    y: 50,
    width: getPlayerSize(),
    height: getPlayerSize(),
  });

  // Constante para el espacio entre obstáculos
  const GAP_SIZE = 200;
  
  // Maps para almacenar dimensiones reales de obstáculos
  const obstacleDimensionsRef = useRef<Map<number, { width: number; height: number }>>(new Map());
  const floatingDimensionsRef = useRef<Map<number, { width: number; height: number }>>(new Map());
  const ceilingDimensionsRef = useRef<Map<number, { width: number; height: number }>>(new Map());
  
  // Cargar el récord desde localStorage al inicio
  useEffect(() => {
    const savedHighScore = localStorage.getItem('gatoHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  // Actualizar el récord cuando termina el juego
  useEffect(() => {
    if (gameOver) {
      const currentScore = Math.floor(score / 10);
      if (currentScore > highScore) {
        setHighScore(currentScore);
        localStorage.setItem('gatoHighScore', currentScore.toString());
      }
    }
  }, [gameOver, score, highScore]);

  // Actualizar posición del jugador
  useEffect(() => {
    playerRef.current.y = playerY;
  }, [playerY]);

  // Actualizar posición X del jugador cuando cambia el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      playerRef.current.x = getPlayerX();
      playerRef.current.width = getPlayerSize();
      playerRef.current.height = getPlayerSize();
      
      // Detectar si es mobile
      // Encabezado compacto en celular vertical o en pantallas bajas (celular girado)
      setIsMobile(window.innerWidth < 768 || esPantallaBaja());
    };
    
    // Ejecutar al inicio
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Controlar animación del gato basado en la dirección del movimiento (3 frames)
  useEffect(() => {
    if (!gameStarted || gameOver) {
      setCatFrame(1); // Frame de bajando cuando no está jugando
      floatingTimeRef.current = 0;
      return;
    }

    const animationInterval = setInterval(() => {
      const currentVelocity = velocityRef.current;
      const previousVelocity = previousVelocityRef.current;

      // Si está bajando (velocidad positiva = gravedad)
      if (currentVelocity > 0) {
        floatingTimeRef.current = 0; // Resetear tiempo de flotación
        setCatFrame(1); // Frame 1: bajando
      } 
      // Si está subiendo (velocidad negativa = flotando)
      else if (currentVelocity < 0) {
        // Si acaba de cambiar de bajar a subir
        if (previousVelocity >= 0) {
          setCatFrame(2); // Frame 2: subiendo (transición)
          floatingTimeRef.current = 0;
          // Después de 150ms, cambiar al frame de mantenido
          setTimeout(() => {
            if (velocityRef.current < 0) {
              setCatFrame(3); // Frame 3: mantenido
            }
          }, 150);
        } else {
          // Ya está flotando, mantener frame 3
          setCatFrame(3); // Frame 3: mantenido
        }
      }

      // Actualizar velocidad anterior
      previousVelocityRef.current = currentVelocity;
    }, 100); // Chequear cada 100ms

    return () => clearInterval(animationInterval);
  }, [gameStarted, gameOver]);

  // Iniciar juego
  const startGame = useCallback(() => {
    // Mostrar loading
    setIsLoading(true);
    
    // NO establecer nada más aquí, esperar a que LoadingScreen termine
    // LoadingScreen llamará a onLoadComplete después de 2 segundos
  }, []);

  // PRE-GENERAR TODOS LOS OBSTÁCULOS DEL NIVEL
  const preGenerateAllObstacles = useCallback(() => {
    if (obstaclesPreGenerated.current) return; // Ya se pre-generaron
    
    const LEVEL_WIDTH = 33045; // Ancho total del nivel en píxeles
    const OBSTACLE_SPACING = 800; // Espaciado mínimo entre obstáculos (ajustable)
    
    const groundObstacles: ObstacleType[] = [];
    const floatingObstacles: FloatingObstacleType[] = [];
    const ceilingObstacles: CeilingObstacleType[] = [];
    
    let obstacleId = 0;
    let floatingId = 0;
    let ceilingId = 0;
    
    // Resetear rotación de assets
    availableGroundRocks.current = [];
    availableFloatingRocks.current = [];
    availableCeilingRocks.current = [];
    
    // Generar obstáculos a lo largo de todo el nivel
    for (let x = 1500; x < LEVEL_WIDTH; x += OBSTACLE_SPACING) {
      const colorRegion = getColorRegionFromX(x);
      
      // Alternar entre obstáculos de suelo y techo
      if (Math.random() > 0.5) {
        // Obstáculo de suelo
        groundObstacles.push({
          id: obstacleId++,
          x: x,
          width: 200, // Valor temporal, se actualizará al renderizar
          height: 200,
          rockType: getNextGroundRockType(),
          colorRegion: colorRegion,
        });
      } else {
        // Obstáculo de techo
        ceilingObstacles.push({
          id: ceilingId++,
          x: x,
          width: 200,
          height: 200,
          rockType: getNextCeilingRockType(),
          colorRegion: colorRegion,
        });
      }
      
      // Agregar obstáculos flotantes ocasionalmente
      if (Math.random() > 0.7 && x > 3000) {  // Empezar flotantes después de 3000px
        const minY = 25;
        const maxY = 75;
        const yPosition = Math.random() * (maxY - minY) + minY;
        
        floatingObstacles.push({
          id: floatingId++,
          x: x + OBSTACLE_SPACING / 2, // Offset para no chocar con otros obstáculos
          y: yPosition,
          width: 150,
          height: 150,
          rockType: getNextFloatingRockType(),
          initialY: yPosition,
          floatDirection: Math.random() > 0.5 ? 1 : -1,
          colorRegion: colorRegion,
        });
      }
    }
    
    // Guardar en refs
    allGroundObstacles.current = groundObstacles;
    allFloatingObstacles.current = floatingObstacles;
    allCeilingObstacles.current = ceilingObstacles;
    obstaclesPreGenerated.current = true;
    
    console.log(`Pre-generated: ${groundObstacles.length} ground, ${floatingObstacles.length} floating, ${ceilingObstacles.length} ceiling obstacles`);
  }, [getColorRegionFromX]);

  // Callback cuando el loading completa
  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setCameraX(0); // Resetear posición de la cámara
    setObstacles([]);
    setFloatingObstacles([]);
    setCeilingObstacles([]);
    setLifePowerUps([]);
    setCrystalPowerUps([]);
    setStarPowerUps([]);
    setBats([]);
    setBubbles([]);
    setPlayerY(50);
    setBgPosition(0);
    setSpeed(5);
    setIsFloating(false);
    flotandoRef.current = false;
    velocityRef.current = 0;
    vyRef.current = 0;
    nextObstacleId.current = 0;
    nextFloatingObstacleId.current = 0;
    nextCeilingObstacleId.current = 0;
    nextLifePowerUpId.current = 0;
    nextCrystalPowerUpId.current = 0;
    nextStarPowerUpId.current = 0;
    nextBatId.current = 0;
    nextBubbleId.current = 0;
    setGameTime(0); // Reiniciar tiempo de juego
    setLives(7); // Reiniciar vidas
    setIsInvulnerable(false); // Reiniciar invulnerabilidad
    setStarImmunity(false); // Reiniciar inmunidad por estrella
    
    // Resetear los Sets de obstáculos cargados
    loadedGroundIds.current.clear();
    loadedFloatingIds.current.clear();
    loadedCeilingIds.current.clear();
    if (starImmunityTimer) {
      clearTimeout(starImmunityTimer);
      setStarImmunityTimer(null);
    }
    setCollisionPos(null); // Reiniciar posición de colisión
    
    // PRE-GENERAR TODOS LOS OBSTÁCULOS
    obstaclesPreGenerated.current = false; // Resetear flag
    preGenerateAllObstacles();
  }, [starImmunityTimer, preGenerateAllObstacles]);

  // Reiniciar juego
  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  // Función para flotar (mantener presionado)
  const startFloating = useCallback(() => {
    if (!gameOver && gameStarted) {
      flotandoRef.current = true;
      setIsFloating(true);
    }
  }, [gameOver, gameStarted]);

  const stopFloating = useCallback(() => {
    flotandoRef.current = false;
    setIsFloating(false);
  }, []);

  // Detectar toque en pantalla para mobile
  // Mouse, dedo o lápiz: un solo manejador (pointer events). Al soltar en CUALQUIER lugar
  // (aunque sea fuera del juego) deja de subir, así el gato nunca queda "trabado" subiendo.
  const handleTouchStart = useCallback((e: React.PointerEvent) => {
    // Los botones del encabezado (Salir, modo) funcionan normal, sin hacer volar al gato
    if ((e.target as HTMLElement).closest('button')) return;
    e.preventDefault();
    if (!gameStarted) {
      startGame();
    } else {
      startFloating();
    }
  }, [gameStarted, startGame, startFloating]);

  useEffect(() => {
    const soltar = () => stopFloating();
    window.addEventListener('pointerup', soltar);
    window.addEventListener('pointercancel', soltar);
    window.addEventListener('blur', soltar);
    return () => {
      window.removeEventListener('pointerup', soltar);
      window.removeEventListener('pointercancel', soltar);
      window.removeEventListener('blur', soltar);
    };
  }, [stopFloating]);

  // Detectar teclas para desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        // Prevenir comportamiento por defecto (scroll, o "apretar" el botón que quedó seleccionado)
        e.preventDefault();
        if (e.repeat) return; // mantener apretado no repite el evento

        // Si quedó seleccionado un botón (por ej. "Iniciar Juego"), lo soltamos para que
        // la barra espaciadora no lo vuelva a apretar
        (document.activeElement as HTMLElement | null)?.blur?.();
        
        // Si el juego no ha empezado, iniciarlo
        if (!gameStarted && !gameOver) {
          startGame();
          return;
        }
        
        // Si el juego está en marcha, flotar
        if (gameStarted && !gameOver) {
          flotandoRef.current = true;
          setIsFloating(true);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        flotandoRef.current = false;
        setIsFloating(false);
      }
      // Tecla D para debug
      if (e.code === 'KeyD') {
        setShowDebug((prev) => !prev);
      }
    };

    // Usar 'window' como target para capturar todos los eventos
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted, gameOver, startGame]);

  // Crear obstáculos
  const createObstacle = useCallback(() => {
    // Crear obstáculos tipo plataformas en la parte de abajo
    // Las dimensiones se escalarán al 60% del tamaño original (reducción del 40%)
    
    const newObstacle: ObstacleType = {
      id: nextObstacleId.current++,
      x: window.innerWidth,
      width: 0, // Se actualizará al cargar el asset real (60% del original)
      height: 0, // Se actualizará al cargar el asset real (60% del original)
      rockType: getNextGroundRockType(), // 7 tipos de rocas del suelo (0-6)
    };
    setObstacles((prev) => [...prev, newObstacle]);
  }, []);

  // Crear rocas flotantes
  const createFloatingObstacle = useCallback(() => {
    // Crear rocas flotantes en posiciones aleatorias del medio
    const minY = 25; // 25% desde arriba
    const maxY = 75; // 75% desde arriba
    const yPosition = Math.random() * (maxY - minY) + minY;
    
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;
    
    const rockType = getNextFloatingRockType(); // 6 tipos completos (0-5)
    
    // No usar dimensiones hardcodeadas - se actualizarán cuando la imagen se cargue con onLoad
    // Esto asegura que el hitbox siempre coincida con el tamaño real de la imagen
    const newFloatingObstacle: FloatingObstacleType = {
      id: nextFloatingObstacleId.current++,
      x: window.innerWidth,
      y: yPosition,
      width: 1, // Placeholder hasta que se cargue la imagen
      height: 1, // Placeholder hasta que se cargue la imagen
      rockType: rockType,
      initialY: yPosition,
      floatDirection: Math.random() > 0.5 ? 1 : -1, // Dirección aleatoria inicial
    };
    setFloatingObstacles((prev) => [...prev, newFloatingObstacle]);
  }, []);

  // Crear obstáculos del techo (estalactitas)
  const createCeilingObstacle = useCallback(() => {
    // Crear estalactitas que cuelgan del techo
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;
    
    const obstacleHeight = (isMobile ? 140 : 200) * escalaPantalla(); // Reducido en mobile
    const obstacleWidth = (isMobile ? 140 : 200) * escalaPantalla(); // Reducido en mobile
    
    const newCeilingObstacle: CeilingObstacleType = {
      id: nextCeilingObstacleId.current++,
      x: window.innerWidth,
      width: obstacleWidth,
      height: obstacleHeight,
      rockType: getNextCeilingRockType(), // 5 tipos completos (0-4)
    };
    setCeilingObstacles((prev) => [...prev, newCeilingObstacle]);
  }, []);

  // Crear power-ups de vida
  const createLifePowerUp = useCallback(() => {
    // Crear power-ups de vida en posiciones aleatorias del medio
    const minY = 25; // 25% desde arriba
    const maxY = 75; // 75% desde arriba
    const yPosition = Math.random() * (maxY - minY) + minY;
    
    const height = 80 * escalaPantalla(); // 80px (20% más chico), escalado en pantallas bajas
    const width = 80 * escalaPantalla();
    
    const newLifePowerUp: LifePowerUpType = {
      id: nextLifePowerUpId.current++,
      x: window.innerWidth,
      y: yPosition,
      width: width,
      height: height,
    };
    setLifePowerUps((prev) => [...prev, newLifePowerUp]);
  }, []);

  // Crear power-ups de cristales
  const createCrystalPowerUp = useCallback(() => {
    // Crear power-ups de cristales en posiciones aleatorias del medio
    const minY = 25; // 25% desde arriba
    const maxY = 75; // 75% desde arriba
    const yPosition = Math.random() * (maxY - minY) + minY;
    
    const height = 120 * escalaPantalla(); // 120px, escalado en pantallas bajas
    const width = 120 * escalaPantalla();
    
    const newCrystalPowerUp: CrystalPowerUpType = {
      id: nextCrystalPowerUpId.current++,
      x: window.innerWidth,
      y: yPosition,
      width: width,
      height: height,
      crystalType: Math.floor(Math.random() * 2), // 0 o 1 para alternar entre los dos cristales
    };
    setCrystalPowerUps((prev) => [...prev, newCrystalPowerUp]);
  }, []);

  // Crear power-ups de estrellas
  const createStarPowerUp = useCallback(() => {
    // Crear power-ups de estrellas en posiciones aleatorias del medio
    const minY = 25; // 25% desde arriba
    const maxY = 75; // 75% desde arriba
    const yPosition = Math.random() * (maxY - minY) + minY;
    
    const height = 80 * escalaPantalla(); // 80px (20% más chico), escalado en pantallas bajas
    const width = 80 * escalaPantalla();
    
    const newStarPowerUp: StarPowerUpType = {
      id: nextStarPowerUpId.current++,
      x: window.innerWidth,
      y: yPosition,
      width: width,
      height: height,
      starType: Math.floor(Math.random() * 2), // 0 o 1 para alternar entre los dos estrellas
    };
    setStarPowerUps((prev) => [...prev, newStarPowerUp]);
  }, []);

  // Crear murciélagos
  const createBat = useCallback(() => {
    // Crear murciélagos en posiciones aleatorias del medio
    const minY = 25; // 25% desde arriba
    const maxY = 75; // 75% desde arriba
    const yPosition = Math.random() * (maxY - minY) + minY;
    
    const height = 120 * escalaPantalla(); // 120px (50% más grande), escalado en pantallas bajas
    const width = 120 * escalaPantalla();
    
    const newBat: BatType = {
      id: nextBatId.current++,
      x: window.innerWidth,
      y: yPosition,
      width: width,
      height: height,
    };
    setBats((prev) => [...prev, newBat]);
  }, []);

  // Crear burbujas desde la posición del gato
  const createBubbleFromPlayer = useCallback(() => {
    const type = Math.floor(Math.random() * 14); // 14 tipos (0-13: 4 brillos + 10 burbujas)
    
    // Los brillos (tipos 0-3) son más pequeños que las burbujas
    const size = (type < 4 
      ? Math.random() * 15 + 10 // Brillos: entre 10 y 25px (reducido de 15-35)
      : Math.random() * 20 + 15) * escalaPantalla(); // Burbujas: entre 15 y 35px (reducido de 20-50)
    
    // Generar burbujas muy cerca del gato, en la parte trasera
    const offsetX = Math.random() * 40 - 20; // Variación de -20 a +20px desde el centro
    const offsetY = Math.random() * 4 - 2; // Variación mínima vertical (-2% a +2%)
    
    const newBubble: BubbleType = {
      id: nextBubbleId.current++,
      x: playerRef.current.x + playerRef.current.width / 2 + offsetX, // Cerca del centro del gato
      y: playerRef.current.y + offsetY, // Muy cerca de la posición Y del gato
      size: size,
      type: type,
      velocityX: Math.random() * 1 - 1.5, // Velocidad X entre -1.5 y -0.5 (más lento hacia la izquierda)
      velocityY: (Math.random() - 0.5) * 1, // Velocidad Y entre -0.5 y 0.5 (menos dispersión vertical)
      createdAt: Date.now(), // Timestamp de creación
    };
    setBubbles((prev) => [...prev, newBubble]);
  }, []);

  // Verificar colisiones
  // Descarta rápido lo que está lejos del gato en horizontal (antes de mirar formas)
  const cercaDelGato = (x: number, ancho: number) => {
    const p = playerRef.current;
    // si el ancho todavía no se conoce (o quedó viejo) suponemos uno grande: mejor revisar de más
    return x < p.x + p.width + 20 && x + Math.max(ancho, 700) > p.x - 20;
  };

  const checkCollision = useCallback((obstacle: ObstacleType) => {
    // Choque por forma real con lo dibujado en pantalla (ver src/colision.ts)
    return cercaDelGato(obstacle.x, obstacle.width) && chocaConGato(`suelo-${obstacle.id}`);
  }, []);

  // Verificar colisiones con rocas flotantes
  const checkFloatingCollision = useCallback((obstacle: FloatingObstacleType) => {
    return cercaDelGato(obstacle.x, obstacle.width) && chocaConGato(`flotante-${obstacle.id}`);
  }, []);

  // Verificar colisiones con estalactitas del techo
  const checkCeilingCollision = useCallback((obstacle: CeilingObstacleType) => {
    return cercaDelGato(obstacle.x, obstacle.width) && chocaConGato(`techo-${obstacle.id}`);
  }, []);

  // Verificar colisiones con power-ups de vida
  const checkLifePowerUpCollision = useCallback((powerUp: LifePowerUpType) => {
    const player = playerRef.current;
    const screenHeight = window.innerHeight;
    
    // Margen de tolerancia reducido para power-ups pequeños
    const hitboxMargin = 10; // Reducido para permitir colisiones más fáciles
    
    // El jugador está posicionado con bottom: playerY% (0-100%)
    const playerBottomPercent = player.y;
    const playerBottomPixels = (screenHeight * playerBottomPercent) / 100;
    const playerTop = screenHeight - playerBottomPixels - player.height + hitboxMargin;
    const playerBottom = screenHeight - playerBottomPixels - hitboxMargin;
    const playerLeft = player.x + hitboxMargin;
    const playerRight = playerLeft + player.width - (hitboxMargin * 2);

    // Posición del power-up de vida (usa `top` desde arriba)
    const powerUpYPixels = (screenHeight * powerUp.y) / 100;
    const powerUpTop = powerUpYPixels - powerUp.height / 2 + hitboxMargin;
    const powerUpBottom = powerUpYPixels + powerUp.height / 2 - hitboxMargin;
    const powerUpLeft = powerUp.x + hitboxMargin;
    const powerUpRight = powerUpLeft + powerUp.width - (hitboxMargin * 2);

    // Verificar colisión con el power-up de vida
    if (
      playerRight > powerUpLeft &&
      playerLeft < powerUpRight &&
      playerBottom > powerUpTop &&
      playerTop < powerUpBottom
    ) {
      return true;
    }
    
    return false;
  }, []);

  // Verificar colisiones con power-ups de cristales
  const checkCrystalPowerUpCollision = useCallback((powerUp: CrystalPowerUpType) => {
    const player = playerRef.current;
    const screenHeight = window.innerHeight;
    
    // Margen de tolerancia reducido para power-ups pequeños
    const hitboxMargin = 10; // Reducido para permitir colisiones más fáciles
    
    // El jugador está posicionado con bottom: playerY% (0-100%)
    const playerBottomPercent = player.y;
    const playerBottomPixels = (screenHeight * playerBottomPercent) / 100;
    const playerTop = screenHeight - playerBottomPixels - player.height + hitboxMargin;
    const playerBottom = screenHeight - playerBottomPixels - hitboxMargin;
    const playerLeft = player.x + hitboxMargin;
    const playerRight = playerLeft + player.width - (hitboxMargin * 2);

    // Posición del power-up de cristales (usa `top` desde arriba)
    const powerUpYPixels = (screenHeight * powerUp.y) / 100;
    const powerUpTop = powerUpYPixels - powerUp.height / 2 + hitboxMargin;
    const powerUpBottom = powerUpYPixels + powerUp.height / 2 - hitboxMargin;
    const powerUpLeft = powerUp.x + hitboxMargin;
    const powerUpRight = powerUpLeft + powerUp.width - (hitboxMargin * 2);

    // Verificar colisión con el power-up de cristales
    if (
      playerRight > powerUpLeft &&
      playerLeft < powerUpRight &&
      playerBottom > powerUpTop &&
      playerTop < powerUpBottom
    ) {
      return true;
    }
    
    return false;
  }, []);

  // Verificar colisiones con power-ups de estrellas
  const checkStarPowerUpCollision = useCallback((powerUp: StarPowerUpType) => {
    const player = playerRef.current;
    const screenHeight = window.innerHeight;
    
    // Margen de tolerancia reducido para power-ups pequeños
    const hitboxMargin = 10; // Reducido para permitir colisiones más fáciles
    
    // El jugador está posicionado con bottom: playerY% (0-100%)
    const playerBottomPercent = player.y;
    const playerBottomPixels = (screenHeight * playerBottomPercent) / 100;
    const playerTop = screenHeight - playerBottomPixels - player.height + hitboxMargin;
    const playerBottom = screenHeight - playerBottomPixels - hitboxMargin;
    const playerLeft = player.x + hitboxMargin;
    const playerRight = playerLeft + player.width - (hitboxMargin * 2);

    // Posición del power-up de estrellas (usa `top` desde arriba)
    const powerUpYPixels = (screenHeight * powerUp.y) / 100;
    const powerUpTop = powerUpYPixels - powerUp.height / 2 + hitboxMargin;
    const powerUpBottom = powerUpYPixels + powerUp.height / 2 - hitboxMargin;
    const powerUpLeft = powerUp.x + hitboxMargin;
    const powerUpRight = powerUpLeft + powerUp.width - (hitboxMargin * 2);

    // Verificar colisión con el power-up de estrellas
    if (
      playerRight > powerUpLeft &&
      playerLeft < powerUpRight &&
      playerBottom > powerUpTop &&
      playerTop < powerUpBottom
    ) {
      return true;
    }
    
    return false;
  }, []);

  // Verificar colisiones con murciélagos
  const checkBatCollision = useCallback((bat: BatType) => {
    return cercaDelGato(bat.x, bat.width) && chocaConGato(`murcielago-${bat.id}`);
  }, []);

  // Game loop principal
  // Un paso del juego. `f` = cuántos "cuadros de 60fps" pasaron desde el paso anterior
  // (1 a 60fps, 2 a 30fps…), para que la velocidad sea la misma en cualquier aparato.
  // Se guarda en una ref en cada render, así el bucle siempre usa los valores actuales
  // sin tener que recrearse (antes se destruía y recreaba 60 veces por segundo).
  const tickRef = useRef<(f: number) => void>(() => {});
  tickRef.current = (f: number) => {
      // Distancia a mover en este paso (en pantallas bajas el mundo es más chico, así que se mueve menos)
      const currentSpeed = speed * f * escalaPantalla();
      
      // Mover fondo - incrementar continuamente para ver diferentes partes
      setBgPosition((prev) => prev + currentSpeed);
      setCameraX((prev) => prev + currentSpeed); // Incrementar posición de cámara para cargar obstáculos pre-generados

      // Aplicar física de flotación al jugador
      // Física del vuelo tipo jetpack: mientras apretás, acelera hacia arriba; al soltar, la
      // gravedad lo frena y lo hace caer. Todo en % del alto de la pantalla por segundo, así se
      // siente igual en cualquier pantalla. (Y va de 0 = abajo a 100 = arriba.)
      setPlayerY((prevY) => {
        const dt = f / 60;
        let vy = vyRef.current;
        vy += (flotandoRef.current ? VUELO.empuje : -VUELO.gravedad) * dt;
        vy = Math.max(-VUELO.caidaMaxima, Math.min(VUELO.subidaMaxima, vy));
        let y = prevY + vy * dt;

        // Límites: no atraviesa el piso ni se va por arriba de la pantalla
        const altoGato = (playerRef.current.height / window.innerHeight) * 100;
        const yMax = 100 - altoGato;
        if (y <= 0) { y = 0; vy = Math.max(vy, 0); }
        if (y >= yMax) { y = yMax; vy = Math.min(vy, 0); }

        vyRef.current = vy;
        velocityRef.current = -vy; // para la animación del gato (negativo = subiendo)
        return y;
      });

      // Mover obstáculos y verificar colisiones
      setObstacles((prevObstacles) => {
        const updatedObstacles = prevObstacles
          .map((obs) => ({ ...obs, x: obs.x - currentSpeed }))
          .filter((obs) => obs.x > -obs.width);

        // Verificar colisiones
        for (const obs of updatedObstacles) {
          if (checkCollision(obs)) {
            handleCollisionDamage();
            if (lives <= 1 && !starImmunity) {
              setGameOver(true);
            }
            return updatedObstacles;
          }
        }

        return updatedObstacles;
      });

      // Mover obstáculos flotantes y verificar colisiones
      setFloatingObstacles((prevObstacles) => {
        const isFloatingPhase = gameTime >= 90; // Después de 90 segundos empiezan a flotar
        const floatingSpeed = currentSpeed * 1.3; // 30% más rápido que los obstáculos del suelo
        
        const updatedObstacles = prevObstacles
          .map((obs) => {
            if (isFloatingPhase) {
              // Después de 90 segundos: flotar verticalmente Y moverse horizontalmente
              const floatSpeed = 0.15 * f; // Velocidad de flotación vertical (% por cuadro de 60fps)
              const floatRange = 15; // Rango de flotación (% arriba/abajo desde initialY)
              
              let newY = obs.y + (obs.floatDirection * floatSpeed);
              let newDirection = obs.floatDirection;
              
              // Cambiar dirección si alcanza los límites
              if (newY > obs.initialY + floatRange) {
                newDirection = -1;
                newY = obs.initialY + floatRange;
              } else if (newY < obs.initialY - floatRange) {
                newDirection = 1;
                newY = obs.initialY - floatRange;
              }
              
              // Asegurarse de que no salga de los límites de pantalla
              newY = Math.max(20, Math.min(80, newY));
              
              // Moverse horizontalmente Y flotar verticalmente
              return { ...obs, x: obs.x - floatingSpeed, y: newY, floatDirection: newDirection };
            } else {
              // Durante los primeros 90 segundos: solo moverse horizontalmente (sin flotación vertical)
              return { ...obs, x: obs.x - floatingSpeed };
            }
          })
          .filter((obs) => obs.x > -obs.width);

        // Verificar colisiones
        for (const obs of updatedObstacles) {
          if (checkFloatingCollision(obs)) {
            handleCollisionDamage();
            if (lives <= 1 && !starImmunity) {
              setGameOver(true);
            }
            return updatedObstacles;
          }
        }

        return updatedObstacles;
      });

      // Mover estalactitas y verificar colisiones
      setCeilingObstacles((prevObstacles) => {
        const updatedObstacles = prevObstacles
          .map((obs) => ({ ...obs, x: obs.x - currentSpeed }))
          .filter((obs) => obs.x > -obs.width);

        // Verificar colisiones
        for (const obs of updatedObstacles) {
          if (checkCeilingCollision(obs)) {
            handleCollisionDamage();
            if (lives <= 1 && !starImmunity) {
              setGameOver(true);
            }
            return updatedObstacles;
          }
        }

        return updatedObstacles;
      });

      // Mover power-ups de vida y verificar colisiones
      setLifePowerUps((prevPowerUps) => {
        const updatedPowerUps = prevPowerUps
          .map((powerUp) => ({ ...powerUp, x: powerUp.x - currentSpeed }))
          .filter((powerUp) => powerUp.x > -powerUp.width);

        // Verificar colisiones
        for (const powerUp of updatedPowerUps) {
          if (checkLifePowerUpCollision(powerUp)) {
            setLives((prev) => prev + 1);
            setScore((prev) => prev + 500); // Sumar 50 puntos (500 porque el score se divide por 10)
            return updatedPowerUps.filter((p) => p.id !== powerUp.id);
          }
        }

        return updatedPowerUps;
      });

      // Mover power-ups de cristales y verificar colisiones
      setCrystalPowerUps((prevPowerUps) => {
        const updatedPowerUps = prevPowerUps
          .map((powerUp) => ({ ...powerUp, x: powerUp.x - currentSpeed }))
          .filter((powerUp) => powerUp.x > -powerUp.width);

        // Verificar colisiones
        for (const powerUp of updatedPowerUps) {
          if (checkCrystalPowerUpCollision(powerUp)) {
            setScore((prev) => prev + 1000); // Sumar 100 puntos (1000 porque el score se divide por 10)
            return updatedPowerUps.filter((p) => p.id !== powerUp.id);
          }
        }

        return updatedPowerUps;
      });

      // Mover power-ups de estrellas y verificar colisiones
      setStarPowerUps((prevPowerUps) => {
        const updatedPowerUps = prevPowerUps
          .map((powerUp) => ({ ...powerUp, x: powerUp.x - currentSpeed }))
          .filter((powerUp) => powerUp.x > -powerUp.width);

        // Verificar colisiones
        for (const powerUp of updatedPowerUps) {
          if (checkStarPowerUpCollision(powerUp)) {
            setScore((prev) => prev + 1500); // Sumar 150 puntos (1500 porque el score se divide por 10)
            // Activar inmunidad por 15 segundos
            setStarImmunity(true);
            setIsInvulnerable(true);
            // Limpiar timer anterior si existe
            if (starImmunityTimer) {
              clearTimeout(starImmunityTimer);
            }
            // Crear nuevo timer para desactivar inmunidad
            const timer = window.setTimeout(() => {
              setStarImmunity(false);
              setIsInvulnerable(false);
              setStarImmunityTimer(null);
            }, 15000);
            setStarImmunityTimer(timer);
            return updatedPowerUps.filter((p) => p.id !== powerUp.id);
          }
        }

        return updatedPowerUps;
      });

      // Mover murciélagos y verificar colisiones
      setBats((prevBats) => {
        const updatedBats = prevBats
          .map((bat) => ({ ...bat, x: bat.x - currentSpeed }))
          .filter((bat) => bat.x > -bat.width);

        // Verificar colisiones
        for (const bat of updatedBats) {
          if (checkBatCollision(bat)) {
            handleCollisionDamage();
            if (lives <= 1 && !starImmunity) {
              setGameOver(true);
            }
            return updatedBats;
          }
        }

        return updatedBats;
      });

      // Mover burbujas
      setBubbles((prevBubbles) => {
        const now = Date.now(); // Cachear timestamp
        const updatedBubbles = prevBubbles
          .map((bubble) => ({
            ...bubble,
            x: bubble.x - currentSpeed + bubble.velocityX * f,
            y: bubble.y + bubble.velocityY * f,
          }))
          .filter((bubble) => {
            // Eliminar burbujas fuera de pantalla o que hayan expirado (más de 3 segundos)
            const age = now - bubble.createdAt;
            return bubble.x > -bubble.size && bubble.y > 0 && bubble.y < 100 && age < 3000;
          });

        return updatedBubbles;
      });

      // Incrementar puntuación
      setScore((prev) => prev + f);

      // Incrementar velocidad gradualmente
      setSpeed((prev) => Math.min(prev + 0.002 * f, 10));

      // Incrementar tiempo de juego (en segundos)
      setGameTime((prev) => prev + f / 60);
  };

  // Bucle sincronizado con la pantalla: se crea una sola vez por partida
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    let last = performance.now();
    const loop = (now: number) => {
      // Tope de 3 cuadros: si la pestaña estuvo oculta no "salta" de golpe
      const f = Math.min((now - last) / (1000 / 60), 3);
      last = now;
      // Pausa mientras el celular está en vertical (se muestra el cartel "Girá el celular")
      if (!esCelularVertical()) tickRef.current(f);
      gameLoopRef.current = requestAnimationFrame(loop);
    };
    gameLoopRef.current = requestAnimationFrame(loop);

    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameStarted, gameOver]);

  // Cargar obstáculos visibles desde los pre-generados basándose en la posición de la cámara
  useEffect(() => {
    if (!gameStarted || gameOver || !obstaclesPreGenerated.current) return;

    const screenWidth = window.innerWidth;
    const LOAD_AHEAD = screenWidth * 2; // Cargar obstáculos 2 pantallas adelante
    const LEVEL_WIDTH = 33045; // Ancho total del nivel
    
    const cameraStart = cameraX;
    const cameraEnd = cameraX + LOAD_AHEAD;
    
    // Determinar qué loops necesitamos cargar
    const startLoop = Math.floor(cameraStart / LEVEL_WIDTH);
    const endLoop = Math.floor(cameraEnd / LEVEL_WIDTH);
    
    const allNewGroundObstacles: ObstacleType[] = [];
    const allNewFloatingObstacles: FloatingObstacleType[] = [];
    const allNewCeilingObstacles: CeilingObstacleType[] = [];
    
    // Cargar obstáculos para cada loop que la cámara puede ver
    for (let loop = startLoop; loop <= endLoop; loop++) {
      const loopStart = loop * LEVEL_WIDTH;
      const loopEnd = loopStart + LEVEL_WIDTH;
      
      // Calcular qué parte del loop está visible
      const visibleStart = Math.max(cameraStart - loopStart, 0);
      const visibleEnd = Math.min(cameraEnd - loopStart, LEVEL_WIDTH);
      
      // Encontrar obstáculos de suelo en este loop
      const groundInLoop = allGroundObstacles.current
        .filter((obs) => {
          const uniqueId = `${loop}-${obs.id}`;
          return !loadedGroundIds.current.has(uniqueId) && obs.x >= visibleStart && obs.x <= visibleEnd;
        })
        .map((obs) => {
          const uniqueId = `${loop}-${obs.id}`;
          loadedGroundIds.current.add(uniqueId);
          return {
            ...obs,
            id: uniqueId,
            x: obs.x + loopStart - cameraX // Posición relativa a la cámara
          };
        });
      
      // Encontrar rocas flotantes en este loop
      const floatingInLoop = allFloatingObstacles.current
        .filter((obs) => {
          const uniqueId = `${loop}-${obs.id}`;
          return !loadedFloatingIds.current.has(uniqueId) && obs.x >= visibleStart && obs.x <= visibleEnd;
        })
        .map((obs) => {
          const uniqueId = `${loop}-${obs.id}`;
          loadedFloatingIds.current.add(uniqueId);
          return {
            ...obs,
            id: uniqueId,
            x: obs.x + loopStart - cameraX
          };
        });
      
      // Encontrar estalactitas en este loop
      const ceilingInLoop = allCeilingObstacles.current
        .filter((obs) => {
          const uniqueId = `${loop}-${obs.id}`;
          return !loadedCeilingIds.current.has(uniqueId) && obs.x >= visibleStart && obs.x <= visibleEnd;
        })
        .map((obs) => {
          const uniqueId = `${loop}-${obs.id}`;
          loadedCeilingIds.current.add(uniqueId);
          return {
            ...obs,
            id: uniqueId,
            x: obs.x + loopStart - cameraX
          };
        });
      
      allNewGroundObstacles.push(...groundInLoop);
      allNewFloatingObstacles.push(...floatingInLoop);
      allNewCeilingObstacles.push(...ceilingInLoop);
    }
    
    // Agregar nuevos obstáculos al estado si hay alguno
    if (allNewGroundObstacles.length > 0) {
      setObstacles((prev) => [...prev, ...allNewGroundObstacles]);
    }
    
    if (allNewFloatingObstacles.length > 0) {
      setFloatingObstacles((prev) => [...prev, ...allNewFloatingObstacles]);
    }
    
    if (allNewCeilingObstacles.length > 0) {
      setCeilingObstacles((prev) => [...prev, ...allNewCeilingObstacles]);
    }
    
  }, [cameraX, gameStarted, gameOver]);

  // Limpiar periódicamente los Sets de IDs cargados para evitar crecimiento infinito
  // (lee la cámara desde una ref: si dependiera de cameraX se recrearía en cada cuadro y nunca se ejecutaría)
  const cameraXRef = useRef(0);
  cameraXRef.current = cameraX;
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const cleanupInterval = setInterval(() => {
      const LEVEL_WIDTH = 33045;
      const currentLoop = Math.floor(cameraXRef.current / LEVEL_WIDTH);
      
      // Solo mantener IDs de los últimos 2 loops (el actual y el anterior)
      // Todos los loops más antiguos ya están fuera de pantalla
      const minLoopToKeep = Math.max(0, currentLoop - 1);
      
      // Limpiar ground IDs
      const groundIdsToDelete: string[] = [];
      loadedGroundIds.current.forEach((id) => {
        const loopNum = parseInt(id.split('-')[0]);
        if (loopNum < minLoopToKeep) {
          groundIdsToDelete.push(id);
        }
      });
      groundIdsToDelete.forEach(id => loadedGroundIds.current.delete(id));
      
      // Limpiar floating IDs
      const floatingIdsToDelete: string[] = [];
      loadedFloatingIds.current.forEach((id) => {
        const loopNum = parseInt(id.split('-')[0]);
        if (loopNum < minLoopToKeep) {
          floatingIdsToDelete.push(id);
        }
      });
      floatingIdsToDelete.forEach(id => loadedFloatingIds.current.delete(id));
      
      // Limpiar ceiling IDs
      const ceilingIdsToDelete: string[] = [];
      loadedCeilingIds.current.forEach((id) => {
        const loopNum = parseInt(id.split('-')[0]);
        if (loopNum < minLoopToKeep) {
          ceilingIdsToDelete.push(id);
        }
      });
      ceilingIdsToDelete.forEach(id => loadedCeilingIds.current.delete(id));
    }, 5000); // Limpiar cada 5 segundos

    return () => clearInterval(cleanupInterval);
  }, [gameStarted, gameOver]);

  // Generar power-ups de vida después de 45 segundos
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const generateLifePowerUp = () => {
      createLifePowerUp();
      const nextDelay = Math.random() * 4000 + 8000; // Entre 8 y 12 segundos
      lifePowerUpTimerRef.current = window.setTimeout(generateLifePowerUp, nextDelay);
    };

    // Esperar 45 segundos antes de empezar a generar power-ups de vida
    lifePowerUpTimerRef.current = window.setTimeout(() => {
      generateLifePowerUp();
    }, 45000);

    return () => {
      if (lifePowerUpTimerRef.current) clearTimeout(lifePowerUpTimerRef.current);
    };
  }, [gameStarted, gameOver, createLifePowerUp]);

  // Generar power-ups de cristales después de 30 segundos
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const generateCrystalPowerUp = () => {
      createCrystalPowerUp();
      const nextDelay = Math.random() * 4000 + 8000; // Entre 8 y 12 segundos
      crystalPowerUpTimerRef.current = window.setTimeout(generateCrystalPowerUp, nextDelay);
    };

    // Esperar 30 segundos antes de empezar a generar power-ups de cristales
    crystalPowerUpTimerRef.current = window.setTimeout(() => {
      generateCrystalPowerUp();
    }, 30000);

    return () => {
      if (crystalPowerUpTimerRef.current) clearTimeout(crystalPowerUpTimerRef.current);
    };
  }, [gameStarted, gameOver, createCrystalPowerUp]);

  // Generar power-ups de estrellas después de 60 segundos
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const generateStarPowerUp = () => {
      createStarPowerUp();
      const nextDelay = 60000; // Cada 60 segundos (1 minuto)
      starPowerUpTimerRef.current = window.setTimeout(generateStarPowerUp, nextDelay);
    };

    // Esperar 60 segundos antes de empezar a generar power-ups de estrellas
    starPowerUpTimerRef.current = window.setTimeout(() => {
      generateStarPowerUp();
    }, 60000);

    return () => {
      if (starPowerUpTimerRef.current) clearTimeout(starPowerUpTimerRef.current);
    };
  }, [gameStarted, gameOver, createStarPowerUp]);

  // Generar murciélagos después de 40 segundos
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const generateBat = () => {
      createBat();
      const nextDelay = Math.random() * 1000 + 4000; // Entre 4 y 5 segundos
      batTimerRef.current = window.setTimeout(generateBat, nextDelay);
    };

    // Esperar 40 segundos antes de empezar a generar murciélagos
    batTimerRef.current = window.setTimeout(() => {
      generateBat();
    }, 40000);

    return () => {
      if (batTimerRef.current) clearTimeout(batTimerRef.current);
    };
  }, [gameStarted, gameOver, createBat]);

  // Generar burbujas continuamente cuando está flotando
  useEffect(() => {
    if (!gameStarted || gameOver || !isFloating) return;

    const generateBubble = () => {
      // Generar 4 burbujas a la vez para más densidad y brillo
      createBubbleFromPlayer();
      createBubbleFromPlayer();
      createBubbleFromPlayer();
      createBubbleFromPlayer();
    };

    // Generar burbujas cada 40ms mientras está flotando (más frecuencia)
    bubbleTimerRef.current = window.setInterval(generateBubble, 40);

    return () => {
      if (bubbleTimerRef.current) clearInterval(bubbleTimerRef.current);
    };
  }, [gameStarted, gameOver, isFloating, createBubbleFromPlayer]);

  // Generar brillos alrededor del gato cuando tiene inmunidad por estrella
  useEffect(() => {
    if (!gameStarted || gameOver || !starImmunity) return;

    // Función para crear brillos alrededor del gato
    const createImmunitySparkle = () => {
      const type = Math.floor(Math.random() * 4); // Solo brillos (tipos 0-3)
      const size = Math.random() * 15 + 12; // Brillos entre 12 y 27px
      
      // Generar brillos MUY cerca del gato en un radio pequeño
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 40 + 20; // Radio entre 20-60px alrededor del gato
      const offsetX = Math.cos(angle) * radius;
      const offsetY = Math.sin(angle) * radius;
      
      const newBubble: BubbleType = {
        id: nextBubbleId.current++,
        x: playerRef.current.x + playerRef.current.width / 2 + offsetX,
        y: playerRef.current.y + offsetY,
        size: size,
        type: type,
        velocityX: Math.cos(angle) * 0.8, // Se mueven hacia afuera más rápido
        velocityY: Math.sin(angle) * 0.8,
        createdAt: Date.now(),
      };
      setBubbles((prev) => [...prev, newBubble]);
    };

    const generateSparkles = () => {
      // Generar 5 brillos a la vez para mayor densidad
      for (let i = 0; i < 5; i++) {
        createImmunitySparkle();
      }
    };

    // Generar brillos cada 60ms mientras tiene inmunidad (más frecuente)
    const sparkleTimer = window.setInterval(generateSparkles, 60);

    return () => {
      clearInterval(sparkleTimer);
    };
  }, [gameStarted, gameOver, starImmunity]);

  return (
    <div 
      className={`relative w-full h-dvh overflow-hidden cursor-pointer select-none ${isInvulnerable && !starImmunity ? 'animate-screen-shake' : ''}`}
      onPointerDown={handleTouchStart}
      style={{ touchAction: 'none' }}
    >
      {/* Fondo infinito */}
      <div className="absolute inset-0 z-0 bg-[#5F285F]">
        <div
          className="absolute h-full will-change-transform"
          style={{
            transform: `translateX(-${bgPosition % 32846}px)`,
            width: '32846px',
          }}
        >
          <Frame1 />
        </div>
        <div
          className="absolute h-full will-change-transform"
          style={{
            transform: `translateX(${32846 - (bgPosition % 32846)}px)`,
            width: '32846px',
          }}
        >
          <Frame1 />
        </div>
        <div
          className="absolute h-full will-change-transform"
          style={{
            transform: `translateX(${65692 - (bgPosition % 32846)}px)`,
            width: '32846px',
          }}
        >
          <Frame1 />
        </div>
      </div>

      {/* Jugador */}
      <img
        src={catFrame === 1 ? catBajando : catFrame === 2 ? catSubiendo : catMantenido}
        alt="Player"
        data-hit="gato"
        className={`absolute ${isInvulnerable && !starImmunity ? 'animate-shake animate-flash opacity-70' : ''}`}
        style={{
          left: `${playerRef.current.x}px`,
          bottom: `${playerRef.current.y}%`,
          width: `${playerRef.current.width}px`,
          height: `${playerRef.current.height}px`,
          filter: starImmunity ? 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) brightness(1.2)' : 'none',
        }}
      />

      {/* Obstáculos */}
      {obstacles.map((obstacle) => (
        <Obstacle
          key={obstacle.id}
          hitId={`suelo-${obstacle.id}`}
          x={obstacle.x}
          rockType={obstacle.rockType}
          colorRegion={obstacle.colorRegion}
          onLoad={(width, height) => {
            obstacleDimensionsRef.current.set(obstacle.id, { width, height });
            // Actualizar el obstáculo con las dimensiones reales
            setObstacles((prev) =>
              prev.map((obs) =>
                obs.id === obstacle.id ? { ...obs, width, height } : obs
              )
            );
          }}
        />
      ))}

      {/* Piso infinito adelante de las rocas */}
      <GroundFloor bgPosition={bgPosition} speed={speed} />

      {/* Rocas flotantes */}
      {floatingObstacles.map((obstacle) => (
        <FloatingRock
          key={obstacle.id}
          hitId={`flotante-${obstacle.id}`}
          x={obstacle.x}
          y={obstacle.y}
          rockType={obstacle.rockType}
          colorRegion={obstacle.colorRegion}
          speed={speed}
          gameTime={gameTime}
          onLoad={(width, height) => {
            floatingDimensionsRef.current.set(obstacle.id, { width, height });
            // Actualizar el obstáculo con las dimensiones reales
            setFloatingObstacles((prev) =>
              prev.map((obs) =>
                obs.id === obstacle.id ? { ...obs, width, height } : obs
              )
            );
          }}
        />
      ))}

      {/* Estalactitas del techo */}
      {ceilingObstacles.map((obstacle) => (
        <CeilingObstacle
          key={obstacle.id}
          hitId={`techo-${obstacle.id}`}
          x={obstacle.x}
          rockType={obstacle.rockType}
          colorRegion={obstacle.colorRegion}
          onLoad={(width, height) => {
            ceilingDimensionsRef.current.set(obstacle.id, { width, height });
            // Actualizar el obstáculo con las dimensiones reales
            setCeilingObstacles((prev) =>
              prev.map((obs) =>
                obs.id === obstacle.id ? { ...obs, width, height } : obs
              )
            );
          }}
        />
      ))}

      {/* Techo infinito adelante de las estalactitas */}
      <CeilingFloor bgPosition={bgPosition} speed={speed} />

      {/* Power-ups de vida */}
      {lifePowerUps.map((powerUp) => (
        <LifePowerUp
          key={powerUp.id}
          x={powerUp.x}
          y={powerUp.y}
          width={powerUp.width}
          height={powerUp.height}
        />
      ))}

      {/* Power-ups de cristales */}
      {crystalPowerUps.map((powerUp) => (
        <CrystalPowerUp
          key={powerUp.id}
          x={powerUp.x}
          y={powerUp.y}
          width={powerUp.width}
          height={powerUp.height}
          crystalType={powerUp.crystalType}
        />
      ))}

      {/* Power-ups de estrellas */}
      {starPowerUps.map((powerUp) => (
        <StarPowerUp
          key={powerUp.id}
          x={powerUp.x}
          y={powerUp.y}
          width={powerUp.width}
          height={powerUp.height}
        />
      ))}

      {/* Murciélagos */}
      {bats.map((bat) => (
        <Bat
          key={bat.id}
          id={bat.id}
          x={bat.x}
          y={bat.y}
          width={bat.width}
          height={bat.height}
        />
      ))}

      {/* Burbujas */}
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          x={bubble.x}
          y={bubble.y}
          size={bubble.size}
          type={bubble.type}
        />
      ))}

      {/* Header del juego */}
      {gameStarted && !gameOver && !isMobile && (
        <GameHeader
          score={Math.floor(score / 10)}
          lives={lives}
          onExit={onExit || (() => {
            setGameStarted(false);
            setGameOver(false);
            setIsLoading(false);
          })}
        />
      )}

      {/* Header del juego para mobile */}
      {gameStarted && !gameOver && isMobile && (
        <MobileGameHeader
          score={Math.floor(score / 10)}
          lives={lives}
          onExit={onExit || (() => {
            setGameStarted(false);
            setGameOver(false);
            setIsLoading(false);
          })}
        />
      )}

      {/* Pantalla de Game Over */}
      {gameOver && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-md">
          <GameOverModal
            score={Math.floor(score / 10)}
            highScore={highScore}
            onRestart={restartGame}
          />
        </div>
      )}

      {/* Instrucciones durante el juego */}
      {gameStarted && !gameOver && score < 100 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
          <p className="text-white text-sm md:text-base bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            Hace CLICK para subir
          </p>
        </div>
      )}

      {/* Pantalla de carga */}
      {isLoading && (
        <div className="absolute inset-0 z-50">
          <LoadingScreen onLoadComplete={handleLoadComplete} />
        </div>
      )}

      {/* DEBUG: Mostrar hitboxes (presiona D para activar/desactivar) */}
      {showDebug && (
        <>
          {/* Hitbox del jugador */}
          {(() => {
            const player = playerRef.current;
            const screenHeight = window.innerHeight;
            const hitboxWidthRatio = 0.5;
            const hitboxHeightRatio = 0.7;
            const hitboxWidth = player.width * hitboxWidthRatio;
            const hitboxHeight = player.height * hitboxHeightRatio;
            const hitboxOffsetX = player.width * 0.25;
            const hitboxOffsetY = player.height * 0.15;
            const roundingMargin = 15;
            
            const playerBottomPixels = (screenHeight * player.y) / 100;
            const playerTop = screenHeight - playerBottomPixels - hitboxHeight - hitboxOffsetY + roundingMargin;
            const playerLeft = player.x + hitboxOffsetX + roundingMargin;
            
            return (
              <div
                className="absolute border-4 border-green-500 pointer-events-none z-[100]"
                style={{
                  left: `${playerLeft}px`,
                  top: `${playerTop}px`,
                  width: `${hitboxWidth - roundingMargin * 2}px`,
                  height: `${hitboxHeight - roundingMargin * 2}px`,
                  backgroundColor: 'rgba(0, 255, 0, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-green-500 text-xs font-bold bg-black/70 px-1">
                  PLAYER
                </div>
              </div>
            );
          })()}

          {/* Hitboxes de obstáculos de suelo */}
          {obstacles.map((obstacle) => {
            const screenHeight = window.innerHeight;
            const roundingMargin = 15;
            const obstacleTop = screenHeight - obstacle.height + roundingMargin;
            const obstacleLeft = obstacle.x + roundingMargin;
            
            return (
              <div
                key={`debug-obstacle-${obstacle.id}`}
                className="absolute border-4 border-red-500 pointer-events-none z-[100]"
                style={{
                  left: `${obstacleLeft}px`,
                  top: `${obstacleTop}px`,
                  width: `${obstacle.width - roundingMargin * 2}px`,
                  height: `${obstacle.height - roundingMargin * 2}px`,
                  backgroundColor: 'rgba(255, 0, 0, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-red-500 text-xs font-bold bg-black/70 px-1">
                  GROUND-{obstacle.id}
                </div>
              </div>
            );
          })}

          {/* Hitboxes de rocas flotantes */}
          {floatingObstacles.map((obstacle) => {
            const screenHeight = window.innerHeight;
            const roundingMargin = 25;
            const obstacleYPixels = (screenHeight * obstacle.y) / 100;
            const obstacleTop = obstacleYPixels + roundingMargin;
            const obstacleLeft = obstacle.x + roundingMargin;
            
            return (
              <div
                key={`debug-floating-${obstacle.id}`}
                className="absolute border-4 border-yellow-500 pointer-events-none z-[100]"
                style={{
                  left: `${obstacleLeft}px`,
                  top: `${obstacleTop}px`,
                  width: `${obstacle.width - roundingMargin * 2}px`,
                  height: `${obstacle.height - roundingMargin * 2}px`,
                  backgroundColor: 'rgba(255, 255, 0, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-yellow-500 text-xs font-bold bg-black/70 px-1">
                  FLOAT-{obstacle.id}
                </div>
              </div>
            );
          })}

          {/* Hitboxes de estalactitas */}
          {ceilingObstacles.map((obstacle) => {
            const roundingMargin = 15;
            const obstacleLeft = obstacle.x + roundingMargin;
            
            return (
              <div
                key={`debug-ceiling-${obstacle.id}`}
                className="absolute border-4 border-purple-500 pointer-events-none z-[100]"
                style={{
                  left: `${obstacleLeft}px`,
                  top: `${roundingMargin}px`,
                  width: `${obstacle.width - roundingMargin * 2}px`,
                  height: `${obstacle.height - roundingMargin * 2}px`,
                  backgroundColor: 'rgba(128, 0, 128, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-purple-500 text-xs font-bold bg-black/70 px-1">
                  CEILING-{obstacle.id}
                </div>
              </div>
            );
          })}

          {/* Hitboxes de power-ups de vida */}
          {lifePowerUps.map((powerUp) => {
            const screenHeight = window.innerHeight;
            const hitboxMargin = 10;
            const powerUpYPixels = (screenHeight * powerUp.y) / 100;
            const powerUpTop = powerUpYPixels - powerUp.height / 2 + hitboxMargin;
            const powerUpLeft = powerUp.x;
            
            return (
              <div
                key={`debug-life-${powerUp.id}`}
                className="absolute border-4 border-pink-500 pointer-events-none z-[100]"
                style={{
                  left: `${powerUpLeft + hitboxMargin}px`,
                  top: `${powerUpTop}px`,
                  width: `${powerUp.width - hitboxMargin * 2}px`,
                  height: `${powerUp.height - hitboxMargin * 2}px`,
                  backgroundColor: 'rgba(255, 192, 203, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-pink-500 text-xs font-bold bg-black/70 px-1">
                  LIFE-{powerUp.id}
                </div>
              </div>
            );
          })}

          {/* Hitboxes de cristales */}
          {crystalPowerUps.map((powerUp) => {
            const screenHeight = window.innerHeight;
            const hitboxMargin = 10;
            const powerUpYPixels = (screenHeight * powerUp.y) / 100;
            const powerUpTop = powerUpYPixels - powerUp.height / 2 + hitboxMargin;
            const powerUpLeft = powerUp.x;
            
            return (
              <div
                key={`debug-crystal-${powerUp.id}`}
                className="absolute border-4 border-cyan-500 pointer-events-none z-[100]"
                style={{
                  left: `${powerUpLeft + hitboxMargin}px`,
                  top: `${powerUpTop}px`,
                  width: `${powerUp.width - hitboxMargin * 2}px`,
                  height: `${powerUp.height - hitboxMargin * 2}px`,
                  backgroundColor: 'rgba(0, 255, 255, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-cyan-500 text-xs font-bold bg-black/70 px-1">
                  CRYSTAL-{powerUp.id}
                </div>
              </div>
            );
          })}

          {/* Hitboxes de estrellas */}
          {starPowerUps.map((powerUp) => {
            const screenHeight = window.innerHeight;
            const hitboxMargin = 10;
            const powerUpYPixels = (screenHeight * powerUp.y) / 100;
            const powerUpTop = powerUpYPixels - powerUp.height / 2 + hitboxMargin;
            const powerUpLeft = powerUp.x;
            
            return (
              <div
                key={`debug-star-${powerUp.id}`}
                className="absolute border-4 border-orange-500 pointer-events-none z-[100]"
                style={{
                  left: `${powerUpLeft + hitboxMargin}px`,
                  top: `${powerUpTop}px`,
                  width: `${powerUp.width - hitboxMargin * 2}px`,
                  height: `${powerUp.height - hitboxMargin * 2}px`,
                  backgroundColor: 'rgba(255, 165, 0, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-orange-500 text-xs font-bold bg-black/70 px-1">
                  STAR-{powerUp.id}
                </div>
              </div>
            );
          })}

          {/* Hitboxes de murciélagos */}
          {bats.map((bat) => {
            const screenHeight = window.innerHeight;
            const hitboxMargin = 10;
            const batYPixels = (screenHeight * bat.y) / 100;
            const batTop = batYPixels - bat.height / 2 + hitboxMargin;
            const batLeft = bat.x;
            
            return (
              <div
                key={`debug-bat-${bat.id}`}
                className="absolute border-4 border-red-700 pointer-events-none z-[100]"
                style={{
                  left: `${batLeft + hitboxMargin}px`,
                  top: `${batTop}px`,
                  width: `${bat.width - hitboxMargin * 2}px`,
                  height: `${bat.height - hitboxMargin * 2}px`,
                  backgroundColor: 'rgba(139, 0, 0, 0.2)',
                }}
              >
                <div className="absolute -top-6 left-0 text-red-700 text-xs font-bold bg-black/70 px-1">
                  BAT-{bat.id}
                </div>
              </div>
            );
          })}

          {/* Indicador de debug activo */}
          <div className="absolute top-20 right-4 z-[100] bg-black/80 text-green-500 px-4 py-2 rounded text-sm font-bold border-2 border-green-500">
            DEBUG MODE ON (Presiona D para desactivar)
          </div>
        </>
      )}
    </div>
  );
}