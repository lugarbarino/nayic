import svgPaths from "./svg-m9hvybrrge";
import imgSnake2 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function Bg() {
  return (
    <div className="h-[850px] relative w-[30512.68px]" data-name="BG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30512.7 850">
        <g clipPath="url(#clip0_65_70)" id="BG">
          <rect fill="url(#paint0_linear_65_70)" height="850" width="30512.7" />
          <g id="Vector 2">
            <path d={svgPaths.p35a82700} fill="url(#paint1_linear_65_70)" />
            <path d={svgPaths.p35a82700} fill="var(--fill-1, #0B022C)" fillOpacity="0.17" />
          </g>
          <g id="Vector 3">
            <path d={svgPaths.p2717ccc0} fill="url(#paint2_linear_65_70)" />
            <path d={svgPaths.p2717ccc0} fill="var(--fill-1, #0B022C)" fillOpacity="0.32" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_65_70" x1="0" x2="30512.7" y1="425" y2="425">
            <stop stopColor="#5F285F" />
            <stop offset="0.302885" stopColor="#261B41" />
            <stop offset="0.5625" stopColor="#1C2E6C" />
            <stop offset="0.807692" stopColor="#4E3767" />
            <stop offset="1" stopColor="#5F285F" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_65_70" x1="-1.74386e-05" x2="30539.6" y1="555.055" y2="555.055">
            <stop stopColor="#5F285F" />
            <stop offset="0.302885" stopColor="#261B41" />
            <stop offset="0.5625" stopColor="#1C2E6C" />
            <stop offset="0.807692" stopColor="#4E3767" />
            <stop offset="1" stopColor="#5F285F" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_65_70" x1="-1.74386e-05" x2="30549.8" y1="758.962" y2="758.962">
            <stop stopColor="#5F285F" />
            <stop offset="0.302885" stopColor="#261B41" />
            <stop offset="0.5625" stopColor="#1C2E6C" />
            <stop offset="0.807692" stopColor="#4E3767" />
            <stop offset="1" stopColor="#5F285F" />
          </linearGradient>
          <clipPath id="clip0_65_70">
            <rect fill="white" height="850" width="30512.7" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
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

function Frame() {
  return (
    <div className="bg-[#4c2042] content-stretch flex gap-[4px] items-start justify-center p-[8px] relative rounded-[12px]">
      <ArrowLeft />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] shrink-0 sticky text-[#f3f3f4] text-[32px] text-center top-0 w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[22px]">7</p>
      </div>
      <div className="shrink-0 size-[41px] sticky top-0" data-name="snake 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake2} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] shrink-0 sticky text-[#f2abb5] text-[14px] text-center top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold gap-[9px] items-center leading-[22px] relative shrink-0 w-[61px]">
      <p className="css-4hzbpn shrink-0 sticky text-[#f2abb5] text-[14px] text-right top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <p className="css-4hzbpn shrink-0 sticky text-[#f3f3f4] text-[32px] text-center top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative w-full">
      <Frame3 />
      <Frame4 />
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

function Frame1() {
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

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[calc(50%+380px)] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%] w-[63px]">
      <div className="flex h-[72px] items-center justify-center relative shrink-0 w-[40px]" style={{ "--transform-inner-width": "331.546875", "--transform-inner-height": "1441.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame />
        </div>
      </div>
      <div className="flex h-[171px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1566.28125", "--transform-inner-height": "1441.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Frame5 />
        </div>
      </div>
      <div className="flex h-[88px] items-center justify-center relative shrink-0 w-[40px]" style={{ "--transform-inner-width": "352.5", "--transform-inner-height": "1441.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function Landscape() {
  return (
    <div className="relative size-full" data-name="landscape">
      <div className="absolute flex h-[30512.68px] items-center justify-center left-px top-[-6892px] w-[850px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Bg />
        </div>
      </div>
      <Frame6 />
    </div>
  );
}