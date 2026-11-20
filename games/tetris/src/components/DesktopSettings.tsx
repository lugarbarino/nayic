import { useState } from 'react';
import svgPaths from "../svg/ajustes";
import img23 from "../assets/logo-tetris-chico.webp";

interface DesktopSettingsProps {
  gridEnabled: boolean;
  onToggleGrid: () => void;
  currentTheme: string;
  onCycleTheme: () => void;
  onBack: () => void;
  themeImages: {
    naturaleza: string;
    retro: string;
    colores: string;
    rojo: string;
    rocas: string;
    dulces: string;
  };
  gameMode: 'clasico' | 'puzzle' | 'aventura';
  onToggleGameMode: () => void;
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

function Frame() {
  return (
    <div className="absolute h-[10px] left-[41px] top-[9px] w-[21px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 10">
        <g id="Frame" />
      </svg>
    </div>
  );
}

function Knob({ enabled }: { enabled: boolean }) {
  return (
    <div 
      className="absolute bg-white bottom-[7.14%] rounded-[100px] top-[7.14%] w-[39px] transition-all duration-300" 
      data-name="Knob"
      style={{ left: enabled ? 'calc(100% - 41px)' : '2px' }}
    />
  );
}

function ToggleSwitch({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`h-[28px] overflow-clip relative rounded-[100px] shrink-0 w-[64px] transition-colors duration-300 cursor-pointer ${
        enabled ? 'bg-[#50c350]' : 'bg-[#c35050]'
      }`}
      data-name="Toggle - Switch"
    >
      <Frame />
      <Knob enabled={enabled} />
    </button>
  );
}

function GridToggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Capriola',sans-serif] h-[64px] leading-[62px] not-italic relative shrink-0 text-[#f3f3f4] text-[24px] whitespace-pre-wrap">Grilla</p>
      <ToggleSwitch enabled={enabled} onToggle={onToggle} />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #005EB3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ThemeSelector({ currentTheme, onClick }: { currentTheme: string; onClick: () => void }) {
  // Mapeo de nombres de temas en español
  const themeNames: Record<string, string> = {
    naturaleza: 'Naturaleza',
    retro: 'Retro',
    colores: 'Colores',
    rojo: 'Rojo',
    rocas: 'Rocas',
    dulces: 'Dulces',
  };

  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
    >
      <p className="font-['Capriola',sans-serif] h-[64px] leading-[62px] not-italic relative shrink-0 text-[#f3f3f4] text-[24px] whitespace-pre-wrap">Tema</p>
      <div className="flex items-center gap-[9px]">
        <p className="font-['SF_Pro',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {themeNames[currentTheme] || 'Colores'}
        </p>
        <ChevronRight />
      </div>
    </button>
  );
}

function ModeSelector({ gameMode, onClick }: { gameMode: 'clasico' | 'puzzle' | 'aventura'; onClick: () => void }) {
  const getModeLabel = (mode: 'clasico' | 'puzzle' | 'aventura') => {
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

  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
    >
      <p className="font-['Capriola',sans-serif] h-[64px] leading-[62px] not-italic relative shrink-0 text-[#f3f3f4] text-[24px] whitespace-pre-wrap">Modo</p>
      <div className="flex items-center gap-[9px]">
        <p className="font-['SF_Pro',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {getModeLabel(gameMode)}
        </p>
        <ChevronRight />
      </div>
    </button>
  );
}

function SettingsControls({ 
  gridEnabled, 
  onToggleGrid, 
  currentTheme, 
  onOpenThemeSelector,
  gameMode,
  onToggleGameMode
}: { 
  gridEnabled: boolean; 
  onToggleGrid: () => void; 
  currentTheme: string;
  onOpenThemeSelector: () => void;
  gameMode: 'clasico' | 'puzzle' | 'aventura';
  onToggleGameMode: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-[341px]">
      <GridToggle enabled={gridEnabled} onToggle={onToggleGrid} />
      <ModeSelector gameMode={gameMode} onClick={onToggleGameMode} />
      <ThemeSelector currentTheme={currentTheme} onClick={onOpenThemeSelector} />
    </div>
  );
}

function ThemePreview({ themeImage }: { themeImage: string }) {
  return (
    <div className="h-[237px] relative shrink-0 w-[263px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={themeImage} />
    </div>
  );
}

export function DesktopSettings({
  gridEnabled,
  onToggleGrid,
  currentTheme,
  onCycleTheme,
  onBack,
  themeImages,
  gameMode,
  onToggleGameMode,
}: DesktopSettingsProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCycleTheme = () => {
    onCycleTheme();
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
    <div className="backdrop-blur-[3.8px] relative size-full overflow-auto" data-name="Ajustes" style={{ backgroundImage: "linear-gradient(144.238deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 content-stretch flex flex-col gap-[18px] items-start w-[341px]">
        <BackButton onClick={onBack} />
        <div className="content-stretch flex flex-col gap-[31px] items-center justify-center relative shrink-0 w-full">
          <div className="h-[156px] relative shrink-0 w-[233px]" data-name="2 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[167.97%] left-[-5.42%] max-w-none top-[-22.62%] w-[112.95%]" src={img23} />
            </div>
          </div>
          <SettingsControls 
            gridEnabled={gridEnabled}
            onToggleGrid={handleToggleGrid}
            currentTheme={currentTheme}
            onOpenThemeSelector={handleCycleTheme}
            gameMode={gameMode}
            onToggleGameMode={handleToggleGameMode}
          />
          <ThemePreview themeImage={themeImages[currentTheme as keyof typeof themeImages]} />
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