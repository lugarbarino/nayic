import svgPaths from "./svg-4c2m7arxzs";

export default function Button() {
  return (
    <div className="bg-[#4d2951] content-stretch flex items-start relative rounded-[21px] size-full" data-name="button">
      <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
        <div className="absolute left-[calc(50%+0.5px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Arrow left">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Arrow left">
              <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}