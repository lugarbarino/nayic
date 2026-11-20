import { useState, useEffect } from 'react';
import { Dice } from './Dice';
import { NavigationButtons } from './NavigationButtons';
import svgPaths from '../../imports/svg-v3ggye2pbu';
import imgNumber1 from "figma:asset/d8b55d74edf7c04d4eb2d5808047a8145b87da2c.png";
import imgNumber2 from "figma:asset/90093e2b777f8f41b46e83efe89d2bd136823a9a.png";
import imgNumber3 from "figma:asset/5b1012ef35523d44c4cdd8630cf7b74a187feb49.png";
import imgNumber4 from "figma:asset/2491e0787ac2d0e5d215fef2af2156b9cc6069c7.png";
import imgNumber5 from "figma:asset/6ca29390c6e8d58b80dc9fef4ed1ecdcbb0eac78.png";
import imgNumber6 from "figma:asset/3661c5dd684a8f2e9fd48b23fa29294951cbfbbb.png";

type CardType = {
  id: number;
  title: string;
  instruction: string;
  requiresDice: boolean;
  diceAction?: string;
};

type DiceGameProps = {
  onSelectMode: (mode: 'cartas' | 'paletas' | 'dados') => void;
};

type ChallengeCategory = {
  title: string;
  options: string[];
};

type Challenge = {
  type: 'numbered' | 'single';
  title?: string;
  options?: string[];
  text?: string;
};

// Todas las consignas del 1 al 16
const allChallenges: Challenge[] = [
  // Consigna 1
  {
    type: 'numbered',
    title: "Agregar",
    options: [
      "Polvo de hada ✨",
      "Grietas de lava 🔥",
      "Cristales 💎",
      "Chispas eléctricas ⚡",
      "Burbujas 🫧",
      "Baba alienígena 👽"
    ]
  },
  // Consigna 2
  {
    type: 'numbered',
    title: "Nivel de detalle",
    options: [
      "Mantenelo simple, rellenos planos",
      "Mantenelo simple, rellenos planos",
      "Agregá texturas, sombras y capas",
      "Agregá texturas, sombras y capas",
      "Agregá detalles finos, luces realistas y texturas pulidas",
      "Agregá detalles finos, luces realistas y texturas pulidas"
    ]
  },
  // Consigna 3
  {
    type: 'numbered',
    title: "Patrones",
    options: [
      "Puntos",
      "Rayas",
      "Olas",
      "Ladrillos",
      "Zig zag",
      "Animal print"
    ]
  },
  // Consigna 4
  {
    type: 'numbered',
    title: "Transformación del clima",
    options: [
      "Soleado intenso ☀️",
      "Tormenta eléctrica ⛈️",
      "Lluvia suave 🌧️",
      "Viento fuerte 💨",
      "Niebla espesa 🌫️",
      "Nieve pesada ❄️"
    ]
  },
  // Consigna 5
  {
    type: 'numbered',
    title: "Ambientaciones",
    options: [
      "Submarino 🌊",
      "Desierto 🏜️",
      "Montaña ⛰️",
      "Espacio exterior 🚀",
      "Bosque mágico 🌲✨",
      "Ciudad futurista 🌃"
    ]
  },
  // Consigna 6
  {
    type: 'numbered',
    title: "Intervención del tiempo",
    options: [
      "Amanecer",
      "Tarde dorada 🌇",
      "Noche profunda 🌌",
      "Tiempo acelerado ⏩",
      "Tiempo congelado 🧊",
      "Tiempo invertido 🔄"
    ]
  },
  // Consigna 7
  {
    type: 'numbered',
    title: "Restricciones divertidas",
    options: [
      "No podés usar azul ❌🔵",
      "Todo debe tener un borde oscuro 🖤",
      "Nada puede tocarse entre sí 🚫",
      "Todo debe tener una sombra de color raro 🌈",
      "Tenés que fusionar 2 objetos 💥",
      "Tenés que repetir algo 6 veces 🔁"
    ]
  },
  // Consigna 8
  {
    type: 'numbered',
    title: "Colores",
    options: [
      "Paleta cálida (rojos, naranjas, amarillos)",
      "Paleta fría (azules, verdes, violetas)",
      "Paleta pastel (suave, cremosa, tierna)",
      "Paleta neón (brillos, alto contraste)",
      "Paleta tierra (ocres, marrones, verdes apagados)",
      "Paleta arcoíris (todos los colores, pero una vez cada uno)"
    ]
  },
  // Consigna 9
  {
    type: 'single',
    text: "Ese número marca cuántas veces podés repetir un color, forma o figura"
  },
  // Consigna 10
  {
    type: 'single',
    text: "Ese número decide cuántos colores podés usar. Sin excepciones"
  },
  // Consigna 11
  {
    type: 'single',
    text: "Agregá esa cantidad de texturas distintas. Las que te inspiren"
  },
  // Consigna 12
  {
    type: 'single',
    text: "Agregá esa cantidad de globos"
  },
  // Consigna 13
  {
    type: 'single',
    text: "Agregá esa cantidad de nubes con caras. Felices, confundidas, lo que salga"
  },
  // Consigna 14
  {
    type: 'single',
    text: "Creá esa cantidad de puertas diminutas que parecen tener historias propias"
  },
  // Consigna 15
  {
    type: 'single',
    text: "Agregá esa cantidad de señales o flechas que apuntan a cualquier lado"
  },
  // Consigna 16
  {
    type: 'single',
    text: "Agregá esa cantidad de flores"
  }
];

