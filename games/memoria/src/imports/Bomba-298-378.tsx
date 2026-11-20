import svgPaths from "./svg-bvr3xf6c7s";
import imgBomba from "figma:asset/433489d86a39e3c139747f0341e375e6eebc4c7f.png";

export default function Bomba() {
  return (
    <div className="relative size-full" data-name="Bomba">
      <div className="absolute h-[361px] left-0 top-0 w-[393px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333 342">
            <path d={svgPaths.p2a89e280} fill="var(--fill-0, #FF7E5E)" id="Star 14" stroke="var(--stroke-0, #FF7E5E)" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[87px] size-[219px] top-[-14px]" data-name="bomba">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
        </div>
      </div>
      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[50px] left-[calc(50%-0.5px)] not-italic text-[50.818px] text-center text-nowrap text-white top-[calc(50%-0.5px)] tracking-[-2px] translate-x-[-50%]">
        <p className="mb-0">{`Una pareja `}</p>
        <p>se da vuelta</p>
      </div>
    </div>
  );
}
