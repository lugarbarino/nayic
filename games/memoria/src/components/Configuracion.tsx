import { useState, useEffect } from "react";
import { motion } from 'motion/react';
import clsx from "clsx";
import svgPaths from "../svg/configuracion";
import imgRectangle2 from "../assets/configuracion/mascara.webp";
import imgRectangle3 from "../assets/configuracion/logo.webp";
import { imgRectangle, imgRectangle1 } from "../svg/configuracion-2";
import imgLogo from "../assets/carga/logo.webp";

// Import all monster images
import imgMagic0 from "../assets/cartas/monstruos/magia-1.webp";
import imgMagic1 from "../assets/cartas/monstruos/magia-2.webp";
import imgMagic2 from "../assets/cartas/monstruos/magia-3.webp";
import imgMagic3 from "../assets/cartas/monstruos/magia-4.webp";
import imgFire0 from "../assets/cartas/monstruos/fuego-1.webp";
import imgFire1 from "../assets/cartas/monstruos/fuego-2.webp";
import imgFire2 from "../assets/cartas/monstruos/fuego-3.webp";
import imgFire3 from "../assets/cartas/monstruos/fuego-4.webp";
import imgAir0 from "../assets/cartas/monstruos/aire-1.webp";
import imgAir1 from "../assets/cartas/monstruos/aire-2.webp";
import imgAir2 from "../assets/cartas/monstruos/aire-3.webp";
import imgAir3 from "../assets/cartas/monstruos/aire-4.webp";
import imgEarth0 from "../assets/cartas/monstruos/tierra-1.webp";
import imgEarth1 from "../assets/cartas/monstruos/tierra-2.webp";
import imgEarth2 from "../assets/cartas/monstruos/tierra-3.webp";
import imgEarth3 from "../assets/cartas/monstruos/tierra-4.webp";
import imgWater0 from "../assets/cartas/monstruos/agua-1.webp";
import imgWater1 from "../assets/cartas/monstruos/agua-2.webp";
import imgWater2 from "../assets/cartas/monstruos/agua-3.webp";
import imgWater3 from "../assets/cartas/monstruos/agua-4.webp";

// Import all animal images
import imgAnimalMagic0 from "../assets/cartas/animales/magia-1.webp";
import imgAnimalMagic1 from "../assets/cartas/animales/magia-2.webp";
import imgAnimalMagic2 from "../assets/cartas/animales/magia-3.webp";
import imgAnimalMagic3 from "../assets/cartas/animales/magia-4.webp";
import imgAnimalFire0 from "../assets/cartas/animales/fuego-1.webp";
import imgAnimalFire1 from "../assets/cartas/animales/fuego-2.webp";
import imgAnimalFire2 from "../assets/cartas/animales/fuego-3.webp";
import imgAnimalFire3 from "../assets/cartas/animales/fuego-4.webp";
import imgAnimalAir0 from "../assets/cartas/animales/aire-1.webp";
import imgAnimalAir1 from "../assets/cartas/animales/aire-2.webp";
import imgAnimalAir2 from "../assets/cartas/animales/aire-3.webp";
import imgAnimalAir3 from "../assets/cartas/animales/aire-4.webp";
import imgAnimalEarth0 from "../assets/cartas/animales/tierra-1.webp";
import imgAnimalEarth1 from "../assets/cartas/animales/tierra-2.webp";
import imgAnimalEarth2 from "../assets/cartas/animales/tierra-3.webp";
import imgAnimalEarth3 from "../assets/cartas/animales/tierra-4.webp";
import imgAnimalWater0 from "../assets/cartas/animales/agua-1.webp";
import imgAnimalWater1 from "../assets/cartas/animales/agua-2.webp";
import imgAnimalWater2 from "../assets/cartas/animales/agua-3.webp";
import imgAnimalWater3 from "../assets/cartas/animales/agua-4.webp";

