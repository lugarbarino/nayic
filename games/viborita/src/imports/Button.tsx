import svgPaths from "./svg-1vwcwo84if";

export default function Button() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[21px] size-full" data-name="button">
      <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
        <div className="absolute inset-[17.95%_34.67%_53.85%_36%]" data-name="Icon">
          <div className="absolute inset-[-4.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[38.5px] text-[#23252d] text-[12px] text-center text-nowrap top-[39px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Ajustes
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}