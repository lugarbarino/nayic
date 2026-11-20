import React, { useState, useEffect, useMemo } from 'react';
import { useTheme, ThemeType, themes } from '@/app/contexts/ThemeContext';
import svgPaths from '@/imports/svg-e82o45esaq';
import imgLogo from "figma:asset/18d26e0d7a2f4256d07f027dea879df286c57dc7.png";
import AgencyFooter from '@/imports/Frame127';

// Componente para mostrar 3 bloques del tema actual (fuera del componente principal)
function ThemePreviewBlocks({ blocks }: { blocks: (string | React.ComponentType)[] }) {
  return (
    <div className="flex gap-[4px] items-center justify-center h-[36px] w-[119px]">
      {blocks.map((block, index) => (
        <div key={index} className="w-[36px] h-[36px] shrink-0 rounded-[4px] overflow-hidden">
          {typeof block === 'string' ? (
            <img 
              src={block} 
              alt="" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center scale-[0.8]">
              {React.createElement(block as React.ComponentType)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Hook para detectar si es móvil
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

// Hook para detectar el viewport real visible
function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);
    
    const timeoutId = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  return viewportHeight;
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[27.889px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.8893 27.8893">
        <g id="Arrow right">
          <path d={svgPaths.p7ad6d40} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.32411" />
        </g>
      </svg>
    </div>
  );
}

interface TetrisStartScreenProps {
  onStart: () => void;
  gameMode?: 'clasico' | 'puzzle' | 'aventura';
  onGameModeChange?: (mode: 'clasico' | 'puzzle' | 'aventura') => void;
}

export function TetrisStartScreen({ onStart, gameMode = 'clasico', onGameModeChange }: TetrisStartScreenProps) {
  const { currentTheme, setTheme } = useTheme();

  const themeOrder: ThemeType[] = ['naturaleza', 'rocas', 'rojo', 'retro', 'colores', 'dulces'];
  const gameModeOrder: ('clasico' | 'puzzle' | 'aventura')[] = ['clasico', 'puzzle', 'aventura'];

  // Función para formatear el nombre del modo con la primera letra en mayúscula
  const formatGameMode = (mode: 'clasico' | 'puzzle' | 'aventura') => {
    switch (mode) {
      case 'clasico':
        return 'Clásico';
      case 'puzzle':
        return 'Puzzle';
      case 'aventura':
        return 'Aventura';
      default:
        return 'Clásico';
    }
  };

  const handleThemeClick = () => {
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  const handleGameModeClick = () => {
    const currentIndex = gameModeOrder.indexOf(gameMode);
    const nextIndex = (currentIndex + 1) % gameModeOrder.length;
    const nextMode = gameModeOrder[nextIndex];
    if (onGameModeChange) {
      onGameModeChange(nextMode);
    }
  };

  const isMobile = useIsMobile();
  const viewportHeight = useViewportHeight();

  // Seleccionar 3 bloques aleatorios del tema actual
  const randomBlocks = useMemo(() => {
    const themeBlocks = themes[currentTheme].blocks;
    const shuffled = [...themeBlocks].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [currentTheme]);

  // Mobile layout
  if (isMobile) {
    return (
      <div 
        className="relative w-full flex items-center justify-center pt-0 pb-4 overflow-hidden" 
        data-name="Mobile start" 
        style={{ 
          backgroundImage: "linear-gradient(145.892deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
          height: `${viewportHeight}px`,
          minHeight: `${viewportHeight}px`,
        }}
      >
        <div className="content-stretch flex flex-col gap-[34px] items-center w-full max-w-[369px] px-[20px]">
          {/* Logo */}
          <div className="h-[60px] relative shrink-0 w-full max-w-[280px]" data-name="Logo">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
          </div>

          {/* Contenido principal */}
          <div className="content-stretch flex flex-col gap-[34px] items-start justify-center relative shrink-0 w-full">
            {/* Descripción */}
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
              <div className="font-['Capriola:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#ececec] text-[24px] w-[min-content]">
                <p className="mb-0">{`No dejes huecos `}</p>
                <p>en tu estrategia</p>
              </div>
              <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal italic leading-[25px] relative shrink-0 text-[#8eb0cf] text-[18px] w-full" style={{ fontVariationSettings: "'YAXS' 400" }}>
                Gira, mueve y acelera antes de que sea demasiado tarde.
              </p>
            </div>

            {/* Selectores */}
            <div className="content-stretch flex flex-col gap-[25px] items-start justify-center relative shrink-0 w-full">
              {/* Selector de tema */}
              <div 
                className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 cursor-pointer active:opacity-80 transition-opacity w-full"
                onClick={handleThemeClick}
              >
                <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0">
                  <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[39px] italic leading-[39px] relative shrink-0 text-[#8eb0cf] text-[18px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'YAXS' 400" }}>{`Tema: `}</p>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <p className="font-['Capriola:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-white whitespace-pre-wrap">
                      {themes[currentTheme].name}
                    </p>
                  </div>
                </div>
                <ThemePreviewBlocks blocks={randomBlocks} />
                <ArrowRight />
              </div>

              {/* Selector de modo de juego */}
              <div 
                className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0 cursor-pointer active:opacity-80 transition-opacity w-full"
                onClick={handleGameModeClick}
              >
                <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[39px] italic leading-[39px] relative shrink-0 text-[#8eb0cf] text-[18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'YAXS' 400" }}>{`Modo de juego: `}</p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p className="font-['Capriola:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-pre-wrap">
                    {formatGameMode(gameMode)}
                  </p>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>

          {/* Botón Empeza a jugar */}
          <div 
            onClick={onStart}
            className="bg-[#0065c1] content-stretch flex h-[71px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[257px] cursor-pointer active:bg-[#0056a3] active:scale-95 transition-all"
          >
            <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Empeza a jugar
            </p>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_18px_0px_rgba(0,0,0,0.25)]" />
          </div>

          {/* Pie de agencia */}
          <a 
            href="https://nayic.com.ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-80 transition-opacity h-[32px] w-[233px]"
          >
            <AgencyFooter />
          </a>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center" data-name="Tetris start" style={{ backgroundImage: "linear-gradient(145.892deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[50px] items-center justify-center w-[369px]">
        {/* Logo */}
        <div className="h-[83.263px] relative shrink-0 w-[368px]" data-name="Logo">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
        </div>

        {/* Contenido principal */}
        <div className="content-stretch flex flex-col gap-[50px] items-start justify-center relative shrink-0 w-full">
          {/* Descripción */}
          <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
            <div className="font-['Capriola:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#ececec] text-[24px] w-[min-content]">
              <p className="mb-0">{`No dejes huecos `}</p>
              <p>en tu estrategia</p>
            </div>
            <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[46px] italic leading-[25px] relative shrink-0 text-[#8eb0cf] text-[18px] w-[368px]" style={{ fontVariationSettings: "'YAXS' 400" }}>
              Gira, mueve y acelera antes de que sea demasiado tarde.
            </p>
          </div>

          {/* Selectores */}
          <div className="content-stretch flex flex-col gap-[35px] items-start justify-center relative shrink-0">
            {/* Selector de tema */}
            <div 
              className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleThemeClick}
            >
              <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0">
                <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[39px] italic leading-[39px] relative shrink-0 text-[#8eb0cf] text-[18px] text-center w-[59px] whitespace-pre-wrap" style={{ fontVariationSettings: "'YAXS' 400" }}>{`Tema: `}</p>
                <div className="content-stretch flex items-center relative shrink-0 w-[153px]">
                  <p className="font-['Capriola:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-white w-[175px] whitespace-pre-wrap">
                    {themes[currentTheme].name}
                  </p>
                </div>
              </div>
              <ThemePreviewBlocks blocks={randomBlocks} />
              <ArrowRight />
            </div>

            {/* Selector de modo de juego */}
            <div 
              className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleGameModeClick}
            >
              <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[39px] italic leading-[39px] relative shrink-0 text-[#8eb0cf] text-[18px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "'YAXS' 400" }}>{`Modo de juego: `}</p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <p className="font-['Capriola:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-center text-white w-[150px] whitespace-pre-wrap">
                  {formatGameMode(gameMode)}
                </p>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* Botón Empeza a jugar */}
        <div 
          onClick={onStart}
          className="bg-[#0065c1] content-stretch flex h-[71px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[257px] cursor-pointer hover:bg-[#0056a3] active:scale-95 transition-all"
        >
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Empeza a jugar
          </p>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_18px_0px_rgba(0,0,0,0.25)]" />
        </div>

        {/* Pie de agencia */}
        <a 
          href="https://nayic.com.ar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-80 transition-opacity h-[32px] w-[233px]"
        >
          <AgencyFooter />
        </a>
      </div>
    </div>
  );
}