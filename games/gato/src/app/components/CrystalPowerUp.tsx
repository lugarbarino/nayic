import { useEffect, useState } from 'react';
import crystal1 from 'figma:asset/3ef15fa5e6622e57f164d473de6bb386f80720bd.png';
import crystal2 from 'figma:asset/dd93047c8bca8ee5cb50f61d3fee10f6f96a25e7.png';

interface CrystalPowerUpProps {
  x: number;
  y: number; // Posición vertical en porcentaje (0-100)
  width: number;
  height: number;
  crystalType: number; // 0 o 1 para alternar entre los dos cristales
}

export default function CrystalPowerUp({ x, y, width, height, crystalType }: CrystalPowerUpProps) {
  const [floatOffset, setFloatOffset] = useState(0);

  const crystalImage = crystalType === 0 ? crystal1 : crystal2;

  // Animación de flotación suave arriba y abajo
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
        src={crystalImage}
        alt="crystal power-up"
        className="w-full h-full object-contain"
        style={{
          imageRendering: 'auto',
        }}
      />
    </div>
  );
}
