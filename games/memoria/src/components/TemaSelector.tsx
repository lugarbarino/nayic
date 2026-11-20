import { useState } from 'react';
import svgPaths from "../imports/svg-n9xpf9pkkj";
import imgFrame18 from "figma:asset/af4219100c39788b8b9af7770f88ff697f491309.png";
import imgFrame19 from "figma:asset/3de83ad4959ced8fbc59b16c1e9e40de04f8e202.png";
import imgRectangle24 from "figma:asset/82ff1f85d158c07ce17a89080cb25b523ac067c4.png";
import imgFrame20 from "figma:asset/8b825f636a64c9fc6841241fad9d3af8bdc771e2.png";

const THEME_STORAGE_KEY = 'monster-memory-game-theme';

type Theme = 'monstruos' | 'animales' | 'huerto' | 'gatos';

interface TemaSelectorProps {
  onClose: () => void;
}

type ThemeItemProps = {
  text: string;
  image: string;
  theme: Theme;
  isSelected: boolean;
  onSelect: (theme: Theme) => void;
  rounded?: boolean;
};

function ThemeItem({ text, image, theme, isSelected, onSelect, rounded = false }: ThemeItemProps) {
  return (
    <button
      onClick={() => onSelect(theme)}
      className={`content-stretch flex gap-[22.205px] h-[140px] items-center relative shrink-0 w-[339px] transition-all hover:opacity-80 ${
        isSelected ? 'p-[18.699px] rounded-[46.748px]' : 'pl-[30px] pr-0 py-0'
      }`}
    >
      {isSelected && (
        <div aria-hidden="true" className="absolute border-4 border-[#9952a3] border-solid inset-0 pointer-events-none rounded-[46.748px]" />
      )}
      <div className={`relative shrink-0 ${isSelected ? 'h-[112.195px] w-[128.557px]' : `size-[87.652px] ${rounded ? 'rounded-[35.061px]' : ''}`}`}>
        <img 
          alt="" 
          className={`absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full ${rounded ? 'rounded-[35.061px]' : ''}`}
          src={image} 
        />
      </div>
      <div 
        className={`flex flex-col justify-center leading-[0] relative shrink-0 text-center ${
          isSelected 
            ? "font-['SF_Pro:Bold',sans-serif] font-bold h-[112.195px] text-[28.049px] text-white w-[140.244px]"
            : "font-['SF_Pro:Medium',sans-serif] font-[510] h-[88px] text-[#eee] text-[24px] w-[229px]"
        }`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className={isSelected ? 'leading-[25.711px]' : 'leading-[36.23px]'}>{text}</p>
      </div>
    </button>
  );
}

export default function TemaSelector({ onClose }: TemaSelectorProps) {
  // Load current theme from localStorage
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  const [selectedTheme, setSelectedTheme] = useState<Theme>(savedTheme || 'monstruos');
  const [showToast, setShowToast] = useState(false);

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    // Show toast notification
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div 
      className="backdrop-blur-[3.8px] backdrop-filter fixed inset-0 z-50 overflow-y-auto" 
      data-name="tema" 
      style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}
    >
      <div className="min-h-full flex flex-col items-center justify-start px-4 py-[120px] pb-[160px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center w-[341px] max-w-full">
          <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-2.3374px] w-full">
            Tema
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <ThemeItem
              text="Gatos"
              image={imgFrame18}
              theme="gatos"
              isSelected={selectedTheme === 'gatos'}
              onSelect={handleThemeSelect}
            />
            <ThemeItem
              text="Animales"
              image={imgFrame19}
              theme="animales"
              isSelected={selectedTheme === 'animales'}
              onSelect={handleThemeSelect}
              rounded
            />
            <ThemeItem
              text="Monstruos"
              image={imgRectangle24}
              theme="monstruos"
              isSelected={selectedTheme === 'monstruos'}
              onSelect={handleThemeSelect}
            />
            <ThemeItem
              text="El Huerto"
              image={imgFrame20}
              theme="huerto"
              isSelected={selectedTheme === 'huerto'}
              onSelect={handleThemeSelect}
              rounded
            />
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-[40px] left-1/2 translate-x-[-50%] bg-[#9952a3] px-[32px] py-[16px] rounded-[20px] shadow-lg z-[60] animate-[slideUp_0.3s_ease-out]">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] text-white text-[18px] text-center whitespace-nowrap">
            Tema actualizado
          </p>
        </div>
      )}
      
      {/* Back Button */}
      <button
        onClick={onClose}
        className="absolute z-50 bg-[#4d2951] content-stretch flex gap-[4px] items-center justify-center p-[8px] rounded-[12px] cursor-pointer hover:opacity-80 transition-opacity left-[calc(50%-170.5px)] top-[40px] w-[75px]"
        data-name="button"
      >
        <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Arrow left">
              <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[12px] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
      </button>
    </div>
  );
}