// LILA BOTTOM (7 items - rocas del suelo)
import rock0 from 'figma:asset/c9b246681a424b1b6ad8a2ec844ce4cedafa3481.png';
import rock1 from 'figma:asset/20a2462bcccac36bd0a85f2d18d1be55d6b9d1f3.png';
import rock2 from 'figma:asset/5d33d2d37adec7c2c1dbf4f781c2bdba90319643.png';
import rock3 from 'figma:asset/2ebbe8cd1c23c480f3b8b668e587c6a9aa055866.png';
import rock4 from 'figma:asset/473d2b76c980fee206607b085136c2a40b665cf4.png';
import rock5 from 'figma:asset/543ae687dc43201f8c39278d8cf7f9e56e5986e6.png';
import rock6 from 'figma:asset/b2fcbcc9bda499e7b38adb7454bacd11608206ec.png';

// ROJO BOTTOM (7 items - rocas del suelo)
import rockRed0 from 'figma:asset/c1b8bcf34b08599cc37e3fa1426b6163576489ae.png';
import rockRed1 from 'figma:asset/97cbcdf5162e4c58a9b039fdbdcd25f5eb918253.png';
import rockRed2 from 'figma:asset/7143072ea3e4d504ba08732c6a86f0a39fccca47.png';
import rockRed3 from 'figma:asset/d4dde6fba3af6e5b7648e25560bc2b5feeecef69.png';
import rockRed4 from 'figma:asset/8f43d9809d732b781ebeb35b2e5b86c5097cdb73.png';
import rockRed5 from 'figma:asset/15d18032e3fd8d0cf91c2f611037e4b6d2a20398.png';
import rockRed6 from 'figma:asset/5cffd6a3f493e981fb1756bc23e1b1cc6100d770.png';

// AZUL BOTTOM (7 items - rocas del suelo)
import rockBlue0 from 'figma:asset/fe047a2c72452536305e365fe6898cdae72ac2d6.png';
import rockBlue1 from 'figma:asset/159978abb84eaba016bd9d7d986062bef5cee332.png';
import rockBlue2 from 'figma:asset/5c3e41ca45a142c3d87e397d9160b9de76890915.png';
import rockBlue3 from 'figma:asset/66a421015d247a1abb85e3ae142e427ea5e9e98a.png';
import rockBlue4 from 'figma:asset/242816ea0da6acb1b32fe3cbad492ca2b7f1bce0.png';
import rockBlue5 from 'figma:asset/db5e26f5f5c88e77e750d101ee80c241cc1c9533.png';
import rockBlue6 from 'figma:asset/18bea61311bfc97a9bebc3d756d02ff1535621eb.png';

import { useRef } from 'react';

interface ObstacleProps {
  x: number;
  rockType: number; // 0-6 (7 tipos de rocas del suelo)
  colorRegion?: 'lila' | 'red' | 'blue'; // Región de color
  onLoad?: (width: number, height: number) => void;
}

const rockImagesLila = [rock0, rock1, rock2, rock3, rock4, rock5, rock6];
const rockImagesRed = [rockRed0, rockRed1, rockRed2, rockRed3, rockRed4, rockRed5, rockRed6];
const rockImagesBlue = [rockBlue0, rockBlue1, rockBlue2, rockBlue3, rockBlue4, rockBlue5, rockBlue6];

const rockImagesByRegion = {
  lila: rockImagesLila,
  red: rockImagesRed,
  blue: rockImagesBlue,
};

export default function Obstacle({ x, rockType, colorRegion = 'lila', onLoad }: ObstacleProps) {
  const rockImages = rockImagesByRegion[colorRegion];
  const rockImage = rockImages[rockType % rockImages.length];
  const imgRef = useRef<HTMLImageElement>(null);
  const hasCalledOnLoad = useRef(false);

  // Detectar si es mobile o desktop
  const isMobile = window.innerWidth < 768;
  const scale = isMobile ? 0.25 : 0.3; // Mobile: más grandes, Desktop: 70% reducción
  const bottomPosition = isMobile ? '45px' : '60px'; // Mobile: pegado al piso escalado 50%, Desktop: 60px

  const handleImageLoad = () => {
    if (imgRef.current && onLoad && !hasCalledOnLoad.current) {
      hasCalledOnLoad.current = true;
      const naturalWidth = imgRef.current.naturalWidth;
      const naturalHeight = imgRef.current.naturalHeight;
      
      // Escalar según dispositivo
      const scaledWidth = naturalWidth * scale;
      const scaledHeight = naturalHeight * scale;
      
      // Aplicar las dimensiones escaladas a la imagen
      imgRef.current.style.width = `${scaledWidth}px`;
      imgRef.current.style.height = `${scaledHeight}px`;
      
      onLoad(scaledWidth, scaledHeight);
    }
  };

  return (
    <img
      ref={imgRef}
      src={rockImage}
      alt="Obstacle"
      className="absolute"
      onLoad={handleImageLoad}
      style={{
        left: `${x}px`,
        bottom: bottomPosition,
        display: 'block',
        objectFit: 'contain',
        verticalAlign: 'bottom',
      }}
    />
  );
}