// Fruits and Vegetables imports
import imgFruitMagic0 from "../assets/cartas/huerto/magia-1.webp";
import imgFruitMagic1 from "../assets/cartas/huerto/magia-2.webp";
import imgFruitMagic2 from "../assets/cartas/huerto/magia-3.webp";
import imgFruitMagic3 from "../assets/cartas/huerto/magia-4.webp";
import imgFruitFire0 from "../assets/cartas/huerto/fuego-1.webp";
import imgFruitFire1 from "../assets/cartas/huerto/fuego-2.webp";
import imgFruitFire2 from "../assets/cartas/huerto/fuego-3.webp";
import imgFruitFire3 from "../assets/cartas/huerto/fuego-4.webp";
import imgFruitAir0 from "../assets/cartas/huerto/aire-1.webp";
import imgFruitAir1 from "../assets/cartas/huerto/aire-2.webp";
import imgFruitAir2 from "../assets/cartas/huerto/aire-3.webp";
import imgFruitAir3 from "../assets/cartas/huerto/aire-4.webp";
import imgFruitEarth0 from "../assets/cartas/huerto/tierra-1.webp";
import imgFruitEarth1 from "../assets/cartas/huerto/tierra-2.webp";
import imgFruitEarth2 from "../assets/cartas/huerto/tierra-3.webp";
import imgFruitEarth3 from "../assets/cartas/huerto/tierra-4.webp";
import imgFruitWater0 from "../assets/cartas/huerto/agua-1.webp";
import imgFruitWater1 from "../assets/cartas/huerto/agua-2.webp";
import imgFruitWater2 from "../assets/cartas/huerto/agua-3.webp";
import imgFruitWater3 from "../assets/cartas/huerto/agua-4.webp";

// Cats imports
import imgCatMagic0 from "../assets/cartas/gatos/magia-1.webp";
import imgCatMagic1 from "../assets/cartas/gatos/magia-2.webp";
import imgCatMagic2 from "../assets/cartas/gatos/magia-3.webp";
import imgCatMagic3 from "../assets/cartas/gatos/magia-4.webp";
import imgCatFire0 from "../assets/cartas/gatos/fuego-1.webp";
import imgCatFire1 from "../assets/cartas/gatos/fuego-2.webp";
import imgCatFire2 from "../assets/cartas/gatos/fuego-3.webp";
import imgCatFire3 from "../assets/cartas/gatos/fuego-4.webp";
import imgCatAir0 from "../assets/cartas/gatos/aire-1.webp";
import imgCatAir1 from "../assets/cartas/gatos/aire-2.webp";
import imgCatAir2 from "../assets/cartas/gatos/aire-3.webp";
import imgCatAir3 from "../assets/cartas/gatos/aire-4.webp";
import imgCatEarth0 from "../assets/cartas/gatos/tierra-1.webp";
import imgCatEarth1 from "../assets/cartas/gatos/tierra-2.webp";
import imgCatEarth2 from "../assets/cartas/gatos/tierra-3.webp";
import imgCatEarth3 from "../assets/cartas/gatos/tierra-4.webp";
import imgCatWater0 from "../assets/cartas/gatos/agua-1.webp";
import imgCatWater1 from "../assets/cartas/gatos/agua-2.webp";
import imgCatWater2 from "../assets/cartas/gatos/agua-3.webp";
import imgCatWater3 from "../assets/cartas/gatos/agua-4.webp";

const allMonsters = [
  imgMagic0, imgMagic1, imgMagic2, imgMagic3,
  imgFire0, imgFire1, imgFire2, imgFire3,
  imgAir0, imgAir1, imgAir2, imgAir3,
  imgEarth0, imgEarth1, imgEarth2, imgEarth3,
  imgWater0, imgWater1, imgWater2, imgWater3
];

const allAnimals = [
  imgAnimalMagic0, imgAnimalMagic1, imgAnimalMagic2, imgAnimalMagic3,
  imgAnimalFire0, imgAnimalFire1, imgAnimalFire2, imgAnimalFire3,
  imgAnimalAir0, imgAnimalAir1, imgAnimalAir2, imgAnimalAir3,
  imgAnimalEarth0, imgAnimalEarth1, imgAnimalEarth2, imgAnimalEarth3,
  imgAnimalWater0, imgAnimalWater1, imgAnimalWater2, imgAnimalWater3
];

const allFruits = [
  imgFruitMagic0, imgFruitMagic1, imgFruitMagic2, imgFruitMagic3,
  imgFruitFire0, imgFruitFire1, imgFruitFire2, imgFruitFire3,
  imgFruitAir0, imgFruitAir1, imgFruitAir2, imgFruitAir3,
  imgFruitEarth0, imgFruitEarth1, imgFruitEarth2, imgFruitEarth3,
  imgFruitWater0, imgFruitWater1, imgFruitWater2, imgFruitWater3
];

const allCats = [
  imgCatMagic0, imgCatMagic1, imgCatMagic2, imgCatMagic3,
  imgCatFire0, imgCatFire1, imgCatFire2, imgCatFire3,
  imgCatAir0, imgCatAir1, imgCatAir2, imgCatAir3,
  imgCatEarth0, imgCatEarth1, imgCatEarth2, imgCatEarth3,
  imgCatWater0, imgCatWater1, imgCatWater2, imgCatWater3
];

