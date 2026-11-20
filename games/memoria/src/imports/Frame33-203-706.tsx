import svgPaths from "./svg-hd2e7yl6dz";
import imgEasy from "figma:asset/4c8508d592d8948ff040a95a644252c1291696ba.png";

function Easy() {
  return (
    <div className="h-[104.602px] relative shrink-0 w-[113.874px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="98.826" src={imgEasy} width="96.235" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 44">
          <path d={svgPaths.p4211a80} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center mb-[-21.535px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[104.602px] relative shrink-0 w-[113.874px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="98.826" src={imgEasy} width="96.235" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 44">
          <path d={svgPaths.p4211a80} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mb-[-21.535px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[21.535px] pt-0 px-0 relative size-full">
      <Frame1 />
      <Frame />
      <Frame1 />
      <Frame />
      <Frame1 />
      <Frame />
      <Frame1 />
    </div>
  );
}