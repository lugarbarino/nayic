import svgPaths from "./svg-xgv9srmkxx";

function Settings() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_85_79)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #FFFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #FFFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_85_79">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#9952a3] box-border content-stretch flex flex-col items-center justify-center left-1/2 pb-[27px] pt-[25px] px-[25px] rounded-[30px] size-[75px] top-0 translate-x-[-50%]">
      <Settings />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ajustes
      </p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}