import svgPaths from "./svg-vfobd70x6c";
import clsx from "clsx";
import imgEasy from "figma:asset/cff577d4f8754767cb5004eb6a8bc4f5e58d5ea1.png";
import imgEasy1 from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgVerCartas1 from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";
import imgEasy2 from "figma:asset/00d1358d020569606eb1993a7db5b5b2428b3c23.png";
import imgEasy3 from "figma:asset/1d8311d78310199ad574d89dc22b84dc9e7580e6.png";
import imgEasy4 from "figma:asset/3bafeaf96dd7ead134876226f920694fc9b5e479.png";
import imgEasy5 from "figma:asset/00f98cf7e49c4229795fe3c978c38097c338f3d6.png";
import imgGatosMagic011 from "figma:asset/48a3004b9f1f2cafbbbffa9598c3e94d5dea0464.png";
import imgSparkle from "figma:asset/1aff4b0786dbb5434b8320009a4db81069207481.png";
import imgEasy6 from "figma:asset/fcb9d3be69831f5023d760bf3f437cd3624dcde1.png";
import img171 from "figma:asset/8af0565be2af0ab9aed4e7000ae9cb8760cba576.png";
import imgEasy7 from "figma:asset/fe8057e83bba01df9f7ca8bc15debcd6be37c94e.png";
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("[grid-area:1_/_1] flex items-center justify-center mt-0 relative", additionalClassNames)}>
      {children}
    </div>
  );
}
type ExplicacionBackgroundImageProps = {
  additionalClassNames?: string;
};

function ExplicacionBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ExplicacionBackgroundImageProps>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }} className={clsx("absolute backdrop-blur-[3.8px] backdrop-filter h-[852px] w-[393px]", additionalClassNames)}>
      {children}
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[180px] justify-center leading-[0] left-[calc(50%-3px)] text-[#eee] text-[32px] text-center translate-x-[-50%] translate-y-[-50%] w-[291px]", additionalClassNames)}>
      <p className="leading-[38px]">{children}</p>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[51px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0_5.13%_3.73%_0]">
      <div className="absolute inset-[-0.3%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 86">
          {children}
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("absolute h-[25.681px] w-[45.351px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img171} />
    </div>
  );
}
type SparkleBackgroundImageProps = {
  additionalClassNames?: string;
};

