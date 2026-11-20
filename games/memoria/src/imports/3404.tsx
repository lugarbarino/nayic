import svgPaths from "./svg-i8nptx8kbb";
import imgEasy from "figma:asset/3ef9d528310d017f936651791607646dfe98b6b6.png";

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
    <div className="absolute bg-[#4b294f] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%-129px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[calc(50%-365.5px)] translate-x-[-50%] translate-y-[-50%]">
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
    <div className="absolute bg-[#f3f3f4] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%+130px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[calc(50%-365.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Play />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modo
      </p>
    </div>
  );
}

function Easy() {
  return (
    <div className="h-[86.354px] relative shrink-0 w-[94.009px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.586" src={imgEasy} width="79.447" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p32a6c200} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center mb-[-16.193px] relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[86.354px] relative shrink-0 w-[94.009px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.586" src={imgEasy} width="79.447" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p32a6c200} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center mb-[-16.193px] relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center left-[calc(50%+0.24px)] pb-[16.193px] pt-0 px-0 top-[212px] translate-x-[-50%] w-[377.486px]">
      <Frame3 />
      <Frame2 />
      <Frame3 />
      <Frame2 />
      <Frame3 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-[#1c101d] relative size-full to-[#4b294f]" data-name="3404">
      <Frame />
      <Frame1 />
      <Frame4 />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-129.5px)] text-[#f3f3f4] text-[32px] text-center text-nowrap top-[calc(50%-268px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1:00
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+126px)] text-[#f3f3f4] text-[32px] text-center text-nowrap top-[calc(50%-268px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3400
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-134.5px)] text-[#b784c7] text-[14px] text-center text-nowrap top-[calc(50%-296px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIEMPO
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+137px)] text-[#b784c7] text-[14px] text-center text-nowrap top-[calc(50%-296px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
    </div>
  );
}