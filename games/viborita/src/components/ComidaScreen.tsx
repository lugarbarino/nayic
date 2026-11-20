import React from "react";
import svgPaths from "../imports/svg-iso4dtsxn6";
import imgPatron5Gema from "figma:asset/42142bd64faa7d19b7a5bda989834df14387315a.png";
import imgPatron6Gema from "figma:asset/e4a740c515c2e38543c5786c5a6939f3b4b0b41b.png";
import imgPatron4Gema from "figma:asset/e952cf6291dbcb33bd44bb9298a5f7ef88957ca3.png";
import imgPattern0Gema from "figma:asset/89aa62f9531ac245b1770b2b29859969fb655959.png";
import imgPatron2Gema from "figma:asset/ba03558a7f50f263411a46762fa5ce3f53012232.png";
import imgPatron3Gema from "figma:asset/cec7e3725ebfce9576ff93c43ec678a85ab08788.png";
import imgPatron8Gema from "figma:asset/c06a52c71adaf43b1d587d81e19676fb40a01d7c.png";
import imgPatron7Gema from "figma:asset/3110ef76711c4f3353c17b269ebaab0d3cd82156.png";
import imgPatron9Gema from "figma:asset/0b81b473e07a4f12e06c3083dc06985121b86781.png";
import imgPatron10Gema from "figma:asset/c65910ca81ffa4f45b1245bde1576d6f5b859853.png";
import imgPatron11Gema from "figma:asset/13681ec076c031f8ba07661652106c0617acf531.png";
import imgPatron12Gema from "figma:asset/027dd8a3f4c10b83dd7e5bfca13cfb7e36f55091.png";
import imgPattern0Gema1 from "figma:asset/007aa1e4e8b2769d0995ccc8e96ef1ae4cad3de2.png";
// Especiales imports
import imgInvencible6 from "figma:asset/00f936498c771fab0c5cfe6ab4ed0f01bd42a3d6.png";
import imgInvencible3 from "figma:asset/19658abf6eea8aa5e940613121e87ffbaa189470.png";
import imgInvencible1 from "figma:asset/1aa3e30802877b4e82d103f2b13de0fe711faa07.png";
import imgInvencible2 from "figma:asset/c12c7d97c0f63efc4c5830c96113420e113350b5.png";
import imgInvencible4 from "figma:asset/73a4514b8698fbcfda336cfcef7d087af1f452d0.png";
import imgInvencible5 from "figma:asset/bb9e302d7e1871d9a11c6d80688aabc4a9966410.png";
import imgCactus from "figma:asset/fe38f3b1b0fc196aacc2870cda3359b693751ecb.png";
import imgHole from "figma:asset/0dfcfc3e93b6d38fd8503fb89c8c0c8cfb34333b.png";

type ComidaScreenProps = {
  onClose: () => void;
};

