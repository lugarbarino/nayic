import { useEffect, useState } from 'react';
// Brillos (sparkles) - 4 tipos
import sparkle1 from '../assets/burbujas/destello.webp';
import sparkle2 from '../assets/burbujas/destello.webp';
import sparkle3 from '../assets/burbujas/destello.webp';
import sparkle4 from '../assets/burbujas/destello.webp';
// Burbujas - 10 tipos
import bubble1 from '../assets/burbujas/burbuja-1.webp';
import bubble2 from '../assets/burbujas/burbuja-2.webp';
import bubble3 from '../assets/burbujas/burbuja-3.webp';
import bubble4 from '../assets/burbujas/burbuja-4.webp';
import bubble5 from '../assets/burbujas/burbuja-5.webp';
import bubble6 from '../assets/burbujas/burbuja-6.webp';
import bubble7 from '../assets/burbujas/burbuja-7.webp';
import bubble8 from '../assets/burbujas/burbuja-8.webp';
import bubble9 from '../assets/burbujas/burbuja-9.webp';
import bubble10 from '../assets/burbujas/burbuja-10.webp';

interface BubbleProps {
  id?: number;
  x: number;
  y: number;
  size: number;
  type: number; // 0-13 para diferentes tipos (4 brillos + 10 burbujas)
}

const particleImages = [sparkle1, sparkle2, sparkle3, sparkle4, bubble1, bubble2, bubble3, bubble4, bubble5, bubble6, bubble7, bubble8, bubble9, bubble10];

export default function Bubble({ x, y, size, type }: BubbleProps) {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let animationFrame: number;
    let startTime = Date.now();
    const lifetime = 1500; // 1.5 segundos de vida

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / lifetime;

      if (progress >= 1) {
        return;
      }

      // Fade out gradual
      setOpacity(1 - progress);

      // Escala que crece ligeramente al principio y luego se reduce
      const scaleValue = progress < 0.3 
        ? 1 + progress * 0.5 // Crece hasta 1.15 en los primeros 30%
        : 1.15 - (progress - 0.3) * 0.7; // Luego se reduce gradualmente
      setScale(scaleValue);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []); // Sin dependencias ya que solo se ejecuta una vez al montar

  return (
    <img
      src={particleImages[type]}
      alt="bubble"
      className="absolute pointer-events-none"
      style={{
        left: `${x}px`,
        bottom: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        transform: `scale(${scale})`,
        transition: 'none',
        zIndex: 5,
      }}
    />
  );
}