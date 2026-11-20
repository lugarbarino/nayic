import svgPaths from "@/imports/svg-m9hvybrrge";
import imgSnake2 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

interface GameHeaderLandscapeProps {
  score: number;
  lives: number;
  onExit: () => void;
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

function ExitButton({ onExit }: { onExit: () => void }) {
  return (
    <div 
      className="bg-[#4c2042] content-stretch flex gap-[4px] items-start justify-center p-[8px] relative rounded-[12px] cursor-pointer hover:brightness-110 transition-all active:scale-95"
      onClick={(e) => {
        e.stopPropagation();
        onExit();
      }}
    >
      <ArrowLeft />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function LivesDisplay({ lives }: { lives: number }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] shrink-0 sticky text-[#f3f3f4] text-[32px] text-center top-0 w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[22px]">{lives}</p>
      </div>
      <div className="shrink-0 size-[41px] sticky top-0" data-name="snake 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake2} />
      </div>
    </div>
  );
}

function LivesPanel({ lives }: { lives: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] shrink-0 sticky text-[#f2abb5] text-[14px] text-center top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <LivesDisplay lives={lives} />
    </div>
  );
}

function ScorePanel({ score }: { score: number }) {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold gap-[9px] items-center leading-[22px] relative shrink-0 w-[61px]">
      <p className="css-4hzbpn shrink-0 sticky text-[#f2abb5] text-[14px] text-right top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <p className="css-4hzbpn shrink-0 sticky text-[#f3f3f4] text-[32px] text-center top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {score}
      </p>
    </div>
  );
}

function StatsPanel({ score, lives }: { score: number; lives: number }) {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative w-full">
      <LivesPanel lives={lives} />
      <ScorePanel score={score} />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ModeButton() {
  return (
    <div className="bg-[#fffcff] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px]">
      <Play />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Normal
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

export default function GameHeaderLandscape({ score, lives, onExit }: GameHeaderLandscapeProps) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center right-[12px] top-1/2 -translate-y-1/2 w-[63px] z-50 pointer-events-auto">
      {/* Botón Salir rotado 90° */}
      <div className="flex h-[72px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-90">
          <ExitButton onExit={onExit} />
        </div>
      </div>
      
      {/* Stats (Vidas y Puntos) rotado 90° */}
      <div className="flex h-[171px] items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-90 w-full">
          <StatsPanel score={score} lives={lives} />
        </div>
      </div>
      
      {/* Botón Normal rotado 90° */}
      <div className="flex h-[88px] items-center justify-center relative shrink-0 w-[40px]">
        <div className="flex-none rotate-90">
          <ModeButton />
        </div>
      </div>
    </div>
  );
}