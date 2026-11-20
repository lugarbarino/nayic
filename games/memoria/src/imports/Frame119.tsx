export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative size-full">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f3f3f4] text-[16px] text-center w-full">DIFICULTAD</p>
      <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex h-[40.73px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[93px]">
          <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
          <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#e7e7e7] text-[19.04px] text-center w-[62px]">
            <p className="leading-[17.454px]">FÁCIL</p>
          </div>
        </div>
        <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[107px]">
          <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
          <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#e7e7e7] text-[19.04px] text-center w-[77px]">
            <p className="leading-[17.454px]">MÉDIO</p>
          </div>
        </div>
        <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[107px]">
          <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[19.04px] text-center w-[77px]">
            <p className="leading-[17.454px]">DIFÍCIL</p>
          </div>
        </div>
      </div>
    </div>
  );
}