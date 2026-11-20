import svgPaths from "./svg-8v10aiz6b4";
import imgVerCartas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";

export default function VerTodas() {
  return (
    <div className="relative size-full" data-name="ver todas">
      <div className="absolute h-[361px] left-0 top-0 w-[393px]">
        <div className="absolute inset-[2.76%_7.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333 342">
            <path d={svgPaths.p2a89e280} fill="var(--fill-0, #50917D)" id="Star 14" stroke="var(--stroke-0, #50917D)" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[204px] left-[calc(50%-0.5px)] top-[-24px] translate-x-[-50%] w-[222px]" data-name="ver cartas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
      </div>
      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[52px] left-[205.5px] not-italic text-[50.818px] text-center text-nowrap text-white top-[148px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">{`Podés ver `}</p>
        <p className="mb-0">{`todas las `}</p>
        <p>cartas</p>
      </div>
    </div>
  );
}