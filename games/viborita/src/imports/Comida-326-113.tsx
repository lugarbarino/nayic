import svgPaths from "./svg-anijpb7v78";
import imgInvencible6 from "figma:asset/00f936498c771fab0c5cfe6ab4ed0f01bd42a3d6.png";
import imgInvencible3 from "figma:asset/19658abf6eea8aa5e940613121e87ffbaa189470.png";
import imgInvencible1 from "figma:asset/1aa3e30802877b4e82d103f2b13de0fe711faa07.png";
import imgInvencible2 from "figma:asset/c12c7d97c0f63efc4c5830c96113420e113350b5.png";
import imgInvencible4 from "figma:asset/73a4514b8698fbcfda336cfcef7d087af1f452d0.png";
import imgInvencible5 from "figma:asset/bb9e302d7e1871d9a11c6d80688aabc4a9966410.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#b8d9d4] text-[19.04px] text-center w-[141px]">
        <p className="leading-[17.454px]">{children}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <BackgroundImage1>
      {text}
      <br aria-hidden="true" />
      {`x 15 segundos `}
    </BackgroundImage1>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[17.454px] not-italic relative shrink-0 text-[#b8d9d4] text-[19.04px] text-center w-[141px]">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return <BackgroundImage1>{text}</BackgroundImage1>;
}

export default function Comida() {
  return (
    <div className="relative size-full" data-name="Comida" style={{ backgroundImage: "linear-gradient(178.23deg, rgb(22, 59, 53) 0.549%, rgb(60, 161, 145) 99.451%)" }}>
      <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-0.31px)] top-[calc(50%-407px)] translate-x-[-50%] translate-y-[-50%] w-[356.381px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[356px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="bg-[#11312c] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[75px]">
              <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Arrow left">
                    <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
            </div>
          </div>
          <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[49.799px] text-center text-white tracking-[-2.3374px] w-full">Comida</p>
          <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
            <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
              <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#b8d9d4] text-[19.04px] text-center w-[106px]">
                <p className="leading-[17.454px]">Gemas</p>
              </div>
            </div>
            <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
              <div aria-hidden="true" className="absolute border-[#aaae68] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
              <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2f3ee] text-[19.04px] text-center w-[106px]">
                <p className="leading-[17.454px]">Especiales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[calc(50%-182.96px)] translate-x-[-50%] translate-y-[-50%] w-[363px]">
        <div className="content-start flex flex-wrap gap-[18px_15px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[172.675px]">
            <div className="h-[156.085px] relative shrink-0 w-[162.279px]" data-name="medio_magica">
              <div className="absolute left-[2.8px] size-[156px] top-[18px]" data-name="INVENCIBLE 6">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible6} />
              </div>
            </div>
            <BackgroundImageAndText text="+1 vida" />
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[172.675px]">
            <div className="h-[156.085px] relative shrink-0 w-[162.279px]" data-name="medio_magica">
              <div className="absolute left-[3.13px] size-[156px] top-[13px]" data-name="INVENCIBLE 3">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible3} />
              </div>
            </div>
            <BackgroundImageAndText text="-2 vidas" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[calc(50%+53.04px)] translate-x-[-50%] translate-y-[-50%] w-[363px]">
        <div className="content-start flex flex-wrap gap-[18px_15px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[172.675px]">
            <div className="h-[156.085px] relative shrink-0 w-[162.279px]" data-name="medio_magica">
              <div className="absolute aspect-[452/452] left-[1.11%] right-[2.76%] top-0" data-name="INVENCIBLE 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible1} />
              </div>
            </div>
            <BackgroundImage text="Inmunidad" text1="x 15 segundos" />
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[172.675px]">
            <div className="h-[156.085px] relative shrink-0 w-[162.279px]" data-name="medio_magica">
              <div className="absolute left-[0.13px] size-[156px] top-0" data-name="INVENCIBLE 2">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible2} />
              </div>
            </div>
            <BackgroundImageAndText1 text="Más lento" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[calc(50%+293.04px)] translate-x-[-50%] translate-y-[-50%] w-[363px]">
        <div className="content-start flex flex-wrap gap-[18px_15px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[172.675px]">
            <div className="h-[156.085px] relative shrink-0 w-[162.279px]" data-name="medio_magica">
              <div className="absolute left-[-0.2px] size-[156px] top-[15px]" data-name="INVENCIBLE 4">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible4} />
              </div>
            </div>
            <BackgroundImage text="Achica" text1="x 15 segundos" />
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[172.675px]">
            <div className="h-[156.085px] relative shrink-0 w-[162.279px]" data-name="medio_magica">
              <div className="absolute left-[0.13px] size-[156px] top-[10px]" data-name="INVENCIBLE 5">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible5} />
              </div>
            </div>
            <BackgroundImageAndText1 text="Agranda" />
          </div>
        </div>
      </div>
    </div>
  );
}