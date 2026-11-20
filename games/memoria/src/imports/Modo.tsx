import svgPaths from "./svg-lgtp51r1x2";

export default function Modo() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full" data-name="Modo" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-1/2 top-[calc(50%-132px)] translate-x-[-50%] translate-y-[-50%] w-[341px]">
        <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[49.799px] text-center text-white tracking-[-2.3374px] w-full">Modo</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="content-stretch flex gap-[22.205px] h-[140px] items-center px-[24px] py-[18.699px] relative rounded-[46.748px] shrink-0 w-[339px]">
            <div aria-hidden="true" className="absolute border-4 border-[#9952a3] border-solid inset-0 pointer-events-none rounded-[46.748px]" />
            <div className="content-stretch flex flex-col items-center justify-center p-[29.767px] relative rounded-[35.72px] shrink-0 size-[89.301px]">
              <div className="relative shrink-0 size-[51.364px]" data-name="Play">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
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
              <div className="h-[47px] overflow-clip relative shrink-0 w-full" data-name="Clock">
                <div className="absolute inset-[8.33%]" data-name="Icon">
                  <div className="absolute inset-[-5.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                      <path d={svgPaths.p18ff9820} id="Icon" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[87.652px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[246.596px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[22px]">Contrareloj</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#e4e4e4] content-stretch flex h-[76px] items-center justify-center left-1/2 p-[25.434px] rounded-[30.52px] top-[calc(50%+368px)] translate-x-[-50%] translate-y-[-50%] w-[341px]">
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[31.538px] relative shrink-0 text-[#454545] text-[24.416px] text-center w-[173.571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Guardar
        </p>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-13.391px_3.826px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
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
      </div>
    </div>
  );
}