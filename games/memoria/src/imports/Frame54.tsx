import svgPaths from "./svg-y64723rrqm";
import imgRectangle2 from "figma:asset/704e8cde9072e44031be2e4179bb98d92d9a6814.png";
import imgRectangle3 from "figma:asset/ee07da22dbb594c480d385bbab277ee5f9b3e78d.png";
import { imgRectangle, imgRectangle1 } from "./svg-8021o";

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[102.455px] mask-position-[-0.321px,_-0.001px_-0.416px,_0.25px] mask-size-[227.233px_103.288px,_226.593px_101.955px] ml-0 mt-0 relative w-[226.592px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
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
      <div className="[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[102.455px] mask-position-[-0.321px,_-0.001px_-0.416px,_0.25px] mask-size-[227.233px_103.288px,_226.593px_101.955px] ml-0 mt-0 relative w-[226.592px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[0.14%] mt-[0.65%] place-items-start relative" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Settings() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_84_72)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #FFFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #FFFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_84_72">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] bg-[#9952a3] box-border content-stretch flex flex-col items-center justify-center ml-0 mt-0 pb-[27px] pt-[25px] px-[25px] relative rounded-[30px] size-[75px]">
      <Settings />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Settings
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[148px] items-start justify-end leading-[0] relative size-full">
      <ClipPathGroup1 />
      <Group7 />
    </div>
  );
}