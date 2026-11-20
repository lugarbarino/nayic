import svgPaths from "./svg-7lsbstgtsg";
import imgRectangle22 from "figma:asset/971bb8bbff629aadc5646b8e7a667f0b25e0d06d.png";

export default function VerCartas() {
  return (
    <div className="relative size-full" data-name="ver cartas">
      <div className="absolute inset-[2.76%_7.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 155">
          <path d={svgPaths.p37c26700} fill="var(--fill-0, white)" id="Star 13" stroke="var(--stroke-0, #50917D)" strokeWidth="4" />
        </svg>
      </div>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] inset-[44.62%_19.14%_16.86%_18.53%] leading-[21px] text-[24px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Podés ver todas las cartas
      </p>
      <div className="absolute aspect-[112/97] left-[13.48%] right-[23.63%] top-[-8px]" data-name="Screenshot 2025-11-18 at 1.06.57 PM 1" />
      <div className="absolute h-[99px] left-[33px] top-[-17px] w-[108px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgRectangle22} />
      </div>
    </div>
  );
}