import svgPaths from "./svg-lra4efuzgr";
import imgEasy from "figma:asset/99bf0ea4f4dbcf79c2250213d8e1812416121a8c.png";

function Easy() {
  return (
    <div className="h-[113.599px] relative shrink-0 w-[123.669px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="107.326" src={imgEasy} width="104.513" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 48">
          <path d={svgPaths.p37783aa8} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mb-[-23.388px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[113.599px] relative shrink-0 w-[123.669px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="107.326" src={imgEasy} width="104.513" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 48">
          <path d={svgPaths.p37783aa8} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center mb-[-23.388px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[23.388px] pt-0 px-0 relative size-full">
      <Frame />
      <Frame1 />
      <Frame />
      <Frame1 />
      <Frame />
    </div>
  );
}