const THEME_STORAGE_KEY = 'monster-memory-game-theme';
const GAME_MODE_STORAGE_KEY = 'monster-memory-game-mode';

type RectangleBackgroundImageProps = {
  additionalClassNames?: string;
};

function RectangleBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<RectangleBackgroundImageProps>) {
  return (
    <div style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }} className={clsx("[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[90.196px] mask-size-[247px_98.229px,_211.283px_89.756px] ml-0 mt-0 relative w-[211.282px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}

type BackgroundImageProps = {
  text: string;
  text1: string;
  onClick?: () => void;
};

function BackgroundImage({ text, text1, onClick }: BackgroundImageProps) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
    >
      <p className="font-['Capriola:Regular',sans-serif] h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px]">
        {text}
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right w-[184px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Chevron right">
            <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #9952A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </button>
  );
}

type CharacterImageProps = {
  monsterImg: string;
};

function CharacterImage({ monsterImg }: CharacterImageProps) {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[285px]"
      animate={{
        y: [0, -15, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="h-[232px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={monsterImg} />
      </div>
    </motion.div>
  );
}

interface ConfiguracionProps {
  onClose: () => void;
  onOpenThemeSelector?: () => void;
  onOpenModeSelector?: () => void;
  onOpenGuiaCartas?: () => void;
}

export default function Configuracion({ onClose, onOpenThemeSelector, onOpenModeSelector, onOpenGuiaCartas }: ConfiguracionProps) {
  const [theme, setTheme] = useState<'monstruos' | 'animales' | 'huerto' | 'gatos'>('monstruos');
  const [gameMode, setGameMode] = useState<'contrareloj' | 'normal'>('normal');
  const [randomCharacter, setRandomCharacter] = useState<string>("");

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as 'monstruos' | 'animales' | 'huerto' | 'gatos' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Load game mode from localStorage
    const savedMode = localStorage.getItem(GAME_MODE_STORAGE_KEY) as 'contrareloj' | 'normal' | null;
    if (savedMode) {
      setGameMode(savedMode);
    }
  }, []);

  useEffect(() => {
    // Select a random character based on current theme
    const characters = theme === 'gatos' ? allCats : theme === 'huerto' ? allFruits : theme === 'animales' ? allAnimals : allMonsters;
    const randomIndex = Math.floor(Math.random() * characters.length);
    setRandomCharacter(characters[randomIndex]);
  }, [theme]);

  const handleThemeClick = () => {
    if (onOpenThemeSelector) {
      onOpenThemeSelector();
    }
  };

  const handleModeClick = () => {
    if (onOpenModeSelector) {
      onOpenModeSelector();
    }
  };

  const handleCartasClick = () => {
    if (onOpenGuiaCartas) {
      onOpenGuiaCartas();
    }
  };

  const getThemeText = () => {
    switch (theme) {
      case 'monstruos':
        return 'Monstruos';
      case 'animales':
        return 'Animales';
      case 'huerto':
        return 'El Huerto';
      case 'gatos':
        return 'Gatos';
      default:
        return 'Monstruos';
    }
  };

  const getModeText = () => {
    return gameMode === 'contrareloj' ? 'Contrareloj' : 'Normal';
  };

  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full min-h-dvh" data-name="Ajustes" style={{ backgroundImage: "linear-gradient(179.983deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      {/* Exit Button - Fixed position */}
      <button
        onClick={onClose}
        className="absolute z-50 bg-[#4d2951] content-stretch flex gap-[4px] items-center justify-center p-[8px] rounded-[12px] cursor-pointer hover:opacity-80 transition-opacity left-[calc(50%-170.5px)] top-[40px] w-[75px]"
        data-name="button"
      >
        <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Arrow left">
              <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[12px] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
      </button>

      <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[calc(50%-0.5px)] top-[calc(50%-16.5px)] translate-x-[-50%] translate-y-[-50%] w-[341px]">
        <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
          {/* Logo and Title */}
          <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center gap-[8px] relative shrink-0 w-full">
              <div className="w-full max-w-[280px] flex items-center justify-center">
                <img alt="Juego de Memoria" className="w-full h-auto object-contain" src={imgLogo} />
              </div>
            </div>
          </div>

          {/* Settings Items */}
          <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-full">
            <BackgroundImage text="Modo" text1={getModeText()} onClick={handleModeClick} />
            <BackgroundImage text="Tema" text1={getThemeText()} onClick={handleThemeClick} />
            <BackgroundImage text="Cartas" text1="Guía de cartas" onClick={handleCartasClick} />
          </div>
        </div>

        {/* Character */}
        {randomCharacter && <CharacterImage monsterImg={randomCharacter} />}
      </div>
    </div>
  );
}