export function DiceGame({ onSelectMode }: DiceGameProps) {
  // Inicializar con una consigna aleatoria desde el principio
  const [diceValue, setDiceValue] = useState(Math.floor(Math.random() * 6) + 1);
  const [isRolling, setIsRolling] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState<Challenge>(() => {
    // Seleccionar una consigna aleatoria inicial
    return allChallenges[Math.floor(Math.random() * allChallenges.length)];
  });

  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
    }, 100);
    
    setTimeout(() => {
      clearInterval(rollInterval);
      const finalValue = Math.floor(Math.random() * 6) + 1;
      
      // Seleccionar una consigna aleatoria de las 16
      const randomChallenge = allChallenges[Math.floor(Math.random() * allChallenges.length)];
      
      setDiceValue(finalValue);
      setCurrentChallenge(randomChallenge);
      setIsRolling(false);
    }, 600);
  };

  // Obtener la imagen correspondiente al número del dado
  const getDiceImage = () => {
    const images = {
      1: imgNumber1,
      2: imgNumber2,
      3: imgNumber3,
      4: imgNumber4,
      5: imgNumber5,
      6: imgNumber6
    };
    return images[diceValue as keyof typeof images];
  };

  return (
    <div className="bg-gradient-to-b from-[#15402e] relative size-full to-[#81bca3] overflow-y-auto flex flex-col" data-name="Dados">
      {/* Title */}
      <p className="font-['Capriola:Regular',sans-serif] leading-[32px] sm:leading-[32px] md:leading-[31.146px] lg:leading-[36px] not-italic text-[24px] sm:text-[28px] md:text-[28px] lg:text-[32.344px] xl:text-[36px] text-center text-white pt-4 sm:pt-6 md:pt-8 lg:pt-12 px-4 flex-shrink-0">
        Tu número es:
      </p>

      {/* Dice Image */}
      <div className="flex items-center justify-center py-2 sm:py-4 md:py-6 lg:py-8 flex-shrink-0">
        <div 
          className="h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[400px] lg:w-[400px] xl:h-[438px] xl:w-[438px] cursor-pointer hover:scale-105 transition-transform flex items-center justify-center"
          onClick={rollDice}
        >
          <img 
            alt={`Dado mostrando ${diceValue}`} 
            className={`max-h-full max-w-full object-contain pointer-events-none ${isRolling ? 'animate-bounce' : ''}`}
            src={getDiceImage()} 
          />
        </div>
      </div>

      {/* Instructions Section - Scrollable */}
      <div className="flex-1 flex items-start justify-center px-4 pb-[120px] sm:pb-[130px] md:pb-[150px] lg:pb-[180px] overflow-y-auto">
        <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
          {currentChallenge && (
            <div className="animate-fade-in">
              {currentChallenge.type === 'numbered' && currentChallenge.options && diceValue > 0 && (
                <div className="text-center">
                  <h3 className="font-['SF_Pro:Bold',sans-serif] font-bold text-[24px] sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    {currentChallenge.title}
                  </h3>
                  <p className="font-['SF_Pro:Italic',sans-serif] italic leading-[24px] text-[20px] text-[#dedede]">
                    {currentChallenge.options[diceValue - 1]}
                  </p>
                </div>
              )}
              {currentChallenge.type === 'single' && (
                <div className="text-center">
                  <p className="font-['SF_Pro:Italic',sans-serif] italic leading-[24px] text-[20px] text-[#dedede]">
                    {currentChallenge.text}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="fixed left-1/2 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 translate-x-[-50%] z-10">
        <NavigationButtons 
          currentMode="dados"
          onSelectMode={onSelectMode}
          onActiveAction={rollDice}
        />
      </div>
    </div>
  );
}