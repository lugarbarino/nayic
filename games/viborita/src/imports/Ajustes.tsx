import svgPaths from "./svg-b5mlogegwl";
import clsx from "clsx";
import img1 from "figma:asset/903f46ca7495604536b3719030a008af6acde6b0.png";
import imgPatron7CodoInfDer from "figma:asset/4c8eab951080f79c527872e345652fc214cc3301.png";
import img11 from "figma:asset/d56e8c248437735cc9db3cf8d9bd8869b18b4bd3.png";
import img82 from "figma:asset/fda734cc359d37adac770dd6fe4b3cd1432dc320.png";
import { imgVector } from "./svg-rfokc";
type BackgroundImage4Props = {
  additionalClassNames?: string;
  additionalClassNames1?: string;
};

function BackgroundImage4({ children, additionalClassNames = "", additionalClassNames1 = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("absolute flex items-center justify-center mix-blend-hard-light", additionalClassNames)}>
      <div className="flex-none h-[33.795px] rotate-[50.09deg] skew-x-[328.696deg] w-[69.889px]">
        <div style={{ maskImage: `url('${imgVector}')` }} className={clsx("mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[74.752px_75.791px] opacity-80 relative size-full", additionalClassNames)}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8891 33.7951">
            <g id="Vector" style={{ mixBlendMode: "hard-light" }}>
              {children}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center mix-blend-hard-light", additionalClassNames)}>
      <div className="flex-none h-[10.49px] rotate-[90deg] w-[15.773px]">
        <div className="opacity-[0.66] relative size-full" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7727 10.49">
            <path d={svgPaths.p3b442700} fill="var(--fill-0, #014D33)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center mix-blend-hard-light", additionalClassNames)}>
      <div className="flex-none h-[40.602px] rotate-[90deg] w-[17.886px]">
        <div className="opacity-[0.66] relative size-full" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8858 40.6016">
            <g id="Vector" style={{ mixBlendMode: "screen" }}>
              <path d={svgPaths.p1f8d1700} fill="var(--fill-0, #518FE2)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right w-[184px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
      <BackgroundImage3>
        <g id="Chevron right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #AAAE68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </BackgroundImage3>
    </div>
  );
}

