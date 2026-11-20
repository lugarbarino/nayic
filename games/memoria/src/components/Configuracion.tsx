import { useState, useEffect } from "react";
import { motion } from 'motion/react';
import clsx from "clsx";
import svgPaths from "../imports/svg-tqe50eod6j";
import imgRectangle2 from "figma:asset/704e8cde9072e44031be2e4179bb98d92d9a6814.png";
import imgRectangle3 from "figma:asset/ee07da22dbb594c480d385bbab277ee5f9b3e78d.png";
import { imgRectangle, imgRectangle1 } from "../imports/svg-wepm7";
import imgLogo from "figma:asset/f6b69c40bbf37288a58166b1e5d4d50e04581f5b.png";

// Import all monster images
import imgMagic0 from "figma:asset/af65a6d779ad9ffb6f8fc849e4acb8023cac2ac5.png";
import imgMagic1 from "figma:asset/5f42630fc9f2fdac4dcb797b2983b7807a16b9bd.png";
import imgMagic2 from "figma:asset/22c65a971d9201e6408044d03cce3296ed4c5cd3.png";
import imgMagic3 from "figma:asset/55c0eaf79060a37344cef69c4e7a84ef61229218.png";
import imgFire0 from "figma:asset/0ad9f8fffbd1b051159dcaa15cdff8b80fde40f1.png";
import imgFire1 from "figma:asset/a06513b519f5604a513f1b91bcf5b61a60f8b049.png";
import imgFire2 from "figma:asset/9d74cf04065b1ce21061c268b9d6833d15ff5f58.png";
import imgFire3 from "figma:asset/96c7f51c8db5eea5ae738be5889dd4677fe92c99.png";
import imgAir0 from "figma:asset/5c2a56a901e588f9f288cad402766086a22af861.png";
import imgAir1 from "figma:asset/825ac1546f4f57f1386f85390c0889c926fa9635.png";
import imgAir2 from "figma:asset/108b868a9d2393bf0c16bce027c452b8b6ad5dd8.png";
import imgAir3 from "figma:asset/e0dd7e31b3e4cccc8d5ccf0ddcc98e4f8f1a5623.png";
import imgEarth0 from "figma:asset/2ea0a6dc9b74eef85181e9bbd2b122330f1f8fb0.png";
import imgEarth1 from "figma:asset/4a2b135737074149266e6ece739bb8f33ce0bc87.png";
import imgEarth2 from "figma:asset/4176e2274cbc16ca7e488b2d23dd1d3baa2828d4.png";
import imgEarth3 from "figma:asset/a108f64bcb4c61dd385fe2d7bec67eacf101c137.png";
import imgWater0 from "figma:asset/c124aeeff71195e2741c10aaa742d0638959f0e0.png";
import imgWater1 from "figma:asset/e54788218f1f3160d3012bf4e5afff6f279de761.png";
import imgWater2 from "figma:asset/b9ad0b9075cdadbbff004bf46642476831796eea.png";
import imgWater3 from "figma:asset/348507b98d57ae6f40533ac96601aa54695ec09e.png";

// Import all animal images
import imgAnimalMagic0 from "figma:asset/5a42a1360e6f36724db5fd586fb7dd74bccaf8ce.png";
import imgAnimalMagic1 from "figma:asset/6e74338e2d82695a535e15354690749d1ff01a12.png";
import imgAnimalMagic2 from "figma:asset/ee93da8983f75f0c0d98f8013dcfba8218fccfd0.png";
import imgAnimalMagic3 from "figma:asset/6da72c53607584eeaf7e9a26be7212023b1cf5f9.png";
import imgAnimalFire0 from "figma:asset/3de83ad4959ced8fbc59b16c1e9e40de04f8e202.png";
import imgAnimalFire1 from "figma:asset/8a37522abe8dccc9c8164a97e22698a7df1a947e.png";
import imgAnimalFire2 from "figma:asset/6640b647d80dcfdaa284b38307837b0c4fd610c5.png";
import imgAnimalFire3 from "figma:asset/231510292369c097582cfc686c23c625cabc0adb.png";
import imgAnimalAir0 from "figma:asset/24c98c166242eb4b1cceae20c9711e1acf589057.png";
import imgAnimalAir1 from "figma:asset/e914398db67555570a0fd49c27fc3b0e844cd34f.png";
import imgAnimalAir2 from "figma:asset/0319b66584ea434c23c97208b1b8663d51b1162b.png";
import imgAnimalAir3 from "figma:asset/72492d9aa28c72211c0a81515da9975a577d755c.png";
import imgAnimalEarth0 from "figma:asset/bd6adeae03ecbab4d9c8a779d4d5a8c49efd8865.png";
import imgAnimalEarth1 from "figma:asset/e37cacec5f7eb0ae837817e64e0db5500c2d1e25.png";
import imgAnimalEarth2 from "figma:asset/c837a14838def1b9eaad87d0974e5c76fae1c0de.png";
import imgAnimalEarth3 from "figma:asset/d1cf756b3e2f8753178a42dc90b635fff6f52f5b.png";
import imgAnimalWater0 from "figma:asset/b183c90315c6cef4645e95b4aac831a1685ee4bc.png";
import imgAnimalWater1 from "figma:asset/720ce9d4f3707e93e74b5084ec8cba632f3de704.png";
import imgAnimalWater2 from "figma:asset/d9c30f8e08b5b077e3568ceb3bf5fefbb7316b6f.png";
import imgAnimalWater3 from "figma:asset/6fa171b1f996f94638bec3b20a1c61c744fe1d65.png";

