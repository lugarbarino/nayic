import { useEffect, useState } from 'react';
// Brillos (sparkles) - 4 tipos
import sparkle1 from 'figma:asset/607c899f74e05c2b5d0dbc25f18498ae3ac8f48d.png';
import sparkle2 from 'figma:asset/607c899f74e05c2b5d0dbc25f18498ae3ac8f48d.png';
import sparkle3 from 'figma:asset/607c899f74e05c2b5d0dbc25f18498ae3ac8f48d.png';
import sparkle4 from 'figma:asset/607c899f74e05c2b5d0dbc25f18498ae3ac8f48d.png';
// Burbujas - 10 tipos
import bubble1 from 'figma:asset/a247dee60aafd7d514341e8f4cc93b6f8d0b6574.png';
import bubble2 from 'figma:asset/ef53c42a54ac05c9a2cd91fe4479809d181188ea.png';
import bubble3 from 'figma:asset/b8f4809826f7b2d63241a464eb674e2700b08a7a.png';
import bubble4 from 'figma:asset/8a31303244866a00ee652a320f9ffb16ebb34508.png';
import bubble5 from 'figma:asset/4d46c5eb8d13495ab83b871b4361ba2e95c57e56.png';
import bubble6 from 'figma:asset/3cd33bf9d4fe422494469d74bb078219ee88dbe6.png';
import bubble7 from 'figma:asset/073908776d2287f0bd8746ad0cb8675f9644eba8.png';
import bubble8 from 'figma:asset/2e2fa58895edff67666174c90199de41838967fb.png';
import bubble9 from 'figma:asset/fe34f0968d7982631b142b8fc82ac400170a515a.png';
import bubble10 from 'figma:asset/9344bc7ebee7cb37aa4a33e8c20df6a94d2a74c6.png';

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