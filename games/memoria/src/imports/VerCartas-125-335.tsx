import svgPaths from "./svg-6u3dnog8fq";
import imgMezclarlas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";

export default function VerCartas() {
  return (
    <div className="relative size-full" data-name="ver cartas">
      <div className="absolute inset-[2.76%_7.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 109">
          <path d={svgPaths.p22902f00} fill="var(--fill-0, white)" id="Star 13" stroke="var(--stroke-0, #5EA585)" strokeWidth="2.81504" />
        </svg>
      </div>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] inset-[41.83%_13.24%_16.48%_12.23%] leading-[15.7px] text-[#2a1a2c] text-[18px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Podés ver todas las cartas
      </p>
      <div className="absolute aspect-[112/97] left-[13.48%] right-[23.63%] top-[-5.63px]" data-name="Screenshot 2025-11-18 at 1.06.57 PM 1" />
      <div className="absolute h-[72.289px] left-[23.33px] top-[-9.85px] w-[78.441px]" data-name="mezclarlas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMezclarlas1} />
      </div>
    </div>
  );
}