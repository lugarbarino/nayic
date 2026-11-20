import svgPaths from "./svg-q3tzhkcun4";

export default function NivelFacil() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[932px] items-start pb-[98px] pt-[113px] px-[28px] relative shrink-0 w-[430px]" data-name="Nivel facil">
      <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-[30px] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px]">
        <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Arrow left">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Arrow left">
              <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Salir
        </p>
      </div>
      <div className="absolute bg-[#23252d] box-border content-stretch flex flex-col items-center justify-center left-[289px] pb-[27px] pt-[25px] px-[25px] rounded-[30px] shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] size-[75px] top-[23px]">
        <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="Play">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Play">
              <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Modo
        </p>
      </div>
      <div className="content-stretch flex gap-[173px] items-center justify-center mb-[34px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-0 items-center justify-center relative shrink-0">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] mb-[5px] relative shrink-0 text-[#5ea585] text-[14px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            TIEMPO
          </p>
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[32px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            1:00
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-0 items-center justify-center relative shrink-0">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] mb-[5px] relative shrink-0 text-[#5ea585] text-[14px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            PUNTUACIÓN
          </p>
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[32px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            0
          </p>
        </div>
      </div>
      {/* Cards grid will go here */}
    </div>
  );
}
