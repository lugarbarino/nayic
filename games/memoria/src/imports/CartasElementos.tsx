import svgPaths from "./svg-lb2ae65op2";
import imgEasy from "figma:asset/8ce711ff33a06bd161590fe669506a9ac66ed56f.png";
import imgEasy1 from "figma:asset/24cedf90396b694f937714c129389502ed8097a4.png";
import imgEasy2 from "figma:asset/a29b9d7104e1df8ecd6ec339fe4ae3e229949967.png";
import imgEasy3 from "figma:asset/9959946bd606dbbc76d922c18711993dd5e0cb0b.png";
import imgEasy4 from "figma:asset/00d1358d020569606eb1993a7db5b5b2428b3c23.png";
import imgEasy5 from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgVerCartas1 from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";
import imgEasy6 from "figma:asset/15a6ace6b2cdbe828fcae78b43510672c51c03c8.png";
import imgEasy7 from "figma:asset/4577f4ffc63cd16b87b4f3e50dfd5d6905de6509.png";
import imgEasy8 from "figma:asset/e382f64ceae0184dd4445c4a78d2b0e7a9ee096d.png";
import imgEasy9 from "figma:asset/b6eb6905b759277b8a0f1a8f9ecfb3bfc875a43b.png";
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[172px]">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[139px]">
        <p className="leading-[17.454px]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[106px]">
        <p className="leading-[17.454px]">{text}</p>
      </div>
    </div>
  );
}

export default function CartasElementos() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter relative size-full" data-name="Cartas elementos" style={{ backgroundImage: "linear-gradient(179.911deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[18px] top-[25px] w-[356.381px]">
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
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-[341px]">
          <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[49.799px] text-center text-white tracking-[-2.3374px] w-full">Cartas</p>
          <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
            <BackgroundImageAndText text="Especiales" />
            <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
              <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
              <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#ebebeb] text-[19.04px] text-center w-[106px]">
                <p className="leading-[17.454px]">Elemetos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[25px] items-end left-[18px] top-[269px] w-[363px]">
        <div className="content-start flex flex-wrap gap-[18px_15px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px]">
            <div className="h-[156.085px] relative shrink-0 w-[162.279px]" data-name="medio_magica">
              <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy} />
              </div>
            </div>
            <BackgroundImageAndText text="Congelada" />
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px]">
            <div className="h-[150.085px] relative shrink-0 w-[156.041px]" data-name="medio_magica">
              <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy1} />
              </div>
            </div>
            <BackgroundImageAndText text="Mágica" />
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px]">
            <div className="h-[150.254px] relative shrink-0 w-[156.217px]" data-name="medio_magica">
              <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy2} />
              </div>
            </div>
            <BackgroundImageAndText1 text="Congelada II" />
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px]">
            <div className="h-[146.254px] relative shrink-0 w-[152.058px]" data-name="medio_magica">
              <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]" data-name="easy">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy3} />
              </div>
            </div>
            <BackgroundImageAndText1 text="Fuego" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <div className="h-[158.615px] relative shrink-0 w-[172.675px]" data-name="dificil_enterrada">
              <div className="absolute inset-[-0.55%_0]" data-name="easy">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[123.84%] left-[-7.8%] max-w-none top-[-10.88%] w-[113.76%]" src={imgEasy4} />
                </div>
              </div>
            </div>
            <div className="h-[158.615px] relative shrink-0 w-[166.085px]" data-name="pico">
              <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[30.756px]" data-name="easy">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30.756px]">
                  <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgEasy5} />
                </div>
                <div className="absolute font-['Capriola:Regular',sans-serif] leading-[22.848px] left-[75.21px] not-italic text-[22.328px] text-black text-center text-nowrap top-[46.13px] translate-x-[-50%]">
                  <p className="mb-0">{`libera la `}</p>
                  <p className="mb-0">{`carta `}</p>
                  <p>enterrada</p>
                </div>
              </div>
              <div className="absolute aspect-[166/175.96] left-[39.69%] right-[3.82%] top-0" data-name="ver cartas 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
              </div>
            </div>
          </div>
          <BackgroundImageAndText1 text="Enterrada" />
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <div className="h-[158.615px] relative shrink-0 w-[172.675px]" data-name="dificil_enterrada">
              <div className="absolute inset-[-0.55%_0]" data-name="easy">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy6} />
              </div>
            </div>
            <div className="h-[158.615px] relative shrink-0 w-[172.675px]" data-name="dificil_enterrada">
              <div className="absolute inset-[-0.55%_0]" data-name="easy">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[99.77%] left-[4.47%] max-w-none top-[-0.08%] w-[91.05%]" src={imgEasy7} />
                </div>
              </div>
            </div>
          </div>
          <BackgroundImageAndText1 text="Nube" />
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <div className="h-[158.615px] relative shrink-0 w-[172.675px]" data-name="dificil_enterrada">
              <div className="absolute inset-[-0.55%_0]" data-name="easy">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy8} />
              </div>
            </div>
            <div className="h-[158.615px] relative shrink-0 w-[172.675px]" data-name="dificil_enterrada">
              <div className="absolute inset-[-0.55%_0]" data-name="easy">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEasy9} />
              </div>
            </div>
          </div>
          <BackgroundImageAndText1 text="Magia II" />
        </div>
      </div>
    </div>
  );
}