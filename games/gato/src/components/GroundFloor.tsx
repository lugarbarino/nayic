import floorImage from '../assets/escenario/suelo.webp';
import { useEffect, useState } from 'react';
import { escalaPantalla } from '../escala';

interface GroundFloorProps {
  bgPosition: number;
  speed: number;
}

export default function GroundFloor({ bgPosition, speed }: GroundFloorProps) {
  const [floorWidth, setFloorWidth] = useState(0);
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
    img.src = floorImage;
    img.onload = () => {
      setFloorWidth(img.width);
    };
  }, []);

  if (floorWidth === 0) return null;

  // Patrón de 4 imágenes: normal, espejado, normal, espejado
  const patternWidth = floorWidth * 4;
  
  // Calcular cuántas copias necesitamos para cubrir la pantalla + extras
  const screenWidth = window.innerWidth;
  const numCopies = Math.ceil(screenWidth / floorWidth) + 16; // Muchas más copias para garantizar cobertura total

  // Mover a la misma velocidad del fondo, con ciclo cada 4 imágenes
  const floorOffset = -bgPosition % patternWidth;

  // Escala: más pequeña en mobile para dar más espacio de juego
  const scale = (isMobile ? 0.5 : 0.6) * escalaPantalla(); // más chico en pantallas bajas

  return (
    <div
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{
        height: 'auto',
        zIndex: 15,
      }}
    >
      <div
        className="absolute bottom-0 left-0 flex w-full"
        style={{
          transform: `translateX(${floorOffset}px) scaleY(${scale})`,
          transformOrigin: 'bottom left',
        }}
      >
        {Array.from({ length: numCopies }).map((_, index) => (
          <img
            key={index}
            src={floorImage}
            alt=""
            className="block"
            style={{
              height: 'auto',
              width: `${floorWidth}px`,
              display: 'block',
              transform: index % 2 === 0 ? 'scaleX(1)' : 'scaleX(-1)', // Alternar: normal, espejado, normal, espejado...
            }}
          />
        ))}
      </div>
    </div>
  );
}