import svgPaths from "./svg-7tdpahpq5v";
import imgRectangle21 from "figma:asset/7eb97dea21773c4999f1239a59536a64b48ced7f.png";
import imgRectangle2 from "figma:asset/704e8cde9072e44031be2e4179bb98d92d9a6814.png";
import imgRectangle3 from "figma:asset/ee07da22dbb594c480d385bbab277ee5f9b3e78d.png";
import { imgRectangle, imgRectangle1 } from "./svg-08ayv";

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[235px]">
      <p className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#23252d] text-[20px] w-[235px]">Si te gustó,compartilo</p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-w-full relative shrink-0 text-[#84858d] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enviá este juego a tus amigos
      </p>
    </div>
  );
}

function Share() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g id="Share">
          <path d={svgPaths.p2612cc80} id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#d2d3d7] content-stretch flex flex-col items-center justify-center p-[25px] relative rounded-[26px] shrink-0 size-[63px]">
      <Share />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#f3f3f4] content-stretch flex gap-[99px] items-center left-[697px] px-[24px] py-[12px] rounded-[40px] top-[629px] w-[431px]">
      <Frame10 />
      <Frame />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[256px] top-[462px]">
      <div className="absolute h-[398px] left-[256px] top-[462px] w-[581px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110.77%] left-[4.63%] max-w-none top-[-0.86%] w-[90.42%]" src={imgRectangle21} />
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[102.455px] mask-position-[-0.319px,_0.001px_-0.416px,_0.25px] mask-size-[227.233px_103.288px,_226.593px_101.955px] ml-0 mt-0 relative w-[226.592px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] [mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] h-[102.455px] mask-position-[-0.319px,_0px_-0.416px,_0.25px] mask-size-[227.233px_103.288px,_226.593px_101.955px] ml-0 mt-0 relative w-[226.592px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group4 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <Group3 />
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[-0.25%] place-items-start relative" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.14%] mt-[0.65%] place-items-start relative" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute left-[25.62px] size-[24px] top-[15.5px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_268_276)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #FFFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #FFFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_268_276">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[37px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ajustes
      </p>
      <Settings />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0" data-name="button">
      <SystemChipsItem />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[148px] items-start justify-end relative shrink-0">
      <ClipPathGroup1 />
      <Button />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[103px] items-end left-[calc(50%+0.12px)] top-[calc(50%-395px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame15 />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #5EA585)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.p24246540} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #5EA585)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.p2f16ad80} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #5EA585)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div className="[grid-area:1_/_1] ml-[20.69px] mt-[21px] relative size-[24px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d="M20 6L9 17L4 12" id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group9 />
      <Check />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group31 />
      <Group32 />
      <Group33 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #F3F3F4)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group10 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[15.2px] ml-[31px] mt-[33.5px] relative text-[#1b0e1c] text-[#2a1a2c] text-[0px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0 text-[27px]">4</p>
        <p className="text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          JUGAR
        </p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group11 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">5</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[11px] items-center leading-[0] mb-[-10px] relative shrink-0">
      <Group35 />
      <Group36 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group12 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">6</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group13 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">7</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group14 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">8</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group37 />
      <Group38 />
      <Group39 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-[215.463px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#2a1a2c] content-stretch flex flex-col gap-[17px] items-center p-[20px] relative rounded-[20px] shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border-4 border-[#9952a3] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[#f3f3f4] text-[16px] text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fácil
      </p>
      <Frame7 />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[#f3f3f4] text-[0px] text-[16px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total:
        </span>{" "}
        <span className="font-['SF_Pro:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>{`8237 `}</span>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          / 129030
        </span>
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center px-0 py-[10px] relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #6F83DB)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.p24246540} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group15 />
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group16 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">2</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group17 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">3</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group34 />
      <Group40 />
      <Group41 />
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group18 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">4</p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group19 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">5</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[11px] items-center leading-[0] mb-[-10px] relative shrink-0">
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group20 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">6</p>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p620d480} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group21 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">7</p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group22 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">8</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group44 />
      <Group45 />
      <Group46 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-[215.463px]">
      <Frame13 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#2a1a2c] content-stretch flex flex-col gap-[17px] items-center p-[20px] relative rounded-[20px] shrink-0 w-[280px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[#f3f3f4] text-[16px] text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medio
      </p>
      <Frame18 />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[#f3f3f4] text-[0px] text-[16px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total:
        </span>{" "}
        <span className="font-['SF_Pro:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>{`8237 `}</span>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          / 129030
        </span>
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center px-0 py-[10px] relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Group23() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #A967BD)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.pa5b980} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group23 />
    </div>
  );
}

function Group24() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p32e2f680} fill="var(--fill-0, #A967BD)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.p2f16ad80} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group24 />
    </div>
  );
}

function Group25() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group25 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">3</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group47 />
      <Group48 />
      <Group49 />
    </div>
  );
}

function Group26() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group26 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">4</p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group27 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">5</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[11px] items-center leading-[0] mb-[-10px] relative shrink-0">
      <Group50 />
      <Group51 />
    </div>
  );
}

function Group28() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group28 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">6</p>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group29 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">7</p>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #4B294F)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group30 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[#f3f3f4] text-[27px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">8</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group52 />
      <Group54 />
      <Group55 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-[215.463px]">
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#2a1a2c] content-stretch flex flex-col gap-[17px] items-center p-[20px] relative rounded-[20px] shrink-0 w-[280px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[#f3f3f4] text-[16px] text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Difícil
      </p>
      <Frame23 />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[#f3f3f4] text-[0px] text-[16px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total:
        </span>{" "}
        <span className="font-['SF_Pro:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>{`8237 `}</span>
        <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          / 129030
        </span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center px-0 py-[10px] relative shrink-0">
      <Frame24 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame12 />
      <Frame19 />
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 px-[20px] py-0 top-[calc(50%-133px)] translate-x-[-50%] translate-y-[-50%] w-[892px]">
      <p className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f3f3f4] text-[20px] text-center w-[872px]">Niveles</p>
      <Frame8 />
    </div>
  );
}

export default function DHome() {
  return (
    <div className="bg-gradient-to-b from-[#1a0e1b] relative size-full to-[#4d2951]" data-name="d_home">
      <Group53 />
      <Frame14 />
      <Frame9 />
    </div>
  );
}