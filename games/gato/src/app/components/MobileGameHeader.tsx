import svgPaths from "@/imports/svg-o6gu8xrwv6";
import imgSnake2 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

interface MobileGameHeaderProps {
  lives: number;
  score: number;
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
      className="bg-[#4c2042] content-stretch flex gap-[4px] items-start justify-center p-[8px] relative rounded-[12px] cursor-pointer hover:scale-105 transition-transform"
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
    <div className="content-stretch flex items-center gap-1 relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] shrink-0 text-[#f3f3f4] text-[28px] text-right min-w-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[28px]">{lives}</p>
      </div>
      <div className="shrink-0 size-[36px]" data-name="snake 2">
        <img alt="" className="w-full h-full object-contain pointer-events-none" src={imgSnake2} />
      </div>
    </div>
  );
}

function LivesSection({ lives }: { lives: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] shrink-0 text-[#f2abb5] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <LivesDisplay lives={lives} />
    </div>
  );
}

function ScoreSection({ score }: { score: number }) {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold gap-[9px] items-center leading-[22px] relative shrink-0 text-right w-[69px]">
      <p className="css-4hzbpn shrink-0 text-[#f2abb5] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <p className="css-4hzbpn shrink-0 text-[#f3f3f4] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {score}
      </p>
    </div>
  );
}

function GameInfo({ lives, score }: { lives: number; score: number }) {
  return (
    <div className="content-stretch flex gap-[36px] h-[63px] items-start pb-0 pt-[11px] px-0 relative">
      <LivesSection lives={lives} />
      <ScoreSection score={score} />
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

export default function MobileGameHeader({ lives, score, onExit }: MobileGameHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-black/40 to-transparent pointer-events-none">
      <div className="pointer-events-auto">
        <ExitButton onExit={onExit} />
      </div>
      <div className="pointer-events-auto">
        <GameInfo lives={lives} score={score} />
      </div>
      <div className="pointer-events-auto">
        <ModeButton />
      </div>
    </div>
  );
}