import svgPaths from "./svg-ljrg0ns0rz";
import imgCandyDown from "figma:asset/813ac6adfbfb2fdff7cdbbfa220cf2956c085803.png";
import imgCandyDown1 from "figma:asset/408029699db8e819e53a30689d552b2d22aae5fa.png";
import imgCandyDown2 from "figma:asset/c3471553bf49bae088b4a124f9911f0a5c82a2b1.png";
import imgLineHorizontal1 from "figma:asset/f9d2092aef58743d55f7d3a4124aa03901501e4f.png";
import imgFluffySquare1 from "figma:asset/b155266cedf46e38bf11af20257f7570dfc9e6b3.png";
import imgRock11 from "figma:asset/b710137818f0c0082d3652afb66607285e18f361.png";

function Frame2() {
  return (
    <div className="absolute h-[874px] left-[406px] top-[28px] w-[416.001px]">
      <div className="absolute inset-[0_-0.24%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 417.001 874">
          <g id="Frame 88">
            <line id="Line 11" stroke="var(--stroke-0, #30456D)" x1="0.500041" x2="0.5" y1="2.05176e-08" y2="874" />
            <line id="Line 12" stroke="var(--stroke-0, #30456D)" x1="32.5" x2="32.5" y1="2.05176e-08" y2="874" />
            <line id="Line 13" stroke="var(--stroke-0, #30456D)" x1="64.5" x2="64.5" y1="2.05176e-08" y2="874" />
            <line id="Line 14" stroke="var(--stroke-0, #30456D)" x1="96.5" x2="96.5" y1="2.05176e-08" y2="874" />
            <line id="Line 6" stroke="var(--stroke-0, #30456D)" x1="128.5" x2="128.5" y1="2.05176e-08" y2="874" />
            <line id="Line 1" stroke="var(--stroke-0, #30456D)" x1="160.5" x2="160.5" y1="2.05176e-08" y2="874" />
            <line id="Line 2" stroke="var(--stroke-0, #45649D)" x1="192.5" x2="192.5" y1="2.05176e-08" y2="874" />
            <line id="Line 5" stroke="var(--stroke-0, #689CF9)" x1="224.5" x2="224.5" y1="2.05176e-08" y2="874" />
            <line id="Line 4" stroke="var(--stroke-0, #689CF9)" x1="256.5" x2="256.5" y1="2.05176e-08" y2="874" />
            <line id="Line 15" stroke="var(--stroke-0, #45649D)" x1="288.5" x2="288.5" y1="2.05176e-08" y2="874" />
            <line id="Line 7" stroke="var(--stroke-0, #30456D)" x1="320.5" x2="320.5" y1="2.05176e-08" y2="874" />
            <line id="Line 16" stroke="var(--stroke-0, #30456D)" x1="352.5" x2="352.5" y1="2.05176e-08" y2="874" />
            <line id="Line 17" stroke="var(--stroke-0, #30456D)" x1="384.5" x2="384.5" y1="2.05176e-08" y2="874" />
            <line id="Line 3" stroke="var(--stroke-0, #30456D)" x1="416.501" x2="416.5" y1="2.05176e-08" y2="874" />
          </g>
        </svg>
      </div>
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

function Frame() {
  return (
    <div className="bg-[#0076e0] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0">
      <PauseCircle />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pausar (P)
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

function Frame1() {
  return (
    <div className="bg-[#fffcff] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0">
      <KeyboardReturn />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reiniciar (R)
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function CandyDown() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="candy_down">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCandyDown} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[100px]">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#8eb0cf] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SIGUIENTE:
      </p>
      <CandyDown />
    </div>
  );
}

function Frame4() {
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

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[332px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[20px_111px] items-start left-[29px] top-[28px] w-[338px]">
      <Frame />
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function CandyDown1() {
  return (
    <div className="absolute h-[75px] left-[406px] top-[827px] w-[96px]" data-name="candy_down">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCandyDown1} />
    </div>
  );
}

function CandyDown2() {
  return (
    <div className="absolute h-[99px] left-[467px] top-[801px] w-[70px]" data-name="candy_down">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.68%] left-0 max-w-none top-[0.16%] w-full" src={imgCandyDown2} />
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="desktop" style={{ backgroundImage: "linear-gradient(142.81deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Frame2 />
      <Frame6 />
      <div className="absolute h-[38px] left-[535px] top-[864px] w-[128px]" data-name="line horizontal 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLineHorizontal1} />
      </div>
      <div className="absolute h-[67px] left-[438px] top-[765px] w-[64px]" data-name="fluffy square 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFluffySquare1} />
      </div>
      <div className="absolute h-[38px] left-[630px] top-[560px] w-[32px]" data-name="rock 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRock11} />
      </div>
      <CandyDown1 />
      <CandyDown2 />
    </div>
  );
}