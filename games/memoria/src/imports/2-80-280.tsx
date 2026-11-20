import svgPaths from "./svg-a8sgzo59sb";
import imgEasy from "figma:asset/7e397d1c816a25f0894900c4d5b17b08f03ff4a3.png";

function ArrowLeft() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-[30px] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px]">
      <ArrowLeft />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#23252d] box-border content-stretch flex flex-col items-center justify-center left-[289px] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px]">
      <Play />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modo
      </p>
    </div>
  );
}

function Easy() {
  return (
    <div className="h-[163.587px] relative shrink-0 w-[178.088px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="154.554" src={imgEasy} width="150.503" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 69">
          <path d={svgPaths.p7e65580} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex items-center mb-[-30.675px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[163.587px] relative shrink-0 w-[178.088px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="154.554" src={imgEasy} width="150.503" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 69">
          <path d={svgPaths.p7e65580} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex items-center mb-[-30.675px] relative shrink-0">
      <Easy1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center left-[26px] pb-[30.675px] pt-0 px-0 top-[253px] w-[343px]">
      <Frame3 />
      <Frame2 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="2">
      <Frame />
      <Frame1 />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[67px] text-[#23252d] text-[32px] text-center text-nowrap top-[158px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1:00
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[327.5px] text-[#23252d] text-[32px] text-center text-nowrap top-[158px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3400
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[62px] text-[#5ea585] text-[14px] text-center text-nowrap top-[130px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIEMPO
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[320.5px] text-[#5ea585] text-[14px] text-center text-nowrap top-[130px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTUACIÓN
      </p>
      <Frame4 />
    </div>
  );
}