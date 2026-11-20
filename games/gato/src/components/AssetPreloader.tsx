// Componente para precargar todos los assets del juego
// Importa y renderiza todas las imágenes de forma invisible

// OBSTÁCULOS DE SUELO (LILA) - 7 items
import rock0 from '../assets/suelo/lila-0.webp';
import rock1 from '../assets/suelo/lila-1.webp';
import rock2 from '../assets/suelo/lila-2.webp';
import rock3 from '../assets/suelo/lila-3.webp';
import rock4 from '../assets/suelo/lila-4.webp';
import rock5 from '../assets/suelo/lila-5.webp';
import rock6 from '../assets/suelo/lila-6.webp';

// OBSTÁCULOS DE SUELO (ROJO) - 7 items
import rockRed0 from '../assets/suelo/roja-0.webp';
import rockRed1 from '../assets/suelo/roja-1.webp';
import rockRed2 from '../assets/suelo/roja-2.webp';
import rockRed3 from '../assets/suelo/roja-3.webp';
import rockRed4 from '../assets/suelo/roja-4.webp';
import rockRed5 from '../assets/suelo/roja-5.webp';
import rockRed6 from '../assets/suelo/roja-6.webp';

// OBSTÁCULOS DE SUELO (AZUL) - 7 items
import rockBlue0 from '../assets/suelo/azul-0.webp';
import rockBlue1 from '../assets/suelo/azul-1.webp';
import rockBlue2 from '../assets/suelo/azul-2.webp';
import rockBlue3 from '../assets/suelo/azul-3.webp';
import rockBlue4 from '../assets/suelo/azul-4.webp';
import rockBlue5 from '../assets/suelo/azul-5.webp';
import rockBlue6 from '../assets/suelo/azul-6.webp';

// OBSTÁCULOS DE TECHO (LILA) - 5 items
import ceiling0 from '../assets/techo/lila-0.webp';
import ceiling1 from '../assets/techo/lila-1.webp';
import ceiling2 from '../assets/techo/lila-2.webp';
import ceiling3 from '../assets/techo/lila-3.webp';
import ceiling4 from '../assets/techo/lila-4.webp';

// OBSTÁCULOS DE TECHO (ROJO) - 5 items
import ceilingRed0 from '../assets/techo/roja-0.webp';
import ceilingRed1 from '../assets/techo/roja-1.webp';
import ceilingRed2 from '../assets/techo/roja-2.webp';
import ceilingRed3 from '../assets/techo/roja-3.webp';
import ceilingRed4 from '../assets/techo/roja-4.webp';

// OBSTÁCULOS DE TECHO (AZUL) - 5 items
import ceilingBlue0 from '../assets/techo/azul-0.webp';
import ceilingBlue1 from '../assets/techo/azul-1.webp';
import ceilingBlue2 from '../assets/techo/azul-2.webp';
import ceilingBlue3 from '../assets/techo/azul-3.webp';
import ceilingBlue4 from '../assets/techo/azul-4.webp';

// ROCAS FLOTANTES (LILA) - 6 items
import floating0 from '../assets/flotantes/lila-0.webp';
import floating1 from '../assets/flotantes/lila-1.webp';
import floating2 from '../assets/flotantes/lila-2.webp';
import floating3 from '../assets/flotantes/lila-3.webp';
import floating4 from '../assets/flotantes/lila-4.webp';
import floating5 from '../assets/flotantes/lila-5.webp';

// ROCAS FLOTANTES (ROJO) - 6 items
import floatingRed0 from '../assets/flotantes/roja-0.webp';
import floatingRed1 from '../assets/flotantes/roja-1.webp';
import floatingRed2 from '../assets/flotantes/roja-2.webp';
import floatingRed3 from '../assets/flotantes/roja-3.webp';
import floatingRed4 from '../assets/flotantes/roja-4.webp';
import floatingRed5 from '../assets/flotantes/roja-5.webp';

