import svgPaths from "./svg-9d8g8ww63a";
import imgRectangle28 from "figma:asset/7ab9cee1b0dbd80a012990d467fea2289db19b37.png";

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

function Frame1() {
  return (
    <div className="bg-[#2c3455] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0">
      <ArrowLeft />
      <p className="css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Personaje() {
  return (
    <div className="h-[119px] overflow-clip relative shrink-0 w-[127.665px]" data-name="personaje_1">
      <div className="absolute h-[103.727px] left-[calc(50%-0.33px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[110.091px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[255.22%] left-[-134.91%] max-w-none top-[-77.61%] w-[240.47%]" src={imgRectangle28} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[91px] items-center relative shrink-0">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#e5e1e1] text-[14px] w-[71.879px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Turno de:
      </p>
      <Personaje />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[114px] items-center left-[27px] top-[82px] w-[376px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute gap-[13.632135391235352px] grid-cols-[repeat(3,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid left-[calc(50%+0.13px)] top-[calc(50%-0.37px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-[#1a1e31] col-[1] h-[156px] rounded-[17.04px] row-[1] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[2] h-[156px] rounded-[17.04px] row-[1] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[3] h-[156px] rounded-[17.04px] row-[1] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[1] h-[156px] rounded-[17.04px] row-[2] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[2] h-[156px] rounded-[17.04px] row-[2] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[3] h-[156px] rounded-[17.04px] row-[2] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[1] h-[156px] rounded-[17.04px] row-[3] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[2] h-[156px] rounded-[17.04px] row-[3] shrink-0 w-[125px]" />
      <div className="bg-[#1a1e31] col-[3] h-[156px] rounded-[17.04px] row-[3] shrink-0 w-[125px]" />
    </div>
  );
}

export default function Start() {
  return (
    <div className="relative size-full" data-name="start" style={{ backgroundImage: "linear-gradient(105.242deg, rgb(12, 14, 23) 0%, rgb(65, 76, 125) 115.08%)" }}>
      <Frame3 />
      <Frame />
    </div>
  );
}