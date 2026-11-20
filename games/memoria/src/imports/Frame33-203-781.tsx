import svgPaths from "./svg-ba0vbuo2us";
import imgEasy from "figma:asset/a87996246b822db01771f66bbf71589c7c756780.png";
import imgEasy1 from "figma:asset/00f98cf7e49c4229795fe3c978c38097c338f3d6.png";

function Easy() {
  return (
    <div className="h-[89.234px] relative shrink-0 w-[97.144px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="84.307" src={imgEasy} width="82.097" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 38">
          <path d={svgPaths.p31e1e300} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mb-[-18.371px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[89.234px] relative shrink-0 w-[97.144px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="84.307" src={imgEasy} width="82.097" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 38">
          <path d={svgPaths.p31e1e300} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center mb-[-18.371px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

function Easy2() {
  return (
    <div className="h-[89.234px] relative shrink-0 w-[97.144px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="84.307" src={imgEasy} width="82.097" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 38">
          <path d={svgPaths.p31e1e300} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Easy3() {
  return (
    <div className="h-[90px] relative shrink-0 w-[97px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.05%] left-[-11.4%] max-w-none top-[-15.18%] w-[115.79%]" src={imgEasy1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center mb-[-18.371px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy2 key={i} />
      ))}
      <Easy3 />
    </div>
  );
}

function Easy4() {
  return (
    <div className="h-[89.234px] relative shrink-0 w-[97.144px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="84.307" src={imgEasy} width="82.097" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 38">
          <path d={svgPaths.p31e1e300} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Easy5() {
  return (
    <div className="h-[90px] relative shrink-0 w-[97px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.05%] left-[-11.4%] max-w-none top-[-15.18%] w-[115.79%]" src={imgEasy1} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center mb-[-18.371px] relative shrink-0">
      <Easy4 />
      <Easy5 />
      <Easy4 />
      <Easy4 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[18.371px] pt-0 px-0 relative size-full">
      <Frame />
      <Frame2 />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}