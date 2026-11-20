import svgPaths from "./svg-w9tga0n1i7";
import imgEasy from "figma:asset/7e397d1c816a25f0894900c4d5b17b08f03ff4a3.png";

function Easy() {
  return (
    <div className="h-[163.587px] relative shrink-0 w-[178.088px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="154.554" src={imgEasy} width="150.503" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 69">
          <path d={svgPaths.p7e65580} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex items-center mb-[-30.675px] relative shrink-0">
      <Easy />
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[163.587px] relative shrink-0 w-[178.088px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="154.554" src={imgEasy} width="150.503" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 69">
          <path d={svgPaths.p7e65580} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex items-center mb-[-30.675px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[30.675px] pt-0 px-0 relative size-full">
      <Frame1 />
      <Frame />
      <Frame1 />
    </div>
  );
}