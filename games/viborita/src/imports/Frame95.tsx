import svgPaths from "./svg-qu4qan9w49";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[87.652px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[246.596px]">
      <p className="leading-[22px]">{children}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex gap-[22.205px] h-[140px] items-center px-[24px] py-[18.699px] relative rounded-[46.748px] shrink-0 w-[339px]">
        <div aria-hidden="true" className="absolute border-4 border-[#aaae68] border-solid inset-0 pointer-events-none rounded-[46.748px]" />
        <div className="content-stretch flex flex-col items-center justify-center p-[29.767px] relative rounded-[35.72px] shrink-0 size-[89.301px]">
          <div className="relative shrink-0 size-[51.364px]" data-name="Play">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.3636 51.3636">
              <g id="Play">
                <path d={svgPaths.p1abd3380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[112.195px] justify-center leading-[0] relative shrink-0 text-[28.049px] text-center text-white w-[140.244px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[25.711px]">Normal</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[22.205px] h-[140px] items-center px-[16px] py-0 relative shrink-0 w-[339px]">
        <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative rounded-[30px] shrink-0 size-[97px]">
          <div className="h-[47px] overflow-clip relative shrink-0 w-full" data-name="Fast forward">
            <div className="absolute inset-[20.83%_8.33%]" data-name="Icon">
              <div className="absolute inset-[-7.29%_-5.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.1667 31.4167">
                  <g id="Icon">
                    <path d={svgPaths.p24273a00} stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                    <path d={svgPaths.p3fe91e70} stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Wrapper>Rápido</Wrapper>
      </div>
      <div className="content-stretch flex gap-[22.205px] h-[140px] items-center px-[16px] py-0 relative shrink-0 w-[339px]">
        <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative rounded-[30px] shrink-0 size-[97px]">
          <div className="h-[47px] overflow-clip relative shrink-0 w-full" data-name="Clock">
            <div className="absolute inset-[8.33%]" data-name="Icon">
              <div className="absolute inset-[-5.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.1667 43.1667">
                  <path d={svgPaths.p18ff9820} id="Icon" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Wrapper>Contrareloj</Wrapper>
      </div>
    </div>
  );
}