import svgPaths from "./svg-o1glnklbul";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function ArrowLeft() {
  return (
    <div className="absolute left-[26px] size-[24px] top-[16px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
      <ArrowLeft />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[37px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#11312c] content-stretch flex gap-[16px] h-[78px] items-start left-[calc(50%-137px)] rounded-[21px] top-[24px] translate-x-[-50%] w-[75px]" data-name="button">
      <SystemChipsItem />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Play() {
  return (
    <div className="absolute left-[26px] size-[24px] top-[15px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SystemChipsItem1() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
      <Play />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[38px] text-[#23252d] text-[12px] text-center text-nowrap top-[39px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modo
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] h-[78px] items-start left-[calc(50%+138px)] rounded-[21px] top-[24px] translate-x-[-50%] w-[75px]" data-name="button">
      <SystemChipsItem1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[24px] translate-x-[-50%]">
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+168.5px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[157px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-165.5px)] text-[#aaae68] text-[14px] text-nowrap top-[122px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+168.5px)] text-[#aaae68] text-[14px] text-nowrap text-right top-[122px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <Button />
      <Button1 />
      <div className="absolute left-[calc(50%-145px)] size-[41px] top-[148px] translate-x-[-50%]" data-name="snake 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="absolute left-[calc(50%-104px)] size-[41px] top-[148px] translate-x-[-50%]" data-name="snake 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="absolute left-[calc(50%-63px)] size-[41px] top-[148px] translate-x-[-50%]" data-name="snake 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
    </div>
  );
}

function ArrowLeft1() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Arrow left">
          <path d={svgPaths.p5baf200} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92.322px]" data-name="button">
      <ArrowLeft1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ArrowLeft2() {
  return (
    <div className="relative size-[22.842px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Arrow left">
          <path d={svgPaths.p5baf200} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <div className="flex items-center justify-center relative shrink-0 size-[22.842px]" style={{ "--transform-inner-width": "22.828125", "--transform-inner-height": "22.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ArrowLeft2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ArrowLeft3() {
  return (
    <div className="relative size-[22.842px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Arrow left">
          <path d={svgPaths.p5baf200} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <div className="flex items-center justify-center relative shrink-0 size-[22.842px]" style={{ "--transform-inner-width": "22.828125", "--transform-inner-height": "22.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <ArrowLeft3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6.662px] items-start relative shrink-0 w-[92.322px]">
      <Button3 />
      <Button4 />
    </div>
  );
}

function ArrowLeft4() {
  return (
    <div className="relative size-[22.842px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Arrow left">
          <path d={svgPaths.p5baf200} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92.322px]" data-name="button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowLeft4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[19.45px] content-stretch flex gap-[9.518px] items-center left-[calc(50%+0.5px)] translate-x-[-50%]">
      <Button2 />
      <Frame />
      <Button5 />
    </div>
  );
}

export default function Inmortal() {
  return (
    <div className="relative size-full" data-name="Inmortal">
      <Group />
      <Frame1 />
    </div>
  );
}