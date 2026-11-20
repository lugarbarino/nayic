import svgPaths from "../imports/svg-b5mlogegwl";
import clsx from "clsx";
import img1 from "figma:asset/903f46ca7495604536b3719030a008af6acde6b0.png";
import Group88 from "../imports/Group88";

type BackgroundImage4Props = {
  additionalClassNames?: string;
  additionalClassNames1?: string;
};

function BackgroundImage4({ children, additionalClassNames = "", additionalClassNames1 = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("absolute flex items-center justify-center mix-blend-hard-light", additionalClassNames)}>
      <div className="flex-none h-[33.795px] rotate-[50.09deg] skew-x-[328.696deg] w-[69.889px]">
        <div className={clsx("mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[74.752px_75.791px] opacity-80 relative size-full", additionalClassNames)}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8891 33.7951">
            <g id="Vector" style={{ mixBlendMode: "hard-light" }}>
              {children}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center mix-blend-hard-light", additionalClassNames)}>
      <div className="flex-none h-[10.49px] rotate-[90deg] w-[15.773px]">
        <div className="opacity-[0.66] relative size-full" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7727 10.49">
            <path d={svgPaths.p3b442700} fill="var(--fill-0, #014D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center mix-blend-hard-light", additionalClassNames)}>
      <div className="flex-none h-[40.602px] rotate-[90deg] w-[17.886px]">
        <div className="opacity-[0.66] relative size-full" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8858 40.6016">
            <g id="Vector" style={{ mixBlendMode: "screen" }}>
              <path d={svgPaths.p1f8d1700} fill="var(--fill-0, #518FE2)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

type MenuItemProps = {
  text: string;
  text1: string;
  onClick?: () => void;
};

function MenuItem({ text, text1, onClick }: MenuItemProps) {
  return (
    <div 
      className={`content-stretch flex gap-[9px] items-center relative shrink-0 w-full ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      onClick={onClick}
    >
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right w-[184px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
      <BackgroundImage3>
        <g id="Chevron right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #AAAE68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </BackgroundImage3>
    </div>
  );
}

type AjustesScreenProps = {
  onClose: () => void;
  gameMode: 'normal' | 'rapido' | 'timer';
  onGameModeChange: () => void;
  onOpenModoScreen?: () => void;
  onOpenComidaScreen?: () => void;
};

export default function AjustesScreen({ onClose, gameMode, onGameModeChange, onOpenModoScreen, onOpenComidaScreen }: AjustesScreenProps) {
  const gameModeText = gameMode === 'normal' ? 'Normal' : gameMode === 'rapido' ? 'Rápido' : 'Contrareloj';

  return (
    <div className="relative size-full" data-name="ajustes" style={{ backgroundImage: "linear-gradient(178.54deg, rgb(22, 59, 53) 0.549%, rgb(60, 161, 145) 99.451%)" }}>
      {/* Botón Salir - Desktop Version (same position as game) */}
      <button 
        onClick={onClose}
        className="hidden md:flex absolute bg-[#11312c] box-border content-stretch flex-col items-center justify-center left-[calc(50%-132px)] pb-[14px] pt-[16px] px-[25px] rounded-[21px] size-[78px] top-[32px] translate-x-[-50%] cursor-pointer hover:bg-[#1a3f39] transition-colors z-50"
      >
        <div className="size-[24px] mb-[1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        <p className="font-['SF_Pro',sans-serif] font-semibold leading-[22px] text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Salir
        </p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[21px]" />
      </button>

      {/* Botón Salir - Mobile Version (same position as game) */}
      <button 
        onClick={onClose}
        className="md:hidden absolute bg-[#11312c] content-stretch flex gap-[4px] items-start left-[29px] p-[8px] rounded-[12px] top-[25px] cursor-pointer hover:bg-[#1a3f39] transition-colors z-50"
      >
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.pbf7d180} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Salir
        </p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[12px]" />
      </button>

      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-0.31px)] top-[calc(50%-381px)] translate-x-[-50%] translate-y-[-50%] w-[356.381px]">
      </div>
      <div className="absolute h-[120px] left-[calc(50%-0.36px)] overflow-clip top-[calc(50%-278px)] translate-x-[-50%] translate-y-[-50%] w-[282.273px]">
        <div className="absolute h-[106.181px] left-[calc(50%-0.68px)] top-[calc(50%-0.43px)] translate-x-[-50%] translate-y-[-50%] w-[250.51px]" data-name="Vector">
          <div className="absolute inset-[-5.54%_-2.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 262.273 117.944">
              <path d={svgPaths.p1e523f00} fill="var(--fill-0, #225953)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="5.88127" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[130.024px] left-[calc(50%-1.18px)] top-[calc(50%-0.11px)] translate-x-[-50%] translate-y-[-50%] w-[273.029px]" data-name="1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[209.98%] left-[0.68%] max-w-none top-[-58.66%] w-full" src={img1} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[31px] items-start left-[calc(50%+0.5px)] top-[256px] translate-x-[-50%]">
        <MenuItem text="Modo" text1={gameModeText} onClick={onOpenModoScreen || onGameModeChange} />
        <div className="content-stretch flex gap-[9px] items-center leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-full">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold h-[64px] relative shrink-0 w-[122px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tema
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] relative shrink-0 text-right w-[184px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Patrones
          </p>
        </div>
        <MenuItem text="Comida" text1="Puntajes" onClick={onOpenComidaScreen} />
      </div>
      
      {/* Nueva serpiente actualizada */}
      <div className="absolute left-0 top-[540px] w-[327px] h-[222px]">
        <Group88 />
      </div>
    </div>
  );
}