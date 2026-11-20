import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// Hexagon decorations
import imgRectangle from "figma:asset/cdcf1f7625a3ee89091b79360388245355adf4ee.png";
import imgRectangle1 from "figma:asset/9b9ef54c60f358c9c10816499965123091da24c0.png";
import imgRectangle2 from "figma:asset/0b30a6272fac3edca0c6c8c118047f1efa1dd654.png";
import imgRectangle3 from "figma:asset/fad67707429143b0c0e314c36366235c934fece3.png";
import imgRectangle4 from "figma:asset/ca32a8630769ee62dd225298e7e83c2a227dd7cc.png";
import imgClipPathGroup1 from "figma:asset/f6b69c40bbf37288a58166b1e5d4d50e04581f5b.png";
import imgRectangle5 from "figma:asset/d05319bff396f604cdc6ec707dfbf1d1e83bb38d.png";
import imgRectangle6 from "figma:asset/ad60d27d9b9304eec0cd48a38cfbac0a1f7f90d2.png";
import imgRectangle7 from "figma:asset/d77efce17d2a00095abd3884f70f01f2eeae7402.png";
import imgRectangle8 from "figma:asset/0c367d9cd7c510c9a703a7746b7acb892c16ec36.png";
import imgRectangle9 from "figma:asset/93f1eaa807b28d7d26255f0faffdf90383c6b788.png";

// Characters visible on screen
import imgMonstruosMagic2 from "figma:asset/22c65a971d9201e6408044d03cce3296ed4c5cd3.png";
import imgAnimalesAire0 from "figma:asset/b4aed0465ca1606144088bd2bd730c0e5785c841.png";
import imgAnimalesAgua0 from "figma:asset/b183c90315c6cef4645e95b4aac831a1685ee4bc.png";
import imgAnimalesTierra2 from "figma:asset/4502c03a038b6829d6f7ad165fd7a96887f74ccb.png";

// Game assets that need preloading
import imgBanner from "figma:asset/6833b7a1273b10edce84521bab20a03ad44062e7.png";
import imgFire1Bg from "figma:asset/dd8fcec4fdd03e04642429945767a5fd14782e81.png";
import imgMezclarlas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";
import imgMezclarlas2 from "figma:asset/dae029f0e95b7718b4f930bf28b72f84278205a6.png";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

// Monstruos Characters - All 20
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

// Animales Characters - All 20
import imgAnimalMagic0 from "figma:asset/5a42a1360e6f36724db5fd586fb7dd74bccaf8ce.png";
import imgAnimalMagic1 from "figma:asset/6e74338e2d82695a535e15354690749d1ff01a12.png";
import imgAnimalMagic2 from "figma:asset/ee93da8983f75f0c0d98f8013dcfba8218fccfd0.png";
import imgAnimalMagic3 from "figma:asset/6da72c53607584eeaf7e9a26be7212023b1cf5f9.png";
import imgAnimalFire0 from "figma:asset/3de83ad4959ced8fbc59b16c1e9e40de04f8e202.png";
import imgAnimalFire1 from "figma:asset/8a37522abe8dccc9c8164a97e22698a7df1a947e.png";
import imgAnimalFire2 from "figma:asset/6640b647d80dcfdaa284b38307837b0c4fd610c5.png";
import imgAnimalFire3 from "figma:asset/231510292369c097582cfc686c23c625cabc0adb.png";
import imgAnimalAir0 from "figma:asset/b4aed0465ca1606144088bd2bd730c0e5785c841.png";
import imgAnimalAir1 from "figma:asset/3a75f646a7ebf9ec93e506e7d1103d7cdd9f2482.png";
import imgAnimalAir2 from "figma:asset/0319b66584ea434c23c97208b1b8663d51b1162b.png";
import imgAnimalAir3 from "figma:asset/72492d9aa28c72211c0a81515da9975a577d755c.png";
import imgAnimalEarth0 from "figma:asset/bd6adeae03ecbab4d9c8a779d4d5a8c49efd8865.png";
import imgAnimalEarth1 from "figma:asset/49ff33a69e1dc6cc0d52f5c3e3aa2d4f1eb42fb5.png";
import imgAnimalEarth2 from "figma:asset/aad4e6e83b66ea59f47f13e3c95e4d44e4f61b4c.png";
import imgAnimalEarth3 from "figma:asset/a9b0b74fc1b81a5e3e4c39e86c27e7b5ebeb68ff.png";
import imgAnimalWater0 from "figma:asset/b183c90315c6cef4645e95b4aac831a1685ee4bc.png";
import imgAnimalWater1 from "figma:asset/8d74df76e8f6b24ea1de84e0a3eeb62c46e75e11.png";
import imgAnimalWater2 from "figma:asset/86ad5e27b7a54a2a85c24c9bbd48c26a06a73ee5.png";
import imgAnimalWater3 from "figma:asset/22dbed08c25acd6c52870c2b5c5c1dcab8f7b4e9.png";

