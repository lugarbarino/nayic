import img2 from "figma:asset/3d2f23466b567e733598797d075e4d50b650e984.png";

interface Group54Props {
  score: number;
  highScore: number;
  onRestart: () => void;
}

export default function Group54({ score, highScore, onRestart }: Group54Props) {
  return (
    <div className="bg-gradient-to-b from-[#094138] absolute inset-0 to-[#3c9e8e]">
      <div className="absolute content-stretch flex flex-col h-[444px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[368px] md:scale-100 scale-90">
        <div className="bg-white h-[444px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex items-end px-[30.844px] py-[34.035px] relative size-full">
              <div className="content-stretch flex flex-col items-center pb-[17px] pt-0 px-0 relative shrink-0 w-[297.803px]">
                <div className="h-[183px] mb-[-17px] relative shrink-0 w-[325px]" data-name="2">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img2} />
                </div>
                <div className="content-stretch flex flex-col items-center justify-center mb-[-17px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                    <p className="font-['Capriola:Regular',sans-serif] h-[94px] leading-none not-italic relative shrink-0 text-[#163b35] text-[32.27px] text-center w-full">Bueno… intentemos no morir ahora</p>
                    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 text-center w-full">
                      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[21.155px] relative shrink-0 text-[#343434] text-[13.462px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        PUNTOS DE PARTIDA:
                      </p>
                      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[61.543px] leading-[59.619px] relative shrink-0 text-[#163b35] text-[53.85px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {score}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[19px] items-center justify-center leading-[0] relative shrink-0 text-[#343434] text-center text-nowrap w-full">
                      <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center relative shrink-0 font-['SF_Pro:Bold',sans-serif] font-bold text-[13.462px]">
                        <p className="leading-[21.155px] text-nowrap">TU RECORD:</p>
                      </div>
                      <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center relative shrink-0 font-['SF_Pro:Black',sans-serif] font-[1000] text-[19.232px]">
                        <p className="leading-[21.155px] text-nowrap">{highScore}</p>
                      </div>
                    </div>
                    <div 
                      onClick={onRestart}
                      className="bg-[#11312c] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px] cursor-pointer hover:bg-[#1a3f39] transition-colors"
                    >
                      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Jugar de nuevo
                      </p>
                      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)] rounded-[31.908px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
