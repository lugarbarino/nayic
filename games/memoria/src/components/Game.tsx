import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Settings } from "lucide-react";
import LoadingScreen from "./LoadingScreen";
import GameOverModal from "./GameOverModal";
import svgPathsBackButton from "../svg/juego-1";
import svgPathsHeaderMobile from "../svg/juego-2";
import svgPathsHex from "../svg/juego-3";
import imgFire1Bg from "../assets/niveles/amarillo.webp";
import svgPathsVerTodas from "../svg/juego-4";
import imgMezclarlas1 from "../assets/especiales/mezclar-ojo.webp";
import svgPathsMezclarNuevo from "../svg/juego-5";
import imgGatosMagic01 from "../assets/decoracion/anillos.webp";
import imgMezclarlas2 from "../assets/especiales/mezclar-monstruo.webp";
import svgPathsSuerte from "../svg/juego-6";
import imgSuerte from "../assets/especiales/suerte.webp";
import imgPico from "../assets/especiales/pico-carta.webp";
import imgHintCard from "../assets/especiales/pista.webp";
import imgMagicHintCard from "../assets/especiales/pista-magica.webp";
import Facil from "../disenos/tableros/Facil";
import Medio from "../disenos/tableros/Medio";
import Dificil from "../disenos/tableros/Dificil";
import MedioCongelada from "../disenos/tableros/MedioCongelada";
import MedioMagica from "../disenos/tableros/MedioMagica";
import imgDificilCongelada from "../assets/especiales/congelada-dificil.webp";
import imgDificilMagica from "../assets/especiales/magica-dificil.webp";
import imgDificilFuego from "../assets/especiales/fuego-dificil.webp";
import imgDificilNube from "../assets/especiales/nube-dificil.webp";
import imgDificilEnterrada from "../assets/especiales/enterrada-dificil.webp";
import svgPathsElementos from "../svg/juego-7";
import Bomba from "../disenos/tableros/Bomba";
import BombaDificil from "../disenos/tableros/BombaDificil";

// Magic Monsters - Purple background
import imgMagic0 from "../assets/cartas/monstruos/magia-1.webp";
import imgMagic1 from "../assets/cartas/monstruos/magia-2.webp";
import imgMagic2 from "../assets/cartas/monstruos/magia-3.webp";
import imgMagic3 from "../assets/cartas/monstruos/magia-4.webp";

// Fire Monsters - Orange/Yellow background
import imgFire0 from "../assets/cartas/monstruos/fuego-1.webp";
import imgFire1 from "../assets/cartas/monstruos/fuego-2.webp";
import imgFire2 from "../assets/cartas/monstruos/fuego-3.webp";
import imgFire3 from "../assets/cartas/monstruos/fuego-4.webp";

// Air Monsters - Light Blue background
import imgAir0 from "../assets/cartas/monstruos/aire-1.webp";
import imgAir1 from "../assets/cartas/monstruos/aire-2.webp";
import imgAir2 from "../assets/cartas/monstruos/aire-3.webp";
import imgAir3 from "../assets/cartas/monstruos/aire-4.webp";

// Earth Monsters - Green background
import imgEarth0 from "../assets/cartas/monstruos/tierra-1.webp";
import imgEarth1 from "../assets/cartas/monstruos/tierra-2.webp";
import imgEarth2 from "../assets/cartas/monstruos/tierra-3.webp";
import imgEarth3 from "../assets/cartas/monstruos/tierra-4.webp";

// Water Monsters - Dark Blue background
import imgWater0 from "../assets/cartas/monstruos/agua-1.webp";
import imgWater1 from "../assets/cartas/monstruos/agua-2.webp";
import imgWater2 from "../assets/cartas/monstruos/agua-3.webp";
import imgWater3 from "../assets/cartas/monstruos/agua-4.webp";

// Animal imports
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

const THEME_STORAGE_KEY = "monster-memory-game-theme";
const GAME_MODE_STORAGE_KEY = "monster-memory-game-mode";

type Card = {
  id: number;
  monsterId: number;
  isFlipped: boolean;
  isMatched: boolean;
  isBonus?: boolean;
  isShuffle?: boolean;
  isLucky?: boolean;
  isPico?: boolean;
  isBuried?: boolean; // Card that is buried and needs to be uncovered by pico
  isOnFire?: boolean; // Card is on fire and needs to be clicked once to extinguish
  isMatching?: boolean;
  backVariant?: "congelada" | "magica" | "nube" | "normal"; // For hard difficulty
  isFrozen?: boolean; // For frozen cards in hard mode
  frozenUntil?: number; // Timestamp when unfrozen
  isUnpaired?: boolean; // Card without a pair
  showingCloudHints?: boolean; // For nube variant - showing 3 possible locations
  showingHint?: boolean; // Card is showing hint after cloud was used
  showingMagicHint?: boolean; // Card is showing magic hint after magic card was used (hard only)
  isBomb?: boolean; // Bomb card that flips matched pairs back (1 random pair in medium, all pairs in hard)
};

type Difficulty = "easy" | "medium" | "hard";

// Magic Monsters (Purple background)
function Magic0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgMagic0}
        />
      </div>
    </div>
  );
}

function Magic1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgMagic1}
        />
      </div>
    </div>
  );
}

function Magic2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgMagic2}
        />
      </div>
    </div>
  );
}

function Magic3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgMagic3}
        />
      </div>
    </div>
  );
}

// Fire Monsters (Orange/Yellow background)
function Fire0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgFire1Bg}
          />
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFire0}
        />
      </div>
    </div>
  );
}

function Fire1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFire1}
        />
      </div>
    </div>
  );
}

function Fire2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFire2}
        />
      </div>
    </div>
  );
}

function Fire3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFire3}
        />
      </div>
    </div>
  );
}

// Air Monsters (Light Blue background)
function Air0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAir0}
        />
      </div>
    </div>
  );
}

function Air1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAir1}
        />
      </div>
    </div>
  );
}

function Air2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAir2}
        />
      </div>
    </div>
  );
}

function Air3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAir3}
        />
      </div>
    </div>
  );
}

// Earth Monsters (Green background)
function Earth0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgEarth0}
        />
      </div>
    </div>
  );
}

function Earth1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgEarth1}
        />
      </div>
    </div>
  );
}

function Earth2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgEarth2}
        />
      </div>
    </div>
  );
}

function Earth3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgEarth3}
        />
      </div>
    </div>
  );
}

// Water Monsters (Dark Blue background)
function Water0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgWater0}
        />
      </div>
    </div>
  );
}

function Water1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgWater1}
        />
      </div>
    </div>
  );
}

function Water2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgWater2}
        />
      </div>
    </div>
  );
}

function Water3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgWater3}
        />
      </div>
    </div>
  );
}

// Animal Components - Magic (Purple background #603265)
function AnimalMagic0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalMagic0}
        />
      </div>
    </div>
  );
}

function AnimalMagic1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalMagic1}
        />
      </div>
    </div>
  );
}

function AnimalMagic2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalMagic2}
        />
      </div>
    </div>
  );
}

function AnimalMagic3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalMagic3}
        />
      </div>
    </div>
  );
}

// Animal Components - Fire (Orange background #FFD187)
function AnimalFire0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalFire0}
        />
      </div>
    </div>
  );
}

function AnimalFire1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalFire1}
        />
      </div>
    </div>
  );
}

function AnimalFire2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalFire2}
        />
      </div>
    </div>
  );
}

function AnimalFire3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalFire3}
        />
      </div>
    </div>
  );
}

// Animal Components - Air (Light Blue background #71B8DB)
function AnimalAir0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalAir0}
        />
      </div>
    </div>
  );
}

function AnimalAir1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalAir1}
        />
      </div>
    </div>
  );
}

function AnimalAir2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalAir2}
        />
      </div>
    </div>
  );
}

function AnimalAir3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalAir3}
        />
      </div>
    </div>
  );
}

// Animal Components - Earth (Green background)
function AnimalEarth0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalEarth0}
        />
      </div>
    </div>
  );
}

function AnimalEarth1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalEarth1}
        />
      </div>
    </div>
  );
}

function AnimalEarth2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalEarth2}
        />
      </div>
    </div>
  );
}

function AnimalEarth3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#50917D" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalEarth3}
        />
      </div>
    </div>
  );
}

// Animal Components - Water (Dark Blue background #596392)
function AnimalWater0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalWater0}
        />
      </div>
    </div>
  );
}

function AnimalWater1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalWater1}
        />
      </div>
    </div>
  );
}

function AnimalWater2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalWater2}
        />
      </div>
    </div>
  );
}

function AnimalWater3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgAnimalWater3}
        />
      </div>
    </div>
  );
}

// Fruit Components - Magic (Purple background #603265)
function FruitMagic0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitMagic0}
        />
      </div>
    </div>
  );
}

function FruitMagic1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitMagic1}
        />
      </div>
    </div>
  );
}

function FruitMagic2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitMagic2}
        />
      </div>
    </div>
  );
}

function FruitMagic3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitMagic3}
        />
      </div>
    </div>
  );
}

// Fruit Components - Fire (Orange background #FFD187)
function FruitFire0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitFire0}
        />
      </div>
    </div>
  );
}

function FruitFire1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitFire1}
        />
      </div>
    </div>
  );
}

function FruitFire2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitFire2}
        />
      </div>
    </div>
  );
}

function FruitFire3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitFire3}
        />
      </div>
    </div>
  );
}

// Fruit Components - Air (Light Blue background #71B8DB)
function FruitAir0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitAir0}
        />
      </div>
    </div>
  );
}

