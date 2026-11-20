import svgPaths from "./svg-3lqgr1kc7o";
import imgVerCartas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";
import imgBomba from "figma:asset/433489d86a39e3c139747f0341e375e6eebc4c7f.png";
import imgGatosMagic02 from "figma:asset/5e48e7fa8ee790fd3c0148ae049b767157121558.png";
import imgVerCartas2 from "figma:asset/f62b6c16a4ac80afea9b365305a3ef88e87133f5.png";
import imgEasy from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgVerCartas3 from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[168.145px] left-0 top-0 w-[183.05px]">
      <div className="absolute inset-[2.76%_6.47%_1.65%_7.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 161">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[168.145px] left-0 top-0 w-[183.05px]">
      <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 162">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BombaBackgroundImage() {
  return (
    <div className="absolute left-[40.52px] size-[102.005px] top-[-6.52px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
      </div>
    </div>
  );
}

export default function CartasEspeciales() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full" data-name="Cartas especiales" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      <div className="absolute content-stretch flex flex-col items-start left-[11px] top-[25px] w-[371.1px]">
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
        <div className="content-stretch flex flex-col gap-[27px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-[341px]">
            <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[49.799px] text-center text-white tracking-[-2.3374px] w-full">Cartas</p>
            <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
              <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
                <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
                <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#ebebeb] text-[19.04px] text-center w-[106px]">
                  <p className="leading-[17.454px]">Especiales</p>
                </div>
              </div>
              <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
                <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[106px]">
                  <p className="leading-[17.454px]">Elementos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-[4px] grid grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] relative shrink-0 w-full">
            <div className="[grid-area:1_/_1] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px]" data-name="ver todas">
              <BackgroundImage>
                <g filter="url(#filter0_d_328_85)" id="Star 14">
                  <path d={svgPaths.p3a92e200} fill="var(--fill-0, #3C7262)" />
                  <path d={svgPaths.paf66200} stroke="var(--stroke-0, #3C7262)" strokeWidth="3.72621" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="161.189" id="filter0_d_328_85" width="156.559" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1.86311" dy="2.32888" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.149554 0 0 0 0 0.283579 0 0 0 0 0.243868 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_85" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_85" mode="normal" result="shape" />
                  </filter>
                </defs>
              </BackgroundImage>
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-[calc(50%+4.42px)] not-italic text-[23.67px] text-center text-white top-[calc(50%-4.89px)] translate-x-[-50%] w-[116.444px]">
                <p className="mb-0">{`Ver todas `}</p>
                <p>las cartas</p>
              </div>
              <div className="absolute h-[94.941px] left-[calc(50%-0.19px)] top-[-6.99px] translate-x-[-50%] w-[103.486px]" data-name="ver cartas 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
              </div>
            </div>
            <div className="[grid-area:1_/_2] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px]" data-name="Bomba_medio">
              <BackgroundImage1>
                <g filter="url(#filter0_d_328_79)" id="Star 14">
                  <path d={svgPaths.p3a92e200} fill="var(--fill-0, #FF7E5E)" />
                  <path d={svgPaths.paf66200} stroke="var(--stroke-0, #FF7E5E)" strokeWidth="3.72621" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.723" id="filter0_d_328_79" width="157.025" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="2.32888" dy="1.86311" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.491587 0 0 0 0 0.198322 0 0 0 0 0.125574 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_79" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_79" mode="normal" result="shape" />
                  </filter>
                </defs>
              </BackgroundImage1>
              <BombaBackgroundImage />
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[23.289px] left-[calc(50%-0.37px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%-0.23px)] tracking-[-0.9316px] translate-x-[-50%]">
                <p className="mb-0">{`Una pareja `}</p>
                <p>se da vuelta</p>
              </div>
            </div>
            <div className="[grid-area:2_/_1] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px]" data-name="se mezclan las cartas">
              <BackgroundImage>
                <g filter="url(#filter0_d_328_81)" id="Star 14">
                  <path d={svgPaths.p3a92e200} fill="var(--fill-0, #603265)" />
                  <path d={svgPaths.paf66200} stroke="var(--stroke-0, #603265)" strokeWidth="3.72621" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="161.189" id="filter0_d_328_81" width="156.559" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1.86311" dy="2.32888" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.270987 0 0 0 0 0.138039 0 0 0 0 0.285438 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_81" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_81" mode="normal" result="shape" />
                  </filter>
                </defs>
              </BackgroundImage>
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-[calc(50%+0.2px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%+3.96px)] translate-x-[-50%]">
                <p className="mb-0">Se mezclan</p>
                <p>{` las cartas`}</p>
              </div>
              <div className="absolute flex h-[101.037px] items-center justify-center left-[27.02px] top-[-4.66px] w-[128.459px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-[0.381deg]">
                  <div className="h-[100.191px] opacity-90 relative w-[127.796px]" data-name="gatos_Magic0 2">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[101.04%] left-[0.39%] max-w-none top-[1.04%] w-full" src={imgGatosMagic02} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_2] h-[168.145px] overflow-clip relative shadow-[2.329px_1.863px_0px_0px_#ff9eb2] shrink-0 w-[183.05px]" data-name="Bomba_ dificil">
              <BackgroundImage1>
                <g filter="url(#filter0_d_328_87)" id="Star 14">
                  <path d={svgPaths.p3a92e200} fill="var(--fill-0, #CF4460)" />
                  <path d={svgPaths.paf66200} stroke="var(--stroke-0, #CF4460)" strokeWidth="3.72621" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.723" id="filter0_d_328_87" width="157.025" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="2.32888" dy="1.86311" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.536264 0 0 0 0 0.17007 0 0 0 0 0.243836 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_87" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_87" mode="normal" result="shape" />
                  </filter>
                </defs>
              </BackgroundImage1>
              <BombaBackgroundImage />
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[23.289px] left-[calc(50%+0.14px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%-0.23px)] tracking-[-0.9316px] translate-x-[-50%]">
                <p className="mb-0">{`Las parejas `}</p>
                <p>se dan vuelta</p>
              </div>
            </div>
            <div className="[grid-area:3_/_1] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px]" data-name="suerte">
              <BackgroundImage1>
                <g filter="url(#filter0_d_328_83)" id="Star 14">
                  <path d={svgPaths.p3a92e200} fill="var(--fill-0, #CF449E)" />
                  <path d={svgPaths.paf66200} stroke="var(--stroke-0, #CF449E)" strokeWidth="3.72621" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.723" id="filter0_d_328_83" width="157.025" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="2.32888" dy="1.86311" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.407039 0 0 0 0 0.170634 0 0 0 0 0.323702 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_83" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_83" mode="normal" result="shape" />
                  </filter>
                </defs>
              </BackgroundImage1>
              <div className="absolute h-[96.806px] left-[calc(50%-0.19px)] top-[calc(50%-32.87px)] translate-x-[-50%] translate-y-[-50%] w-[105.348px]" data-name="ver cartas 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas2} />
              </div>
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-[calc(50%-0.02px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%-0.23px)] translate-x-[-50%]">
                <p className="mb-0">{`Ganaste `}</p>
                <p>un match</p>
              </div>
            </div>
            <div className="[grid-area:3_/_2] h-[168.145px] relative shrink-0 w-[176.063px]" data-name="pico">
              <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[32.604px]" data-name="easy">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.604px]">
                  <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgEasy} />
                </div>
                <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-[79.93px] not-italic text-[23.67px] text-black text-center text-nowrap top-[48.91px] translate-x-[-50%]">
                  <p className="mb-0">{`libera la `}</p>
                  <p className="mb-0">{`carta `}</p>
                  <p>enterrada</p>
                </div>
              </div>
              <div className="absolute aspect-[166/175.96] left-[39.69%] right-[3.82%] top-0" data-name="ver cartas 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}