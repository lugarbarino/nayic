import svgPaths from "./svg-txnoyq2n4z";
import imgRectangle2 from "figma:asset/704e8cde9072e44031be2e4179bb98d92d9a6814.png";
import imgRectangle3 from "figma:asset/ee07da22dbb594c480d385bbab277ee5f9b3e78d.png";
import imgRectangle22 from "figma:asset/c83d5fad1360f46c116668bf222a30bce233226e.png";
import { imgRectangle, imgRectangle1 } from "./svg-w1akc";

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
    <div className="bg-[#4b294f] box-border content-stretch flex flex-col items-center justify-center pb-[27px] pt-[25px] px-[25px] relative rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] shrink-0 size-[75px]">
      <ArrowLeft />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[124.878px] mask-position-[-24.982px,_0.001px_-0.269px,_0.305px] mask-size-[341.976px_136px,_292.525px_124.268px] ml-0 mt-0 relative w-[292.524px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[124.878px] mask-position-[-24.983px,_0.001px_-0.269px,_0.305px] mask-size-[341.976px_136px,_292.525px_124.268px] ml-0 mt-0 relative w-[292.524px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <Group2 />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[-0.25%] place-items-start relative" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[7.31%] mt-[0.42%] place-items-start relative" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mb-[-68px] place-items-start relative shrink-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col h-[228px] items-center justify-center leading-[0] pb-[68px] pt-0 px-0 relative shrink-0 w-full">
      <ClipPathGroup1 />
      <div className="basis-0 flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold grow justify-center mb-[-68px] min-h-px min-w-px relative shrink-0 text-[#f3f3f4] text-[20px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Configuración</p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #9952A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modo
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contrareloj
      </p>
      <ChevronRight />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #9952A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tema
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mounstruos
      </p>
      <ChevronRight1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-[336px]">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[calc(50%-129px)] translate-x-[-50%] translate-y-[-50%] w-[355px]">
      <Frame2 />
      <Frame7 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-1/2 p-[10px] top-[calc(50%+279px)] translate-x-[-50%] translate-y-[-50%] w-[285px]">
      <div className="h-[232px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle22} />
      </div>
    </div>
  );
}

export default function Configuracion() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter bg-gradient-to-b from-[#1b0f1c] relative size-full to-[#4c2950]" data-name="Configuración">
      <Frame5 />
      <Frame6 />
    </div>
  );
}