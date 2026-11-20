// LILA TOP (5 items - estalactitas)
import ceiling0 from '../assets/techo/lila-0.webp';
import ceiling1 from '../assets/techo/lila-1.webp';
import ceiling2 from '../assets/techo/lila-2.webp';
import ceiling3 from '../assets/techo/lila-3.webp';
import ceiling4 from '../assets/techo/lila-4.webp';

// ROJO TOP (5 items - estalactitas)
import ceilingRed0 from '../assets/techo/roja-0.webp';
import ceilingRed1 from '../assets/techo/roja-1.webp';
import ceilingRed2 from '../assets/techo/roja-2.webp';
import ceilingRed3 from '../assets/techo/roja-3.webp';
import ceilingRed4 from '../assets/techo/roja-4.webp';

// AZUL TOP (5 items - estalactitas)
import ceilingBlue0 from '../assets/techo/azul-0.webp';
import ceilingBlue1 from '../assets/techo/azul-1.webp';
import ceilingBlue2 from '../assets/techo/azul-2.webp';
import ceilingBlue3 from '../assets/techo/azul-3.webp';
import ceilingBlue4 from '../assets/techo/azul-4.webp';

import { useRef } from 'react';
import { escalaPantalla } from '../escala';

interface CeilingObstacleProps {
  x: number;
  rockType: number; // 0-4 (5 tipos de estalactitas)
  colorRegion?: 'lila' | 'red' | 'blue'; // Región de color
  onLoad?: (width: number, height: number) => void;
  hitId?: string; // marca para el sistema de choques (data-hit)
}

const ceilingImagesLila = [ceiling0, ceiling1, ceiling2, ceiling3, ceiling4];
const ceilingImagesRed = [ceilingRed0, ceilingRed1, ceilingRed2, ceilingRed3, ceilingRed4];
const ceilingImagesBlue = [ceilingBlue0, ceilingBlue1, ceilingBlue2, ceilingBlue3, ceilingBlue4];

const ceilingImagesByRegion = {
  lila: ceilingImagesLila,
  red: ceilingImagesRed,
  blue: ceilingImagesBlue,
};

export default function CeilingObstacle({ x, rockType, colorRegion = 'lila', onLoad, hitId }: CeilingObstacleProps) {
  const ceilingImages = ceilingImagesByRegion[colorRegion];
  const ceilingImage = ceilingImages[rockType % ceilingImages.length];
  const imgRef = useRef<HTMLImageElement>(null);
  const hasCalledOnLoad = useRef(false);

  // Detectar si es mobile o desktop
  const isMobile = window.innerWidth < 768;
  const k = escalaPantalla(); // más chico en pantallas bajas
  const scale = (isMobile ? 0.25 : 0.3) * k; // Mobile: más grandes, Desktop: 70% reducción
  const topPosition = `${(isMobile ? 35 : 40) * k}px`; // Mobile: pegado al techo escalado 50%, Desktop: 40px

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
      src={ceilingImage}
      alt="Stalactite"
      data-hit={hitId}
      className="absolute"
      onLoad={handleImageLoad}
      style={{
        left: `${x}px`,
        top: topPosition,
        objectFit: 'contain',
      }}
    />
  );
}