import { useState } from 'react';
import svgPaths from "../svg/selector-modo";

const GAME_MODE_STORAGE_KEY = 'monster-memory-game-mode';

type GameMode = 'contrareloj' | 'normal';

interface ModoSelectorProps {
  onClose: () => void;
}

type ModeItemProps = {
  text: string;
  mode: GameMode;
  isSelected: boolean;
  onSelect: (mode: GameMode) => void;
  icon: 'play' | 'clock';
};

function ModeItem({ text, mode, isSelected, onSelect, icon }: ModeItemProps) {
  return (
    <button
      onClick={() => onSelect(mode)}
      className={`content-stretch flex gap-[22.205px] h-[140px] items-center relative shrink-0 w-[339px] transition-all hover:opacity-80 ${
        isSelected ? 'px-[24px] py-[18.699px] rounded-[46.748px]' : 'px-[16px] py-0'
      }`}
    >
      {isSelected && (
        <div aria-hidden="true" className="absolute border-4 border-[#9952a3] border-solid inset-0 pointer-events-none rounded-[46.748px]" />
      )}
      
      <div className={`content-stretch flex flex-col items-center justify-center relative shrink-0 ${
        isSelected ? 'p-[29.767px] rounded-[35.72px] size-[89.301px]' : 'p-[25px] rounded-[30px] size-[97px]'
      }`}>
        {icon === 'play' ? (
          <div className={`relative shrink-0 ${isSelected ? 'size-[51.364px]' : 'size-[47px]'}`} data-name="Play">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
              <g id="Play">
                <path d={svgPaths.p1abd3380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </g>
            </svg>
          </div>
        ) : (
          <div className={`${isSelected ? 'size-[51.364px]' : 'h-[47px] w-full'} overflow-clip relative shrink-0`} data-name="Clock">
            <div className="absolute inset-[8.33%]" data-name="Icon">
              <div className="absolute inset-[-5.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p18ff9820} id="Icon" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div 
        className={`flex flex-col justify-center leading-[0] relative shrink-0 text-center ${
          isSelected 
            ? "font-['SF_Pro:Bold',sans-serif] font-bold h-[112.195px] text-[28.049px] text-white w-[140.244px]"
            : "font-['SF_Pro:Medium',sans-serif] font-[510] h-[87.652px] text-[24px] text-white w-[246.596px]"
        }`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className={isSelected ? 'leading-[25.711px]' : 'leading-[22px]'}>{text}</p>
      </div>
    </button>
  );
}

export default function ModoSelector({ onClose }: ModoSelectorProps) {
  // Load current mode from localStorage
  const savedMode = localStorage.getItem(GAME_MODE_STORAGE_KEY) as GameMode | null;
  const [selectedMode, setSelectedMode] = useState<GameMode>(savedMode || 'normal');
  const [showToast, setShowToast] = useState(false);

  const handleModeSelect = (mode: GameMode) => {
    setSelectedMode(mode);
    localStorage.setItem(GAME_MODE_STORAGE_KEY, mode);
    // Show toast notification
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div 
      className="backdrop-blur-[3.8px] backdrop-filter fixed inset-0 z-50" 
      data-name="Modo" 
      style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}
    >
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-1/2 top-[calc(50%-132px)] translate-x-[-50%] translate-y-[-50%] w-[341px]">
        <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-2.3374px] w-full">
          Modo
        </p>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <ModeItem
            text="Normal"
            mode="normal"
            isSelected={selectedMode === 'normal'}
            onSelect={handleModeSelect}
            icon="play"
          />
          <ModeItem
            text="Contrareloj"
            mode="contrareloj"
            isSelected={selectedMode === 'contrareloj'}
            onSelect={handleModeSelect}
            icon="clock"
          />
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-[40px] left-1/2 translate-x-[-50%] bg-[#9952a3] px-[32px] py-[16px] rounded-[20px] shadow-lg z-[60] animate-[slideUp_0.3s_ease-out]">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] text-white text-[18px] text-center whitespace-nowrap">
            Modo actualizado
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