function SparkleBackgroundImage({ additionalClassNames = "" }: SparkleBackgroundImageProps) {
  return (
    <div className={clsx("absolute aspect-[1313/1313]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSparkle} />
    </div>
  );
}
type Group78GatosMagicBackgroundImageProps = {
  additionalClassNames?: string;
};

function Group78GatosMagicBackgroundImage({ additionalClassNames = "" }: Group78GatosMagicBackgroundImageProps) {
  return (
    <div className={clsx("absolute size-[179.979px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGatosMagic011} />
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] rounded-[31.734px] top-[696px] w-[107px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[77px]">
        <p className="leading-[17.454px]">{text}</p>
      </div>
    </div>
  );
}
type ChevronRightBackgroundImageProps = {
  additionalClassNames?: string;
};

function ChevronRightBackgroundImage({ additionalClassNames = "" }: ChevronRightBackgroundImageProps) {
  return (
    <BackgroundImage2 additionalClassNames={additionalClassNames}>
      <g id="Chevron right">
        <path d={svgPaths.p2fbe4d80} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </BackgroundImage2>
  );
}
type ChevronLeftBackgroundImageProps = {
  additionalClassNames?: string;
};

function ChevronLeftBackgroundImage({ additionalClassNames = "" }: ChevronLeftBackgroundImageProps) {
  return (
    <BackgroundImage2 additionalClassNames={additionalClassNames}>
      <g id="Chevron left">
        <path d={svgPaths.padc2080} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </BackgroundImage2>
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

export default function Elementos() {
  return (
    <div className="relative size-full" data-name="elementos">
      <ExplicacionBackgroundImage additionalClassNames="left-[31px] top-[90px]">
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
          <div className="h-[260px] relative shrink-0 w-[270.318px]" data-name="medio_congelado">
            <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy} />
            </div>
          </div>
          <ChevronRightBackgroundImage />
        </div>
        <BackgroundImageAndText text="MÉDIO" additionalClassNames="left-[137px]" />
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImage3 additionalClassNames="top-[543px]">La carta queda congelada y no se da vuelta durante 10 segundos.</BackgroundImage3>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Congelada</p>
      </ExplicacionBackgroundImage>
      <ExplicacionBackgroundImage additionalClassNames="left-[31px] top-[993px]">
        <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
            <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
              <ArrowLeftBackgroundImage />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute content-stretch flex h-[197px] items-center left-[5px] top-[143px]">
          <ChevronLeftBackgroundImage />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <BackgroundImage4 additionalClassNames="h-[189.1px] ml-[103px] w-[193.037px]">
              <div className="flex-none rotate-[20.871deg]">
                <div className="h-[144.635px] relative w-[151.446px]" data-name="pico">
                  <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[28.046px]" data-name="easy">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28.046px]">
                      <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgEasy1} />
                    </div>
                    <div className="absolute font-['Capriola:Regular',sans-serif] leading-[20.834px] left-[68.93px] not-italic text-[20.36px] text-black text-center text-nowrap top-[42.07px] translate-x-[-50%]">
                      <p className="mb-0">{`libera la `}</p>
                      <p className="mb-0">{`carta `}</p>
                      <p>enterrada</p>
                    </div>
                  </div>
                  <div className="absolute aspect-[166/175.96] left-[47.78%] right-[-4.26%] top-[-27.59px]" data-name="ver cartas 1">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
                  </div>
                </div>
              </div>
            </BackgroundImage4>
            <div className="[grid-area:1_/_1] h-[213px] ml-0 mt-[109.11px] relative w-[232px]" data-name="dificil_enterrada">
              <div className="absolute inset-[-0.55%_0]" data-name="easy">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[123.84%] left-[-7.8%] max-w-none top-[-10.88%] w-[113.76%]" src={imgEasy2} />
                </div>
              </div>
            </div>
          </div>
          <ChevronRightBackgroundImage />
        </div>
        <BackgroundImage3 additionalClassNames="top-[543px]">
          La carta queda enterrada.
          <br aria-hidden="true" />
          {` Solo el pico puede liberarla.`}
        </BackgroundImage3>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Enterrada</p>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[141px]" />
      </ExplicacionBackgroundImage>
      <ExplicacionBackgroundImage additionalClassNames="left-[463px] top-[90px]">
        <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
            <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
              <ArrowLeftBackgroundImage />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-center left-[4px] top-[143px]">
          <ChevronLeftBackgroundImage />
          <div className="h-[257.937px] relative shrink-0 w-[268.254px]" data-name="medio_magia">
            <div className="absolute inset-[-0.55%_-4.07%_-6.65%_0]" data-name="easy">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[175.45%] left-[-45.37%] max-w-none top-[-40.57%] w-[178.12%]" src={imgEasy3} />
              </div>
            </div>
          </div>
          <ChevronRightBackgroundImage />
        </div>
        <BackgroundImageAndText text="MÉDIO" additionalClassNames="left-[137px]" />
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImage3 additionalClassNames="top-[514px]">Revela su par por unos segundos.</BackgroundImage3>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Mágica</p>
      </ExplicacionBackgroundImage>
      <ExplicacionBackgroundImage additionalClassNames="left-[1759px] top-[993px]">
        <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
            <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
              <ArrowLeftBackgroundImage />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-center left-[4px] top-[143px]">
          <ChevronLeftBackgroundImage />
          <div className="h-[246.157px] relative shrink-0 w-[267.977px]" data-name="dificil_fuego">
            <div className="absolute h-[252.976px] left-0 top-[-6.82px] w-[272.069px]" data-name="easy">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.1%] left-[-11.68%] max-w-none top-[-14.45%] w-[119.51%]" src={imgEasy4} />
              </div>
            </div>
            <div className="absolute h-[102.479px] left-[calc(50%-0.36px)] top-[calc(50%-0.24px)] translate-x-[-50%] translate-y-[-50%] w-[96.785px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 103">
                <g filter="url(#filter0_i_332_358)" id="Vector">
                  <path d={svgPaths.p1d40a00} fill="var(--fill-0, #734282)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="105.206" id="filter0_i_332_358" width="96.7853" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2.72751" />
                    <feGaussianBlur stdDeviation="4.77313" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="shape" mode="normal" result="effect1_innerShadow_332_358" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <ChevronRightBackgroundImage />
        </div>
        <BackgroundImage3 additionalClassNames="top-[514px]">
          La carta se quema.
          <br aria-hidden="true" />
          {` Tocala para apagarla.`}
        </BackgroundImage3>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Fuego</p>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[141px]" />
      </ExplicacionBackgroundImage>
      <ExplicacionBackgroundImage additionalClassNames="left-[1327px] top-[993px]">
        <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
            <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
              <ArrowLeftBackgroundImage />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-center left-[4px] top-[143px]">
          <ChevronLeftBackgroundImage />
          <div className="h-[258px] relative shrink-0 w-[279px]" data-name="dificil_congelado">
            <div className="absolute inset-[-0.53%_0]" data-name="easy">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[126.84%] left-[-11.13%] max-w-none top-[-14.74%] w-[116.51%]" src={imgEasy5} />
              </div>
            </div>
          </div>
          <ChevronRightBackgroundImage />
        </div>
        <BackgroundImage3 additionalClassNames="top-[543px]">La carta queda congelada y no se da vuelta durante 10 segundos.</BackgroundImage3>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Congelada</p>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[141px]" />
      </ExplicacionBackgroundImage>
      <ExplicacionBackgroundImage additionalClassNames="left-[463px] top-[993px]">
        <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
            <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
              <ArrowLeftBackgroundImage />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute content-stretch flex h-[232px] items-center left-[-1px] pl-0 pr-[2px] py-0 top-[147px] w-[390px]">
          <ChevronLeftBackgroundImage additionalClassNames="mr-[-2px]" />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-2px] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[138.39px] mt-0 place-items-start relative">
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                <BackgroundImage4 additionalClassNames="h-[175.483px] ml-0 w-[180.012px]">
                  <div className="flex-none rotate-[11.987deg]">
                    <div className="h-[146.948px] relative w-[152.826px]" data-name="magia dificil_hint">
                      <div className="absolute contents left-[-32.96px] top-[-35.3px]">
                        <Group78GatosMagicBackgroundImage additionalClassNames="left-[-32.96px] top-[-35.3px]" />
                        <Group78GatosMagicBackgroundImage additionalClassNames="left-[2.43px] top-[-27.48px]" />
                        <div className="absolute inset-[0_3.59%_4%_0.26%]">
                          <div className="absolute inset-[2.23%_7.46%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 135">
                              <path d={svgPaths.p1a41b700} fill="var(--fill-0, #A967BD)" id="Star 13" stroke="var(--stroke-0, #D093E3)" strokeWidth="1.4585" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[0_3.59%_4%_0.26%]">
                          <div className="absolute inset-[-0.27%_5.06%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 142">
                              <g filter="url(#filter0_f_332_356)" id="Star 13">
                                <path d={svgPaths.pf191a80} stroke="var(--stroke-0, white)" strokeWidth="1.7502" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="141.827" id="filter0_f_332_356" width="132.068" x="2.38419e-07" y="-8.9407e-08">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_332_356" stdDeviation="1.76479" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[28.27%_33.61%_31.66%_30%]" data-name="Vector">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 59">
                            <g filter="url(#filter0_i_332_363)" id="Vector">
                              <path d={svgPaths.p3ae3fd00} fill="var(--fill-0, #9054A2)" />
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="60.0592" id="filter0_i_332_363" width="55.6206" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="1.1668" />
                                <feGaussianBlur stdDeviation="2.0419" />
                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_332_363" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <SparkleBackgroundImage additionalClassNames="left-[18.86%] right-[-26.29%] top-[15.92px]" />
                      <SparkleBackgroundImage additionalClassNames="left-[-22.05%] right-[14.62%] top-[-28.59px]" />
                    </div>
                  </div>
                </BackgroundImage4>
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-[214.731px] ml-0 mt-[101.13px] relative w-[226.626px]" data-name="easy">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[158.17%] left-[-33.59%] max-w-none top-[-38.79%] w-[171.32%]" src={imgEasy6} />
              </div>
            </div>
          </div>
          <ChevronRightBackgroundImage additionalClassNames="mr-[-2px]" />
        </div>
        <BackgroundImage3 additionalClassNames="top-[514px]">Revela su par con una pista por unos segundos.</BackgroundImage3>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Mágica</p>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[141px]" />
      </ExplicacionBackgroundImage>
      <ExplicacionBackgroundImage additionalClassNames="left-[895px] top-[993px]">
        <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-133px)] top-[calc(50%-362px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
            <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
              <ArrowLeftBackgroundImage />
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute content-stretch flex h-[232px] items-center left-[-2px] pl-0 pr-[23px] py-0 top-[147px] w-[367px]">
          <ChevronLeftBackgroundImage additionalClassNames="mr-[-2px]" />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-2px] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] flex h-[111.227px] items-center justify-center ml-[176.13px] mt-[45.81px] relative w-[113.519px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[342.485deg]">
                <div className="h-[87.813px] relative w-[91.326px]" data-name="nube dificil_hint">
                  <BackgroundImage1>
                    <g id="Group 78">
                      <path d={svgPaths.p20756870} fill="var(--fill-0, #A967BD)" id="Star 13" stroke="var(--stroke-0, #CC99DC)" strokeWidth="1.02606" />
                      <g filter="url(#filter0_f_332_348)" id="Star 13_2">
                        <path d={svgPaths.p13f56180} stroke="var(--stroke-0, white)" strokeWidth="1.53909" />
                      </g>
                      <g filter="url(#filter1_i_332_348)" id="Vector">
                        <path d={svgPaths.p146d5000} fill="var(--fill-0, #9054A2)" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.0356" id="filter0_f_332_348" width="79.3073" x="3.66745" y="8.9407e-08">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_332_348" stdDeviation="1.55191" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.219" id="filter1_i_332_348" width="33.2377" x="27.3975" y="25.0723">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="1.02606" />
                        <feGaussianBlur stdDeviation="1.7956" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_332_348" />
                      </filter>
                    </defs>
                  </BackgroundImage1>
                  <SparkleBackgroundImage additionalClassNames="left-[-16.67%] right-[9.23%] top-[14.11px]" />
                  <SparkleBackgroundImage additionalClassNames="left-[4.36%] right-[-11.79%] top-[-31.55px]" />
                  <BackgroundImage additionalClassNames="left-0 top-[14.36px]" />
                  <BackgroundImage additionalClassNames="left-[52.33px] top-[50.28px]" />
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_1] flex h-[100.319px] items-center justify-center ml-[191.61px] mt-[239.11px] relative w-[103.275px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[8.479deg]">
                <div className="h-[87.813px] relative w-[91.326px]" data-name="nube dificil_hint">
                  <BackgroundImage1>
                    <g id="Group 78">
                      <path d={svgPaths.p20756870} fill="var(--fill-0, #A967BD)" id="Star 13" stroke="var(--stroke-0, #CC99DC)" strokeWidth="1.02606" />
                      <g filter="url(#filter0_f_332_341)" id="Star 13_2">
                        <path d={svgPaths.p13f56180} stroke="var(--stroke-0, white)" strokeWidth="1.53909" />
                      </g>
                      <g filter="url(#filter1_i_332_341)" id="Vector">
                        <path d={svgPaths.p5862e80} fill="var(--fill-0, #9054A2)" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.0356" id="filter0_f_332_341" width="79.3073" x="3.66745" y="8.9407e-08">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_332_341" stdDeviation="1.55191" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.219" id="filter1_i_332_341" width="33.2377" x="27.3979" y="25.0723">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="1.02606" />
                        <feGaussianBlur stdDeviation="1.7956" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_332_341" />
                      </filter>
                    </defs>
                  </BackgroundImage1>
                  <SparkleBackgroundImage additionalClassNames="left-[-16.67%] right-[9.23%] top-[14.11px]" />
                  <SparkleBackgroundImage additionalClassNames="left-[4.36%] right-[-11.8%] top-[-31.55px]" />
                  <BackgroundImage additionalClassNames="left-0 top-[14.36px]" />
                  <BackgroundImage additionalClassNames="left-[52.33px] top-[50.28px]" />
                </div>
              </div>
            </div>
            <BackgroundImage4 additionalClassNames="h-[110.109px] ml-[49.28px] w-[112.481px]">
              <div className="flex-none rotate-[16.476deg]">
                <div className="h-[87.813px] relative w-[91.326px]" data-name="nube dificil_hint">
                  <BackgroundImage1>
                    <g id="Group 78">
                      <path d={svgPaths.p20756870} fill="var(--fill-0, #A967BD)" id="Star 13" stroke="var(--stroke-0, #CC99DC)" strokeWidth="1.02606" />
                      <g filter="url(#filter0_f_332_336)" id="Star 13_2">
                        <path d={svgPaths.p13f56180} stroke="var(--stroke-0, white)" strokeWidth="1.53909" />
                      </g>
                      <g filter="url(#filter1_i_332_336)" id="Vector">
                        <path d={svgPaths.p29d24f00} fill="var(--fill-0, #9054A2)" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.0356" id="filter0_f_332_336" width="79.3073" x="3.66745" y="8.9407e-08">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_332_336" stdDeviation="1.55191" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.219" id="filter1_i_332_336" width="33.2377" x="27.3977" y="25.0723">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="1.02606" />
                        <feGaussianBlur stdDeviation="1.7956" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_332_336" />
                      </filter>
                    </defs>
                  </BackgroundImage1>
                  <SparkleBackgroundImage additionalClassNames="left-[-16.67%] right-[9.23%] top-[14.11px]" />
                  <SparkleBackgroundImage additionalClassNames="left-[4.36%] right-[-11.79%] top-[-31.55px]" />
                  <BackgroundImage additionalClassNames="left-0 top-[14.36px]" />
                  <BackgroundImage additionalClassNames="left-[52.33px] top-[50.28px]" />
                </div>
              </div>
            </BackgroundImage4>
            <div className="[grid-area:1_/_1] h-[184.683px] ml-0 mt-[109.74px] relative w-[201.054px]" data-name="dificil_nube">
              <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[123.84%] left-[-9.75%] max-w-none top-[-11.93%] w-[113.76%]" src={imgEasy7} />
                </div>
                <div className="absolute inset-[31.84%_32.78%_28.61%_32.52%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 77">
                    <g filter="url(#filter0_i_332_334)" id="Vector">
                      <path d={svgPaths.p2172bc80} fill="var(--fill-0, #9054A2)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="79.1278" id="filter0_i_332_334" width="72.6146" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2.24164" />
                        <feGaussianBlur stdDeviation="3.92286" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_332_334" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <ChevronRightBackgroundImage additionalClassNames="mr-[-2px]" />
        </div>
        <BackgroundImage3 additionalClassNames="top-[514px]">Una pista real, dos falsas.</BackgroundImage3>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[197px] not-italic text-[#cdb3d0] text-[20px] text-center top-[435px] translate-x-[-50%] w-[170px]">Nube</p>
        <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[658px] translate-x-[-50%] w-[117px]">Dificultad</p>
        <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[141px]" />
      </ExplicacionBackgroundImage>
    </div>
  );
}