// Fruits and Vegetables imports
import imgFruitMagic0 from "figma:asset/8f5db6af34eead78b04f93708ecdeab1a5bbd00c.png";
import imgFruitMagic1 from "figma:asset/12f941ff25d1210a60a50f036473b087fa89496b.png";
import imgFruitMagic2 from "figma:asset/2385edf9e0b64ffec7995895de3926ecda3ecfb0.png";
import imgFruitMagic3 from "figma:asset/9418d3ff76647eae5620e92a0e6dbae142c24cdd.png";
import imgFruitFire0 from "figma:asset/8b825f636a64c9fc6841241fad9d3af8bdc771e2.png";
import imgFruitFire1 from "figma:asset/188b89524a92654038c618c9c574f778a20509e6.png";
import imgFruitFire2 from "figma:asset/81a1e81b2e6a76a3183cc6cfe1ed2e11dc2cb0b3.png";
import imgFruitFire3 from "figma:asset/99cf3751a121fc17f93cac22f6890172a4591089.png";
import imgFruitAir0 from "figma:asset/860637b2f01509b90875ee336b47fa2cb643b5d5.png";
import imgFruitAir1 from "figma:asset/3a75f646a7ebf9ec93e506e7d1103d7cdd9f2482.png";
import imgFruitAir2 from "figma:asset/992202feaec654f0f82cad61892b5e8903faf60d.png";
import imgFruitAir3 from "figma:asset/9cdef9e929e56645568f7886871f511487d9ef42.png";
import imgFruitEarth0 from "figma:asset/4d017f907b3c0feae99e109cc3bf1715485b294d.png";
import imgFruitEarth1 from "figma:asset/c186891893f6fde00ee524dce878d07a76e0ee42.png";
import imgFruitEarth2 from "figma:asset/4502c03a038b6829d6f7ad165fd7a96887f74ccb.png";
import imgFruitEarth3 from "figma:asset/48c72275bcdb7a9741080a923bf3322aedfdc810.png";
import imgFruitWater0 from "figma:asset/3cd03f1fff12a83c8a35c1a50cec2140e89272e5.png";
import imgFruitWater1 from "figma:asset/0147c940f5094828463351d248aefc33afbfdd51.png";
import imgFruitWater2 from "figma:asset/51a7c450cd39ec92135ff82fa982e0026d92405d.png";
import imgFruitWater3 from "figma:asset/ad715b91a0d39e76058f05eb856f7560417a2427.png";

// Cats imports
import imgCatMagic0 from "figma:asset/abd395bea56b36666b64ace150164b93f4cb89e8.png";
import imgCatMagic1 from "figma:asset/f371fa2e01a5e81e7edcbec0ddc1eaa42fd581c2.png";
import imgCatMagic2 from "figma:asset/1b6be0105d3235a67292becb953ae0217a119b75.png";
import imgCatMagic3 from "figma:asset/4a48581390c258b862cf206bbc38a274bc5ffbf9.png";
import imgCatFire0 from "figma:asset/2ebaba0d4a9dfb9e958ebd79d26f5edc8486e7ca.png";
import imgCatFire1 from "figma:asset/303c18b1cf32846a86f8ecf939560ecc2f96832a.png";
import imgCatFire2 from "figma:asset/6caf05663a560f110d0092a61426c65a802b81a7.png";
import imgCatFire3 from "figma:asset/79c9c71313a4c3e7e81094474d96c056319d6dda.png";
import imgCatAir0 from "figma:asset/b4aed0465ca1606144088bd2bd730c0e5785c841.png";
import imgCatAir1 from "figma:asset/a6edf0f27386cc29832fe51d9cdce9018c92013d.png";
import imgCatAir2 from "figma:asset/57b22f7195977381035ae202c1f5d0006942d409.png";
import imgCatAir3 from "figma:asset/af4219100c39788b8b9af7770f88ff697f491309.png";
import imgCatEarth0 from "figma:asset/6199944e4d670f379afc240b26222a45da3f97b0.png";
import imgCatEarth1 from "figma:asset/5f2a39634710731f7bd2bb31615863fdc5a3adc3.png";
import imgCatEarth2 from "figma:asset/7c5c6defb86fec7d955241b2bde842ae93a28d89.png";
import imgCatEarth3 from "figma:asset/1b9eb39d5d04172ee49ed9fb32eec080c645599b.png";
import imgCatWater0 from "figma:asset/2e48e107ce230bac5f54bd69c3ecf7a170ed49b2.png";
import imgCatWater1 from "figma:asset/4c42117fdb394db272cd1c9f08dad64f9f3998d9.png";
import imgCatWater2 from "figma:asset/5a8a2aea973d1e54547db181a01975e6104bb0fb.png";
import imgCatWater3 from "figma:asset/6e47b6cc193d0510b7d55acc561d845ed71c4b26.png";

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
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full min-h-screen" data-name="Ajustes" style={{ backgroundImage: "linear-gradient(179.983deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
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