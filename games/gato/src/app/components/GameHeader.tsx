import svgPaths from "@/imports/svg-b8gaehloqx";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

interface GameHeaderProps {
  score: number;
  lives: number;
  onExit: () => void;
}

function ArrowLeft() {
  return (
    <div className="absolute left-[26px] size-[24px] top-[16px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
      <ArrowLeft />
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center top-[37px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
    </div>
  );
}

function Button({ onExit }: { onExit: () => void }) {
  return (
    <div 
      className="bg-[#4c2042] content-stretch flex h-[78px] items-start rounded-[21px] shrink-0 sticky top-0 cursor-pointer hover:scale-105 transition-transform" 
      data-name="button"
      onClick={(e) => {
        e.stopPropagation();
        onExit();
      }}
    >
      <SystemChipsItem />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame({ lives }: { lives: number }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] shrink-0 sticky text-[#f3f3f4] text-center top-0 min-w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[22px] text-[32px]">{lives}</p>
      </div>
      <div className="shrink-0 size-[41px] sticky top-0 ml-1" data-name="snake 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
    </div>
  );
}

function Frame1({ lives }: { lives: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] shrink-0 sticky text-[#f2abb5] text-[14px] top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <Frame lives={lives} />
    </div>
  );
}

function Frame2({ lives, onExit }: { lives: number; onExit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-[123px]">
      <Button onExit={onExit} />
      <Frame1 lives={lives} />
    </div>
  );
}

function Play() {
  return (
    <div className="absolute left-[26px] size-[24px] top-[15px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SystemChipsItem1() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
      <Play />
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[38px] text-[#23252d] text-[12px] text-center top-[39px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Normal
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex h-[78px] items-start rounded-[21px] shrink-0 sticky top-0 w-full" data-name="button">
      <SystemChipsItem1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame3({ score }: { score: number }) {
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

function Frame4({ score }: { score: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[75px]">
      <Button1 />
      <Frame3 score={score} />
    </div>
  );
}

export default function GameHeader({ score, lives, onExit }: GameHeaderProps) {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[calc(50%-0.5px)] top-[33px] translate-x-[-50%] w-[359px] z-50 pointer-events-auto">
      <Frame2 lives={lives} onExit={onExit} />
      <Frame4 score={score} />
    </div>
  );
}