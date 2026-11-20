import svgPaths from "./svg-acdyai6iac";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[81px] translate-x-[-50%]">
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+166.5px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[109px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-165.5px)] text-[#aaae68] text-[14px] text-nowrap top-[81px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+166.5px)] text-[#aaae68] text-[14px] text-nowrap text-right top-[81px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <div className="absolute left-[calc(50%-145px)] size-[41px] top-[103px] translate-x-[-50%]" data-name="snake 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="absolute left-[calc(50%-104px)] size-[41px] top-[103px] translate-x-[-50%]" data-name="snake 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="absolute left-[calc(50%-63px)] size-[41px] top-[103px] translate-x-[-50%]" data-name="snake 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron left">
          <path d={svgPaths.p3bb2af00} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0e302b] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92px]" data-name="button">
      <ChevronLeft />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron up">
          <path d={svgPaths.p3b19b400} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0e302b] content-stretch flex h-[42px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <ChevronUp />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron down">
          <path d={svgPaths.p3d401380} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0e302b] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <ChevronDown />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[17.66px] items-start relative shrink-0 w-[92.322px]">
      <Button1 />
      <Button2 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron right">
          <path d={svgPaths.p2e7f8f00} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0e302b] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92px]" data-name="button">
      <ChevronRight />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[21.34px] content-stretch flex gap-[22px] items-center justify-center left-[calc(50%+0.66px)] translate-x-[-50%]">
      <Button />
      <Frame />
      <Button3 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#11312c] content-stretch flex gap-[4px] items-start left-[29px] p-[8px] rounded-[12px] top-[25px]">
      <ArrowLeft />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-start left-[288px] p-[8px] rounded-[12px] top-[25px]">
      <Play />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modo
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}

export default function Inmortal() {
  return (
    <div className="relative size-full" data-name="Inmortal">
      <Group />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}