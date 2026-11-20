import { useState, useEffect } from 'react';
import starImage from 'figma:asset/1aa3e30802877b4e82d103f2b13de0fe711faa07.png';

interface StarPowerUpProps {
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
}

export default function StarPowerUp({ x, y, width, height }: StarPowerUpProps) {
  const [floatOffset, setFloatOffset] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Animación de flotación suave con rotación
  useEffect(() => {
    let animationFrame: number;
    let startTime = Date.now();
    const floatSpeed = 0.002;
    const floatAmplitude = 20; // Amplitud del movimiento en píxeles
    const rotationSpeed = 0.001; // Velocidad de rotación

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const offset = Math.sin(elapsed * floatSpeed) * floatAmplitude;
      const rotationValue = (elapsed * rotationSpeed) % 360; // Rotación continua
      setFloatOffset(offset);
      setRotation(rotationValue);
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
        transform: `translateY(-50%) rotate(${rotation}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <img
        src={starImage}
        alt="star power-up"
        className="w-full h-full object-contain"
        style={{
          imageRendering: 'auto',
          filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))', // Brillo dorado
        }}
      />
    </div>
  );
}
