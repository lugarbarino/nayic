import svgPaths from "./svg-2g52z612cl";
import imgCandyDown from "figma:asset/813ac6adfbfb2fdff7cdbbfa220cf2956c085803.png";

function Group() {
  return (
    <div className="absolute h-[527.5px] left-[34px] top-[164px] w-[325px]">
      <div className="absolute inset-[0_-0.31%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 527.5">
          <g id="Group 88">
            <line id="Line 11" stroke="var(--stroke-0, #30456D)" x1="0.500041" x2="0.50001" y1="1.62052e-08" y2="527.5" />
            <line id="Line 12" stroke="var(--stroke-0, #30456D)" x1="25.5" x2="25.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 13" stroke="var(--stroke-0, #30456D)" x1="50.5" x2="50.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 14" stroke="var(--stroke-0, #30456D)" x1="75.5" x2="75.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 6" stroke="var(--stroke-0, #30456D)" x1="100.5" x2="100.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 1" stroke="var(--stroke-0, #30456D)" x1="125.5" x2="125.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 2" stroke="var(--stroke-0, #45649D)" x1="150.5" x2="150.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 5" stroke="var(--stroke-0, #689CF9)" x1="175.5" x2="175.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 4" stroke="var(--stroke-0, #689CF9)" x1="200.5" x2="200.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 15" stroke="var(--stroke-0, #45649D)" x1="225.5" x2="225.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 7" stroke="var(--stroke-0, #30456D)" x1="250.5" x2="250.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 16" stroke="var(--stroke-0, #30456D)" x1="275.5" x2="275.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 17" stroke="var(--stroke-0, #30456D)" x1="300.5" x2="300.5" y1="1.62052e-08" y2="527.5" />
            <line id="Line 3" stroke="var(--stroke-0, #30456D)" x1="325.5" x2="325.5" y1="1.62052e-08" y2="527.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8424 22.8424">
        <g id="Chevron left">
          <path d={svgPaths.p3bb2af00} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3568c3] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92px]" data-name="button">
      <ChevronLeft />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-8.566px_3.807px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8424 22.8424">
        <g id="Chevron up">
          <path d={svgPaths.p3b19b400} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3568c3] content-stretch flex h-[42px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <ChevronUp />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-8.566px_3.807px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8424 22.8424">
        <g id="Chevron down">
          <path d={svgPaths.p3d401380} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#bd3c3f] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <ChevronDown />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-8.566px_3.807px_0px_rgba(0,0,0,0.25)]" />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8424 22.8424">
        <g id="Chevron right">
          <path d={svgPaths.p2e7f8f00} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#3568c3] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92px]" data-name="button">
      <ChevronRight />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-8.566px_3.807px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[26.34px] content-stretch flex gap-[22px] items-center justify-center left-[calc(50%-0.34px)]">
      <Button />
      <Frame />
      <Button3 />
    </div>
  );
}

function PauseCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Pause circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pause circle">
          <path d={svgPaths.p38707400} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#0076e0] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0">
      <PauseCircle />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pausar
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function KeyboardReturn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_return">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_return">
          <path d={svgPaths.p12852cc0} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#fffcff] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0">
      <KeyboardReturn />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reiniciar
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function CandyDown() {
  return (
    <div className="h-[58.594px] relative shrink-0 w-[75px]" data-name="candy_down">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCandyDown} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[13px] items-start relative shrink-0">
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#8eb0cf] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        SIGUIENTE:
      </p>
      <CandyDown />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold gap-[6px] items-end leading-[22px] relative shrink-0 text-right w-[61px]">
      <p className="css-4hzbpn relative shrink-0 text-[#8eb0cf] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <p className="css-4hzbpn relative shrink-0 text-[#f3f3f4] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-center left-[28px] top-[31px] w-[338px]">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

export default function Moible() {
  return (
    <div className="relative size-full" data-name="Moible" style={{ backgroundImage: "linear-gradient(178.545deg, rgb(21, 31, 51) 0.549%, rgb(27, 38, 58) 99.451%)" }}>
      <Group />
      <Frame1 />
      <Frame8 />
    </div>
  );
}