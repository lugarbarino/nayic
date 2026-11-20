import svgPaths from "./svg-cgvjcm0brd";
import imgVerCartas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[48.45px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[107px]">
      <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[77px]">
        <p className="leading-[17.454px]">{text}</p>
      </div>
    </div>
  );
}

export default function DetalleDeCarta() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full" data-name="Detalle de carta" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[16px] top-[25px] w-[361px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
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
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <BackgroundImage>
              <g id="Chevron left">
                <path d={svgPaths.p3975f9d0} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
              </g>
            </BackgroundImage>
            <div className="h-[242.596px] overflow-clip relative shrink-0 w-[264.1px]" data-name="ver todas">
              <div className="absolute h-[242.596px] left-0 top-0 w-[264.1px]">
                <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 233">
                    <g filter="url(#filter0_d_332_89)" id="Star 14">
                      <path d={svgPaths.pecbf280} fill="var(--fill-0, #3C7262)" />
                      <path d={svgPaths.p1f5cf8c0} stroke="var(--stroke-0, #3C7262)" strokeWidth="5.37608" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="232.56" id="filter0_d_332_89" width="225.88" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dx="2.68804" dy="3.36005" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.149554 0 0 0 0 0.283579 0 0 0 0 0.243868 0 0 0 1 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_332_89" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_332_89" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[34.945px] left-[calc(50%+6.38px)] not-italic text-[34.15px] text-center text-white top-[calc(50%-7.06px)] translate-x-[-50%] w-[168.003px]">
                <p className="mb-0">{`Ver todas `}</p>
                <p>las cartas</p>
              </div>
              <div className="absolute h-[136.979px] left-[calc(50%-0.28px)] top-[-10.08px] translate-x-[-50%] w-[149.307px]" data-name="ver cartas 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
              </div>
            </div>
            <BackgroundImage>
              <g id="Chevron right">
                <path d={svgPaths.p3af8da0} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
              </g>
            </BackgroundImage>
          </div>
          <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[161px] justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center w-[263px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[32px]">Esta carta te muestra todas las catas por unos segundos.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-[337px]">
            <p className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f3f3f4] text-[20px] text-center w-full">Dificultad</p>
            <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex h-[40.73px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[93px]">
                <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
                <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[62px]">
                  <p className="leading-[17.454px]">FÁCIL</p>
                </div>
              </div>
              <BackgroundImageAndText text="MÉDIO" />
              <BackgroundImageAndText text="DIFÍCIL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}