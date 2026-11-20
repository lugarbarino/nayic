import svgPaths from "./svg-ie9b4x0w0r";
import imgFrame147 from "figma:asset/4403d525d43ab8a233585b79cb74b7c3d384df47.png";
import img23 from "figma:asset/e561a759cc81a124d2cad453f997597f9ce3f65d.png";

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

function Frame5() {
  return (
    <div className="bg-[#005eb3] content-stretch flex items-start p-[8px] relative rounded-[12px] shrink-0">
      <ArrowLeft />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_9px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[10px] left-[41px] top-[9px] w-[21px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 10">
        <g id="Frame" />
      </svg>
    </div>
  );
}

function Knob() {
  return <div className="absolute bg-white bottom-[7.14%] left-[2px] rounded-[100px] top-[7.14%] w-[39px]" data-name="Knob" />;
}

function ToggleSwitch() {
  return (
    <div className="bg-[#c35050] h-[28px] overflow-clip relative rounded-[100px] shrink-0 w-[64px]" data-name="Toggle - Switch">
      <Frame />
      <Knob />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[153px] items-center relative shrink-0 w-full">
      <p className="font-['Capriola:Regular',sans-serif] h-[64px] leading-[62px] not-italic relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px] whitespace-pre-wrap">Grilla</p>
      <ToggleSwitch />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #005EB3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
      <p className="font-['Capriola:Regular',sans-serif] h-[64px] leading-[62px] not-italic relative shrink-0 text-[#f3f3f4] text-[24px] w-[122px] whitespace-pre-wrap">Tema</p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[64px] leading-[62px] relative shrink-0 text-[#f3f3f4] text-[24px] text-right w-[184px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Colores
      </p>
      <ChevronRight />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-[341px]">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[237px] relative shrink-0 w-[263px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame147} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-center justify-center relative shrink-0 w-full">
      <div className="h-[156px] relative shrink-0 w-[233px]" data-name="2 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[167.97%] left-[-5.42%] max-w-none top-[-22.62%] w-[112.95%]" src={img23} />
        </div>
      </div>
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[18px] items-start left-1/2 top-[calc(50%-55px)] w-[341px]">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

export default function Ajustes() {
  return (
    <div className="backdrop-blur-[3.8px] relative size-full" data-name="Ajustes" style={{ backgroundImage: "linear-gradient(114.762deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Frame4 />
    </div>
  );
}