function FruitAir1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitAir1}
        />
      </div>
    </div>
  );
}

function FruitAir2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitAir2}
        />
      </div>
    </div>
  );
}

function FruitAir3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitAir3}
        />
      </div>
    </div>
  );
}

// Fruit Components - Earth (Green background #5EA585)
function FruitEarth0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitEarth0}
        />
      </div>
    </div>
  );
}

function FruitEarth1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitEarth1}
        />
      </div>
    </div>
  );
}

function FruitEarth2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitEarth2}
        />
      </div>
    </div>
  );
}

function FruitEarth3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitEarth3}
        />
      </div>
    </div>
  );
}

// Fruit Components - Water (Dark Blue background #596392)
function FruitWater0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitWater0}
        />
      </div>
    </div>
  );
}

function FruitWater1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitWater1}
        />
      </div>
    </div>
  );
}

function FruitWater2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitWater2}
        />
      </div>
    </div>
  );
}

function FruitWater3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgFruitWater3}
        />
      </div>
    </div>
  );
}

// Cat Components - Magic (Purple background #603265)
function CatMagic0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatMagic0}
        />
      </div>
    </div>
  );
}

function CatMagic1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatMagic1}
        />
      </div>
    </div>
  );
}

function CatMagic2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatMagic2}
        />
      </div>
    </div>
  );
}

function CatMagic3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#603265" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatMagic3}
        />
      </div>
    </div>
  );
}

// Cat Components - Fire (Orange background #FFD187)
function CatFire0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatFire0}
        />
      </div>
    </div>
  );
}

function CatFire1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatFire1}
        />
      </div>
    </div>
  );
}

function CatFire2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatFire2}
        />
      </div>
    </div>
  );
}

function CatFire3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#FFD187" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatFire3}
        />
      </div>
    </div>
  );
}

// Cat Components - Air (Light Blue background #71B8DB)
function CatAir0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatAir0}
        />
      </div>
    </div>
  );
}

function CatAir1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatAir1}
        />
      </div>
    </div>
  );
}

function CatAir2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatAir2}
        />
      </div>
    </div>
  );
}

function CatAir3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#71B8DB" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatAir3}
        />
      </div>
    </div>
  );
}

// Cat Components - Earth (Green background #5EA585)
function CatEarth0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatEarth0}
        />
      </div>
    </div>
  );
}

function CatEarth1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatEarth1}
        />
      </div>
    </div>
  );
}

function CatEarth2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatEarth2}
        />
      </div>
    </div>
  );
}

function CatEarth3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#5EA585" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatEarth3}
        />
      </div>
    </div>
  );
}

// Cat Components - Water (Dark Blue background #596392)
function CatWater0() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatWater0}
        />
      </div>
    </div>
  );
}

function CatWater1() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatWater1}
        />
      </div>
    </div>
  );
}

function CatWater2() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatWater2}
        />
      </div>
    </div>
  );
}

function CatWater3() {
  return (
    <div className="h-[125.595px] overflow-visible relative shrink-0 w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path d={svgPathsHex.p160d0900} fill="#596392" />
          </svg>
        </div>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCatWater3}
        />
      </div>
    </div>
  );
}

