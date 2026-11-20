import { useEffect, useState } from 'react';
import batFrame1 from '../assets/murcielago/aleteo-1.webp';
import batFrame2 from '../assets/murcielago/aleteo-2.webp';

interface BatProps {
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
  id: number; // Para que cada murciélago tenga un patrón único
}

export default function Bat({ x, y, width, height, id }: BatProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(0);
  const roundingMargin = 15;
  
  // Alternar entre los 2 frames para simular el vuelo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev === 0 ? 1 : 0));
    }, 150); // Cambiar frame cada 150ms para un vuelo fluido
    
    return () => clearInterval(interval);
  }, []);

  // Movimiento vertical ondulante para simular vuelo
  useEffect(() => {
    let animationFrame: number;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      // Movimiento sinusoidal para que vuele arriba y abajo
      // Cada murciélago tiene una fase diferente basada en su ID
      const offset = Math.sin(elapsed * 2 + id * 0.5) * 8; // Oscila ±8%
      setVerticalOffset(offset);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationFrame);
  }, [id]);
  
  const batFrames = [batFrame1, batFrame2];
  
  return (
    <img
      src={batFrames[currentFrame]}
      alt="Bat"
      className="absolute z-30"
      style={{
        left: `${x}px`,
        top: `${y + verticalOffset}%`,
        width: `${width}px`,
        height: `${height}px`,
        transform: 'translateY(-50%)',
        objectFit: 'contain',
      }}
    />
  );
}