import svgPaths from "./svg-zi9s5ajrks";
import clsx from "clsx";
import imgVerCartas1 from "figma:asset/f62b6c16a4ac80afea9b365305a3ef88e87133f5.png";
import imgEasy from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgVerCartas2 from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[180px] justify-center leading-[0] text-[#eee] text-[32px] text-center top-[514px] translate-x-[-50%] translate-y-[-50%] w-[291px]", additionalClassNames)}>
      <p className="leading-[38px]">{children}</p>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[51px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] rounded-[31.734px] top-[668px] w-[107px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[77px]">
        <p className="leading-[17.454px]">{text}</p>
      </div>
    </div>
  );
}

function ChevronRightBackgroundImage() {
  return (
    <BackgroundImage>
      <g id="Chevron right">
        <path d={svgPaths.p2fbe4d80} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </BackgroundImage>
  );
}

function ChevronLeftBackgroundImage() {
  return (
    <BackgroundImage>
      <g id="Chevron left">
        <path d={svgPaths.padc2080} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </BackgroundImage>
  );
}

function ArrowLeftBackgroundImage() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
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
            <ArrowLeftBackgroundImage />
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-[5px] top-[143px]">
        <ChevronLeftBackgroundImage />
        <div className="h-[261.84px] overflow-clip relative shrink-0 w-[285.05px]" data-name="se mezclan las cartas">
          <div className="absolute h-[261.794px] left-0 overflow-clip top-[0.03px] w-[285px]" data-name="suerte">
            <div className="absolute h-[261.794px] left-0 top-0 w-[285px]">
              <div className="absolute inset-[2.76%_6.47%_1.65%_7.74%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 251">
                  <g filter="url(#filter0_d_333_206)" id="Star 14">
                    <path d={svgPaths.p1de65580} fill="var(--fill-0, #CF449E)" />
                    <path d={svgPaths.p1d4440f0} stroke="var(--stroke-0, #CF449E)" strokeWidth="5.80153" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="250.238" id="filter0_d_333_206" width="244.481" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="3.62595" dy="2.90076" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.407039 0 0 0 0 0.170634 0 0 0 0 0.323702 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_206" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_206" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute h-[150.722px] left-[calc(50%-0.3px)] top-[calc(50%-51.18px)] translate-x-[-50%] translate-y-[-50%] w-[164.021px]" data-name="ver cartas 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
            </div>
            <div className="absolute font-['Capriola:Regular',sans-serif] leading-[37.71px] left-[calc(50%-0.06px)] not-italic text-[36.853px] text-center text-nowrap text-white top-[calc(50%-0.36px)] translate-x-[-50%]">
              <p className="mb-0">{`Ganaste `}</p>
              <p>un match</p>
            </div>
          </div>
        </div>
        <ChevronRightBackgroundImage />
      </div>
      <BackgroundImage1 additionalClassNames="left-1/2">Una pareja correcta se revela sola.</BackgroundImage1>
      <div className="absolute content-stretch flex h-[40.73px] items-center left-[29px] px-[16.292px] py-[12.694px] rounded-[31.734px] top-[668px] w-[93px]">
        <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
        <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[62px]">
          <p className="leading-[17.454px]">FÁCIL</p>
        </div>
      </div>
      <BackgroundImageAndText text="MÉDIO" additionalClassNames="left-[137px]" />
      <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[258px]" />
      <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[628px] translate-x-[-50%] w-[117px]">Dificultad</p>
      <div className="absolute backdrop-blur-[3.8px] backdrop-filter h-[852px] left-[-5px] top-[903px] w-[393px]" data-name="explicacion" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
        <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
            <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
              <ArrowLeftBackgroundImage />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-center left-[5px] top-[143px]">
          <ChevronLeftBackgroundImage />
          <div className="h-[265.437px] relative shrink-0 w-[277.937px]" data-name="pico">
            <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[51.47px]" data-name="easy">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[51.47px]">
                <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgEasy} />
              </div>
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[38.235px] left-[125.82px] not-italic text-[37.366px] text-black text-center text-nowrap top-[77.2px] translate-x-[-50%]">
                <p className="mb-0">{`libera la `}</p>
                <p className="mb-0">{`carta `}</p>
                <p>enterrada</p>
              </div>
            </div>
            <div className="absolute aspect-[166/175.96] left-[39.69%] right-[3.82%] top-0" data-name="ver cartas 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas2} />
            </div>
          </div>
          <ChevronRightBackgroundImage />
        </div>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[628px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImage1 additionalClassNames="left-[calc(50%-3px)]">Las parejas que ya habías ganado se vuelven a esconder.</BackgroundImage1>
        <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[141px]" />
      </div>
    </div>
  );
}