export default function ComidaScreen({ onClose }: ComidaScreenProps) {
  const [selectedTab, setSelectedTab] = React.useState<'gemas' | 'especiales'>('gemas');

  return (
    <div className="relative size-full flex flex-col" data-name="Comida" style={{ backgroundImage: "linear-gradient(177.836deg, rgb(22, 59, 53) 0.549%, rgb(60, 161, 145) 99.451%)" }}>
      {/* Header fijo */}
      <div className="flex-none flex flex-col gap-[12px] items-center pt-[32px] px-[20px] pb-[24px] z-10">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[356px]">
          <button 
            onClick={onClose}
            className="bg-[#11312c] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[75px] cursor-pointer hover:bg-[#1a3f39] transition-colors"
          >
            <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Arrow left">
                  <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)] rounded-[12px]" />
          </button>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full max-w-[341px]">
          <p className="font-['Capriola:Regular',sans-serif] leading-[63.577px] not-italic relative shrink-0 text-[49.799px] text-center text-white tracking-[-2.3374px] w-full">Comida</p>
          <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
            <button
              onClick={() => setSelectedTab('gemas')}
              className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px] cursor-pointer transition-all hover:scale-105"
            >
              {selectedTab === 'gemas' && (
                <div aria-hidden="true" className="absolute border-[#aaae68] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
              )}
              <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#d2f3ee] text-[19.04px] text-center w-[106px]">
                <p className="leading-[17.454px]">Gemas</p>
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('especiales')}
              className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px] cursor-pointer transition-all hover:scale-105"
            >
              {selectedTab === 'especiales' && (
                <div aria-hidden="true" className="absolute border-[#aaae68] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
              )}
              <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#b8d9d4] text-[19.04px] text-center w-[106px]">
                <p className="leading-[17.454px]">Especiales</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {selectedTab === 'gemas' && (
          <div className="relative min-h-full flex flex-col items-center py-8 px-4">
            {/* 100 pts */}
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern0Gema} />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[128px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron2Gema} />
                </div>
                <div className="relative shrink-0 size-[128px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron3Gema} />
                </div>
              </div>
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-white text-[20px] leading-[19.5px]">100 pts</p>
            </div>

            {/* 200 pts */}
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex gap-2 items-end">
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron5Gema} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron6Gema} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron4Gema} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-white text-[20px] leading-[19.5px]">200 pts</p>
            </div>

            {/* 300 pts */}
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron7Gema} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-[128px]">
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                      <div className="relative size-[124.667px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron8Gema} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron9Gema} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-white text-[20px] leading-[19.5px]">300 pts</p>
            </div>

            {/* 400 pts */}
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron10Gema} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron11Gema} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[128px]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPatron12Gema} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-white text-[20px] leading-[19.5px]">400 pts</p>
            </div>

            {/* 1000 pts */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center justify-center size-[128px]">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="relative size-[128px]">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern0Gema1} />
                  </div>
                </div>
              </div>
              <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-white text-[20px] leading-[19.5px]">1000 pts</p>
            </div>
          </div>
        )}

        {selectedTab === 'especiales' && (
          <div className="relative min-h-full flex flex-col items-center py-8 px-4">
            {/* Fila 1: Corazón y Bomba */}
            <div className="flex gap-[15px] justify-center mb-[18px] w-full max-w-[363px]">
              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Corazón +1 vida" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible6} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">+1 vida</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">+500 puntos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Bomba -2 vidas" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible3} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">-2 vida</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">
                        <span className="font-['SF_Pro_Display:Bold',sans-serif] not-italic">-</span>1000 puntos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fila 2: Estrella y Reloj */}
            <div className="flex gap-[15px] justify-center mb-[18px] w-full max-w-[363px]">
              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Estrella inmunidad" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible1} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">Inmunidad</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">x 15 segundos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Reloj más lento" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible2} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">Lentitud</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">x 15 segundos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fila 3: Botella y Galleta */}
            <div className="flex gap-[15px] justify-center mb-[18px] w-full max-w-[363px]">
              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Botella achica" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible4} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">Achica</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">x 15 segundos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Galleta agranda" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInvencible5} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">Agranda</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">x 15 segundos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fila 4: Cactus y Hueco */}
            <div className="flex gap-[15px] justify-center mb-[18px] w-full max-w-[363px]">
              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Cactus obstáculo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCactus} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">-1 vida</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">Aparece a 2 min</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center w-[172.675px]">
                <div className="h-[156px] mb-2 relative w-[156px]">
                  <img alt="Hueco mortal" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHole} />
                </div>
                <div className="content-stretch flex h-[70px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[173px]">
                  <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-center text-white">
                    <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] h-[23px] justify-center not-italic relative shrink-0 text-[20px] w-[141px]">
                      <p className="leading-[19.5px]">MORTAL</p>
                    </div>
                    <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24px] italic justify-center relative shrink-0 text-[16px] w-[141px]">
                      <p className="leading-[19.5px]">Aparece a 4 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}