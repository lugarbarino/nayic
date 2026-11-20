import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// Hexagon decorations
import imgRectangle from "../assets/hexagonos/lila.webp";
import imgRectangle1 from "../assets/hexagonos/violeta-oscuro.webp";
import imgRectangle2 from "../assets/hexagonos/verde-oscuro.webp";
import imgRectangle3 from "../assets/hexagonos/azul-petroleo.webp";
import imgRectangle4 from "../assets/hexagonos/verde-gris.webp";
import imgClipPathGroup1 from "../assets/carga/logo.webp";
import imgRectangle5 from "../assets/hexagonos/violeta.webp";
import imgRectangle6 from "../assets/hexagonos/celeste.webp";
import imgRectangle7 from "../assets/hexagonos/azul.webp";
import imgRectangle8 from "../assets/hexagonos/lavanda.webp";
import imgRectangle9 from "../assets/hexagonos/verde.webp";

// Characters visible on screen
import imgMonstruosMagic2 from "../assets/cartas/monstruos/magia-3.webp";
import imgAnimalesAire0 from "../assets/cartas/gatos/aire-1.webp";
import imgAnimalesAgua0 from "../assets/cartas/animales/agua-1.webp";
import imgAnimalesTierra2 from "../assets/cartas/huerto/tierra-3.webp";

// Game assets that need preloading
import imgBanner from "../assets/carga/banner.webp";
import imgFire1Bg from "../assets/niveles/amarillo.webp";
import imgMezclarlas1 from "../assets/especiales/mezclar-ojo.webp";
import imgMezclarlas2 from "../assets/especiales/mezclar-monstruo.webp";
import imgSnake1 from "../assets/corazon-firma.webp";

// Monstruos Characters - All 20
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

// Animales Characters - All 20
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

// El Huerto Characters - All 20
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

// Gatos Characters - All 20
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

// Additional game assets
import imgGatosMagic01 from "../assets/decoracion/anillos.webp";
import imgSuerte from "../assets/especiales/suerte.webp";
import imgPico from "../assets/especiales/pico-carta.webp";
import imgHintCard from "../assets/especiales/pista.webp";
import imgMagicHintCard from "../assets/especiales/pista-magica.webp";
import imgDificilCongelada from "../assets/especiales/congelada-dificil.webp";
import imgDificilMagica from "../assets/especiales/magica-dificil.webp";
import imgDificilFuego from "../assets/especiales/fuego-dificil.webp";
import imgDificilNube from "../assets/especiales/nube-dificil.webp";
import imgDificilEnterrada from "../assets/especiales/enterrada-dificil.webp";