// El Huerto Characters - All 20
import imgFruitMagic0 from "figma:asset/d66dd40cba72f0cf21bbd25cfe34c7a36dcaa68a.png";
import imgFruitMagic1 from "figma:asset/12f941ff25d1210a60a50f036473b087fa89496b.png";
import imgFruitMagic2 from "figma:asset/09f98d5c4e00c5f53e8a0bff9afbdb88b5cb2cf8.png";
import imgFruitMagic3 from "figma:asset/27fe9f8dcdb0d59d9bb19aee8a7d5dcd74c6ad98.png";
import imgFruitFire0 from "figma:asset/f3bd3cb7d5bbc13d33a7aa8b52ec80fccd18a5b1.png";
import imgFruitFire1 from "figma:asset/a7cc2e25c59fabc1c03d09ca37d8ffa8d2ec7b48.png";
import imgFruitFire2 from "figma:asset/81a1e81b2e6a76a3183cc6cfe1ed2e11dc2cb0b3.png";
import imgFruitFire3 from "figma:asset/af5bf68bb5ce071f8a2f0f35c8bdfcc0c64c1343.png";
import imgFruitAir0 from "figma:asset/860637b2f01509b90875ee336b47fa2cb643b5d5.png";
import imgFruitAir1 from "figma:asset/9fdcb7dd3f0ed1e70a06deca8a30a6d7bb19d8b2.png";
import imgFruitAir2 from "figma:asset/b488e7a10e2dd8f1b97ea2c696bb1a7fa11e56f8.png";
import imgFruitAir3 from "figma:asset/f0bae8e66f7f56b62e3ca99c3bd6ec0935f4df1d.png";
import imgFruitEarth0 from "figma:asset/d86cd05cfbba3dc6ff8c7c2bb6f850e88b89c7e7.png";
import imgFruitEarth1 from "figma:asset/e85ac21c5d40edb01c20ba4ddaf86d0ea84c0a22.png";
import imgFruitEarth2 from "figma:asset/e07e1caa42f01d9be95e0c4dc3ffd71e066dad3b.png";
import imgFruitEarth3 from "figma:asset/5e1ba59e9ad76c1fc9a4c8c9cde28b47dc4c3af9.png";
import imgFruitWater0 from "figma:asset/2bc9e16e3bd49c3e0e5a6e1a83b7b62da5c9f8e9.png";
import imgFruitWater1 from "figma:asset/0147c940f5094828463351d248aefc33afbfdd51.png";
import imgFruitWater2 from "figma:asset/a91fbc7fcfd5d3cd78b0a4bd03eb1de49b8ffbd5.png";
import imgFruitWater3 from "figma:asset/ed9c7eb22e3dc58de69c31eaf46e1a6ae2b0d9f3.png";

// Gatos Characters - All 20
import imgCatMagic0 from "figma:asset/abd395bea56b36666b64ace150164b93f4cb89e8.png";
import imgCatMagic1 from "figma:asset/ab38f43b1b1bf99d5c065374a90ed4e2cfef4c01.png";
import imgCatMagic2 from "figma:asset/2b8f5c3cd5b8a5ec5ef23f8c79dcca7a96af3b36.png";
import imgCatMagic3 from "figma:asset/a8f8bee6b562dc9b7e2d93b02ce820eb5c0d95bd.png";
import imgCatFire0 from "figma:asset/fda2d68e3ec18f92e0ca23cfbe9b3e5c3a0e1dd8.png";
import imgCatFire1 from "figma:asset/303c18b1cf32846a86f8ecf939560ecc2f96832a.png";
import imgCatFire2 from "figma:asset/7e98d7f8d9aef1a3f53b2ffad49f71eee92e8e79.png";
import imgCatFire3 from "figma:asset/5a9e67fef05166c3ea97d5a9bdd9b9bc01df24c8.png";
import imgCatAir0 from "figma:asset/f5b7e7f654d62d9d9aae2ec4ae81da3be6e53c5e.png";
import imgCatAir1 from "figma:asset/84f2cde9e2d7f3d89ee3ba4af2f58d1a0a685d5e.png";
import imgCatAir2 from "figma:asset/57b22f7195977381035ae202c1f5d0006942d409.png";
import imgCatAir3 from "figma:asset/0f8fb73d47c79e71fb0e7da48c8a0ff66f9e2f8f.png";
import imgCatEarth0 from "figma:asset/bf6b4dfb0a574ff7cf64b0c30d50dd7aeb27e2cd.png";
import imgCatEarth1 from "figma:asset/80e66cbd4a1d2d4aaa6fcb8a63d89ad7c02b2a3b.png";
import imgCatEarth2 from "figma:asset/a26bdde7c3e3bc4f5dab2e16e5fe0cca49fedb73.png";
import imgCatEarth3 from "figma:asset/9bd7ebe99d78e3dec5913085f8dea73ff7f2ffb1.png";
import imgCatWater0 from "figma:asset/ce1aca1c5a0d3d19f86dcb050ee7e9e94fd37370.png";
import imgCatWater1 from "figma:asset/67095bded63d4bc80ce56f7b0b7b51ee2e03cbfc.png";
import imgCatWater2 from "figma:asset/8bd76b3b2aee2cdc75c85d7ad83b2cfd1d80c0e2.png";
import imgCatWater3 from "figma:asset/6e47b6cc193d0510b7d55acc561d845ed71c4b26.png";

// Additional game assets
import imgGatosMagic01 from "figma:asset/5e48e7fa8ee790fd3c0148ae049b767157121558.png";
import imgSuerte from "figma:asset/f62b6c16a4ac80afea9b365305a3ef88e87133f5.png";
import imgPico from "figma:asset/9138997072431193095fb568363d96b083700a60.png";
import imgHintCard from "figma:asset/4577f4ffc63cd16b87b4f3e50dfd5d6905de6509.png";
import imgMagicHintCard from "figma:asset/b6eb6905b759277b8a0f1a8f9ecfb3bfc875a43b.png";
import imgDificilCongelada from "figma:asset/00f98cf7e49c4229795fe3c978c38097c338f3d6.png";
import imgDificilMagica from "figma:asset/4bffaf03bf7d31fceb60fe9c07991fbb863caffc.png";
import imgDificilFuego from "figma:asset/9959946bd606dbbc76d922c18711993dd5e0cb0b.png";
import imgDificilNube from "figma:asset/fe8057e83bba01df9f7ca8bc15debcd6be37c94e.png";
import imgDificilEnterrada from "figma:asset/3e7d237cf17c33c80f448a6a6409914d9d336bab.png";

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