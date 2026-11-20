import imgSnake2 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] shrink-0 sticky text-[#f3f3f4] text-[32px] text-center top-0 w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[22px]">7</p>
      </div>
      <div className="shrink-0 size-[41px] sticky top-0" data-name="snake 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake2} />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <p className="css-4hzbpn font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] shrink-0 sticky text-[#f2abb5] text-[14px] top-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        VIDAS
      </p>
      <Frame />
    </div>
  );
}