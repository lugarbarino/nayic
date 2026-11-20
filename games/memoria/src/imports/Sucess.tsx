import svgPaths from "./svg-iw0hqtljt6";
import img61 from "figma:asset/d9ce681e04236e6b84ab3c315d31775f6a82456b.png";
import img1290 from "figma:asset/58f8be9dc479ca431859592bcdb0cbce044045c6.png";
import img22 from "figma:asset/ca96a3074c164d9036d7b420bf0e513dec1a5ce2.png";
import img17 from "figma:asset/8af0565be2af0ab9aed4e7000ae9cb8760cba576.png";
import img1 from "figma:asset/41c21cef901c02aea2ead08edd5a613864d0c6ea.png";

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Refresh cw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Refresh cw">
          <path d={svgPaths.p2ca87680} id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#e4e4e4] h-[75px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[75px] items-center justify-center p-[25px] relative w-full">
          <RefreshCw />
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[22px] relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Reintentar
          </p>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow right">
          <path d={svgPaths.p39396800} id="Icon" stroke="var(--stroke-0, #E9E9E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#23252d] box-border content-stretch flex gap-[24px] h-[75px] items-center justify-center p-[25px] relative rounded-[30px] shrink-0 w-[271px]">
      <ArrowRight />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[31px] relative shrink-0 text-[#ededed] text-[24px] w-[161px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Siguiente nivel
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[280px]">
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[64px] leading-[32px] relative shrink-0 text-[36px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nivel completado
      </p>
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] min-w-full relative shrink-0 text-[#343434] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS:
      </p>
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[64px] leading-[62px] relative shrink-0 text-[56px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1289
      </p>
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[22px] min-w-full relative shrink-0 text-[#343434] text-[20px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Puntaje máximo:3000
      </p>
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[574px] relative rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[574px] items-center px-[29px] py-[32px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d="M18 6L6 18M6 6L18 18" id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#4b294f] box-border content-stretch flex flex-col items-center justify-center pb-[27px] pt-[25px] px-[25px] relative rounded-[30px] shrink-0 size-[75px]">
      <X />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-center left-1/2 top-[calc(50%+31.5px)] translate-x-[-50%] translate-y-[-50%] w-[346px]">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

export default function Sucess() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter bg-[rgba(33,19,34,0.51)] relative size-full" data-name="sucess">
      <Frame5 />
      <div className="absolute h-[181px] left-[calc(50%+176.5px)] top-[calc(50%-255.5px)] translate-x-[-50%] translate-y-[-50%] w-[203px]" data-name="6 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img61} />
      </div>
      <div className="absolute h-[125px] left-[calc(50%-231px)] top-[calc(50%-307.5px)] translate-x-[-50%] translate-y-[-50%] w-[116px]" data-name="12 90">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1290} />
      </div>
      <div className="absolute h-[156px] left-[calc(50%+161px)] top-[calc(50%+239px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" data-name="22">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img22} />
      </div>
      <div className="absolute h-[93px] left-[calc(50%-207px)] top-[calc(50%+121.5px)] translate-x-[-50%] translate-y-[-50%] w-[164px]" data-name="17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img17} />
      </div>
      <div className="absolute h-[258px] left-[calc(50%+199.5px)] top-[calc(50%+17px)] translate-x-[-50%] translate-y-[-50%] w-[197px]" data-name="1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[258px] left-[calc(50%-242.5px)] top-[calc(50%-103px)] translate-x-[-50%] translate-y-[-50%] w-[197px]" data-name="23">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}