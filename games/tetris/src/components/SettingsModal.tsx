import React, { useState } from 'react';
import svgPaths from '../svg/selector-temas';
import img23 from '../assets/logo-tetris-chico.webp';

interface SettingsModalProps {
  gridEnabled: boolean;
  onToggleGrid: () => void;
  onClose: () => void;
  onThemeSelect: () => void;
  currentTheme: string;
  themeImage: string;
  gameMode: 'clasico' | 'puzzle' | 'aventura';
  onToggleGameMode: () => void;
}

export function SettingsModal({ 
  gridEnabled, 
  onToggleGrid, 
  onClose, 
  onThemeSelect,
  currentTheme,
  themeImage,
  gameMode,
  onToggleGameMode
}: SettingsModalProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Mapear nombres de tema a español con primera letra mayúscula
  const themeNameMap: Record<string, string> = {
    'naturaleza': 'Naturaleza',
    'retro': 'Retro',
    'colores': 'Colores',
    'rojo': 'Rojo',
    'rocas': 'Rocas',
    'dulces': 'Dulces'
  };

  const displayThemeName = themeNameMap[currentTheme] || 'Colores';

  const handleThemeSelect = () => {
    onThemeSelect();
    setToastMessage('Tema actualizado');
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const handleToggleGameMode = () => {
    onToggleGameMode();
    
    // Determinar el próximo modo basado en el modo actual
    let nextMode: 'clasico' | 'puzzle' | 'aventura';
    if (gameMode === 'clasico') {
      nextMode = 'puzzle';
    } else if (gameMode === 'puzzle') {
      nextMode = 'aventura';
    } else {
      nextMode = 'clasico';
    }
    
    // Mostrar mensaje específico para modo Puzzle
    if (nextMode === 'puzzle') {
      setToastMessage('Modo actualizado, para mover las fichas arrástralas');
      setTimeout(() => {
        setToastMessage(null);
      }, 3000); // 3 segundos para el mensaje más largo
    } else {
      setToastMessage('Modo actualizado');
      setTimeout(() => {
        setToastMessage(null);
      }, 2000);
    }
  };

  const handleToggleGrid = () => {
    onToggleGrid();
    // El mensaje se muestra basado en el nuevo estado (opuesto al actual)
    setToastMessage(gridEnabled ? 'Grilla desactivada' : 'Grilla activada');
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 backdrop-blur-[3.8px] flex flex-col overflow-hidden" 
      style={{ backgroundImage: "linear-gradient(114.762deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      {/* Botón Volver - siempre visible en la parte superior */}
      <div className="absolute top-[20px] left-[20px] z-10">
        <div 
          onClick={onClose}
          className="bg-[#005eb3] content-stretch flex items-start p-[8px] rounded-[12px] shrink-0 cursor-pointer active:bg-[#004d8f]"
        >
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
        </div>
      </div>

      {/* Contenedor con scroll para el contenido */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden flex items-center justify-center pt-[60px] pb-[20px]">
        <div className="content-stretch flex flex-col gap-[18px] items-center w-[calc(100%-40px)] max-w-[341px] px-[10px]">
          {/* Contenido Principal */}
          <div className="content-stretch flex flex-col gap-[31px] items-center justify-center relative shrink-0 w-full">
            {/* Logo 2 3 */}
            <div className="h-[156px] relative shrink-0 w-[233px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[167.97%] left-[-5.42%] max-w-none top-[-22.62%] w-[112.95%]" src={img23} />
              </div>
            </div>

            {/* Opciones: Grilla y Tema */}
            <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-full max-w-[341px]">
              {/* Toggle Grilla */}
              <div className="content-stretch flex justify-between items-center relative shrink-0 w-full">
                <p className="font-['Capriola:Regular',sans-serif] h-[64px] leading-[62px] not-italic relative shrink-0 text-[#f3f3f4] text-[24px] min-w-[122px] whitespace-pre-wrap">
                  Grilla
                </p>
                <div 
                  onClick={handleToggleGrid}
                  className={`h-[28px] overflow-clip relative rounded-[100px] shrink-0 w-[64px] cursor-pointer transition-colors ${
                    gridEnabled ? 'bg-[#50c350]' : 'bg-[#c35050]'
                  }`}
                >
                  <div className="absolute h-[10px] left-[41px] top-[9px] w-[21px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 10">
                      <g />
                    </svg>
                  </div>
                  <div 
                    className={`absolute bg-white bottom-[7.14%] rounded-[100px] top-[7.14%] w-[39px] transition-all ${
                      gridEnabled ? 'left-[23px]' : 'left-[2px]'
                    }`}
                  />
                </div>
              </div>

              {/* Selector de Modo - Entre Grilla y Tema */}
              <div 
                onClick={handleToggleGameMode}
                className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full cursor-pointer active:opacity-80"
              >
                <p className="font-['Capriola:Regular',sans-serif] h-[64px] leading-[62px] not-italic shrink-0 text-[#f3f3f4] text-[24px] min-w-[122px] whitespace-pre-wrap">
                  Modo
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] flex-1 min-w-0 truncate text-[#f3f3f4] text-[24px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {gameMode === 'clasico' ? 'Clásico' : gameMode === 'puzzle' ? 'Puzzle' : 'Aventura'}
                </p>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M9 18L15 12L9 6" stroke="#005EB3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Selector de Tema - Al tocar cambia al siguiente tema */}
              <div 
                onClick={handleThemeSelect}
                className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full cursor-pointer active:opacity-80"
              >
                <p className="font-['Capriola:Regular',sans-serif] h-[64px] leading-[62px] not-italic shrink-0 text-[#f3f3f4] text-[24px] min-w-[122px] whitespace-pre-wrap">
                  Tema
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] flex-1 min-w-0 truncate text-[#f3f3f4] text-[24px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {displayThemeName}
                </p>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M9 18L15 12L9 6" stroke="#005EB3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Imagen de piezas Tetris según el tema */}
            <div className="h-[237px] relative shrink-0 w-[263px] max-w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={themeImage} />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-[40px] left-1/2 translate-x-[-50%] bg-[#3F5C90] px-[32px] py-[16px] rounded-[20px] shadow-lg z-[60] animate-[slideUp_0.3s_ease-out]">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] text-white text-[18px] text-center whitespace-nowrap">
            {toastMessage}
          </p>
        </div>
      )}
    </div>
  );
}