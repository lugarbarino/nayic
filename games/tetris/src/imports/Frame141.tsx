import svgPaths from "./svg-t2nu95a4pi";
import imgJirafa from "figma:asset/cfb496b0c81a6b0d7afca038dabe95c81e95f67f.png";

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
    <div className="bg-[#005eb3] content-stretch flex items-start p-[8px] relative rounded-[12px] shrink-0">
      <ArrowLeft />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="h-[21.232px] relative rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px] shrink-0 w-[20.722px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
      <div className="h-[21.232px] relative rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px] shrink-0 w-[20.722px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
      <div className="h-[21.232px] relative rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px] shrink-0 w-[20.722px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
      <div className="h-[21.232px] relative rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px] shrink-0 w-[20.722px]" data-name="jirafa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[2.663px] rounded-br-[2.663px] rounded-tl-[1.997px] rounded-tr-[1.997px]">
          <img alt="" className="absolute h-full left-[0.29%] max-w-none top-0 w-[99.72%]" src={imgJirafa} />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18.236px] relative shrink-0 text-[#8eb0cf] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Siguientes:
      </p>
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[18.236px] relative shrink-0 text-[#8eb0cf]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lineas:
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        130
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[18.236px] relative shrink-0 text-[#f3f3f4]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Puntos:
      </p>
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        130
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_64_883)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_64_883">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#005eb3] content-stretch flex items-start p-[8px] relative rounded-[12px] shrink-0">
      <Settings />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Frame />
      <Frame8 />
      <Frame1 />
    </div>
  );
}