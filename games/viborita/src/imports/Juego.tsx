import svgPaths from "./svg-mpjnmandlm";
import imgCara from "figma:asset/da2ee78910f3b955c2059080c62a9626deb6448b.png";
import imgPattern1 from "figma:asset/c8e6b3340fcd55c0110b376143a72e14cbfc468a.png";
import imgPattern3 from "figma:asset/e16c40eeda37bc5be12dfd76672cf60e737dc0b2.png";
import imgCola from "figma:asset/f989c40a95684a1a6de42026c00069a88a89fa9d.png";
import imgBola3 from "figma:asset/5e66b8b62866724b7e018c4f9eda969e0d804e47.png";
import imgBlola2 from "figma:asset/2194cc6a5f401bccd55512ebebff2f4ccc01a11b.png";
import imgBola1 from "figma:asset/eaea606bf9f2d290603e03ece9d39c728eaef0bf.png";
import imgVida from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[94.1px]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "94.09375", "--transform-inner-height": "94.09375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%] w-full">
          <div className="aspect-[1438/1438] relative size-full" data-name="cara">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCara} />
          </div>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "94.09375", "--transform-inner-height": "94.09375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%] w-full">
          <div className="aspect-[1438/1438] relative size-full" data-name="pattern 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern1} />
          </div>
        </div>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "94.09375", "--transform-inner-height": "94.09375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <div className="relative size-[94.1px]" data-name="pattern 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPattern3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Vibora() {
  return (
    <div className="content-stretch flex items-center relative" data-name="vibora">
      <div className="relative shrink-0 size-[94.1px]" data-name="cola">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCola} />
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "94.09375", "--transform-inner-height": "282.28125" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function Juego() {
  return (
    <div className="bg-gradient-to-b from-[#094138] relative size-full to-[#66918e]" data-name="Juego">
      <Frame />
      <Frame1 />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#f3f3f4] text-[32px] text-nowrap top-[158px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
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
      <div className="absolute left-[821px] size-[109px] top-[498px]" data-name="bola 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBola3} />
      </div>
      <div className="absolute left-[289px] size-[109px] top-[836px]" data-name="blola 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlola2} />
      </div>
      <div className="absolute left-[141px] size-[109px] top-[247px]" data-name="Bola 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBola1} />
      </div>
      <div className="absolute h-[95px] left-[1287px] top-[254px] w-[94px]" data-name="Vida">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVida} />
      </div>
      <div className="absolute flex items-center justify-center left-[181px] top-[491px]">
        <div className="flex-none scale-y-[-100%]">
          <Vibora />
        </div>
      </div>
    </div>
  );
}