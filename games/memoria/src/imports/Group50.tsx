import svgPaths from "./svg-ghwz93bbh4";
import imgRectangle21 from "figma:asset/5a51ecd1e0b78a8f61650c2d870a721bc2fbb4f6.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[207px]">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Si te gustó, compartilo
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#84858d] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enviá este juego a tus amigos
      </p>
    </div>
  );
}

function Share() {
  return (
    <div className="h-[21px] mb-[-2px] relative shrink-0 w-[24px]" data-name="Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g id="Share">
          <path d={svgPaths.p2612cc80} id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#d2d3d7] box-border content-stretch flex flex-col items-center justify-center pb-[27px] pt-[25px] px-[25px] relative rounded-[22px] shrink-0 size-[57px]">
      <Share />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f3f3f4] box-border content-stretch flex gap-[14px] h-[81px] items-center left-[14px] pl-[19px] pr-[24px] py-[12px] rounded-[40px] top-[251px] w-[305px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[306px] left-0 rounded-[40px] top-[39.01px] w-[318.557px]" />
      <div className="absolute h-[285px] left-0 top-0 w-[322px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgRectangle21} />
      </div>
      <Frame2 />
    </div>
  );
}