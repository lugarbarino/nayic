import svgPaths from "./svg-02io1ajixz";
import imgEasy from "figma:asset/cff577d4f8754767cb5004eb6a8bc4f5e58d5ea1.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[51px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        {children}
      </svg>
    </div>
  );
}

export default function Explicacion() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full" data-name="explicacion" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
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
      <div className="absolute content-stretch flex items-center left-[5px] top-[143px]">
        <BackgroundImage>
          <g id="Chevron left">
            <path d={svgPaths.padc2080} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </BackgroundImage>
        <div className="h-[260px] relative shrink-0 w-[270.318px]" data-name="medio_congelado">
          <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy} />
          </div>
        </div>
        <BackgroundImage>
          <g id="Chevron right">
            <path d={svgPaths.p2fbe4d80} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </BackgroundImage>
      </div>
      <div className="absolute content-stretch flex h-[41px] items-center left-[137px] px-[16.292px] py-[12.694px] rounded-[31.734px] top-[696px] w-[107px]">
        <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
        <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[77px]">
          <p className="leading-[17.454px]">MÉDIO</p>
        </div>
      </div>
      <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[180px] justify-center leading-[0] left-[calc(50%-3px)] text-[#eee] text-[32px] text-center top-[543px] translate-x-[-50%] translate-y-[-50%] w-[291px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[38px]">La carta queda congelada y no se da vuelta durante 10 segundos.</p>
      </div>
      <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Congelada</p>
    </div>
  );
}