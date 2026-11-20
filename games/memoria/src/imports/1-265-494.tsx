import svgPaths from "./svg-yu3s5o4zn6";

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
    <div className="absolute bg-[#4b294f] content-stretch flex gap-[4px] items-start left-[27px] p-[8px] rounded-[12px] top-[17px]">
      <ArrowLeft />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_265_498)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_265_498">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-start left-[281px] p-[8px] rounded-[12px] top-[17px]">
      <Settings />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ajustes
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-[#1c101d] relative size-full to-[#4b294f]" data-name="1">
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#f3f3f4] text-[32px] text-nowrap top-[98px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1:00
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[98px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3400
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#b784c7] text-[14px] text-nowrap top-[70px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIEMPO
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#b784c7] text-[14px] text-nowrap text-right top-[70px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <Frame />
      <Frame1 />
    </div>
  );
}