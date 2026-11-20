import svgPaths from "./svg-ja1sik61hc";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative size-full">
      <div className="bg-[#995da9] content-stretch flex h-[123.44px] items-start relative rounded-[33.234px] shrink-0" data-name="button">
        <div className="h-[123.44px] relative rounded-[15.826px] shrink-0 w-[118.692px]" data-name="System / Chips Item">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[34.816px] left-[59.57px] text-[#f3f3f4] text-[18.991px] text-center text-nowrap top-[58.55px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cartas
          </p>
          <div className="absolute left-[39.56px] size-[39.564px] top-[18.99px]" data-name="Layer_1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5641 39.5641">
              <g clipPath="url(#clip0_21_139)" id="Layer_1">
                <path d={svgPaths.p3884f680} fill="var(--fill-0, white)" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_21_139">
                  <rect fill="white" height="39.5641" width="39.5641" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-14.243px_6.33px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="bg-[#2781d9] content-stretch flex h-[81.12px] items-start relative rounded-[21.84px] shrink-0" data-name="button">
        <div className="h-[81.12px] relative rounded-[10.4px] shrink-0 w-[78px]" data-name="System / Chips Item">
          <div className="absolute left-[27.04px] size-[24.96px] top-[16.64px]" data-name="Shuffle">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.96 24.96">
              <g id="Shuffle">
                <path d={svgPaths.pd0c7100} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08" />
              </g>
            </svg>
          </div>
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22.88px] left-[39.18px] text-[#f3f3f4] text-[12.48px] text-center text-nowrap top-[38.48px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Paletas
          </p>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9.36px_4.16px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="bg-[#2b815d] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0 w-[75px]" data-name="button">
        <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38.5px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[39px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Dados
          </p>
          <div className="absolute inset-[16.67%_32%_51.28%_34.67%]" data-name="Vector (Stroke)">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
              <path d={svgPaths.p115c2d00} fill="var(--fill-0, white)" id="Vector (Stroke)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}