function BackOfCard({
  difficulty,
  backVariant,
  isOnFire,
}: {
  difficulty?: Difficulty;
  backVariant?: "congelada" | "magica" | "nube" | "normal";
  isOnFire?: boolean;
}) {
  // Hard difficulty with variants
  if (
    difficulty === "hard" &&
    backVariant &&
    backVariant !== "normal"
  ) {
    return (
      <div className="h-[125.595px] relative w-[125.238px]">
        <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
          <Dificil />
          {/* Overlay for variants */}
          <div className="absolute inset-0 pointer-events-none">
            {backVariant === "congelada" && (
              <img
                alt=""
                className="absolute h-[126.84%] left-[-11.13%] max-w-none top-[-14.74%] w-[116.51%]"
                src={imgDificilCongelada}
              />
            )}
            {backVariant === "magica" && (
              <img
                alt=""
                className="absolute h-[110%] left-[-5%] max-w-none top-[-5%] w-[110%]"
                src={imgDificilMagica}
              />
            )}
            {backVariant === "nube" && (
              <>
                <img
                  alt=""
                  className="absolute h-[123.84%] left-[-9.75%] max-w-none top-[-11.93%] w-[113.76%]"
                  src={imgDificilNube}
                />
                <div className="absolute inset-[31.84%_32.78%_28.61%_32.52%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 142 151"
                  >
                    <g
                      filter="url(#filter0_i_nube)"
                      id="Vector"
                    >
                      <path
                        d={svgPathsElementos.p29c37d00}
                        fill="var(--fill-0, #9054A2)"
                      />
                    </g>
                    <defs>
                      <filter
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="154.289"
                        id="filter0_i_nube"
                        width="141.94"
                        x="0"
                        y="0"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7" />
                        <feComposite
                          in2="hardAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          in2="shape"
                          mode="normal"
                          result="effect1_innerShadow_nube"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Fire overlay (separate from backVariant)
  if (isOnFire) {
    return (
      <div className="h-[125.595px] relative w-[125.238px]">
        <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
          {/* Fire card - uses the complete fire design */}
          <img
            alt=""
            className="absolute inset-0 size-full object-contain"
            src={imgDificilFuego}
          />
        </div>
      </div>
    );
  }

  // Default rendering
  return (
    <div className="h-[125.595px] relative w-[125.238px]">
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        {difficulty === "medium" ? (
          backVariant === "congelada" ? (
            <MedioCongelada />
          ) : backVariant === "magica" ? (
            <MedioMagica />
          ) : (
            <Medio />
          )
        ) : difficulty === "hard" ? (
          <Dificil />
        ) : (
          <Facil />
        )}
      </div>
    </div>
  );
}

function BonusCard() {
  return (
    <div
      className="h-[125.595px] relative w-[125.238px]"
      data-name="ver todas"
    >
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path
              d={svgPathsVerTodas.p2a89e280}
              fill="var(--fill-0, #50917D)"
              stroke="var(--stroke-0, #50917D)"
              strokeWidth="8"
            />
          </svg>
        </div>
        <div
          className="absolute h-[56.5%] left-[50%] top-[-6.6%] translate-x-[-50%] w-[61.5%]"
          data-name="ver cartas 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgMezclarlas1}
          />
        </div>
        <div className="absolute font-['Capriola',sans-serif] leading-[1.04] left-[50%] text-[16px] text-center text-white top-[41%] translate-x-[-50%] w-[80%]">
          <p className="mb-0">Podés ver</p>
          <p className="mb-0">todas las</p>
          <p className="mb-0">cartas</p>
        </div>
      </div>
    </div>
  );
}

function ShuffleCard() {
  return (
    <div
      className="h-[125.595px] relative w-[125.238px]"
      data-name="Mezclar"
    >
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path
              d={svgPathsMezclarNuevo.p2acd1c00}
              fill="var(--fill-0, #603265)"
              stroke="var(--stroke-0, #603265)"
              strokeWidth="9"
            />
          </svg>
        </div>
        <div
          className="absolute h-[60%] left-[50%] opacity-90 top-[-0.5%] translate-x-[-50%] w-[70%]"
          data-name="gatos_Magic0 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full rotate-[0.38deg]"
            src={imgGatosMagic01}
          />
        </div>
        <div className="absolute font-['Capriola',sans-serif] leading-[1.04] left-[50%] text-[16px] text-center text-white top-[50%] translate-x-[-50%] w-[80%]">
          <p className="mb-0">Se mezclan</p>
          <p className="mb-0">las cartas</p>
        </div>
      </div>
    </div>
  );
}

function LuckyCard() {
  return (
    <div
      className="h-[125.595px] relative w-[125.238px]"
      data-name="suerte"
    >
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 333 342"
          >
            <path
              d={svgPathsSuerte.p2a89e280}
              fill="var(--fill-0, #CF449E)"
              stroke="var(--stroke-0, #CF449E)"
              strokeWidth="8"
            />
          </svg>
        </div>
        <div
          className="absolute h-[56.5%] left-[50%] top-[-10%] translate-x-[-50%] w-[61.5%]"
          data-name="ver cartas 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgSuerte}
          />
        </div>
        <div className="absolute font-['Capriola',sans-serif] leading-[1.04] left-[50%] text-[16px] text-center text-white top-[47%] translate-x-[-50%] w-[80%]">
          <p className="mb-0">Ganaste</p>
          <p className="mb-0">un match</p>
        </div>
      </div>
    </div>
  );
}

function BombCard({ difficulty }: { difficulty?: Difficulty }) {
  return (
    <div
      className="h-[125.595px] relative w-[125.238px]"
      data-name="bomba"
    >
      <div className="absolute left-1/2 top-1/2 w-[393px] h-[361px] -translate-x-1/2 -translate-y-1/2 scale-[0.356]">
        {difficulty === 'hard' ? <BombaDificil /> : <Bomba />}
      </div>
    </div>
  );
}

function PicoCard() {
  return (
    <div
      className="h-[125.595px] relative w-[125.238px]"
      data-name="pico"
    >
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <img
          alt="Pico - libera la carta enterrada"
          className="absolute inset-0 size-full object-contain"
          src={imgPico}
        />
      </div>
    </div>
  );
}

function HintCard() {
  return (
    <div
      className="h-[125.595px] relative w-[125.238px]"
      data-name="hint"
    >
      <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
        <img
          alt="Pista de nube"
          className="absolute inset-0 size-full object-contain"
          src={imgHintCard}
        />
      </div>
    </div>
  );
}

function MagicHintCard() {
  return (
    <div
      className="h-[125.595px] relative w-[125.238px]"
      data-name="magic-hint"
    >
      <div className="absolute h-[154px] left-[-14px] top-[-14px] w-[154px]">
        <img
          alt="Pista mágica"
          className="absolute inset-0 size-full object-contain"
          src={imgMagicHintCard}
        />
      </div>
    </div>
  );
}

function MonsterCard({
  monsterId,
  theme,
}: {
  monsterId: number;
  theme: "monstruos" | "animales" | "huerto" | "gatos";
}) {
  const allMonsters = [
    <Magic0 />,
    <Magic1 />,
    <Magic2 />,
    <Magic3 />,
    <Fire0 />,
    <Fire1 />,
    <Fire2 />,
    <Fire3 />,
    <Air0 />,
    <Air1 />,
    <Air2 />,
    <Air3 />,
    <Earth0 />,
    <Earth1 />,
    <Earth2 />,
    <Earth3 />,
    <Water0 />,
    <Water1 />,
    <Water2 />,
    <Water3 />,
  ];

  const allAnimals = [
    <AnimalMagic0 />,
    <AnimalMagic1 />,
    <AnimalMagic2 />,
    <AnimalMagic3 />,
    <AnimalFire0 />,
    <AnimalFire1 />,
    <AnimalFire2 />,
    <AnimalFire3 />,
    <AnimalAir0 />,
    <AnimalAir1 />,
    <AnimalAir2 />,
    <AnimalAir3 />,
    <AnimalEarth0 />,
    <AnimalEarth1 />,
    <AnimalEarth2 />,
    <AnimalEarth3 />,
    <AnimalWater0 />,
    <AnimalWater1 />,
    <AnimalWater2 />,
    <AnimalWater3 />,
  ];

  const allFruits = [
    <FruitMagic0 />,
    <FruitMagic1 />,
    <FruitMagic2 />,
    <FruitMagic3 />,
    <FruitFire0 />,
    <FruitFire1 />,
    <FruitFire2 />,
    <FruitFire3 />,
    <FruitAir0 />,
    <FruitAir1 />,
    <FruitAir2 />,
    <FruitAir3 />,
    <FruitEarth0 />,
    <FruitEarth1 />,
    <FruitEarth2 />,
    <FruitEarth3 />,
    <FruitWater0 />,
    <FruitWater1 />,
    <FruitWater2 />,
    <FruitWater3 />,
  ];

  const allCats = [
    <CatMagic0 />,
    <CatMagic1 />,
    <CatMagic2 />,
    <CatMagic3 />,
    <CatFire0 />,
    <CatFire1 />,
    <CatFire2 />,
    <CatFire3 />,
    <CatAir0 />,
    <CatAir1 />,
    <CatAir2 />,
    <CatAir3 />,
    <CatEarth0 />,
    <CatEarth1 />,
    <CatEarth2 />,
    <CatEarth3 />,
    <CatWater0 />,
    <CatWater1 />,
    <CatWater2 />,
    <CatWater3 />,
  ];

  const characters =
    theme === "gatos"
      ? allCats
      : theme === "huerto"
        ? allFruits
        : theme === "animales"
          ? allAnimals
          : allMonsters;
  return <>{characters[monsterId]}</>;
}

function GameCard({
  card,
  onClick,
  difficulty,
  theme,
}: {
  card: Card;
  onClick: () => void;
  difficulty?: Difficulty;
  theme?: "monstruos" | "animales" | "huerto" | "gatos";
}) {
  const showFront = card.isFlipped || card.isMatched;

  if (card.isBonus) {
    return (
      <motion.button
        onClick={onClick}
        disabled={card.isMatched}
        className="cursor-pointer disabled:cursor-default"
        whileHover={!card.isMatched ? { scale: 1.05 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {showFront ? (
          <BonusCard />
        ) : (
          <BackOfCard difficulty={difficulty} />
        )}
      </motion.button>
    );
  }

  if (card.isShuffle) {
    return (
      <motion.button
        onClick={onClick}
        disabled={card.isMatched}
        className="cursor-pointer disabled:cursor-default"
        whileHover={!card.isMatched ? { scale: 1.05 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {showFront ? (
          <ShuffleCard />
        ) : (
          <BackOfCard difficulty={difficulty} />
        )}
      </motion.button>
    );
  }

  if (card.isLucky) {
    return (
      <motion.button
        onClick={onClick}
        disabled={card.isMatched}
        className="cursor-pointer disabled:cursor-default"
        whileHover={!card.isMatched ? { scale: 1.05 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {showFront ? (
          <LuckyCard />
        ) : (
          <BackOfCard difficulty={difficulty} />
        )}
      </motion.button>
    );
  }

  if (card.isBomb) {
    return (
      <motion.button
        onClick={onClick}
        disabled={card.isMatched}
        className="cursor-pointer disabled:cursor-default"
        whileHover={!card.isMatched ? { scale: 1.05 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {showFront ? (
          <BombCard difficulty={difficulty} />
        ) : (
          <BackOfCard difficulty={difficulty} />
        )}
      </motion.button>
    );
  }

  if (card.isPico) {
    return (
      <motion.button
        onClick={onClick}
        disabled={card.isMatched}
        className="cursor-pointer disabled:cursor-default"
        whileHover={!card.isMatched ? { scale: 1.05 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {showFront ? (
          <PicoCard />
        ) : (
          <BackOfCard difficulty={difficulty} />
        )}
      </motion.button>
    );
  }

  // Buried cards - show a dirt overlay
  if (card.isBuried) {
    return (
      <motion.button
        onClick={onClick}
        disabled={true}
        className="cursor-not-allowed relative"
      >
        <div className="h-[125.595px] relative w-[125.238px]">
          <div className="absolute h-[140px] left-[-7.5px] top-[-7.5px] w-[140px]">
            {/* Buried card - uses the complete buried/dirt design */}
            <img
              alt=""
              className="absolute inset-0 size-full object-contain"
              src={imgDificilEnterrada}
            />
          </div>
        </div>
      </motion.button>
    );
  }

  // Hint cards - show hint skin (after cloud was used)
  if (card.showingHint) {
    return (
      <motion.button
        onClick={onClick}
        disabled={card.isMatched}
        className="cursor-pointer disabled:cursor-default"
        whileHover={!card.isMatched ? { scale: 1.05 } : {}}
      >
        <HintCard />
      </motion.button>
    );
  }

  // Magic hint cards - show magic hint skin (after magic card was used in hard mode)
  if (card.showingMagicHint) {
    return (
      <motion.button
        onClick={onClick}
        disabled={card.isMatched}
        className="cursor-pointer disabled:cursor-default"
        whileHover={!card.isMatched ? { scale: 1.05 } : {}}
      >
        <MagicHintCard />
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={card.isMatched || card.isFlipped}
      className="cursor-pointer disabled:cursor-default"
      whileHover={
        !card.isMatched && !card.isFlipped
          ? { scale: 1.05 }
          : {}
      }
      animate={
        card.isMatching
          ? {
              scale: [1, 1.2, 1.1, 1.2, 1],
              rotate: [0, -5, 5, -5, 0],
            }
          : { scale: 1, rotate: 0 }
      }
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      {showFront ? (
        <MonsterCard
          monsterId={card.monsterId}
          theme={theme || "monstruos"}
        />
      ) : (
        <BackOfCard
          difficulty={difficulty}
          backVariant={card.backVariant}
          isOnFire={card.isOnFire}
        />
      )}
    </motion.button>
  );
}

interface GameProps {
  onBack: () => void;
  level?: number; // 1-8, default 5
  difficulty?: Difficulty;
  onLevelComplete?: (score: number) => void;
  onOpenConfig?: () => void;
}

export default function Game({
  onBack,
  level = 5,
  difficulty = "easy",
  onLevelComplete,
  onOpenConfig,
}: GameProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>(
    [],
  );
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState<
    "contrareloj" | "normal"
  >("normal");
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [bonusActive, setBonusActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(0);
  const [theme, setTheme] = useState<
    "monstruos" | "animales" | "huerto" | "gatos"
  >("monstruos");
  const [maxScore, setMaxScore] = useState(3000);
  const [expectedPairs, setExpectedPairs] = useState(0);

  const MATCH_POINTS = 500;
  const ERROR_PENALTY = 100;

  // Load theme and game mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem(
      THEME_STORAGE_KEY,
    ) as
      | "monstruos"
      | "animales"
      | "huerto"
      | "gatos"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const savedMode = localStorage.getItem(
      GAME_MODE_STORAGE_KEY,
    ) as "contrareloj" | "normal" | null;
    if (savedMode) {
      setGameMode(savedMode);
      // Set initial time based on game mode
      setTime(savedMode === "contrareloj" ? 60 : 0);
    }
  }, []);

  // Handle loading complete callback from LoadingScreen
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const initGame = () => {
    // Level configuration for EASY mode
    const easyLevelConfig = {
      1: {
        pairs: 2,
        bonusCount: 0,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 60,
      },
      2: {
        pairs: 3,
        bonusCount: 0,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 60,
      },
      3: {
        pairs: 4,
        bonusCount: 0,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 60,
      },
      4: {
        pairs: 4,
        bonusCount: 1,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 60,
      },
      5: {
        pairs: 6,
        bonusCount: 0,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 60,
      },
      6: {
        pairs: 6,
        bonusCount: 1,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 60,
      },
      7: {
        pairs: 6,
        bonusCount: 1,
        shuffleCount: 0,
        luckyCount: 1,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 90,
      },
      8: {
        pairs: 7,
        bonusCount: 1,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        time: 90,
      },
    };

    // Level configuration for MEDIUM mode
    const mediumLevelConfig = {
      1: {
        pairs: 6,
        bonusCount: 1,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 0,
        time: 90,
      },
      2: {
        pairs: 7,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 2,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 0,
        time: 90,
      },
      3: {
        pairs: 9,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 1,
        magicaCount: 2,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 0,
        time: 90,
      },
      4: {
        pairs: 10,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 1,
        magicaCount: 2,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 0,
        time: 120,
      },
      5: {
        pairs: 13,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 2,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 1,
        time: 120,
      },
      6: {
        pairs: 12,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 2,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 1,
        time: 120,
      },
      7: {
        pairs: 13,
        bonusCount: 1,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 3,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 1,
        time: 120,
      },
      8: {
        pairs: 14,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 3,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 1,
        time: 120,
      },
    };

    // Level configuration for HARD mode
    const hardLevelConfig = {
      1: {
        pairs: 6,
        bonusCount: 0,
        shuffleCount: 0,
        luckyCount: 1,
        picoCount: 1,
        buriedCount: 1,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 0,
        time: 90,
      },
      2: {
        pairs: 6,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 1,
        buriedCount: 1,
        unpairedCount: 0,
        congeladaCount: 0,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 2,
        bombCount: 0,
        time: 90,
      },
      3: {
        pairs: 7,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 1,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 1,
        magicaCount: 1,
        nubeCount: 1,
        fuegoCount: 0,
        bombCount: 0,
        time: 90,
      },
      4: {
        pairs: 7,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 1,
        magicaCount: 0,
        nubeCount: 1,
        fuegoCount: 1,
        bombCount: 1,
        time: 90,
      },
      5: {
        pairs: 7,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 1,
        picoCount: 0,
        buriedCount: 1,
        unpairedCount: 0,
        congeladaCount: 1,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 0,
        time: 120,
      },
      6: {
        pairs: 7,
        bonusCount: 0,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 1,
        buriedCount: 2,
        unpairedCount: 0,
        congeladaCount: 3,
        magicaCount: 0,
        nubeCount: 0,
        fuegoCount: 0,
        bombCount: 1,
        time: 120,
      },
      7: {
        pairs: 8,
        bonusCount: 0,
        shuffleCount: 1,
        luckyCount: 0,
        picoCount: 0,
        buriedCount: 0,
        unpairedCount: 0,
        congeladaCount: 3,
        magicaCount: 1,
        nubeCount: 0,
        fuegoCount: 2,
        bombCount: 1,
        time: 120,
      },
      8: {
        pairs: 11,
        bonusCount: 0,
        shuffleCount: 0,
        luckyCount: 0,
        picoCount: 1,
        buriedCount: 1,
        unpairedCount: 0,
        congeladaCount: 2,
        magicaCount: 1,
        nubeCount: 1,
        fuegoCount: 2,
        bombCount: 1,
        time: 150,
      },
    };

    const config =
      difficulty === "hard"
        ? hardLevelConfig[
            level as keyof typeof hardLevelConfig
          ] || hardLevelConfig[1]
        : difficulty === "medium"
          ? mediumLevelConfig[
              level as keyof typeof mediumLevelConfig
            ] || mediumLevelConfig[1]
          : easyLevelConfig[
              level as keyof typeof easyLevelConfig
            ] || easyLevelConfig[5];

    const allMonsterIds = Array.from(
      { length: 20 },
      (_, i) => i,
    );
    const shuffledMonsters = allMonsterIds.sort(
      () => Math.random() - 0.5,
    );
    const selectedMonsters = shuffledMonsters.slice(
      0,
      config.pairs,
    );

    const cardPairs = [
      ...selectedMonsters,
      ...selectedMonsters,
    ].map((monsterId, index) => ({
      id: index,
      monsterId,
      isFlipped: false,
      isMatched: false,
      isBonus: false,
      isShuffle: false,
      isLucky: false,
      isPico: false,
      isBuried: false,
      isOnFire: false,
      isUnpaired: false,
      backVariant: "normal" as
        | "congelada"
        | "magica"
        | "nube"
        | "normal",
    }));

    let allCards: Card[] = [...cardPairs];
    let nextId = cardPairs.length;

    // Add unpaired cards (cards without a pair)
    for (let i = 0; i < config.unpairedCount; i++) {
      const unpairedMonsterId =
        shuffledMonsters[config.pairs + i] || 0;
      const unpairedCard: Card = {
        id: nextId++,
        monsterId: unpairedMonsterId,
        isFlipped: false,
        isMatched: false,
        isBonus: false,
        isShuffle: false,
        isLucky: false,
        isPico: false,
        isBuried: false,
        isOnFire: false,
        isUnpaired: true,
        backVariant: "normal",
      };
      allCards.push(unpairedCard);
    }

    // Add bonus cards (Suerte - show all cards)
    for (let i = 0; i < config.bonusCount; i++) {
      const bonusCard: Card = {
        id: nextId++,
        monsterId: -1 - i,
        isFlipped: false,
        isMatched: false,
        isBonus: true,
        isShuffle: false,
        isLucky: false,
        isPico: false,
        isBuried: false,
        isOnFire: false,
        isUnpaired: false,
        backVariant: "normal",
      };
      allCards.push(bonusCard);
    }

    // Add shuffle cards (te mezclo las cartas)
    for (let i = 0; i < config.shuffleCount; i++) {
      const shuffleCard: Card = {
        id: nextId++,
        monsterId: -100 - i,
        isFlipped: false,
        isMatched: false,
        isBonus: false,
        isShuffle: true,
        isLucky: false,
        isPico: false,
        isBuried: false,
        isOnFire: false,
        isUnpaired: false,
        backVariant: "normal",
      };
      allCards.push(shuffleCard);
    }

    // Add lucky cards (ganaste un match)
    for (let i = 0; i < config.luckyCount; i++) {
      const luckyCard: Card = {
        id: nextId++,
        monsterId: -200 - i,
        isFlipped: false,
        isMatched: false,
        isBonus: false,
        isShuffle: false,
        isLucky: true,
        isPico: false,
        isBuried: false,
        isOnFire: false,
        isUnpaired: false,
        backVariant: "normal",
      };
      allCards.push(luckyCard);
    }

    // Add pico cards (libera carta enterrada)
    for (let i = 0; i < config.picoCount; i++) {
      const picoCard: Card = {
        id: nextId++,
        monsterId: -300 - i,
        isFlipped: false,
        isMatched: false,
        isBonus: false,
        isShuffle: false,
        isLucky: false,
        isPico: true,
        isBuried: false,
        isOnFire: false,
        isUnpaired: false,
        backVariant: "normal",
      };
      allCards.push(picoCard);
    }

    // Add bomb cards (voltea las parejas emparejadas) - only for hard difficulty levels 6, 7, 8
    const bombCount = (config as any).bombCount || 0;
    for (let i = 0; i < bombCount; i++) {
      const bombCard: Card = {
        id: nextId++,
        monsterId: -400 - i,
        isFlipped: false,
        isMatched: false,
        isBonus: false,
        isShuffle: false,
        isLucky: false,
        isPico: false,
        isBuried: false,
        isOnFire: false,
        isUnpaired: false,
        isBomb: true,
        backVariant: "normal",
      };
      allCards.push(bombCard);
    }

    // Mark random normal cards as buried in hard difficulty
    if (difficulty === "hard" && config.buriedCount > 0) {
      const normalCards = allCards.filter(
        (c) =>
          !c.isBonus &&
          !c.isShuffle &&
          !c.isLucky &&
          !c.isPico &&
          !c.isBomb &&
          !c.isUnpaired,
      );
      const buriedIndices: number[] = [];
      while (
        buriedIndices.length < config.buriedCount &&
        buriedIndices.length < normalCards.length
      ) {
        const randomIndex = Math.floor(
          Math.random() * normalCards.length,
        );
        if (!buriedIndices.includes(randomIndex)) {
          buriedIndices.push(randomIndex);
          normalCards[randomIndex].isBuried = true;
        }
      }
    }

    // Assign congelada and magica variants only in medium difficulty
    if (difficulty === "medium") {
      // First, assign congelada variants
      const normalCards = allCards.filter(
        (c) =>
          !c.isBonus &&
          !c.isShuffle &&
          !c.isLucky &&
          !c.isPico &&
          !c.isBomb,
      );
      const congeladaIndices: number[] = [];
      while (
        congeladaIndices.length < config.congeladaCount &&
        congeladaIndices.length < normalCards.length
      ) {
        const randomIndex = Math.floor(
          Math.random() * normalCards.length,
        );
        if (!congeladaIndices.includes(randomIndex)) {
          congeladaIndices.push(randomIndex);
          normalCards[randomIndex].backVariant = "congelada";
          normalCards[randomIndex].isFrozen = true;
        }
      }

      // Then, assign magica variants
      const magicaIndices: number[] = [];
      while (
        magicaIndices.length < config.magicaCount &&
        magicaIndices.length < normalCards.length
      ) {
        const randomIndex = Math.floor(
          Math.random() * normalCards.length,
        );
        if (
          !congeladaIndices.includes(randomIndex) &&
          !magicaIndices.includes(randomIndex)
        ) {
          magicaIndices.push(randomIndex);
          normalCards[randomIndex].backVariant = "magica";
        }
      }
    }

    // Assign special variants for hard difficulty
    if (difficulty === "hard") {
      const normalCards = allCards.filter(
        (c) =>
          !c.isBonus &&
          !c.isShuffle &&
          !c.isLucky &&
          !c.isPico &&
          !c.isBomb &&
          !c.isBuried,
      );
      const usedIndices: number[] = [];

      // Assign congelada variants
      const congeladaIndices: number[] = [];
      while (
        congeladaIndices.length < config.congeladaCount &&
        congeladaIndices.length < normalCards.length
      ) {
        const randomIndex = Math.floor(
          Math.random() * normalCards.length,
        );
        if (!usedIndices.includes(randomIndex)) {
          usedIndices.push(randomIndex);
          congeladaIndices.push(randomIndex);
          normalCards[randomIndex].backVariant = "congelada";
        }
      }

      // Assign magica variants
      const magicaIndices: number[] = [];
      while (
        magicaIndices.length < config.magicaCount &&
        magicaIndices.length < normalCards.length
      ) {
        const randomIndex = Math.floor(
          Math.random() * normalCards.length,
        );
        if (!usedIndices.includes(randomIndex)) {
          usedIndices.push(randomIndex);
          magicaIndices.push(randomIndex);
          normalCards[randomIndex].backVariant = "magica";
        }
      }

      // Assign nube variants
      const nubeIndices: number[] = [];
      while (
        nubeIndices.length < config.nubeCount &&
        nubeIndices.length < normalCards.length
      ) {
        const randomIndex = Math.floor(
          Math.random() * normalCards.length,
        );
        if (!usedIndices.includes(randomIndex)) {
          usedIndices.push(randomIndex);
          nubeIndices.push(randomIndex);
          normalCards[randomIndex].backVariant = "nube";
        }
      }

      // Assign fuego (isOnFire)
      const fuegoIndices: number[] = [];
      while (
        fuegoIndices.length < config.fuegoCount &&
        fuegoIndices.length < normalCards.length
      ) {
        const randomIndex = Math.floor(
          Math.random() * normalCards.length,
        );
        if (!usedIndices.includes(randomIndex)) {
          usedIndices.push(randomIndex);
          fuegoIndices.push(randomIndex);
          normalCards[randomIndex].isOnFire = true;
        }
      }
    }

    allCards = allCards.sort(() => Math.random() - 0.5);

    // Calculate max score based on number of pairs
    const calculatedMaxScore = config.pairs * MATCH_POINTS;
    setMaxScore(calculatedMaxScore);
    setExpectedPairs(config.pairs);

    // Reset game state BEFORE setting cards to prevent victory detection on initialization
    setGameStarted(false);
    setGameWon(false);
    setShowGameOverModal(false);
    setBonusActive(false);
    setFlippedCards([]);
    setScore(0);
    setErrors(0);
    // Set time based on game mode: contrareloj starts at config.time, normal starts at 0
    setTime(gameMode === "contrareloj" ? config.time : 0);
    setCards(allCards);
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    initGame();
  }, [level]);

  useEffect(() => {
    if (!gameStarted || gameWon) return;

    // In contrareloj mode, stop if time reaches 0
    if (gameMode === "contrareloj" && time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (gameMode === "contrareloj") {
          // Count down from 60 to 0
          if (prev <= 1) {
            setGameStarted(false);
            setShowGameOverModal(true);
            return 0;
          }
          return prev - 1;
        } else {
          // Count up from 0 in normal mode
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameWon, time, gameMode]);

  useEffect(() => {
    // Filter only normal cards (cards that are part of pairs)
    const normalCards = cards.filter(
      (card) =>
        !card.isBonus &&
        !card.isShuffle &&
        !card.isLucky &&
        !card.isPico &&
        !card.isBomb &&
        !card.isUnpaired,
    );

    console.log("Victory check:", {
      gameStarted,
      normalCardsCount: normalCards.length,
      expectedPairsCount: expectedPairs * 2,
      allMatched: normalCards.every((card) => card.isMatched),
      matchedCount: normalCards.filter((c) => c.isMatched)
        .length,
    });

    // Check victory condition: game must be started, normal cards must exist and match expected pairs, and all must be matched
    if (
      gameStarted &&
      normalCards.length > 0 &&
      normalCards.length === expectedPairs * 2 &&
      normalCards.every((card) => card.isMatched)
    ) {
      console.log("VICTORY DETECTED!");
      setGameWon(true);
      setShowGameOverModal(true);
      setGameStarted(false);
    }
  }, [cards, gameStarted, expectedPairs]);

  // Check for frozen cards every second
  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      const now = Date.now();
      setCards((prev) =>
        prev.map((card) => {
          if (
            card.isFrozen &&
            card.frozenUntil &&
            now >= card.frozenUntil
          ) {
            return {
              ...card,
              isFrozen: false,
              frozenUntil: undefined,
              backVariant: "normal",
            };
          }
          return card;
        }),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted]);

  // Set frozenUntil for congelada cards in medium difficulty when game starts
  useEffect(() => {
    if (gameStarted && difficulty === "medium") {
      const now = Date.now();
      const freezeUntil = now + 10000; // 10 seconds for medium
      
      setCards((prev) =>
        prev.map((card) => {
          if (card.backVariant === "congelada" && card.isFrozen && !card.frozenUntil) {
            return {
              ...card,
              frozenUntil: freezeUntil,
            };
          }
          return card;
        }),
      );
    }
  }, [gameStarted, difficulty]);

  const handleCardClick = (cardId: number) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    const clickedCard = cards.find((c) => c.id === cardId);

    if (
      !clickedCard ||
      clickedCard.isFlipped ||
      clickedCard.isMatched
    )
      return;

    // If card is frozen or buried, don't allow it to be flipped (unless it's a special card)
    if (
      clickedCard.isFrozen &&
      !clickedCard.isBonus &&
      !clickedCard.isShuffle &&
      !clickedCard.isLucky &&
      !clickedCard.isPico &&
      !clickedCard.isBomb
    )
      return;
    if (clickedCard.isBuried) return;

    // Handle fire card - first click extinguishes the fire
    if (clickedCard.isOnFire) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === cardId
            ? { ...card, isOnFire: false }
            : card,
        ),
      );
      return;
    }

    // Prevent flipping more cards if there are already 2 cards flipped
    if (flippedCards.length >= 2) return;

    if (clickedCard.isBonus && !bonusActive) {
      setBonusActive(true);

      // Reset flippedCards to avoid inconsistencies
      setFlippedCards([]);

      setCards((prev) =>
        prev.map((card) =>
          card.isBonus
            ? { ...card, isMatched: true }
            : card.isMatched
              ? card
              : { ...card, isFlipped: true },
        ),
      );

      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.isBonus
              ? card
              : card.isMatched
                ? card
                : { ...card, isFlipped: false },
          ),
        );
        setBonusActive(false);
        // Reset flippedCards again after bonus ends
        setFlippedCards([]);
      }, 3000);

      return;
    }

    // Handle shuffle card
    if (clickedCard.isShuffle) {
      // Reset flippedCards to avoid inconsistencies
      setFlippedCards([]);

      setCards((prev) => {
        const unmatchedCards = prev.filter(
          (card) =>
            !card.isMatched &&
            !card.isBonus &&
            !card.isShuffle &&
            !card.isLucky &&
            !card.isPico &&
            !card.isBomb,
        );
        const specialCards = prev.filter(
          (card) =>
            card.isMatched ||
            card.isBonus ||
            card.isShuffle ||
            card.isLucky ||
            card.isPico ||
            card.isBomb,
        );

        // Mark shuffle card as matched
        const updatedSpecialCards = specialCards.map((card) =>
          card.isShuffle ? { ...card, isMatched: true } : card,
        );

        // Shuffle unmatched cards and flip them face down (but preserve frozen and buried state)
        const shuffled = unmatchedCards
          .map((card) => ({ ...card, isFlipped: false }))
          .sort(() => Math.random() - 0.5);

        return [...shuffled, ...updatedSpecialCards].sort(
          () => Math.random() - 0.5,
        );
      });

      return;
    }

    // Handle lucky card - automatically match a random pair
    if (clickedCard.isLucky) {
      // Reset flippedCards to avoid inconsistencies
      setFlippedCards([]);

      // Find all unmatched non-special cards (excluding buried cards)
      const unmatchedCards = cards.filter(
        (card) =>
          !card.isMatched &&
          !card.isBonus &&
          !card.isShuffle &&
          !card.isLucky &&
          !card.isPico &&
          !card.isBomb &&
          !card.isBuried &&
          !card.isUnpaired,
      );

      // Group cards by monsterId to find pairs
      const cardsByMonsterId: { [key: number]: Card[] } = {};
      unmatchedCards.forEach((card) => {
        if (!cardsByMonsterId[card.monsterId]) {
          cardsByMonsterId[card.monsterId] = [];
        }
        cardsByMonsterId[card.monsterId].push(card);
      });

      // Find a random pair (cards with same monsterId and count = 2)
      const pairGroups = Object.entries(
        cardsByMonsterId,
      ).filter(([_, cards]) => cards.length === 2);

      if (pairGroups.length > 0) {
        const randomPairIndex = Math.floor(
          Math.random() * pairGroups.length,
        );
        const [_, pairCards] = pairGroups[randomPairIndex];

        // Mark the lucky card as matched
        setCards((prev) =>
          prev.map((card) =>
            card.id === cardId
              ? { ...card, isMatched: true, isFlipped: true }
              : card,
          ),
        );

        // Show the pair cards
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              pairCards.some((pc) => pc.id === card.id)
                ? { ...card, isFlipped: true, isMatching: true }
                : card,
            ),
          );

          // After 0.5 seconds, mark them as matched and add score
          setTimeout(() => {
            setCards((prev) =>
              prev.map((card) =>
                pairCards.some((pc) => pc.id === card.id)
                  ? {
                      ...card,
                      isMatched: true,
                      isFlipped: true,
                      isMatching: false,
                    }
                  : card,
              ),
            );
            setScore((prev) => prev + MATCH_POINTS);
          }, 500);
        }, 300);
      } else {
        // No pairs available, just mark lucky card as matched
        setCards((prev) =>
          prev.map((card) =>
            card.id === cardId
              ? { ...card, isMatched: true, isFlipped: true }
              : card,
          ),
        );
      }

      return;
    }

    // Handle pico card - unbury all buried cards
    if (clickedCard.isPico) {
      // Mark pico card as matched and unbury all buried cards
      setCards((prev) =>
        prev.map((card) =>
          card.isPico
            ? { ...card, isMatched: true, isFlipped: true }
            : card.isBuried
              ? { ...card, isBuried: false }
              : card,
        ),
      );

      return;
    }

    // Handle bomb card - flip matched pairs back (all in hard mode, 1 pair in medium mode)
    if (clickedCard.isBomb) {
      // Get currently flipped cards to flip them back too
      const currentlyFlippedIds = flippedCards;
      
      // Reset flippedCards to avoid inconsistencies
      setFlippedCards([]);

      if (difficulty === "medium") {
        // Medium mode: flip only 1 random matched pair back + currently flipped cards
        const matchedPairs = cards.filter(
          (card) =>
            card.isMatched &&
            !card.isBonus &&
            !card.isShuffle &&
            !card.isLucky &&
            !card.isPico &&
            !card.isBomb &&
            !card.isUnpaired,
        );

        // Group matched cards by monsterId to find complete pairs
        const pairGroups = new Map<number, Card[]>();
        matchedPairs.forEach((card) => {
          if (!pairGroups.has(card.monsterId)) {
            pairGroups.set(card.monsterId, []);
          }
          pairGroups.get(card.monsterId)!.push(card);
        });

        // Filter to get only complete pairs (2 cards with same monsterId)
        const completePairs = Array.from(
          pairGroups.values(),
        ).filter((group) => group.length === 2);

        if (completePairs.length > 0) {
          // Select a random pair to flip back
          const randomPair =
            completePairs[
              Math.floor(Math.random() * completePairs.length)
            ];
          const pairIds = randomPair.map((card) => card.id);

          // Mark bomb card as matched, flip the selected pair back, and flip currently flipped cards back
          setCards((prev) =>
            prev.map((card) => {
              if (card.isBomb) {
                return {
                  ...card,
                  isMatched: true,
                  isFlipped: true,
                };
              } else if (pairIds.includes(card.id) || currentlyFlippedIds.includes(card.id)) {
                return {
                  ...card,
                  isMatched: false,
                  isFlipped: false,
                };
              }
              return card;
            }),
          );
        } else {
          // No pairs to flip back, just mark bomb as matched and flip currently flipped cards back
          setCards((prev) =>
            prev.map((card) => {
              if (card.isBomb) {
                return { ...card, isMatched: true, isFlipped: true };
              } else if (currentlyFlippedIds.includes(card.id)) {
                return { ...card, isFlipped: false };
              }
              return card;
            }),
          );
        }
      } else {
        // Hard mode: flip all matched pairs back + currently flipped cards
        setCards((prev) =>
          prev.map((card) => {
            if (card.isBomb) {
              // Mark bomb as matched
              return {
                ...card,
                isMatched: true,
                isFlipped: true,
              };
            } else if (
              (card.isMatched &&
              !card.isBonus &&
              !card.isShuffle &&
              !card.isLucky &&
              !card.isPico &&
              !card.isBomb &&
              !card.isUnpaired) ||
              currentlyFlippedIds.includes(card.id)
            ) {
              // Flip matched pairs back (unmatched) + currently flipped cards - excluding unpaired cards
              return {
                ...card,
                isMatched: false,
                isFlipped: false,
              };
            }
            return card;
          }),
        );
      }

      return;
    }

    // Handle magic card effect
    if (
      clickedCard.backVariant === "magica" &&
      !clickedCard.isUnpaired
    ) {
      const pairCard = cards.find(
        (c) =>
          c.id !== cardId &&
          c.monsterId === clickedCard.monsterId &&
          !c.isMatched &&
          !c.isUnpaired &&
          !c.isFrozen &&
          c.backVariant !== "congelada",
      );

      if (pairCard) {
        if (difficulty === "hard") {
          // Hard mode: show magic hint on pair card
          setCards((prev) =>
            prev.map((card) =>
              card.id === cardId
                ? { ...card, backVariant: "normal" }
                : card.id === pairCard.id
                  ? { ...card, showingMagicHint: true }
                  : card,
            ),
          );

          // After 1.5 seconds, hide the magic hint
          setTimeout(() => {
            setCards((prev) =>
              prev.map((card) =>
                card.id === pairCard.id && !card.isMatched
                  ? { ...card, showingMagicHint: false }
                  : card,
              ),
            );
          }, 1500);
        } else {
          // Medium mode: show the pair card temporarily (flip it)
          setCards((prev) =>
            prev.map((card) =>
              card.id === pairCard.id
                ? { ...card, isFlipped: true }
                : card,
            ),
          );

          // After 0.5 seconds, flip back the pair card
          setTimeout(() => {
            setCards((prev) =>
              prev.map((card) =>
                card.id === pairCard.id && !card.isMatched
                  ? { ...card, isFlipped: false }
                  : card,
              ),
            );
          }, 500);
        }

        // Continue with normal flow - don't return here
      }
    }

    // Handle nube (cloud) card effect - show 3 possible locations: 2 wrong, 1 correct (hard only)
    if (
      clickedCard.backVariant === "nube" &&
      difficulty === "hard" &&
      !clickedCard.isUnpaired
    ) {
      const pairCard = cards.find(
        (c) =>
          c.id !== cardId &&
          c.monsterId === clickedCard.monsterId &&
          !c.isMatched &&
          !c.isUnpaired,
      );

      if (pairCard) {
        // Get all other unmatched cards (potential decoys)
        const otherCards = cards.filter(
          (c) =>
            c.id !== cardId &&
            c.id !== pairCard.id &&
            !c.isMatched &&
            !c.isBonus &&
            !c.isShuffle &&
            !c.isLucky &&
            !c.isPico,
        );

        // Randomly select 2 decoy cards
        const shuffledDecoys = otherCards.sort(
          () => Math.random() - 0.5,
        );
        const decoys = shuffledDecoys.slice(0, 2);

        // Combine pair + decoys and show hint cards
        const cardsToShow = [pairCard, ...decoys];

        // Change nube card to normal backVariant and show hints
        setCards((prev) =>
          prev.map((card) =>
            card.id === cardId
              ? { ...card, backVariant: "normal" }
              : cardsToShow.some((c) => c.id === card.id)
                ? { ...card, showingHint: true }
                : card,
          ),
        );

        // After 3 seconds, hide the hints
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              cardsToShow.some((c) => c.id === card.id) &&
              !card.isMatched
                ? { ...card, showingHint: false }
                : card,
            ),
          );
        }, 3000);
      } else {
        // No pair available, just change to normal backVariant
        setCards((prev) =>
          prev.map((card) =>
            card.id === cardId
              ? { ...card, backVariant: "normal" }
              : card,
          ),
        );
      }

      // Continue with normal flow - don't return here
    }

    // Handle frozen card effect - freeze this specific card for 20 seconds (hard only)
    // In medium, cards are frozen from the start for 10 seconds
    if (
      clickedCard.backVariant === "congelada" &&
      !clickedCard.isFrozen &&
      difficulty === "hard"
    ) {
      const now = Date.now();
      const freezeUntil = now + 20000; // 20 seconds for hard

      // Freeze only this specific card - it stays face down and can't be flipped
      setCards((prev) =>
        prev.map((card) =>
          card.id === cardId
            ? {
                ...card,
                isFrozen: true,
                frozenUntil: freezeUntil,
              }
            : card,
        ),
      );

      return;
    }

    setCards((prev) =>
      prev.map((card) =>
        card.id === cardId
          ? { ...card, isFlipped: true }
          : card,
      ),
    );

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (
        firstCard &&
        secondCard &&
        firstCard.monsterId === secondCard.monsterId &&
        !firstCard.isUnpaired &&
        !secondCard.isUnpaired
      ) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatching: true }
              : card,
          ),
        );

        setTimeout(() => {
          // Check if one of the matched cards is a bomb
          const isBombMatch = firstCard.isBomb || secondCard.isBomb;
          
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? {
                    ...card,
                    isMatched: true,
                    isFlipped: true,
                    isMatching: false,
                    showingHint: false,
                    showingMagicHint: false,
                  }
                : card,
            ),
          );
          setFlippedCards([]);
          setScore((prev) => prev + MATCH_POINTS);
          
          // If bomb was matched, activate bomb effect after a short delay (excluding the pair that just matched)
          if (isBombMatch) {
            setTimeout(() => {
              if (difficulty === "medium") {
                // Medium mode: flip only 1 random matched pair back (excluding the bomb pair)
                setCards((prevCards) => {
                  const matchedPairs = prevCards.filter(
                    (card) =>
                      card.isMatched &&
                      !card.isBonus &&
                      !card.isShuffle &&
                      !card.isLucky &&
                      !card.isPico &&
                      !card.isBomb &&
                      !card.isUnpaired &&
                      card.id !== firstId &&
                      card.id !== secondId, // Exclude the bomb pair
                  );

                  // Group matched cards by monsterId to find complete pairs
                  const pairGroups = new Map<number, Card[]>();
                  matchedPairs.forEach((card) => {
                    if (!pairGroups.has(card.monsterId)) {
                      pairGroups.set(card.monsterId, []);
                    }
                    pairGroups.get(card.monsterId)!.push(card);
                  });

                  // Filter to get only complete pairs (2 cards with same monsterId)
                  const completePairs = Array.from(pairGroups.values()).filter(
                    (group) => group.length === 2,
                  );

                  if (completePairs.length > 0) {
                    // Select a random pair to flip back
                    const randomPair =
                      completePairs[Math.floor(Math.random() * completePairs.length)];
                    const pairIds = randomPair.map((card) => card.id);

                    // Flip only the selected pair back
                    return prevCards.map((card) => {
                      if (pairIds.includes(card.id)) {
                        return {
                          ...card,
                          isMatched: false,
                          isFlipped: false,
                        };
                      }
                      return card;
                    });
                  }
                  
                  return prevCards;
                });
              } else {
                // Hard mode: flip all matched pairs back (excluding the bomb pair)
                setCards((prevCards) =>
                  prevCards.map((card) => {
                    if (
                      card.isMatched &&
                      !card.isBonus &&
                      !card.isShuffle &&
                      !card.isLucky &&
                      !card.isPico &&
                      !card.isBomb &&
                      !card.isUnpaired &&
                      card.id !== firstId &&
                      card.id !== secondId // Exclude the bomb pair
                    ) {
                      // Flip matched pairs back (unmatched)
                      return {
                        ...card,
                        isMatched: false,
                        isFlipped: false,
                      };
                    }
                    return card;
                  }),
                );
              }
            }, 300); // Small delay before bomb activates
          }
        }, 500);
      } else {
        setErrors((prev) => prev + 1);
        setScore((prev) => Math.max(0, prev - ERROR_PENALTY));

        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              (card.id === firstId || card.id === secondId) &&
              !card.isMatched
                ? {
                    ...card,
                    isFlipped: false,
                    showingHint: false,
                    showingMagicHint: false,
                  }
                : card,
            ),
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate card scale based on level
  const getCardScale = () => {
    const isMobile = window.innerWidth < 768;
    let scale = 1.3; // Default scale

    if (level <= 2) scale = 1.3;
    else if (level === 3 && difficulty === "easy")
      scale = isMobile ? 1.105 : 1.105; // 15% smaller for easy mode
    else if (level === 3 && difficulty === "medium")
      scale = isMobile ? 0.79515 : 0.837; // 10% smaller (0.8835*0.9 / 0.93*0.9)
    else if (level === 4 && difficulty === "easy")
      scale = isMobile ? 0.935 : 1.152; // Easy level 4: mobile 10% larger (0.85*1.10), desktop 10% larger
    else if (level === 4 && difficulty === "medium")
      scale = isMobile ? 0.95418 : 1.0044; // 20% larger than medium level 3
    else if (level === 4 && difficulty === "hard")
      scale = isMobile ? 0.8064 : 0.8736; // Hard level 4: desktop 20% smaller
    else if (level === 4)
      scale = isMobile ? 0.672 : 0.91; // 30% smaller
    else if (level === 5 && difficulty === "easy")
      scale = isMobile ? 0.935 : 1.105; // Easy level 5: mobile 10% larger (0.85*1.10), desktop 15% smaller (1.3 * 0.85)
    else if (level === 5 && difficulty === "medium")
      scale = isMobile ? 0.72576 : 0.74256; // Medium level 5: desktop 15% smaller
    else if (level === 5 && difficulty === "hard")
      scale = isMobile ? 0.8064 : 0.8736; // Hard level 5: desktop 20% smaller
    else if (level === 5)
      scale = isMobile ? 0.672 : 0.91; // 30% smaller
    else if (level === 6 && difficulty === "easy")
      scale = isMobile ? 0.8415 : 1.0625; // Easy level 6: mobile 10% larger (0.765*1.10), desktop 15% smaller
    else if (level === 6 && difficulty === "medium")
      scale = isMobile ? 0.99792 : 1.1781; // Medium level 6: desktop 15% smaller
    else if (level === 6 && difficulty === "hard")
      scale = isMobile ? 0.864 : 0.96; // Hard level 6: desktop 20% smaller
    else if (level === 6) scale = isMobile ? 0.72 : 1.0;
    else if (level === 7 && difficulty === "easy")
      scale = isMobile ? 0.924 : 0.85; // Easy level 7: mobile 10% larger (0.84*1.10)
    else if (level === 7 && difficulty === "medium")
      scale = isMobile ? 0.75 : 0.75; // 20% larger than standard medium
    else if (level === 7) scale = isMobile ? 0.84 : 0.85;
    else if (level === 8 && difficulty === "easy")
      scale = isMobile ? 0.8272 : 0.8648; // mobile: 10% larger (0.752*1.10), desktop: 15% larger
    else if (level === 8 && difficulty === "medium")
      scale = isMobile ? 0.7128 : 0.6852; // 20% larger
    else if (level === 8 && difficulty === "hard")
      scale = isMobile ? 0.90168 : 0.867; // 15% smaller (1.0608*0.85 / 1.02*0.85)
    else if (level === 8)
      scale = isMobile ? 1.0608 : 1.02; // 60% larger
    else scale = isMobile ? 0.78 : 0.75;

    // Reduce by 30% for medium difficulty (except level 3, 5, 7, and 8 which already have custom scale)
    if (
      difficulty === "medium" &&
      level !== 3 &&
      level !== 5 &&
      level !== 7 &&
      level !== 8
    ) {
      scale = scale * 0.7;
    }

    // Reduce by 30% for hard difficulty levels 1 and 2
    if (difficulty === "hard" && (level === 1 || level === 2)) {
      scale = scale * 0.7;
    }

    return scale;
  };

  // Get grid layout based on number of cards
  const getGridLayout = () => {
    const totalCards = cards.length;

    // Custom layouts based on difficulty and level
    if (difficulty === "easy" && level === 1) {
      // Special layout for Easy Level 1: 1-2-1 pattern (4 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 4],
      ];
    }

    if (difficulty === "easy" && level === 2) {
      // Special layout for Easy Level 2: 2-1-2-1 pattern (6 cards)
      return [
        [0, 2],
        [2, 3],
        [3, 5],
        [5, 6],
      ];
    }

    if (difficulty === "easy" && level === 3) {
      // Special layout for Easy Level 3: 2-1-2-1-2 pattern (8 cards)
      return [
        [0, 2],
        [2, 3],
        [3, 5],
        [5, 6],
        [6, 8],
      ];
    }

    if (difficulty === "easy" && level === 4) {
      // Special layout for Easy Level 4: 1-2-3-2-1 pattern (9 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 9],
      ];
    }

    if (difficulty === "easy" && level === 5) {
      // Special layout for Easy Level 5: 2-3-2-3-2 pattern (12 cards)
      return [
        [0, 2],
        [2, 5],
        [5, 7],
        [7, 10],
        [10, 12],
      ];
    }

    if (difficulty === "easy" && level === 7) {
      // Special layout for Easy Level 7: 1-2-3-2-3-2-1 pattern (14 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 11],
        [11, 13],
        [13, 14],
      ];
    }

    if (difficulty === "easy" && level === 8) {
      // Special layout for Easy Level 8: 1-2-3-2-3-2-3 pattern (16 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 11],
        [11, 13],
        [13, 16],
      ];
    }

    if (difficulty === "medium" && level === 1) {
      // Special layout for Medium Level 1: 1-2-3-2-3-2-3 pattern (16 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 11],
        [11, 13],
        [13, 16],
      ];
    }

    if (difficulty === "medium" && level === 2) {
      // Special layout for Medium Level 2: 2-3-2-3-2-3-2 pattern (17 cards)
      return [
        [0, 2],
        [2, 5],
        [5, 7],
        [7, 10],
        [10, 12],
        [12, 15],
        [15, 17],
      ];
    }

    if (difficulty === "medium" && level === 3) {
      // Special layout for Medium Level 3: 1-2-3-2-3-2-3-2-1 pattern (19 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 11],
        [11, 13],
        [13, 16],
        [16, 18],
        [18, 19],
      ];
    }

    if (difficulty === "medium" && level === 4) {
      // Special layout for Medium Level 4: 1-2-3-2-3-2-3-2-3 pattern (21 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 11],
        [11, 13],
        [13, 16],
        [16, 18],
        [18, 21],
      ];
    }

    if (difficulty === "medium" && level === 5) {
      // Special layout for Medium Level 5: 3-4-3-4-3-4-3-4 pattern (28 cards)
      return [
        [0, 3],
        [3, 7],
        [7, 10],
        [10, 14],
        [14, 17],
        [17, 21],
        [21, 24],
        [24, 28],
      ];
    }

    if (difficulty === "medium" && level === 6) {
      // Special layout for Medium Level 6: 3-4-3-4-3-4-3-2 pattern (26 cards)
      return [
        [0, 3],
        [3, 7],
        [7, 10],
        [10, 14],
        [14, 17],
        [17, 21],
        [21, 24],
        [24, 26],
      ];
    }

    if (difficulty === "medium" && level === 7) {
      // Special layout for Medium Level 7: 3-4-3-4-3-4-3-4 pattern (28 cards)
      return [
        [0, 3],
        [3, 7],
        [7, 10],
        [10, 14],
        [14, 17],
        [17, 21],
        [21, 24],
        [24, 28],
      ];
    }

    if (difficulty === "medium" && level === 8) {
      // Special layout for Medium Level 8: 2-3-4-3-4-3-4-3-4 pattern (30 cards)
      return [
        [0, 2],
        [2, 5],
        [5, 9],
        [9, 12],
        [12, 16],
        [16, 19],
        [19, 23],
        [23, 26],
        [26, 30],
      ];
    }

    if (difficulty === "hard" && level === 1) {
      // Special layout for Hard Level 1: 1-2-3-2-3-2-1 pattern (14 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 11],
        [11, 13],
        [13, 14],
      ];
    }

    if (difficulty === "hard" && level === 2) {
      // Special layout for Hard Level 2: 1-2-3-2-3-2-1 pattern (14 cards)
      return [
        [0, 1],
        [1, 3],
        [3, 6],
        [6, 8],
        [8, 11],
        [11, 13],
        [13, 14],
      ];
    }

    if (difficulty === "hard" && level === 3) {
      // Special layout for Hard Level 3: 3-2-3-2-3-2-1 pattern (16 cards)
      return [
        [0, 3],
        [3, 5],
        [5, 8],
        [8, 10],
        [10, 13],
        [13, 15],
        [15, 16],
      ];
    }

    if (difficulty === "hard" && level === 4) {
      // Special layout for Hard Level 4: 2-3-2-3-2-3 pattern (15 cards)
      return [
        [0, 2],
        [2, 5],
        [5, 7],
        [7, 10],
        [10, 12],
        [12, 15],
      ];
    }

    if (difficulty === "hard" && level === 5) {
      // Special layout for Hard Level 5: 3-2-3-2-3-2-1 pattern (16 cards)
      return [
        [0, 3],
        [3, 5],
        [5, 8],
        [8, 10],
        [10, 13],
        [13, 15],
        [15, 16],
      ];
    }

    if (difficulty === "hard" && level === 6) {
      // Special layout for Hard Level 6: 2-3-2-3-2-3 pattern (15 cards)
      return [
        [0, 2],
        [2, 5],
        [5, 7],
        [7, 10],
        [10, 12],
        [12, 15],
      ];
    }

    if (difficulty === "hard" && level === 7) {
      // Special layout for Hard Level 7: 3-4-3-2-3-2-1 pattern (18 cards)
      return [
        [0, 3],
        [3, 7],
        [7, 10],
        [10, 12],
        [12, 15],
        [15, 17],
        [17, 18],
      ];
    }

    if (difficulty === "hard" && level === 8) {
      // Special layout for Hard Level 8: 3-4-3-4-3-4-3 pattern (24 cards)
      return [
        [0, 3],
        [3, 7],
        [7, 10],
        [10, 14],
        [14, 17],
        [17, 21],
        [21, 24],
      ];
    }

    if (totalCards === 13)
      return [
        [0, 3],
        [3, 5],
        [5, 8],
        [8, 10],
        [10, 13],
      ];
    if (totalCards === 5)
      return [
        [0, 3],
        [3, 5],
      ];
    if (totalCards === 7)
      return [
        [0, 3],
        [3, 5],
        [5, 7],
      ];

    // Default pattern for larger amounts
    return [
      [0, 3],
      [3, 5],
      [5, 8],
      [8, 10],
      [10, totalCards],
    ];
  };

  const cardScale = getCardScale();
  const gridLayout = getGridLayout();

  return (
    <div
      className="bg-gradient-to-b from-[#1c101d] min-h-screen to-[#4b294f]"
      data-name="Nivel facil"
    >
      {isLoading && (
        <LoadingScreen
          theme={theme}
          onLoadingComplete={handleLoadingComplete}
        />
      )}

      {/* Header - Desktop */}
      {!isLoading && (
        <div className="hidden min-[907px]:block sticky top-0 z-50">
          <div className="relative h-[210px] w-full">
            {/* Back Button */}
            <div
              className="absolute bg-[#4b294f] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%-129px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)] size-[75px] top-[23px] translate-x-[-50%] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onBack}
            >
              <div
                className="mb-[-2px] relative shrink-0 size-[24px]"
                data-name="Arrow left"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="Arrow left">
                    <path
                      d={svgPathsBackButton.pbf7d180}
                      id="Icon"
                      stroke="var(--stroke-0, #F3F3F4)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p
                className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Salir
              </p>
            </div>

            {/* Settings Button */}
            <div
              className="absolute bg-[#f3f3f4] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%+130px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)] size-[75px] top-[23px] translate-x-[-50%] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onOpenConfig}
            >
              <div
                className="mb-[-2px] relative shrink-0 size-[24px]"
                data-name="Settings"
              >
                <Settings
                  className="size-full text-[#23252D]"
                  strokeWidth={2}
                />
              </div>
              <p
                className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Ajustes
              </p>
            </div>

            {/* Timer Value */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#f3f3f4] text-[32px] text-nowrap top-[158px] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {formatTime(time)}
            </p>

            {/* Score Value */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[158px] translate-x-[-100%] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {score}
            </p>

            {/* TIEMPO Label */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#b784c7] text-[14px] text-nowrap top-[130px] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              TIEMPO
            </p>

            {/* PUNTOS Label */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#b784c7] text-[14px] text-nowrap text-right top-[130px] translate-x-[-100%] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              PUNTOS
            </p>
          </div>
        </div>
      )}

      {/* Header - Mobile */}
      {!isLoading && (
        <div className="block min-[907px]:hidden sticky top-0 z-50">
          <div className="relative h-[140px] w-full">
            {/* Back Button - Mobile */}
            <button
              className="absolute bg-[#4b294f] content-stretch flex gap-[4px] items-center left-[16px] p-[8px] rounded-[12px] top-[17px] cursor-pointer hover:opacity-80 transition-opacity shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)]"
              onClick={onBack}
            >
              <div className="relative shrink-0 size-[24px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="Arrow left">
                    <path
                      d={svgPathsHeaderMobile.pbf7d180}
                      id="Icon"
                      stroke="var(--stroke-0, #F3F3F4)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p
                className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Salir
              </p>
            </button>

            {/* Settings Button - Mobile */}
            <button
              className="absolute bg-white content-stretch flex gap-[4px] items-center right-[16px] p-[8px] rounded-[12px] top-[17px] cursor-pointer hover:opacity-80 transition-opacity shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)]"
              onClick={onOpenConfig}
            >
              <div className="relative shrink-0 size-[24px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g
                    clipPath="url(#clip0_mobile_settings)"
                    id="Settings"
                  >
                    <g id="Icon">
                      <path
                        d={svgPathsHeaderMobile.p3cccb600}
                        stroke="var(--stroke-0, #23252D)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d={svgPathsHeaderMobile.p3737f500}
                        stroke="var(--stroke-0, #23252D)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_mobile_settings">
                      <rect
                        fill="white"
                        height="24"
                        width="24"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p
                className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Ajustes
              </p>
            </button>

            {/* TIEMPO Label - Mobile */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[16px] text-[#b784c7] text-[14px] text-nowrap top-[70px] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              TIEMPO
            </p>

            {/* Timer Value - Mobile */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[16px] text-[#f3f3f4] text-[32px] text-nowrap top-[92px] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {formatTime(time)}
            </p>

            {/* PUNTOS Label - Mobile */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] right-[16px] text-[#b784c7] text-[14px] text-nowrap text-right top-[70px] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              PUNTOS
            </p>

            {/* Score Value - Mobile */}
            <p
              className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] right-[16px] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[92px] whitespace-pre"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {score}
            </p>
          </div>
        </div>
      )}

      {/* Cards Grid */}
      <div
        className={`box-border content-stretch flex flex-col items-center pb-[16.193px] px-0 w-full min-h-[calc(100vh-140px)] min-[907px]:min-h-[calc(100vh-210px)] ${difficulty === "hard" && (level === 4 || level === 5 || level === 6) ? "-mt-[100px] min-[907px]:-mt-[20px]" : difficulty === "hard" && (level === 7 || level === 8) ? "-mt-[50px]" : difficulty === "hard" ? "-mt-[100px]" : difficulty === "easy" && level === 7 ? "-mt-[80px]" : difficulty === "easy" && level === 8 ? "-mt-[120px] min-[907px]:-mt-[100px]" : difficulty === "medium" && level === 1 ? "-mt-[100px]" : difficulty === "medium" && level === 2 ? "-mt-[50px]" : difficulty === "medium" && level === 3 ? "-mt-[130px]" : difficulty === "medium" && level === 4 ? "-mt-[200px]" : difficulty === "medium" && level === 5 ? "-mt-[100px]" : difficulty === "medium" && level === 6 ? "-mt-[80px]" : difficulty === "medium" && level === 7 ? "-mt-[80px]" : difficulty === "medium" && level === 8 ? "-mt-[150px]" : "pt-[60px] min-[907px]:pt-[80px]"}`}
      >
        <div
          className="content-stretch flex flex-col items-center gap-0"
          style={{ transform: `scale(${cardScale})` }}
        >
          {gridLayout.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="box-border content-stretch flex items-center justify-center mb-[-16.193px] relative shrink-0"
            >
              {cards.slice(row[0], row[1]).map((card) => (
                <GameCard
                  key={card.id}
                  card={card}
                  onClick={() => handleCardClick(card.id)}
                  difficulty={difficulty}
                  theme={theme}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {showGameOverModal && (
        <GameOverModal
          score={score}
          maxScore={maxScore}
          onRestart={initGame}
          onNextLevel={() =>
            onLevelComplete && onLevelComplete(score)
          }
          onClose={() => {
            // If the game was won, save progress before closing
            if (gameWon && onLevelComplete) {
              onLevelComplete(score);
            }
            // Always go back to home when closing
            onBack();
          }}
        />
      )}
    </div>
  );
}