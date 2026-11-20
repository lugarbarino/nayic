// LILA BOTTOM (7 items - rocas del suelo)
import rock0 from '../assets/suelo/lila-0.webp';
import rock1 from '../assets/suelo/lila-1.webp';
import rock2 from '../assets/suelo/lila-2.webp';
import rock3 from '../assets/suelo/lila-3.webp';
import rock4 from '../assets/suelo/lila-4.webp';
import rock5 from '../assets/suelo/lila-5.webp';
import rock6 from '../assets/suelo/lila-6.webp';

// ROJO BOTTOM (7 items - rocas del suelo)
import rockRed0 from '../assets/suelo/roja-0.webp';
import rockRed1 from '../assets/suelo/roja-1.webp';
import rockRed2 from '../assets/suelo/roja-2.webp';
import rockRed3 from '../assets/suelo/roja-3.webp';
import rockRed4 from '../assets/suelo/roja-4.webp';
import rockRed5 from '../assets/suelo/roja-5.webp';
import rockRed6 from '../assets/suelo/roja-6.webp';

// AZUL BOTTOM (7 items - rocas del suelo)
import rockBlue0 from '../assets/suelo/azul-0.webp';
import rockBlue1 from '../assets/suelo/azul-1.webp';
import rockBlue2 from '../assets/suelo/azul-2.webp';
import rockBlue3 from '../assets/suelo/azul-3.webp';
import rockBlue4 from '../assets/suelo/azul-4.webp';
import rockBlue5 from '../assets/suelo/azul-5.webp';
import rockBlue6 from '../assets/suelo/azul-6.webp';

import { useRef } from 'react';
import { escalaPantalla } from '../escala';

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
  const k = escalaPantalla(); // más chico en pantallas bajas
  const scale = (isMobile ? 0.25 : 0.3) * k; // Mobile: más grandes, Desktop: 70% reducción
  const bottomPosition = `${(isMobile ? 45 : 60) * k}px`; // Mobile: pegado al piso escalado 50%, Desktop: 60px

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