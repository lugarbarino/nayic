import { useEffect, useState } from 'react';
import heartImage from 'figma:asset/00f936498c771fab0c5cfe6ab4ed0f01bd42a3d6.png';

interface LifePowerUpProps {
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
}

export default function LifePowerUp({ x, y, width, height }: LifePowerUpProps) {
  const [floatOffset, setFloatOffset] = useState(0);

  // Animación de flotación suave
  useEffect(() => {
    let animationFrame: number;
    let startTime = Date.now();
    const floatSpeed = 0.002;
    const floatAmplitude = 20; // Amplitud del movimiento en píxeles

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const offset = Math.sin(elapsed * floatSpeed) * floatAmplitude;
      setFloatOffset(offset);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="absolute z-30"
      style={{
        left: `${x}px`,
        top: `calc(${y}% + ${floatOffset}px)`,
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateY(-50%)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <img
        src={heartImage}
        alt="life power-up"
        className="w-full h-full object-contain"
        style={{
          imageRendering: 'auto',
        }}
      />
    </div>
  );
}