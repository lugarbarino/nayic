import svgPaths from "./svg-y639cia661";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[235px]">
      <p className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#23252d] text-[20px] w-[235px]">Si te gustó,compartilo</p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-w-full relative shrink-0 text-[#84858d] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enviá este juego a tus amigos
      </p>
    </div>
  );
}

function Share() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Share">
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
    <div className="bg-[#d2d3d7] content-stretch flex flex-col items-center justify-center p-[25px] relative rounded-[26px] shrink-0 size-[63px]">
      <Share />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#f3f3f4] relative rounded-[40px] size-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[99px] items-center px-[24px] py-[12px] relative size-full">
          <Frame1 />
          <Frame />
        </div>
      </div>
    </div>
  );
}