import svgPaths from "./svg-y62d5y1mvg";
import imgRectangle21 from "figma:asset/0f10a4c287c6784ee782b8c88a4fb0c2e111d63c.png";

function Settings() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_73_125)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_73_125">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col items-center justify-center ml-0 mt-0 pb-[27px] pt-[25px] px-[25px] relative rounded-[30px] size-[75px]">
      <Settings />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Settings
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[200px]">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Si te gustó,compartilo
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
    <div className="bg-[#e7e7e7] box-border content-stretch flex flex-col items-center justify-center pb-[27px] pt-[25px] px-[25px] relative rounded-[26px] shrink-0 size-[63px]">
      <Share />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[7px] items-center ml-[12px] mt-[245px] px-[24px] py-[12px] relative rounded-[40px] w-[306px]">
      <Frame2 />
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#ffffff] h-[306px] ml-0 mt-[39.01px] rounded-[40px] to-[#eeeeee] w-[330.429px]" />
      <div className="[grid-area:1_/_1] h-[285px] ml-0 mt-0 relative w-[334px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgRectangle21} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-end justify-center leading-[0] left-[calc(50%+2.5px)] top-[20px] translate-x-[-50%] w-[350px]">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="relative size-full" data-name="mobile">
      <Frame4 />
    </div>
  );
}