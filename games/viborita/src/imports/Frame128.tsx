import svgPaths from "./svg-5dz7v94b3c";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#11312c] text-[16px] text-center tracking-[-0.32px] w-[82px]">
        <p className="css-4hzbpn leading-[1.2]">{`Hecho con `}</p>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="snake 1">
        <img alt="love" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#11312c] text-[16px] text-center tracking-[-0.32px] w-[31px]">
        <p className="css-4hzbpn leading-[1.2]">por</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[23.112px] ml-0 mt-0 relative row-1 w-[87px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.0001 23.1116">
        <g id="Group 2">
          <path d={svgPaths.p21c72f80} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p15fe8f00} fill="var(--fill-0, #11312C)" id="Vector_2" />
          <path d={svgPaths.p3fec5bf2} fill="var(--fill-0, #11312C)" id="Vector_3" />
          <path d={svgPaths.p3f01ab00} fill="var(--fill-0, #11312C)" id="Vector_4" />
          <path d={svgPaths.p3737b600} fill="var(--fill-0, #11312C)" id="Vector_5" />
          <path d={svgPaths.p10d4f700} fill="var(--fill-0, #11312C)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <Frame />
      <Group1 />
    </div>
  );
}