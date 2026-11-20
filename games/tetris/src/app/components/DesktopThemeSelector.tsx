import svgPaths from "@/imports/svg-imvt8zpghl";

interface DesktopThemeSelectorProps {
  currentTheme: string;
  onSelectTheme: (theme: string) => void;
  onBack: () => void;
  themeImages: {
    naturaleza: string;
    retro: string;
    colores: string;
    rojo: string;
    rocas: string;
    dulces: string;
  };
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#005eb3] content-stretch flex items-start p-[8px] relative rounded-[12px] shrink-0 hover:bg-[#0070d1] transition-colors cursor-pointer"
    >
      <ArrowLeft />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </button>
  );
}

function ThemeCard({ 
  name, 
  displayName, 
  image, 
  isSelected, 
  onClick 
}: { 
  name: string; 
  displayName: string;
  image: string; 
  isSelected: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center gap-[12px] p-[12px] rounded-[16px] transition-all cursor-pointer ${
        isSelected 
          ? 'bg-[#005eb3] shadow-[0_0_20px_rgba(0,94,179,0.5)]' 
          : 'bg-[#1a2942] hover:bg-[#223654]'
      }`}
    >
      <div className="h-[140px] w-[180px] rounded-[12px] overflow-hidden">
        <img 
          src={image} 
          alt={displayName} 
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`font-['Capriola',sans-serif] text-[18px] ${
        isSelected ? 'text-[#f3f3f4]' : 'text-[#8eb0cf]'
      }`}>
        {displayName}
      </p>
      {isSelected && (
        <div className="absolute top-[8px] right-[8px] bg-[#50c350] rounded-full w-[24px] h-[24px] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L6 11.3333L2.66666 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </button>
  );
}

export function DesktopThemeSelector({
  currentTheme,
  onSelectTheme,
  onBack,
  themeImages,
}: DesktopThemeSelectorProps) {
  const themes = [
    { name: 'naturaleza', displayName: 'Naturaleza', image: themeImages.naturaleza },
    { name: 'retro', displayName: 'Retro', image: themeImages.retro },
    { name: 'colores', displayName: 'Colores', image: themeImages.colores },
    { name: 'rojo', displayName: 'Rojo', image: themeImages.rojo },
    { name: 'rocas', displayName: 'Rocas', image: themeImages.rocas },
    { name: 'dulces', displayName: 'Dulces', image: themeImages.dulces },
  ];

  return (
    <div className="backdrop-blur-[3.8px] relative size-full" style={{ backgroundImage: "linear-gradient(144.238deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-[24px] items-start left-1/2 top-[calc(50%-55px)] w-[640px]">
        <BackButton onClick={onBack} />
        
        <div className="w-full">
          <h2 className="font-['Capriola',sans-serif] text-[32px] text-[#f3f3f4] mb-[32px]">
            Seleccionar Tema
          </h2>
          
          <div className="grid grid-cols-3 gap-[24px]">
            {themes.map((theme) => (
              <ThemeCard
                key={theme.name}
                name={theme.name}
                displayName={theme.displayName}
                image={theme.image}
                isSelected={currentTheme === theme.name}
                onClick={() => onSelectTheme(theme.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