export default function Ajustes() {
  return (
    <div className="relative size-full" data-name="ajustes" style={{ backgroundImage: "linear-gradient(178.54deg, rgb(22, 59, 53) 0.549%, rgb(60, 161, 145) 99.451%)" }}>
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-0.31px)] top-[calc(50%-381px)] translate-x-[-50%] translate-y-[-50%] w-[356.381px]">
        <div className="bg-[#11312c] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0">
          <BackgroundImage3>
            <g id="Arrow left">
              <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </BackgroundImage3>
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Salir
          </p>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
        </div>
      </div>
      <div className="absolute h-[120px] left-[calc(50%-0.36px)] overflow-clip top-[calc(50%-278px)] translate-x-[-50%] translate-y-[-50%] w-[282.273px]">
        <div className="absolute h-[106.181px] left-[calc(50%-0.68px)] top-[calc(50%-0.43px)] translate-x-[-50%] translate-y-[-50%] w-[250.51px]" data-name="Vector">
          <div className="absolute inset-[-5.54%_-2.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 262.273 117.944">
              <path d={svgPaths.p1e523f00} fill="var(--fill-0, #225953)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="5.88127" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[130.024px] left-[calc(50%-1.18px)] top-[calc(50%-0.11px)] translate-x-[-50%] translate-y-[-50%] w-[273.029px]" data-name="1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[209.98%] left-[0.68%] max-w-none top-[-58.66%] w-full" src={img1} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[31px] items-start left-[calc(50%+0.5px)] top-[256px] translate-x-[-50%]">
        <BackgroundImage text="Modo" text1="Normal" />
        <div className="content-stretch flex gap-[9px] items-center leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-full">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold h-[64px] relative shrink-0 w-[122px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tema
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] relative shrink-0 text-right w-[184px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Patrones
          </p>
        </div>
        <BackgroundImage text="Comida" text1="Puntajes" />
      </div>
      <div className="absolute contents left-0 top-[562.43px]">
        <div className="absolute left-[108.18px] overflow-clip size-[108.699px] top-[673.79px]" data-name="patron 7 -codo inf der">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[0.04%] max-w-none size-[102.58%] top-[-0.7%]" src={imgPatron7CodoInfDer} />
          </div>
          <div className="absolute left-[0.05px] size-[108.668px] top-0" data-name="cola horizontal  derecha" />
          <div className="absolute contents inset-[-0.45%_29.96%_30.73%_1.27%]" data-name="Mask group">
            <div className="absolute flex inset-[-1.34%_-3.42%_41.19%_-33.52%] items-center justify-center mix-blend-hard-light">
              <div className="flex-none h-[97.764px] rotate-[230.09deg] skew-x-[328.696deg] w-[79.777px]">
                <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[37.817px_0.966px] mask-size-[74.752px_75.791px] opacity-80 relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.777 97.7643">
                    <g id="Vector" style={{ mixBlendMode: "hard-light" }}>
                      <path d={svgPaths.p342a6100} fill="var(--fill-0, #FF7448)" fillOpacity="0.6" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute flex inset-[9.1%_48.11%_39.88%_-28.75%] items-center justify-center mix-blend-hard-light">
              <div className="flex-none h-[42.84px] rotate-[50.083deg] skew-x-[328.699deg] w-[69.896px]">
                <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[32.629px_-10.382px] mask-size-[74.752px_75.791px] opacity-80 relative size-full" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
                  <div className="absolute inset-[0_0_6.64%_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.896 39.9941">
                      <g id="Vector" style={{ mixBlendMode: "hard-light" }}>
                        <path d={svgPaths.p16feb080} fill="var(--fill-0, white)" fillOpacity="0.86" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <BackgroundImage4 additionalClassNames="inset-[-0.17%_30.16%_49.52%_-2.47%]" additionalClassNames1="mask-position-[4.061px_-0.308px]">
              <path d={svgPaths.p695e7f2} fill="var(--fill-0, white)" fillOpacity="0.86" />
            </BackgroundImage4>
            <BackgroundImage4 additionalClassNames="inset-[-1.41%_1.31%_50.75%_26.38%]" additionalClassNames1="mask-position-[-27.297px_1.039px]">
              <path d={svgPaths.p1ee1580} fill="var(--fill-0, white)" fillOpacity="0.86" />
            </BackgroundImage4>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[107.12px] size-[111.849px] top-[562.43px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg] scale-y-[-100%]">
            <div className="overflow-clip relative size-[111.849px]" data-name="patron 2 - codo inf izq">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPatron7CodoInfDer} />
              </div>
              <div className="absolute left-0 size-[111.849px] top-0" data-name="cola horizontal  derecha" />
              <div className="absolute flex h-[81.48px] items-center justify-center left-[-0.53px] top-[-1.43px] w-[115.019px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-[269.514deg] scale-y-[-100%]">
                  <div className="h-[114.34px] w-[80.512px]" data-name="1 1" />
                </div>
              </div>
              <div className="absolute inset-[6.25%_36.56%_64.86%_37.12%] mix-blend-hard-light">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4403 32.308">
                  <g id="Group 8" opacity="0.6" style={{ mixBlendMode: "hard-light" }}>
                    <path d={svgPaths.p263f6800} fill="var(--fill-0, #092D29)" id="Vector" />
                    <path d={svgPaths.p1be87700} fill="var(--fill-0, #AAAE68)" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <div className="absolute flex inset-[35.53%_70.72%_35.58%_2.96%] items-center justify-center mix-blend-hard-light">
                <div className="flex-none h-[32.308px] scale-y-[-100%] w-[29.44px]">
                  <div className="relative size-full">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4403 32.3079">
                      <g id="Group 9" opacity="0.6" style={{ mixBlendMode: "hard-light" }}>
                        <path d={svgPaths.p1dc1600} fill="var(--fill-0, #092D29)" id="Vector" />
                        <path d={svgPaths.p25c890c0} fill="var(--fill-0, #AAAE68)" id="Vector_2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 overflow-clip size-[108.522px] top-[672.73px]" data-name="patron 3 - hor">
          <div className="absolute flex h-[45.71px] items-center justify-center left-[-8.05px] top-[31.57px] w-[117.024px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <div className="h-[117.024px] relative w-[45.71px]" data-name="1 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[96.24%] left-[-72.76%] max-w-none top-[3.76%] w-[246.01%]" src={img11} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute aspect-[44.0731/7.32036] flex items-center justify-center left-[33.51%] mix-blend-hard-light right-[25.88%] top-[calc(50%-18.78px)] translate-y-[-50%]">
            <div className="flex-none h-[44.073px] rotate-[90deg] w-[7.32px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.32036 44.0731">
                  <g id="Vector" opacity="0.66" style={{ mixBlendMode: "hard-light" }}>
                    <path d={svgPaths.p3db8bc80} fill="var(--fill-0, #E03481)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[37.14%_58.29%_46.38%_4.3%] mix-blend-hard-light">
            <BackgroundImage1 additionalClassNames="inset-[37.14%_58.29%_46.38%_4.3%]" />
            <BackgroundImage2 additionalClassNames="inset-[38.39%_72.89%_47.08%_17.45%]" />
          </div>
          <div className="absolute contents inset-[37.14%_2.37%_46.38%_60.22%] mix-blend-hard-light">
            <BackgroundImage1 additionalClassNames="inset-[37.14%_2.37%_46.38%_60.22%]" />
            <BackgroundImage2 additionalClassNames="inset-[38.39%_16.97%_47.08%_73.36%]" />
          </div>
          <div className="absolute left-0 size-[108.522px] top-0" data-name="cola horizontal  derecha" />
          <div className="absolute h-[40.903px] left-0 mix-blend-hard-light top-[28.15px] w-[108.522px]" data-name="64" />
          <div className="absolute flex inset-[54.73%_-0.79%_28.37%_7.81%] items-center justify-center mix-blend-hard-light">
            <div className="flex-none h-[100.899px] rotate-[90deg] w-[18.343px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3429 100.899">
                  <g id="Vector" opacity="0.66" style={{ mixBlendMode: "hard-light" }}>
                    <path d={svgPaths.p30625000} fill="var(--fill-0, #FF499A)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[218.48px] overflow-clip size-[108.522px] top-[564.55px]" data-name="Before eating left">
          <div className="absolute flex h-[182.188px] items-center justify-center left-[-26.34px] top-[-52.91px] w-[350.565px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[3.931deg]">
              <div className="h-[159.22px] relative w-[340.45px]" data-name="8 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[297.32%] left-[-103.4%] max-w-none top-[-138.81%] w-[139.05%]" src={img82} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 size-[108.522px] top-0" data-name="cola horizontal  derecha" />
        </div>
      </div>
    </div>
  );
}