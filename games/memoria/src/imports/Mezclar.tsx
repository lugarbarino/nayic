import svgPaths from "./svg-btua9qv79j";
import imgGatosMagic01 from "figma:asset/5e48e7fa8ee790fd3c0148ae049b767157121558.png";

export default function Mezclar() {
  return (
    <div className="relative size-full" data-name="Mezclar">
      <div className="absolute h-[361px] left-[26.33px] top-[10.5px] w-[340.348px]">
        <div className="absolute inset-[2.76%_1.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333 342">
            <path d={svgPaths.p2acd1c00} fill="var(--fill-0, #603265)" id="Star 14" stroke="var(--stroke-0, #603265)" strokeWidth="9" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[216.923px] items-center justify-center left-[58px] top-[-2px] w-[275.795px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.381deg]">
          <div className="h-[215.105px] opacity-90 relative w-[274.372px]" data-name="gatos_Magic0 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[101.04%] left-[0.39%] max-w-none top-[1.04%] w-full" src={imgGatosMagic01} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[52px] left-[199px] not-italic text-[50.818px] text-center text-nowrap text-white top-[180px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">Se mezclan</p>
        <p>{` las cartas`}</p>
      </div>
    </div>
  );
}