interface LoadingScreenProps {
  progress?: number;
  theme?: 'monstruos' | 'animales' | 'huerto' | 'gatos';
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ progress = 0, theme = 'monstruos', onLoadingComplete }: LoadingScreenProps) {
  const [loadedCount, setLoadedCount] = useState(0);

  // Array with ALL images that need to be preloaded
  const allImagesToPreload = [
    // Monstruos - 20 characters
    imgMagic0, imgMagic1, imgMagic2, imgMagic3,
    imgFire0, imgFire1, imgFire2, imgFire3,
    imgAir0, imgAir1, imgAir2, imgAir3,
    imgEarth0, imgEarth1, imgEarth2, imgEarth3,
    imgWater0, imgWater1, imgWater2, imgWater3,
    // Animales - 20 characters
    imgAnimalMagic0, imgAnimalMagic1, imgAnimalMagic2, imgAnimalMagic3,
    imgAnimalFire0, imgAnimalFire1, imgAnimalFire2, imgAnimalFire3,
    imgAnimalAir0, imgAnimalAir1, imgAnimalAir2, imgAnimalAir3,
    imgAnimalEarth0, imgAnimalEarth1, imgAnimalEarth2, imgAnimalEarth3,
    imgAnimalWater0, imgAnimalWater1, imgAnimalWater2, imgAnimalWater3,
    // El Huerto - 20 characters
    imgFruitMagic0, imgFruitMagic1, imgFruitMagic2, imgFruitMagic3,
    imgFruitFire0, imgFruitFire1, imgFruitFire2, imgFruitFire3,
    imgFruitAir0, imgFruitAir1, imgFruitAir2, imgFruitAir3,
    imgFruitEarth0, imgFruitEarth1, imgFruitEarth2, imgFruitEarth3,
    imgFruitWater0, imgFruitWater1, imgFruitWater2, imgFruitWater3,
    // Gatos - 20 characters
    imgCatMagic0, imgCatMagic1, imgCatMagic2, imgCatMagic3,
    imgCatFire0, imgCatFire1, imgCatFire2, imgCatFire3,
    imgCatAir0, imgCatAir1, imgCatAir2, imgCatAir3,
    imgCatEarth0, imgCatEarth1, imgCatEarth2, imgCatEarth3,
    imgCatWater0, imgCatWater1, imgCatWater2, imgCatWater3,
    // Game assets - basic
    imgBanner, imgFire1Bg, imgMezclarlas1, imgMezclarlas2, imgSnake1,
    // Special card assets
    imgGatosMagic01, imgSuerte, imgPico, imgHintCard, imgMagicHintCard,
    // Difficulty special cards
    imgDificilCongelada, imgDificilMagica, imgDificilFuego, imgDificilNube, imgDificilEnterrada,
    // Loading screen decorations
    imgRectangle, imgRectangle1, imgRectangle2, imgRectangle3, imgRectangle4,
    imgClipPathGroup1, imgRectangle5, imgRectangle6, imgRectangle7, imgRectangle8, imgRectangle9
  ];

  const totalImages = allImagesToPreload.length;
  const progressPercent = Math.round((loadedCount / totalImages) * 100);

  // Handler for when an image loads
  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  // Check if loading is complete and trigger callback
  useEffect(() => {
    if (loadedCount >= totalImages && loadedCount > 0) {
      const timer = setTimeout(() => {
        onLoadingComplete?.();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [loadedCount, totalImages, onLoadingComplete]);

  useEffect(() => {
    if (progress > 0) {
      setLoadedCount(Math.round((progress / 100) * totalImages));
    }
  }, [progress, totalImages]);

  return (
    <>
      {/* Mobile version - visible on screens < 768px */}
      <div className="md:hidden bg-gradient-to-b from-[#1a0e1b] relative min-h-screen w-screen overflow-hidden to-[#4d2951] fixed inset-0 z-50">
        {/* Hexagons and characters for mobile... */}
        <motion.div className="absolute flex h-[72px] items-center justify-center left-[calc(50%+141px)] top-[calc(50%+254.5px)] translate-x-[-50%] translate-y-[-50%] w-[78px]" animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="blur-[3.35px] filter h-[72px] overflow-clip relative w-[78px]">
              <div className="absolute inset-[9.22%_17.63%]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} onLoad={handleImageLoad} onError={handleImageLoad} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[51px] left-[calc(50%-142px)] top-[calc(50%-309px)] translate-x-[-50%] translate-y-[-50%] w-[60px]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} onLoad={handleImageLoad} onError={handleImageLoad} />
          </div>
        </motion.div>

        <motion.div className="absolute flex h-[58.16px] items-center justify-center left-[calc(50%+150.67px)] top-[calc(50%-200.42px)] translate-x-[-50%] translate-y-[-50%] w-[65.346px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} animate={{ rotate: [8.52, 16, 8.52] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[8.52deg]">
            <div className="blur-[2px] filter h-[50.033px] relative w-[58.58px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} onLoad={handleImageLoad} onError={handleImageLoad} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute h-[103.5px] left-[calc(50%-0.25px)] top-[calc(50%-123.75px)] translate-x-[-50%] translate-y-[-50%] w-[227.5px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClipPathGroup1} onLoad={handleImageLoad} onError={handleImageLoad} />
        </div>

        <motion.div className="absolute flex h-[104px] items-center justify-center left-[calc(50%+119px)] top-[calc(50%+86.5px)] translate-x-[-50%] translate-y-[-50%] w-[128px]" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[104px] relative w-[128px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle5} onLoad={handleImageLoad} onError={handleImageLoad} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[81px] left-[calc(50%-114px)] top-[calc(50%+168px)] translate-x-[-50%] translate-y-[-50%] w-[100px]" animate={{ y: [0, 12, 0], x: [0, -5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} onLoad={handleImageLoad} onError={handleImageLoad} />
          </div>
        </motion.div>

        <motion.div className="absolute flex h-[142.266px] items-center justify-center left-[calc(50%+9.94px)] top-[calc(50%-259.37px)] translate-x-[-50%] translate-y-[-50%] w-[136.138px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} animate={{ rotate: [218.865, 214, 218.865] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[218.865deg] scale-y-[-100%]">
            <div className="h-[119.27px] relative w-[78.725px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} onLoad={handleImageLoad} onError={handleImageLoad} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[71px] left-[calc(50%+129px)] overflow-clip top-[calc(50%-338px)] translate-x-[-50%] translate-y-[-50%] w-[72px]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-[9.05%_11.05%]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} onLoad={handleImageLoad} onError={handleImageLoad} />
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute flex h-[65px] items-center justify-center left-[calc(50%-145px)] top-[calc(50%-69px)] translate-x-[-50%] translate-y-[-50%] w-[62px]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[65px] overflow-clip relative w-[62px]">
              <div className="absolute inset-[8.57%_6.82%]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} onLoad={handleImageLoad} onError={handleImageLoad} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute blur-[3px] filter h-[54px] left-[calc(50%-127.5px)] top-[calc(50%+295.5px)] translate-x-[-50%] translate-y-[-50%] w-[69px]" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} onLoad={handleImageLoad} onError={handleImageLoad} />
          </div>
        </motion.div>

        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[calc(50%-46px)] not-italic text-[20px] text-white top-[calc(50%-58.5px)] w-[99px]">Cargando</p>

        <div className="absolute contents left-[calc(50%+10.5px)] top-[calc(50%-14.5px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute bg-[#2e1830] h-[6px] left-[calc(50%+10.5px)] rounded-[30px] top-[calc(50%-14.5px)] translate-x-[-50%] translate-y-[-50%] w-[207px]" />
          <motion.div 
            className="absolute bg-[#5ba68f] h-[6px] left-[calc(50%-93.5px)] rounded-[30px] top-[calc(50%-14.5px)] translate-y-[-50%]" 
            initial={{ width: 0 }} 
            animate={{ width: `${Math.min(progressPercent, 100) * 2.07}px` }} 
            transition={{ duration: 0.3, ease: "easeOut" }} 
          />
        </div>

        <motion.div className="absolute h-[121px] left-[calc(50%+110.5px)] overflow-clip top-[calc(50%+68px)] translate-x-[-50%] translate-y-[-50%] w-[133px]" animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMonstruosMagic2} onLoad={handleImageLoad} onError={handleImageLoad} />
        </motion.div>

        <motion.div className="absolute h-[182px] left-[calc(50%-105.5px)] overflow-clip top-[calc(50%+95.5px)] translate-x-[-50%] translate-y-[-50%] w-[177px]" animate={{ y: [0, -12, 0], x: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesAire0} onLoad={handleImageLoad} onError={handleImageLoad} />
        </motion.div>

        <motion.div className="absolute h-[117px] left-[calc(50%-17px)] overflow-clip top-[calc(50%-258px)] translate-x-[-50%] translate-y-[-50%] w-[128px]" animate={{ y: [0, -14, 0], scale: [1, 1.05, 1] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesAgua0} onLoad={handleImageLoad} onError={handleImageLoad} />
        </motion.div>

        <motion.div className="absolute flex h-[143.753px] items-center justify-center left-[calc(50%+0.68px)] top-[calc(50%+322.14px)] translate-x-[-50%] translate-y-[-50%] w-[151.357px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} animate={{ rotate: [27.181, 32, 27.181] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[27.181deg] skew-x-[0.69deg]">
            <div className="h-[99.15px] relative w-[120.43px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} onLoad={handleImageLoad} onError={handleImageLoad} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[118px] left-[calc(50%+19.47px)] overflow-clip top-[calc(50%+304.5px)] translate-x-[-50%] translate-y-[-50%] w-[129px]" animate={{ y: [0, -10, 0], x: [0, -5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesTierra2} onLoad={handleImageLoad} onError={handleImageLoad} />
        </motion.div>

        {/* Hidden preloader */}
        <div className="absolute opacity-0 pointer-events-none overflow-hidden" style={{ width: '1px', height: '1px' }}>
          {allImagesToPreload.map((imgSrc, index) => (
            <img key={`preload-${index}`} src={imgSrc} alt="" onLoad={handleImageLoad} onError={handleImageLoad} />
          ))}
        </div>
      </div>

      {/* Desktop version - visible on screens >= 768px */}
      <div className="hidden md:block bg-gradient-to-b from-[#1a0e1b] relative min-h-screen w-screen overflow-hidden to-[#4d2951] fixed inset-0 z-50">
        <motion.div className="absolute flex h-[72px] items-center justify-center left-[calc(50%-131.5px)] top-[calc(50%+161.5px)] translate-x-[-50%] translate-y-[-50%] w-[78px]" animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="blur-[3.35px] filter h-[72px] overflow-clip relative w-[78px]">
              <div className="absolute inset-[9.22%_17.63%]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[59.3px] left-[calc(50%+172.13px)] top-[calc(50%+155.15px)] translate-x-[-50%] translate-y-[-50%] w-[67.255px]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
          </div>
        </motion.div>

        <motion.div className="absolute flex h-[58.16px] items-center justify-center left-[calc(50%+134.17px)] top-[calc(50%-144.42px)] translate-x-[-50%] translate-y-[-50%] w-[65.346px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} animate={{ rotate: [8.52, 16, 8.52] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[8.52deg]">
            <div className="blur-[2px] filter h-[50.033px] relative w-[58.58px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute h-[103.5px] left-[calc(50%+0.25px)] top-[calc(50%-5.75px)] translate-x-[-50%] translate-y-[-50%] w-[227.5px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClipPathGroup1} />
        </div>

        <motion.div className="absolute flex h-[104px] items-center justify-center left-[calc(50%+189.5px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[128px]" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[104px] relative w-[128px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle5} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[92px] left-[calc(50%-180px)] top-[calc(50%+24.5px)] translate-x-[-50%] translate-y-[-50%] w-[113px]" animate={{ y: [0, 12, 0], x: [0, -5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} />
          </div>
        </motion.div>

        <motion.div className="absolute flex h-[142.266px] items-center justify-center left-[calc(50%+10.44px)] top-[calc(50%-141.37px)] translate-x-[-50%] translate-y-[-50%] w-[136.138px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} animate={{ rotate: [218.865, 214, 218.865] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[218.865deg] scale-y-[-100%]">
            <div className="h-[119.27px] relative w-[78.725px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[71px] left-[calc(50%+98.5px)] overflow-clip top-[calc(50%-258px)] translate-x-[-50%] translate-y-[-50%] w-[72px]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-[9.05%_11.05%]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute blur-[3px] filter h-[73px] left-[calc(50%-187.5px)] top-[calc(50%-94px)] translate-x-[-50%] translate-y-[-50%] w-[70px]" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

        <motion.div className="absolute flex h-[65px] items-center justify-center left-[calc(50%-100.5px)] top-[calc(50%-206px)] translate-x-[-50%] translate-y-[-50%] w-[62px]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[65px] overflow-clip relative w-[62px]">
              <div className="absolute inset-[8.57%_6.82%]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute blur-[3px] filter h-[54px] left-[calc(50%-202px)] top-[calc(50%-276.5px)] translate-x-[-50%] translate-y-[-50%] w-[69px]" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
          </div>
        </motion.div>

        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[calc(50%-45.5px)] not-italic text-[20px] text-white top-[calc(50%+59.5px)] w-[99px]">Cargando</p>

        <div className="absolute contents left-[calc(50%+11px)] top-[calc(50%+103.5px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute bg-[#2e1830] h-[6px] left-[calc(50%+11px)] rounded-[30px] top-[calc(50%+103.5px)] translate-x-[-50%] translate-y-[-50%] w-[207px]" />
          <motion.div 
            className="absolute bg-[#5ba68f] h-[6px] left-[calc(50%-92.5px)] rounded-[30px] top-[calc(50%+103.5px)] translate-y-[-50%]" 
            initial={{ width: 0 }} 
            animate={{ width: `${Math.min(progressPercent, 100) * 2.07}px` }} 
            transition={{ duration: 0.3, ease: "easeOut" }} 
          />
        </div>

        <motion.div className="absolute h-[121px] left-[calc(50%+181px)] overflow-clip top-[calc(50%-41px)] translate-x-[-50%] translate-y-[-50%] w-[133px]" animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMonstruosMagic2} />
        </motion.div>

        <motion.div className="absolute h-[223px] left-[calc(50%-166px)] overflow-clip top-[calc(50%-53px)] translate-x-[-50%] translate-y-[-50%] w-[217px]" animate={{ y: [0, -12, 0], x: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesAire0} />
        </motion.div>

        <motion.div className="absolute h-[117px] left-[calc(50%-16.5px)] overflow-clip top-[calc(50%-140px)] translate-x-[-50%] translate-y-[-50%] w-[128px]" animate={{ y: [0, -14, 0], scale: [1, 1.05, 1] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesAgua0} />
        </motion.div>

        <motion.div className="absolute flex h-[143.753px] items-center justify-center left-[calc(50%+9.21px)] top-[calc(50%+202.14px)] translate-x-[-50%] translate-y-[-50%] w-[151.357px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} animate={{ rotate: [27.181, 32, 27.181] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex-none rotate-[27.181deg] skew-x-[0.69deg]">
            <div className="h-[99.15px] relative w-[120.43px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute h-[118px] left-[calc(50%+28px)] overflow-clip top-[calc(50%+184.5px)] translate-x-[-50%] translate-y-[-50%] w-[129px]" animate={{ y: [0, -10, 0], x: [0, -5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnimalesTierra2} />
        </motion.div>

        {/* Hidden preloader - also for desktop */}
        <div className="absolute opacity-0 pointer-events-none overflow-hidden" style={{ width: '1px', height: '1px' }}>
          {allImagesToPreload.map((imgSrc, index) => (
            <img key={`preload-desktop-${index}`} src={imgSrc} alt="" onLoad={handleImageLoad} onError={handleImageLoad} />
          ))}
        </div>
      </div>
    </>
  );
}