import svgPaths from "./svg-dzfnnlp9op";
import imgEasy from "figma:asset/29c8dba2bb8f28fbcbf5b7ca3b5d43c1678f5a50.png";

function Easy() {
  return (
    <div className="h-[103.387px] relative shrink-0 w-[112.552px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="97.678" src={imgEasy} width="95.118" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 44">
          <path d={svgPaths.p3aa93d00} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center mb-[-21.285px] relative shrink-0">
      <Easy />
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[103.387px] relative shrink-0 w-[112.552px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="97.678" src={imgEasy} width="95.118" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 44">
          <path d={svgPaths.p3aa93d00} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center mb-[-21.285px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

function Easy2() {
  return (
    <div className="h-[103.387px] relative shrink-0 w-[112.552px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="97.678" src={imgEasy} width="95.118" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 44">
          <path d={svgPaths.p3aa93d00} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mb-[-21.285px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy2 key={i} />
      ))}
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[21.285px] pt-0 px-0 relative size-full">
      <Frame1 />
      <Frame2 />
      <Frame />
      <Frame2 />
      <Frame />
      <Frame2 />
      <Frame />
    </div>
  );
}