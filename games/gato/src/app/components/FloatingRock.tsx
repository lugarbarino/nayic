// LILA MIDDLE (6 items - rocas flotantes)
import floating0 from 'figma:asset/5d867a3a86309ef4d40f5c6d5d4a1a0bea0c9944.png';
import floating1 from 'figma:asset/224ce23df3f9a7aebda018afcef0a3875f15c391.png';
import floating2 from 'figma:asset/a3ec01593787c6099fec5738ca368caa7fbeb3b0.png';
import floating3 from 'figma:asset/7056ce1bfc9eaa4bb99b837b77dac72cff491f3d.png';
import floating4 from 'figma:asset/532edc467cd5ac3d2f3aee5aa0bc8d3691cf6c29.png';
import floating5 from 'figma:asset/b49d0e88d33da2385dbc575a0242f0bd6c474268.png';

// ROJO MIDDLE (6 items - rocas flotantes)
import floatingRed0 from 'figma:asset/98708f836fe07d4c9426879dcce156c174cbb85e.png';
import floatingRed1 from 'figma:asset/e421e27a7468596895d74d0e330506fbf9b659df.png';
import floatingRed2 from 'figma:asset/a2c35b0a622565b40c45fedb3695043ab9f11a37.png';
import floatingRed3 from 'figma:asset/8d9f8508c4542ec9d5913d37fd46ead1cd340007.png';
import floatingRed4 from 'figma:asset/c5ce90ac055113477baacbb724ad46b3529cf122.png';
import floatingRed5 from 'figma:asset/80b7c0b076bd14590c54ef561254c253a9318632.png';

// AZUL MIDDLE (6 items - rocas flotantes)
import floatingBlue0 from 'figma:asset/5cb91bc098334af68a697f5712043c95787cb17d.png';
import floatingBlue1 from 'figma:asset/ef7b123fdcd0d258af5006dc9caee8e2afc9ef05.png';
import floatingBlue2 from 'figma:asset/af0f13c717f89f86e1cd35d95b2d51a07458febc.png';
import floatingBlue3 from 'figma:asset/af4a84e0ffe93b111679e5d6c55db194b993a396.png';
import floatingBlue4 from 'figma:asset/1bcbc7e6c3b5aa855e39a962ec15116d79471349.png';
import floatingBlue5 from 'figma:asset/20c82096764a37aff5d7fdfd382aa3456c7973fe.png';

import { useRef, useState, useEffect } from 'react';

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
  const scale = isMobile ? 0.15 : 0.3; // Mobile: 85% reducción, Desktop: 70% reducción

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
