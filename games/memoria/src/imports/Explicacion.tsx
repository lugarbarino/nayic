import svgPaths from "./svg-p989wi6x0n";
import clsx from "clsx";
import imgGatosMagic02 from "figma:asset/5e48e7fa8ee790fd3c0148ae049b767157121558.png";

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
        <div className="h-[261.84px] overflow-clip relative shrink-0 w-[285.05px]" data-name="se mezclan las cartas">
          <div className="absolute h-[261.84px] left-0 top-0 w-[285.05px]">
            <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 251">
                <g filter="url(#filter0_d_333_127)" id="Star 14">
                  <path d={svgPaths.p7b99380} fill="var(--fill-0, #603265)" />
                  <path d={svgPaths.pffa2f00} stroke="var(--stroke-0, #603265)" strokeWidth="5.80255" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="251.008" id="filter0_d_333_127" width="243.798" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="2.90127" dy="3.62659" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.270987 0 0 0 0 0.138039 0 0 0 0 0.285438 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_127" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_127" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute font-['Capriola:Regular',sans-serif] leading-[37.717px] left-[calc(50%-0.31px)] not-italic text-[36.859px] text-center text-nowrap text-white top-[calc(50%+6.17px)] translate-x-[-50%]">
            <p className="mb-0">Se mezclan</p>
            <p>{` las cartas`}</p>
          </div>
          <div className="absolute flex h-[157.338px] items-center justify-center left-[42.07px] top-[-7.25px] w-[200.039px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[0.381deg]">
              <div className="h-[156.02px] opacity-90 relative w-[199.007px]" data-name="gatos_Magic0 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[101.04%] left-[0.39%] max-w-none top-[1.04%] w-full" src={imgGatosMagic02} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackgroundImage>
          <g id="Chevron right">
            <path d={svgPaths.p2fbe4d80} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </BackgroundImage>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[180px] justify-center leading-[0] left-1/2 text-[#eee] text-[32px] text-center top-[514px] translate-x-[-50%] translate-y-[-50%] w-[291px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[38px]">Las cartas cambian de lugar.</p>
      </div>
      <div className="absolute content-stretch flex h-[40.73px] items-center left-[29px] px-[16.292px] py-[12.694px] rounded-[31.734px] top-[668px] w-[93px]">
        <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
        <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[62px]">
          <p className="leading-[17.454px]">FÁCIL</p>
        </div>
      </div>
      <BackgroundImageAndText text="MÉDIO" additionalClassNames="left-[137px]" />
      <BackgroundImageAndText text="DIFÍCIL" additionalClassNames="left-[258px]" />
      <p className="absolute font-['Capriola:Regular',sans-serif] leading-[22px] left-[194.5px] not-italic text-[#f3f3f4] text-[20px] text-center top-[628px] translate-x-[-50%] w-[117px]">Dificultad</p>
    </div>
  );
}