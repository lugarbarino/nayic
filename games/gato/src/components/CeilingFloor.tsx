import ceilingImage from '../assets/escenario/techo.webp';
import { useEffect, useState } from 'react';

interface CeilingFloorProps {
  bgPosition: number;
  speed: number;
}

export default function CeilingFloor({ bgPosition, speed }: CeilingFloorProps) {
  const [ceilingWidth, setCeilingWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = ceilingImage;
    img.onload = () => {
      setCeilingWidth(img.width);
    };
  }, []);

  if (ceilingWidth === 0) return null;

  // Patrón de 4 imágenes: normal, espejado, normal, espejado
  const patternWidth = ceilingWidth * 4;
  
  // Calcular cuántas copias necesitamos para cubrir la pantalla + extras
  const screenWidth = window.innerWidth;
  const numCopies = Math.ceil(screenWidth / ceilingWidth) + 16; // Muchas más copias para garantizar cobertura total

  // Mover a la misma velocidad del fondo, con ciclo cada 4 imágenes
  const ceilingOffset = -bgPosition % patternWidth;

  // Escala: más pequeña en mobile para dar más espacio de juego
  const scale = isMobile ? 0.5 : 0.6;

  return (
    <div
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{
        height: 'auto',
        zIndex: 15,
      }}
    >
      <div
        className="absolute top-0 left-0 flex w-full"
        style={{
          transform: `translateX(${ceilingOffset}px) scaleY(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {Array.from({ length: numCopies }).map((_, index) => (
          <img
            key={index}
            src={ceilingImage}
            alt=""
            className="block"
            style={{
              height: 'auto',
              width: `${ceilingWidth}px`,
              display: 'block',
              transform: index % 2 === 0 ? 'scaleX(1)' : 'scaleX(-1)', // Alternar: normal, espejado, normal, espejado...
            }}
          />
        ))}
      </div>
    </div>
  );
}