// ROCAS FLOTANTES (AZUL) - 6 items
import floatingBlue0 from '../assets/flotantes/azul-0.webp';
import floatingBlue1 from '../assets/flotantes/azul-1.webp';
import floatingBlue2 from '../assets/flotantes/azul-2.webp';
import floatingBlue3 from '../assets/flotantes/azul-3.webp';
import floatingBlue4 from '../assets/flotantes/azul-4.webp';
import floatingBlue5 from '../assets/flotantes/azul-5.webp';

// POWER-UPS Y ENEMIGOS
import heartImage from '../assets/poderes/vida.webp';
import crystal1 from '../assets/poderes/cristal-1.webp';
import crystal2 from '../assets/poderes/cristal-2.webp';
import starImage from '../assets/poderes/estrella.webp';
import batFrame1 from '../assets/murcielago/aleteo-1.webp';
import batFrame2 from '../assets/murcielago/aleteo-2.webp';

import { useEffect, useState, useRef } from 'react';

const ALL_ASSETS = [
  rock0, rock1, rock2, rock3, rock4, rock5, rock6,
  rockRed0, rockRed1, rockRed2, rockRed3, rockRed4, rockRed5, rockRed6,
  rockBlue0, rockBlue1, rockBlue2, rockBlue3, rockBlue4, rockBlue5, rockBlue6,
  ceiling0, ceiling1, ceiling2, ceiling3, ceiling4,
  ceilingRed0, ceilingRed1, ceilingRed2, ceilingRed3, ceilingRed4,
  ceilingBlue0, ceilingBlue1, ceilingBlue2, ceilingBlue3, ceilingBlue4,
  floating0, floating1, floating2, floating3, floating4, floating5,
  floatingRed0, floatingRed1, floatingRed2, floatingRed3, floatingRed4, floatingRed5,
  floatingBlue0, floatingBlue1, floatingBlue2, floatingBlue3, floatingBlue4, floatingBlue5,
  heartImage, crystal1, crystal2, starImage, batFrame1, batFrame2
];

interface AssetPreloaderProps {
  onProgress?: (loaded: number, total: number) => void;
  onComplete?: () => void;
}

export default function AssetPreloader({ onProgress, onComplete }: AssetPreloaderProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalAssets = ALL_ASSETS.length;
  const loadedRef = useRef(0);
  const completedRef = useRef(false);
  
  useEffect(() => {
    // Timeout de seguridad: si no carga en 5 segundos, continuar de todas formas
    const timeout = setTimeout(() => {
      if (!completedRef.current) {
        console.log('Loading timeout - proceeding anyway');
        completedRef.current = true;
        if (onComplete) {
          onComplete();
        }
      }
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [onComplete]);
  
  useEffect(() => {
    // Actualizar progreso cuando cambia loadedCount
    if (onProgress) {
      onProgress(loadedCount, totalAssets);
    }
    
    // Completar cuando todos se hayan cargado
    if (loadedCount >= totalAssets && !completedRef.current && onComplete) {
      completedRef.current = true;
      setTimeout(() => onComplete(), 200);
    }
  }, [loadedCount, totalAssets, onProgress, onComplete]);
  
  const handleImageLoad = () => {
    // Usar setTimeout para evitar actualizar estado durante render
    setTimeout(() => {
      loadedRef.current++;
      setLoadedCount(loadedRef.current);
    }, 0);
  };
  
  const handleImageError = () => {
    // Incluso si falla, contar como cargado para no bloquear
    handleImageLoad();
  };

  // Renderizar todas las imágenes de forma invisible para forzar la carga
  return (
    <div className="fixed -left-[9999px] -top-[9999px] pointer-events-none opacity-0">
      {ALL_ASSETS.map((asset, index) => (
        <img 
          key={index} 
          src={asset} 
          alt="" 
          loading="eager"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ))}
    </div>
  );
}