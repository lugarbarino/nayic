import svgPaths from "./svg-12txuvu3ow";
import clsx from "clsx";
import imgGatosMagic011 from "figma:asset/48a3004b9f1f2cafbbbffa9598c3e94d5dea0464.png";
import imgSparkle from "figma:asset/1aff4b0786dbb5434b8320009a4db81069207481.png";
import imgEasy from "figma:asset/fcb9d3be69831f5023d760bf3f437cd3624dcde1.png";
type MagiaDificilHintSparkleImageProps = {
  additionalClassNames?: string;
};

function MagiaDificilHintSparkleImage({ additionalClassNames = "" }: MagiaDificilHintSparkleImageProps) {
  return (
    <div className={clsx("absolute aspect-[1313/1313]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSparkle} />
    </div>
  );
}
type Group78GatosMagicImageProps = {
  additionalClassNames?: string;
};

function Group78GatosMagicImage({ additionalClassNames = "" }: Group78GatosMagicImageProps) {
  return (
    <div className={clsx("absolute size-[179.979px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGatosMagic011} />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute contents left-[138.39px] top-0">
        <div className="absolute contents left-[138.39px] top-0">
          <div className="absolute flex h-[175.483px] items-center justify-center left-[138.39px] top-0 w-[180.012px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[11.987deg]">
              <div className="h-[146.948px] relative w-[152.826px]" data-name="magia dificil_hint">
                <div className="absolute contents left-[-32.96px] top-[-35.3px]">
                  <Group78GatosMagicImage additionalClassNames="left-[-32.96px] top-[-35.3px]" />
                  <Group78GatosMagicImage additionalClassNames="left-[2.43px] top-[-27.48px]" />
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
                <MagiaDificilHintSparkleImage additionalClassNames="left-[18.86%] right-[-26.29%] top-[15.92px]" />
                <MagiaDificilHintSparkleImage additionalClassNames="left-[-22.05%] right-[14.62%] top-[-28.59px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[32.02%_28.82%_0_0]" data-name="easy">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.17%] left-[-33.59%] max-w-none top-[-38.79%] w-[171.32%]" src={imgEasy} />
        </div>
      </div>
    </div>
  );
}