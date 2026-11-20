import svgPaths from "./svg-ehw71kaf1c";
import clsx from "clsx";
import imgRectangle2 from "figma:asset/704e8cde9072e44031be2e4179bb98d92d9a6814.png";
import imgRectangle3 from "figma:asset/ee07da22dbb594c480d385bbab277ee5f9b3e78d.png";
import imgRectangle22 from "figma:asset/c83d5fad1360f46c116668bf222a30bce233226e.png";
import { imgRectangle, imgRectangle1 } from "./svg-b5hr2";
type RectangleBackgroundImageProps = {
  additionalClassNames?: string;
};

function RectangleBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<RectangleBackgroundImageProps>) {
  return (
    <div style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }} className={clsx("[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[90.196px] mask-size-[247px_98.229px,_211.283px_89.756px] ml-0 mt-0 relative w-[211.282px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{children}</div>
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
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right w-[184px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Chevron right">
            <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #9952A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Ajustes() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full" data-name="Ajustes" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-1/2 top-[calc(50%-153px)] translate-x-[-50%] translate-y-[-50%] w-[341px]">
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
        <div className="content-stretch flex flex-col h-[120px] items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center leading-[0] relative shrink-0 w-full">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Clip path group">
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[7.31%] mt-[0.42%] place-items-start relative" data-name="Group">
                <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Clip path group">
                  <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[-0.25%] place-items-start relative" data-name="Group">
                    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Mask group">
                      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
                        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
                          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
                            <RectangleBackgroundImage additionalClassNames="mask-position-[-18.044px,_0px_-0.194px,_0.22px]">
                              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
                            </RectangleBackgroundImage>
                          </div>
                        </div>
                      </div>
                      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
                        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
                          <RectangleBackgroundImage additionalClassNames="mask-position-[-18.045px,_0px_-0.194px,_0.22px]">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
                          </RectangleBackgroundImage>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[#f3f3f4] text-[20px] text-center w-full">
              <p className="leading-[22px]">Ajustes</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-full">
          <BackgroundImage text="Modo" text1="Normal" />
          <BackgroundImage text="Tema" text1="Monstruos" />
          <BackgroundImage text="Cartas" text1="Guía de cartas" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-1/2 p-[10px] top-[calc(50%+238px)] translate-x-[-50%] translate-y-[-50%] w-[285px]">
        <div className="h-[232px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle22} />
        </div>
      </div>
    </div>
  );
}