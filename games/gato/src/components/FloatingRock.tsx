// LILA MIDDLE (6 items - rocas flotantes)
import floating0 from '../assets/flotantes/lila-0.webp';
import floating1 from '../assets/flotantes/lila-1.webp';
import floating2 from '../assets/flotantes/lila-2.webp';
import floating3 from '../assets/flotantes/lila-3.webp';
import floating4 from '../assets/flotantes/lila-4.webp';
import floating5 from '../assets/flotantes/lila-5.webp';

// ROJO MIDDLE (6 items - rocas flotantes)
import floatingRed0 from '../assets/flotantes/roja-0.webp';
import floatingRed1 from '../assets/flotantes/roja-1.webp';
import floatingRed2 from '../assets/flotantes/roja-2.webp';
import floatingRed3 from '../assets/flotantes/roja-3.webp';
import floatingRed4 from '../assets/flotantes/roja-4.webp';
import floatingRed5 from '../assets/flotantes/roja-5.webp';

// AZUL MIDDLE (6 items - rocas flotantes)
import floatingBlue0 from '../assets/flotantes/azul-0.webp';
import floatingBlue1 from '../assets/flotantes/azul-1.webp';
import floatingBlue2 from '../assets/flotantes/azul-2.webp';
import floatingBlue3 from '../assets/flotantes/azul-3.webp';
import floatingBlue4 from '../assets/flotantes/azul-4.webp';
import floatingBlue5 from '../assets/flotantes/azul-5.webp';

import { useRef, useState, useEffect } from 'react';
import { escalaPantalla } from '../escala';

interface FloatingRockProps {
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  rockType: number; // 0-5 (6 tipos de rocas flotantes)
  colorRegion?: 'lila' | 'red' | 'blue'; // Región de color
  speed?: number;
  onLoad?: (width: number, height: number) => void;
  gameTime?: number; // Tiempo de juego en segundos
}

const floatingRockImagesLila = [
  floating0,
  floating1,
  floating2,
  floating3,
  floating4,
  floating5
];

const floatingRockImagesRed = [
  floatingRed0,
  floatingRed1,
  floatingRed2,
  floatingRed3,
  floatingRed4,
  floatingRed5
];

const floatingRockImagesBlue = [
  floatingBlue0,
  floatingBlue1,
  floatingBlue2,
  floatingBlue3,
  floatingBlue4,
  floatingBlue5
];

const floatingRockImagesByRegion = {
  lila: floatingRockImagesLila,
  red: floatingRockImagesRed,
  blue: floatingRockImagesBlue,
};

export default function FloatingRock({ x, y, rockType, colorRegion = 'lila', onLoad, gameTime = 0 }: FloatingRockProps) {
  const floatingRockImages = floatingRockImagesByRegion[colorRegion];
  const rockImage = floatingRockImages[rockType % floatingRockImages.length];
  const imgRef = useRef<HTMLImageElement>(null);
  const hasCalledOnLoad = useRef(false);
  
  // Estado para forzar re-render cuando cambie la condición de animación
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Detectar si es mobile o desktop
  const isMobile = window.innerWidth < 768;
  const scale = (isMobile ? 0.15 : 0.3) * escalaPantalla(); // Mobile: 85% reducción, Desktop: 70% reducción (más chico en pantallas bajas)

  // Actualizar shouldAnimate cuando gameTime cambie
  useEffect(() => {
    setShouldAnimate(gameTime >= 90);
  }, [gameTime]);

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
      alt="Floating Rock"
      className="absolute"
      onLoad={handleImageLoad}
      style={{
        left: `${x}px`,
        top: `${y}%`,
        objectFit: 'contain',
        animation: shouldAnimate ? 'float-subtle 2.5s ease-in-out infinite' : 'none',
      }}
    />
  );
}
