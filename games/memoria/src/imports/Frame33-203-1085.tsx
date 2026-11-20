import svgPaths from "./svg-holtjnh5u1";
import imgEasy from "figma:asset/eb2e6798929be3c8558f571cd2eb781ac24334ca.png";

function Easy() {
  return (
    <div className="h-[86.354px] relative shrink-0 w-[94.009px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.586" src={imgEasy} width="79.447" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p32a6c200} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-16.193px] relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[86.354px] relative shrink-0 w-[94.009px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.586" src={imgEasy} width="79.447" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p32a6c200} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-16.193px] relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

function Easy2() {
  return (
    <div className="h-[86.354px] relative shrink-0 w-[94.009px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.586" src={imgEasy} width="79.447" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p32a6c200} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-16.193px] relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Easy2 key={i} />
      ))}
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16.193px] pt-0 px-0 relative size-full">
      <Frame1 />
      <Frame />
      <Frame1 />
      <Frame />
      <Frame1 />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}