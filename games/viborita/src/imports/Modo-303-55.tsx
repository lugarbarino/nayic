import svgPaths from "./svg-he07vyot4z";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[87.652px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[246.596px]">
      <p className="leading-[22px]">{children}</p>
    </div>
  );
}

export default function Modo() {
  return (
    <div className="relative size-full" data-name="Modo" style={{ backgroundImage: "linear-gradient(178.54deg, rgb(22, 59, 53) 0.549%, rgb(60, 161, 145) 99.451%)" }}>
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-0.31px)] top-[calc(50%-345px)] translate-x-[-50%] translate-y-[-50%] w-[356.381px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[356px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="bg-[#11312c] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[75px]">
              <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Arrow left">
                    <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
            </div>
          </div>
          <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[49.799px] text-center text-white tracking-[-2.3374px] w-full">Modo</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-1px)] top-[calc(50%-35px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="content-stretch flex gap-[22.205px] h-[140px] items-center px-[24px] py-[18.699px] relative rounded-[46.748px] shrink-0 w-[339px]">
          <div aria-hidden="true" className="absolute border-4 border-[#aaae68] border-solid inset-0 pointer-events-none rounded-[46.748px]" />
          <div className="content-stretch flex flex-col items-center justify-center p-[29.767px] relative rounded-[35.72px] shrink-0 size-[89.301px]">
            <div className="relative shrink-0 size-[51.364px]" data-name="Play">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.3636 51.3636">
                <g id="Play">
                  <path d={svgPaths.p20faac00} fill="var(--fill-0, white)" id="Icon (Stroke)" />
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
              <div className="absolute inset-[16.58%_4.08%]" data-name="Icon (Stroke)">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.167 31.4165">
                  <path d={svgPaths.p2c7f3700} fill="var(--fill-0, #F6F6F6)" id="Icon (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
          <BackgroundImage>Rápido</BackgroundImage>
        </div>
        <div className="content-stretch flex gap-[22.205px] h-[140px] items-center px-[16px] py-0 relative shrink-0 w-[339px]">
          <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative rounded-[30px] shrink-0 size-[97px]">
            <div className="h-[47px] overflow-clip relative shrink-0 w-full" data-name="Clock">
              <div className="absolute inset-[4.08%]" data-name="Icon (Stroke)">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.167 43.167">
                  <path d={svgPaths.p3606bb80} fill="var(--fill-0, #F6F6F6)" id="Icon (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
          <BackgroundImage>Contrareloj</BackgroundImage>
        </div>
      </div>
      <div className="absolute bg-[#e4e4e4] content-stretch flex h-[76px] items-center justify-center left-1/2 p-[25.434px] rounded-[30.52px] top-[calc(50%+339px)] translate-x-[-50%] translate-y-[-50%] w-[341px]">
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[31.538px] relative shrink-0 text-[#454545] text-[24.416px] text-center w-[173.571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Guardar
        </p>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-13.391px_3.826px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}