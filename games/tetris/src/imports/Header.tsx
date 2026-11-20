import svgPaths from "./svg-n8u365i0vw";
import imgJirafa from "figma:asset/cfb496b0c81a6b0d7afca038dabe95c81e95f67f.png";

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #FEF7FF)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#b93b3e] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[50px]">
      <Close />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function PauseCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Pause circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pause circle">
          <path d={svgPaths.p38707400} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#005eb3] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[50px]">
      <PauseCircle />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[22px] items-start relative shrink-0 w-[82px]">
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#8eb0cf] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Siguiente:
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[58px] items-start justify-center relative shrink-0">
      <div className="h-[22.285px] relative rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px] shrink-0 w-[21.75px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
      <div className="h-[22.285px] relative rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px] shrink-0 w-[21.75px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
      <div className="h-[22.285px] relative rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px] shrink-0 w-[21.75px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
      <div className="h-[22.285px] relative rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px] shrink-0 w-[21.75px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.795px] rounded-br-[2.795px] rounded-tl-[2.096px] rounded-tr-[2.096px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold gap-[6px] items-end leading-[22px] relative shrink-0 text-right w-[64px]">
      <p className="css-ew64yg relative shrink-0 text-[#8eb0cf] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Puntos:
      </p>
      <p className="css-ew64yg relative shrink-0 text-[#f3f3f4] text-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1000
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

function KeyboardReturn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_return">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_return">
          <path d={svgPaths.p12852cc0} fill="var(--fill-0, #FEF7FF)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#005eb3] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[50px]">
      <KeyboardReturn />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative size-full" data-name="Header">
      <Frame5 />
      <Frame />
      <Frame8 />
      <Frame7 />
    </div>
  );
}