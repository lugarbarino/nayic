import svgPaths from "./svg-0tralk0fbu";
import imgVerCartas1 from "figma:asset/f62b6c16a4ac80afea9b365305a3ef88e87133f5.png";

export default function Suerte() {
  return (
    <div className="relative size-full" data-name="suerte">
      <div className="absolute h-[361px] left-0 top-0 w-[393px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333 342">
            <path d={svgPaths.p2a89e280} fill="var(--fill-0, #CF449E)" id="Star 14" stroke="var(--stroke-0, #CF449E)" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[52px] left-[calc(50%-0.5px)] not-italic text-[50.818px] text-center text-nowrap text-white top-[calc(50%-10.5px)] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">{`Ganaste `}</p>
        <p>un match</p>
      </div>
      <div className="absolute h-[183.784px] left-[calc(50%-0.5px)] top-[calc(50%-88.61px)] translate-x-[-50%] translate-y-[-50%] w-[200px]" data-name="ver cartas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
      </div>
    </div>
  );
}