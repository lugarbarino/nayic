import svgPaths from "./svg-ci8528x51o";
import imgEasy from "figma:asset/2a42520d16c1276f5f1ef36527633a9f2caed2f2.png";
import imgEasy1 from "figma:asset/00f98cf7e49c4229795fe3c978c38097c338f3d6.png";

function ArrowLeft() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Arrow left">
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
    <div className="absolute bg-[#4b294f] content-stretch flex flex-col items-center justify-center left-[calc(50%-129.5px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px] translate-x-[-50%]">
      <ArrowLeft />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
    </div>
  );
}

function Play() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Play">
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
    <div className="absolute bg-[#f3f3f4] content-stretch flex flex-col items-center justify-center left-[calc(50%+129.5px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px] translate-x-[-50%]">
      <Play />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modo
      </p>
    </div>
  );
}

function Easy() {
  return (
    <div className="h-[111.874px] relative shrink-0 w-[121.79px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="105.696" src={imgEasy} width="102.925" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 47">
          <path d={svgPaths.p1bfbfc80} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center mb-[-23.032px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[111.874px] relative shrink-0 w-[121.79px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="105.696" src={imgEasy} width="102.925" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 47">
          <path d={svgPaths.p1bfbfc80} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center mb-[-23.032px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

function Easy2() {
  return (
    <div className="h-[111.874px] relative shrink-0 w-[121.79px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="105.696" src={imgEasy} width="102.925" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 47">
          <path d={svgPaths.p1bfbfc80} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Easy3() {
  return (
    <div className="h-[112.834px] relative shrink-0 w-[121.61px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.05%] left-[-11.4%] max-w-none top-[-15.18%] w-[115.79%]" src={imgEasy1} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center mb-[-23.032px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy2 key={i} />
      ))}
      <Easy3 />
    </div>
  );
}

function Easy4() {
  return (
    <div className="h-[111.874px] relative shrink-0 w-[121.79px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="105.696" src={imgEasy} width="102.925" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 47">
          <path d={svgPaths.p1bfbfc80} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Easy5() {
  return (
    <div className="h-[112.834px] relative shrink-0 w-[121.61px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.05%] left-[-11.4%] max-w-none top-[-15.18%] w-[115.79%]" src={imgEasy1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center mb-[-23.032px] relative shrink-0">
      <Easy4 />
      <Easy5 />
      <Easy4 />
      <Easy4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[calc(50%-2px)] pb-[23.032px] pt-0 px-0 top-[206px] translate-x-[-50%] w-[353.546px]">
      <Frame2 />
      <Frame4 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-[#1c101d] relative size-full to-[#4b294f]" data-name="3412">
      <Frame />
      <Frame1 />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-167px)] text-[#f3f3f4] text-[32px] text-nowrap top-[158px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1:00
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[158px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3400
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-167px)] text-[#b784c7] text-[14px] text-nowrap top-[130px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIEMPO
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167px)] text-[#b784c7] text-[14px] text-nowrap text-right top-[130px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <Frame6 />
    </div>
  );
}