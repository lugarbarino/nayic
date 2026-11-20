import svgPaths from "./svg-mr9pn8979e";
import imgRectangle28 from "figma:asset/7ab9cee1b0dbd80a012990d467fea2289db19b37.png";

function Frame() {
  return (
    <div className="absolute gap-[16px] grid-cols-[repeat(3,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] inline-grid left-1/2 top-[calc(50%-25px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-[#1a1e31] col-[1] rounded-[20px] row-[1] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[2] rounded-[20px] row-[1] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[3] rounded-[20px] row-[1] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[1] rounded-[20px] row-[2] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[2] rounded-[20px] row-[2] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[3] rounded-[20px] row-[2] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[1] rounded-[20px] row-[3] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[2] rounded-[20px] row-[3] shrink-0 size-[147px]" />
      <div className="bg-[#1a1e31] col-[3] rounded-[20px] row-[3] shrink-0 size-[147px]" />
    </div>
  );
}

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
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center top-[37px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2c3455] content-stretch flex h-[78px] items-start left-[calc(50%-196.27px)] rounded-[21px] top-[calc(50%-386.5px)] translate-x-[-50%] translate-y-[-50%] w-[80.461px]" data-name="button">
      <SystemChipsItem />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Personaje() {
  return (
    <div className="absolute h-[119px] left-[calc(50%+172.67px)] overflow-clip top-[calc(50%-381px)] translate-x-[-50%] translate-y-[-50%] w-[127.665px]" data-name="personaje_1">
      <div className="absolute h-[103.727px] left-[calc(50%-0.33px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[110.091px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[255.22%] left-[-134.91%] max-w-none top-[-77.61%] w-[240.47%]" src={imgRectangle28} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%-381px)] translate-x-[-50%] translate-y-[-50%]">
      <p className="absolute css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+25.16px)] text-[#e5e1e1] text-[14px] top-[calc(50%-397.5px)] w-[71.879px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Turno de:
      </p>
      <Button />
      <Personaje />
    </div>
  );
}

export default function Tateti() {
  return (
    <div className="relative size-full" data-name="tateti" style={{ backgroundImage: "linear-gradient(122.146deg, rgb(10, 13, 22) 0.70322%, rgb(58, 68, 111) 89.545%)" }}>
      <Frame />
      <Group />
    </div>
  );
}