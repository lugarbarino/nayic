import { useState, useEffect } from 'react';
import Group87 from './Explosion';

interface GameOverModalProps {
  score: number;
  onPlayAgain: () => void;
  onClose: () => void;
}

// Hook para manejar el récord en localStorage
function useHighScore() {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('tetris_high_score');
    if (stored) {
      setHighScore(parseInt(stored, 10));
    }
  }, []);

  const updateHighScore = (newScore: number) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem('tetris_high_score', newScore.toString());
    }
  };

  return { highScore, updateHighScore };
}

// Hook para detectar si es mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export function GameOverModal({ score, onPlayAgain, onClose }: GameOverModalProps) {
  const { highScore, updateHighScore } = useHighScore();
  const isMobile = useIsMobile();

  useEffect(() => {
    updateHighScore(score);
  }, [score]);

  // Escala para mobile (85% del tamaño original)
  const scale = isMobile ? 0.85 : 1;
  // Offset vertical para mobile (baja el modal un poco)
  const verticalOffset = isMobile ? '5%' : '0%';

  return (
    <>
      {/* Backdrop con blur - cubre toda la pantalla */}
      <div className="fixed inset-0 backdrop-blur-[17px] bg-[rgba(22,25,28,0.4)] z-20" />
      
      {/* Modal centrado - fijo respecto al viewport */}
      <div 
        className="fixed left-1/2 bg-white content-stretch flex items-end rounded-[31.908px] shadow-[0px_1.064px_19.038px_0px_rgba(0,0,0,0.15)] z-30"
        style={{
          top: `calc(50% + ${verticalOffset})`,
          transform: 'translate(-50%, -50%)',
          width: `min(${368 * scale}px, calc(100vw - 40px))`,
          height: `min(${494 * scale}px, calc(100vh - 40px))`,
          padding: `${34.035 * scale}px ${30.844 * scale}px`,
        }}
      >
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div 
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              style={{ gap: `${19 * scale}px` }}
            >
              {/* Imagen del gato con bloques */}
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
                <div 
                  className="col-1 ml-0 mt-0 relative row-1" 
                  data-name="gato (1) 1"
                  style={{
                    height: `${325 * scale}px`,
                    width: `${296 * scale}px`,
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Imagen temporalmente removida para evitar error de fetch */}
                    <Group87 />
                  </div>
                </div>
              </div>

              {/* Texto principal */}
              <p 
                className="css-4hzbpn font-['Capriola:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#334c79] text-center w-full"
                style={{
                  fontSize: `${28 * scale}px`,
                  height: `${56 * scale}px`,
                }}
              >
                Tu mejor jugada todavía no pasó
              </p>

              {/* Puntos de la partida */}
              <div 
                className="content-stretch flex flex-col items-start relative shrink-0 text-[#23252d] text-center w-full"
                style={{ gap: `${1 * scale}px` }}
              >
                <p 
                  className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 w-full" 
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    fontSize: `${13.462 * scale}px`,
                    lineHeight: `${21.155 * scale}px`,
                  }}
                >
                  PUNTOS DE LA PARTIDA:
                </p>
                <p 
                  className="css-4hzbpn font-['SF_Pro:Heavy',sans-serif] font-[860] relative shrink-0 w-full" 
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    fontSize: `${64 * scale}px`,
                    lineHeight: `${59.619 * scale}px`,
                    height: `${61.543 * scale}px`,
                  }}
                >
                  {score}
                </p>
              </div>

              {/* Tu récord */}
              <div 
                className="content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] items-center justify-center leading-[0] relative shrink-0 text-[#343434] w-full"
                style={{
                  gap: `${5 * scale}px`,
                  height: `${30 * scale}px`,
                }}
              >
                <div 
                  className="flex flex-col justify-center relative shrink-0 text-right" 
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    fontSize: `${13.462 * scale}px`,
                    height: `${14 * scale}px`,
                    width: `${85 * scale}px`,
                  }}
                >
                  <p className="css-4hzbpn" style={{ lineHeight: `${21.155 * scale}px` }}>TU RECORD:</p>
                </div>
                <div 
                  className="flex flex-col justify-center relative shrink-0" 
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    fontSize: `${24 * scale}px`,
                    height: `${30 * scale}px`,
                    width: `${62 * scale}px`,
                  }}
                >
                  <p className="css-4hzbpn" style={{ lineHeight: `${21.155 * scale}px` }}>{highScore}</p>
                </div>
              </div>

              {/* Botón Jugar de nuevo */}
              <div 
                onClick={onPlayAgain}
                className="bg-[#3568c3] content-stretch flex items-center justify-center relative rounded-[31.908px] shrink-0 cursor-pointer hover:bg-[#2d5aab] transition-colors"
                style={{
                  height: `${79.769 * scale}px`,
                  width: `${288.231 * scale}px`,
                  padding: `${26.59 * scale}px`,
                }}
              >
                <p 
                  className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#ededed] text-center" 
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    fontSize: `${25.526 * scale}px`,
                    lineHeight: `${32.971 * scale}px`,
                    width: `${181.461 * scale}px`,
                  }}
                >
                  Jugar de nuevo
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}