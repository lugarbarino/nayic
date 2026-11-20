import svgPaths from "./svg-0q2p6xos7g";
import imgBomba from "figma:asset/433489d86a39e3c139747f0341e375e6eebc4c7f.png";

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
        <div className="h-[260px] overflow-clip relative shrink-0 w-[283.047px]" data-name="Bomba_medio">
          <div className="absolute h-[260px] left-0 top-0 w-[283.047px]">
            <div className="absolute inset-[2.76%_6.47%_1.65%_7.74%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243 249">
                <g filter="url(#filter0_d_333_251)" id="Star 14">
                  <path d={svgPaths.p26035e00} fill="var(--fill-0, #FF7E5E)" />
                  <path d={svgPaths.p3f41c680} stroke="var(--stroke-0, #FF7E5E)" strokeWidth="5.76177" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="248.524" id="filter0_d_333_251" width="242.805" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="3.60111" dy="2.88089" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.491587 0 0 0 0 0.198322 0 0 0 0 0.125574 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_251" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_251" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute left-[62.66px] size-[157.729px] top-[-10.08px]" data-name="bomba">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
            </div>
          </div>
          <div className="absolute font-['Capriola:Regular',sans-serif] leading-[36.011px] left-[calc(50%-0.63px)] not-italic text-[36.6px] text-center text-nowrap text-white top-[calc(50%-0.36px)] tracking-[-1.4404px] translate-x-[-50%]">
            <p className="mb-0">{`Una pareja `}</p>
            <p>se da vuelta</p>
          </div>
        </div>
        <BackgroundImage>
          <g id="Chevron right">
            <path d={svgPaths.p2fbe4d80} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </BackgroundImage>
      </div>
      <div className="absolute content-stretch flex h-[40.73px] items-center left-[84px] px-[16.292px] py-[12.694px] rounded-[31.734px] top-[668px] w-[93px]">
        <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
        <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[62px]">
          <p className="leading-[17.454px]">FÁCIL</p>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[41px] items-center left-[192px] px-[16.292px] py-[12.694px] rounded-[31.734px] top-[668px] w-[107px]">
        <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
        <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[77px]">
          <p className="leading-[17.454px]">MÉDIO</p>
        </div>
      </div>
      <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[628px] translate-x-[-50%] w-[117px]">Dificultad</p>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[180px] justify-center leading-[0] left-[calc(50%-3px)] text-[#eee] text-[32px] text-center top-[514px] translate-x-[-50%] translate-y-[-50%] w-[291px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[38px]">Una pareja correcta se da vuelta sola.</p>
      </div>
    </div>
  );
}