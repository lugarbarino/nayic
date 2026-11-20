import svgPaths from "./svg-99j7gfamgd";
import imgMonsters1 from "figma:asset/8aa09bab25e3bf52f605130e7d54761d1ea21de8.png";

function Share() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Share">
          <path d={svgPaths.p2ab1ab80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#23252d] box-border content-stretch flex flex-col items-center justify-center left-[calc(50%+120px)] pb-[27px] pt-[25px] px-[25px] rounded-[26px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[63px] top-[calc(50%-121.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Share />
    </div>
  );
}

function Settings() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_34_253)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_34_253">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-[calc(50%+145px)] pb-[27px] pt-[25px] px-[25px] rounded-[30px] size-[75px] top-[calc(50%-374.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Settings />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Settings
      </p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[calc(50%-243.5px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute bg-gradient-to-b from-[#8555a8] h-[248px] left-[calc(50%-1.5px)] rounded-[40px] to-[#f2f2f2] top-[calc(50%-185px)] translate-x-[-50%] translate-y-[-50%] w-[364px]" />
      <div className="absolute h-[270px] left-[calc(50%-13.5px)] top-[calc(50%-291px)] translate-x-[-50%] translate-y-[-50%] w-[328px]" data-name="Monsters 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.26%] left-[-20.29%] max-w-none top-[-20.68%] w-[129.12%]" src={imgMonsters1} />
        </div>
      </div>
      <div className="absolute bg-white h-[75px] left-[calc(50%-1px)] rounded-[30px] shadow-[0px_4px_34px_6px_rgba(184,184,184,0.25)] top-[calc(50%-121.5px)] translate-x-[-50%] translate-y-[-50%] w-[321px]" />
      <Frame />
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-89px)] text-[#23252d] text-[21px] text-center text-nowrap top-[calc(50%-143px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Compartí!
      </p>
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-140.5px)] text-[#84858d] text-[14px] top-[calc(50%-117px)] w-[207px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enviale este juego a tus amigos
      </p>
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #5EA585)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.pa5b980} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p32e2f680} fill="var(--fill-0, #5EA585)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.p2f16ad80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #5EA585)" id="Star 22" />
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
          <path d="M20 6L9 17L4 12" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group2 />
      <Check />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group24 />
      <Group25 />
      <Group26 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p23152d00} fill="var(--fill-0, white)" id="Star 22" stroke="var(--stroke-0, #5EA585)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group3 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[15.2px] ml-[31px] mt-[33.5px] relative text-[#5ea585] text-[0px] text-center translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0 text-[20px]">4</p>
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          JUGAR
        </p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group4 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">5</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[11px] items-center leading-[0] mb-[-10px] relative shrink-0">
      <Group28 />
      <Group29 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group5 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">6</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group6 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">7</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group7 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">8</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group30 />
      <Group31 />
      <Group32 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-[215.463px]">
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[17px] items-center p-[20px] relative rounded-[20px] shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border-[#5ea585] border-[5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[20px] text-black text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fácil
      </p>
      <Frame8 />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[0px] text-[20px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #6F83DB)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.pa5b980} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group27() {
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
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group9 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">2</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group10 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">3</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group27 />
      <Group34 />
      <Group35 />
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group11 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">4</p>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group12 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">5</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[11px] items-center leading-[0] mb-[-10px] relative shrink-0">
      <Group36 />
      <Group37 />
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group13 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">6</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group14 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">7</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group15 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">8</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group38 />
      <Group39 />
      <Group40 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-[215.463px]">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[17px] items-center p-[20px] relative rounded-[20px] shrink-0 w-[280px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[20px] text-black text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medio
      </p>
      <Frame14 />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[0px] text-[20px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #A967BD)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.pa5b980} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p32e2f680} fill="var(--fill-0, #A967BD)" id="Star 22" />
          <g id="Check">
            <path d={svgPaths.p2f16ad80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group17 />
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group18 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">3</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group41 />
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group19 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">4</p>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group20 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">5</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex gap-[11px] items-center leading-[0] mb-[-10px] relative shrink-0">
      <Group44 />
      <Group45 />
    </div>
  );
}

function Group21() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group21 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">6</p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group22 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">7</p>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="[grid-area:1_/_1] h-[66.908px] ml-0 mt-0 relative w-[65.154px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 67">
        <g id="Group 1">
          <path d={svgPaths.p9e22700} fill="var(--fill-0, #C5C7CF)" id="Star 22" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group23 />
      <div className="[grid-area:1_/_1] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[39px] justify-center leading-[0] ml-[31px] mt-[33.5px] relative text-[20px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.2px]">8</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center leading-[0] mb-[-10px] relative shrink-0 w-full">
      <Group46 />
      <Group47 />
      <Group48 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-[215.463px]">
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[17px] items-center p-[20px] relative rounded-[20px] shrink-0 w-[280px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[20px] text-black text-center uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Difícil
      </p>
      <Frame19 />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[0px] text-[20px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <Frame20 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-center left-[14px] top-[443px] w-[379px]">
      <Frame10 />
      <Frame15 />
      <Frame4 />
    </div>
  );
}

export default function Frame21() {
  return (
    <div className="bg-[#f4f4f4] relative size-full">
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[50.5px] text-[#23252d] text-[14px] text-center text-nowrap top-[411px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        NIVELES
      </p>
      <Group33 />
      <Frame9 />
    </div>
  );
}