import React from 'react';
import svgPaths from '@/imports/svg-ie9b4x0w0r';
import img23 from 'figma:asset/e561a759cc81a124d2cad453f997597f9ce3f65d.png';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeSelect: (theme: string) => void;
  onClose: () => void;
}

const themes = [
  { id: 'naturaleza', name: 'Naturaleza' },
  { id: 'retro', name: 'Retro' },
  { id: 'colores', name: 'Colores' },
  { id: 'rojo', name: 'Rojo' },
  { id: 'rocas', name: 'Rocas' },
  { id: 'dulces', name: 'Dulces' },
];

export function ThemeSelector({ currentTheme, onThemeSelect, onClose }: ThemeSelectorProps) {
  return (
    <div 
      className="fixed inset-0 z-50 backdrop-blur-[3.8px]" 
      style={{ backgroundImage: "linear-gradient(114.762deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[18px] items-start left-1/2 top-[calc(50%-55px)] w-[341px]">
        {/* Botón Volver */}
        <div 
          onClick={onClose}
          className="bg-[#005eb3] content-stretch flex items-start p-[8px] relative rounded-[12px] shrink-0 cursor-pointer active:bg-[#004d8f]"
        >
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
        </div>

        {/* Contenido Principal */}
        <div className="content-stretch flex flex-col gap-[31px] items-center justify-center relative shrink-0 w-full">
          {/* Logo 2 3 */}
          <div className="h-[156px] relative shrink-0 w-[233px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[167.97%] left-[-5.42%] max-w-none top-[-22.62%] w-[112.95%]" src={img23} />
            </div>
          </div>

          {/* Título */}
          <p className="font-['Capriola:Regular',sans-serif] text-[#f3f3f4] text-[28px] leading-[32px] text-center">
            Selecciona un tema
          </p>

          {/* Lista de Temas */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[341px]">
            {themes.map((theme) => (
              <div
                key={theme.id}
                onClick={() => {
                  onThemeSelect(theme.id);
                  onClose();
                }}
                className={`content-stretch flex items-center justify-between relative shrink-0 w-full p-[16px] rounded-[12px] cursor-pointer transition-all ${
                  currentTheme === theme.id 
                    ? 'bg-[#005eb3] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]' 
                    : 'bg-[rgba(0,94,179,0.3)] hover:bg-[rgba(0,94,179,0.5)]'
                }`}
              >
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal text-[#f3f3f4] text-[20px] leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {theme.name}
                </p>
                {currentTheme === theme.id && (
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M20 6L9 17L4 12" stroke="#50c350" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}