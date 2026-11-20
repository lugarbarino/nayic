import svgPaths from "../../svg/destellos";
import clsx from "clsx";
import imgSparkle from "../../assets/decoracion/destellos-chicos.webp";
import img171 from "../../assets/decoracion/nube.webp";
import imgEasy from "../../assets/especiales/nube-dificil.webp";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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
type ImageProps = {
  additionalClassNames?: string;
};

function Image({ additionalClassNames = "" }: ImageProps) {
  return (
    <div className={clsx("absolute h-[25.681px] w-[45.351px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img171} />
    </div>
  );
}
type SparkleImageProps = {
  additionalClassNames?: string;
};

function SparkleImage({ additionalClassNames = "" }: SparkleImageProps) {
  return (
    <div className={clsx("absolute aspect-[1313/1313]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSparkle} />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[111.227px] items-center justify-center left-[176.13px] top-[45.81px] w-[113.519px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[342.485deg]">
          <div className="h-[87.813px] relative w-[91.326px]" data-name="nube dificil_hint">
            <Wrapper>
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
            </Wrapper>
            <SparkleImage additionalClassNames="left-[-16.67%] right-[9.23%] top-[14.11px]" />
            <SparkleImage additionalClassNames="left-[4.36%] right-[-11.79%] top-[-31.55px]" />
            <Image additionalClassNames="left-0 top-[14.36px]" />
            <Image additionalClassNames="left-[52.33px] top-[50.28px]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[100.319px] items-center justify-center left-[191.61px] top-[239.11px] w-[103.275px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.479deg]">
          <div className="h-[87.813px] relative w-[91.326px]" data-name="nube dificil_hint">
            <Wrapper>
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
            </Wrapper>
            <SparkleImage additionalClassNames="left-[-16.67%] right-[9.23%] top-[14.11px]" />
            <SparkleImage additionalClassNames="left-[4.36%] right-[-11.8%] top-[-31.55px]" />
            <Image additionalClassNames="left-0 top-[14.36px]" />
            <Image additionalClassNames="left-[52.33px] top-[50.28px]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[110.109px] items-center justify-center left-[49.28px] top-0 w-[112.481px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.476deg]">
          <div className="h-[87.813px] relative w-[91.326px]" data-name="nube dificil_hint">
            <Wrapper>
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
            </Wrapper>
            <SparkleImage additionalClassNames="left-[-16.67%] right-[9.23%] top-[14.11px]" />
            <SparkleImage additionalClassNames="left-[4.36%] right-[-11.79%] top-[-31.55px]" />
            <Image additionalClassNames="left-0 top-[14.36px]" />
            <Image additionalClassNames="left-[52.33px] top-[50.28px]" />
          </div>
        </div>
      </div>
      <div className="absolute h-[184.683px] left-0 top-[109.74px] w-[201.054px]" data-name="dificil_nube">
        <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[123.84%] left-[-9.75%] max-w-none top-[-11.93%] w-[113.76%]" src={imgEasy} />
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
  );
}