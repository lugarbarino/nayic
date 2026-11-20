import svgPaths from "./svg-jgru1kj2yk";
import imgEasy from "figma:asset/4617253c8bd30857cf1c7f87e5afa9ed83962ff5.png";
import imgEasy1 from "figma:asset/a4d058bc4bbb7f4a6e80ba72521412f31bf34035.png";
import imgEasy2 from "figma:asset/a87996246b822db01771f66bbf71589c7c756780.png";
import imgEasy3 from "figma:asset/00f98cf7e49c4229795fe3c978c38097c338f3d6.png";

function Easy() {
  return (
    <div className="h-[86.386px] relative shrink-0 w-[94.044px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.616" src={imgEasy} width="79.477" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p22bdfc00} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center mb-[-17.785px] relative shrink-0">
      <Easy />
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[86.386px] relative shrink-0 w-[94.044px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.616" src={imgEasy} width="79.477" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p22bdfc00} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center mb-[-17.785px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

function Easy2() {
  return (
    <div className="h-[86.386px] relative shrink-0 w-[94.044px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.616" src={imgEasy} width="79.477" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p22bdfc00} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center mb-[-17.785px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy2 key={i} />
      ))}
    </div>
  );
}

function Easy3() {
  return (
    <div className="h-[90px] relative shrink-0 w-[97px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.1%] left-[-9.75%] max-w-none top-[-14.74%] w-[119.51%]" src={imgEasy1} />
      </div>
    </div>
  );
}

function Easy4() {
  return (
    <div className="h-[89.234px] relative shrink-0 w-[97.144px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="84.307" src={imgEasy2} width="82.097" />
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
    <div className="content-stretch flex items-center relative shrink-0">
      <Easy3 />
      <Easy4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center mb-[-17.785px] relative shrink-0">
      <Frame />
    </div>
  );
}

function Easy5() {
  return (
    <div className="h-[89.234px] relative shrink-0 w-[97.144px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="84.307" src={imgEasy2} width="82.097" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 38">
          <path d={svgPaths.p31e1e300} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Easy6() {
  return (
    <div className="h-[90px] relative shrink-0 w-[97px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.05%] left-[-11.4%] max-w-none top-[-15.18%] w-[115.79%]" src={imgEasy3} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Easy5 />
      <Easy6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center mb-[-17.785px] relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Easy7() {
  return (
    <div className="h-[90px] relative shrink-0 w-[97px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.05%] left-[-11.4%] max-w-none top-[-15.18%] w-[115.79%]" src={imgEasy3} />
      </div>
    </div>
  );
}

function Easy8() {
  return (
    <div className="h-[86.386px] relative shrink-0 w-[94.044px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="81.616" src={imgEasy} width="79.477" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 36">
          <path d={svgPaths.p22bdfc00} fill="var(--fill-0, #5665A8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center mb-[-17.785px] relative shrink-0">
      <Easy7 />
      {[...Array(2).keys()].map((_, i) => (
        <Easy8 key={i} />
      ))}
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[17.785px] pt-0 px-0 relative size-full">
      <Frame3 />
      <Frame5 />
      <Frame1 />
      <Frame6 />
      <Frame1 />
      <Frame2 />
      <Frame1 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}