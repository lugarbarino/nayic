import svgPaths from "../svg/botones";
import IcPaletas from "./IconoPaletas";
import clsx from "clsx";

type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        {children}
      </svg>
    </div>
  );
}

type NavigationButtonsProps = {
  onSelectMode: (mode: 'cartas' | 'paletas' | 'dados') => void;
  currentMode?: 'cartas' | 'paletas' | 'dados';
  onActiveAction?: () => void;
};

export function NavigationButtons({ onSelectMode, currentMode, onActiveAction }: NavigationButtonsProps) {
  const handleClick = (mode: 'cartas' | 'paletas' | 'dados') => {
    if (currentMode === mode && onActiveAction) {
      onActiveAction();
    } else {
      onSelectMode(mode);
    }
  };

  return (
    <div className="flex gap-[43px] md:gap-[51.6px] lg:gap-[38.7px] items-center md:scale-120 lg:scale-108">
      <button 
        onClick={() => handleClick('cartas')}
        className={`content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0 cursor-pointer hover:scale-105 transition-transform ${
          currentMode === 'cartas' ? 'bg-[#7B4889]' : 'bg-[#995da9]'
        }`}
        data-name="button"
      >
        <div className={`h-[78px] relative rounded-[10px] shrink-0 w-[75px] transition-transform ${
          currentMode === 'cartas' ? 'translate-y-1' : ''
        }`} data-name="System / Chips Item">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[37px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Retos
          </p>
          <Wrapper additionalClassNames="left-[25px] size-[25px] top-[12px]">
            <g clipPath="url(#clip0_20_46)" id="Layer_1">
              <path d={svgPaths.p11ea9c00} fill="var(--fill-0, white)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_20_46">
                <rect fill="white" height="25" width="25" />
              </clipPath>
            </defs>
          </Wrapper>
        </div>
        <div className={`absolute inset-0 pointer-events-none rounded-[21px] ${
          currentMode === 'cartas' ? 'shadow-[inset_0px_9px_4px_0px_rgba(0,0,0,0.25)]' : 'shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]'
        }`} />
      </button>
      <button 
        onClick={() => handleClick('paletas')}
        className={`content-stretch flex h-[78.72px] items-start relative rounded-[21.194px] shrink-0 cursor-pointer hover:scale-105 transition-transform ${
          currentMode === 'paletas' ? 'bg-[#186D80]' : 'bg-[#26999B]'
        }`}
        data-name="button"
      >
        <div className={`h-[78.72px] relative rounded-[10.092px] shrink-0 w-[75.692px] transition-transform ${
          currentMode === 'paletas' ? 'translate-y-1' : ''
        }`} data-name="System / Chips Item">
          <div className="absolute left-[26.24px] size-[24px] top-[12.15px]">
            <IcPaletas />
          </div>
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22.203px] left-[38.16px] text-[#f3f3f4] text-[12.111px] text-center text-nowrap top-[37.34px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Paletas
          </p>
        </div>
        <div className={`absolute inset-0 pointer-events-none rounded-[21.194px] ${
          currentMode === 'paletas' ? 'shadow-[inset_0px_9.083px_4.037px_0px_rgba(0,0,0,0.25)]' : 'shadow-[inset_0px_-9.083px_4.037px_0px_rgba(0,0,0,0.25)]'
        }`} />
      </button>
      <button 
        onClick={() => handleClick('dados')}
        className={`content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0 w-[75px] cursor-pointer hover:scale-105 transition-transform ${
          currentMode === 'dados' ? 'bg-[#1F6548]' : 'bg-[#2b815d]'
        }`}
        data-name="button"
      >
        <div className={`h-[78px] relative rounded-[10px] shrink-0 w-[75px] transition-transform ${
          currentMode === 'dados' ? 'translate-y-1' : ''
        }`} data-name="System / Chips Item">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38.5px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[39px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Números
          </p>
          <Wrapper additionalClassNames="inset-[16.67%_32%_51.28%_34.67%]">
            <path d={svgPaths.p115c2d00} fill="var(--fill-0, white)" id="Vector (Stroke)" />
          </Wrapper>
        </div>
        <div className={`absolute inset-0 pointer-events-none rounded-[21px] ${
          currentMode === 'dados' ? 'shadow-[inset_0px_9px_4px_0px_rgba(0,0,0,0.25)]' : 'shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]'
        }`} />
      </button>
    </div>
  );
}