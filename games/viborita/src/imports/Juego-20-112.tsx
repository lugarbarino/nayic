import svgPaths from "./svg-ttmag2quk1";
import imgPattern4Vertical from "figma:asset/df63356e2630ac32bc7dc4064e31abf95ff72816.png";
import imgBola3 from "figma:asset/5e66b8b62866724b7e018c4f9eda969e0d804e47.png";
import imgBlola2 from "figma:asset/2194cc6a5f401bccd55512ebebff2f4ccc01a11b.png";
import imgBola1 from "figma:asset/eaea606bf9f2d290603e03ece9d39c728eaef0bf.png";
import imgVida from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";
import imgPattern7Horizontal from "figma:asset/9f1c2f05067e48d4e0891ecb518e6888df7a859f.png";
import imgPattern12Horizontal from "figma:asset/933ebd1e43446ffe89d7228da21443b623065dd0.png";
import imgPattern9Vertical from "figma:asset/039aa4a43cfd4c0acc83f229bc429b62a4642194.png";
import imgPattern8Horizontal from "figma:asset/b1b526f00400c1dd0f77befe39fcf64e00debb7d.png";
import imgPattern1Horizontal from "figma:asset/0e980ad03af42197dc1af88da758ca7c1e24a2ff.png";
import imgColaHorizontalDerecha from "figma:asset/74c88019b0f6ad99e60cc1fea469cececbd7abb2.png";
import imgCabezaDerecha from "figma:asset/56480549b559fd8898506729b77be40dcaf76fb6.png";
import imgCodoSuperiorIzq from "figma:asset/3f1c92680ad4f98f607d8759b3c6ca370f08bbe8.png";
import imgCodoInferirorDer from "figma:asset/a838276beb3004fe1684c3fc80c63b830f373c94.png";
import imgCodoInferiorIzq from "figma:asset/db3b2518089ddf62a25ca3d315c182d2e93d6b0d.png";
import imgCodoSuperiorDer from "figma:asset/5464091755ed37402bba35a552fdf0e90d59b942.png";

function ArrowLeft() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#1f3031] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%-129px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px] translate-x-[-50%]">
      <ArrowLeft />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
    </div>
  );
}

function Play() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f3f3f4] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%+130px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px] translate-x-[-50%]">
      <Play />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modo
      </p>
    </div>
  );
}

export default function Juego() {
  return (
    <div className="bg-gradient-to-b from-[#094138] relative size-full to-[#66918e]" data-name="Juego">
      <div className="absolute left-[565.5px] size-[84.5px] top-[645px]" data-name="pattern 4 vertical">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern4Vertical} />
      </div>
      <Frame />
      <Frame1 />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#f3f3f4] text-[32px] text-nowrap top-[158px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[158px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3400
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#aaae68] text-[14px] text-nowrap top-[130px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#aaae68] text-[14px] text-nowrap text-right top-[130px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <div className="absolute left-[988px] size-[61.996px] top-[367px]" data-name="bola 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBola3} />
      </div>
      <div className="absolute left-[225.18px] size-[61.996px] top-[883px]" data-name="blola 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlola2} />
      </div>
      <div className="absolute left-[141px] size-[61.996px] top-[548px]" data-name="Bola 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBola1} />
      </div>
      <div className="absolute h-[95px] left-[1287px] top-[254px] w-[94px]" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVida} />
      </div>
      <div className="absolute left-[734.5px] size-[84.5px] top-[729.5px]" data-name="pattern 7 horizontal">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern7Horizontal} />
      </div>
      <div className="absolute left-[650px] size-[84.5px] top-[729.5px]" data-name="pattern 12 horizontal">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern12Horizontal} />
      </div>
      <div className="absolute left-[565.5px] size-[84.5px] top-[560.5px]" data-name="pattern 9 vertical">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern9Vertical} />
      </div>
      <div className="absolute left-[481px] size-[84.5px] top-[476px]" data-name="pattern 8 horizontal">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern8Horizontal} />
      </div>
      <div className="absolute left-[396.5px] size-[84.5px] top-[476px]" data-name="pattern 1 horizontal">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern1Horizontal} />
      </div>
      <div className="absolute left-[312px] size-[84.5px] top-[476px]" data-name="cola horizontal  derecha">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgColaHorizontalDerecha} />
      </div>
      <div className="absolute left-[903.5px] size-[84.5px] top-[645px]" data-name="cabeza_derecha">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCabezaDerecha} />
      </div>
      <div className="absolute left-[819px] size-[84.5px] top-[645px]" data-name="codo superior izq">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCodoSuperiorIzq} />
      </div>
      <div className="absolute left-[819px] size-[84.5px] top-[729.5px]" data-name="codo inferiror der">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCodoInferirorDer} />
      </div>
      <div className="absolute left-[565.5px] size-[84.5px] top-[729.5px]" data-name="codo inferior izq">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCodoInferiorIzq} />
      </div>
      <div className="absolute left-[565.5px] size-[84.5px] top-[476px]" data-name="codo superior der">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCodoSuperiorDer} />
      </div>
    </div>
  );
}