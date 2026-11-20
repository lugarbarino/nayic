import imgFrame18 from "figma:asset/af4219100c39788b8b9af7770f88ff697f491309.png";
import imgFrame19 from "figma:asset/3de83ad4959ced8fbc59b16c1e9e40de04f8e202.png";
import imgRectangle24 from "figma:asset/82ff1f85d158c07ce17a89080cb25b523ac067c4.png";
import imgFrame20 from "figma:asset/8b825f636a64c9fc6841241fad9d3af8bdc771e2.png";
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[88px] justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] w-[229px]">
      <p className="leading-[36.23px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
        <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[49.799px] text-center text-white tracking-[-2.3374px] w-full">Tema</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="content-stretch flex gap-[22.205px] h-[140px] items-center pl-[30px] pr-0 py-0 relative shrink-0 w-[339px]">
            <div className="relative shrink-0 size-[87.652px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgFrame18} />
            </div>
            <Text text="Gatos" />
          </div>
          <div className="content-stretch flex gap-[22.205px] h-[140px] items-center pl-[30px] pr-0 py-0 relative shrink-0 w-[339px]">
            <div className="relative rounded-[35.061px] shrink-0 size-[87.652px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[35.061px] size-full" src={imgFrame19} />
            </div>
            <Text text="Animales" />
          </div>
          <div className="content-stretch flex gap-[22.205px] h-[140px] items-center p-[18.699px] relative rounded-[46.748px] shrink-0 w-[339px]">
            <div aria-hidden="true" className="absolute border-4 border-[#9952a3] border-solid inset-0 pointer-events-none rounded-[46.748px]" />
            <div className="h-[112.195px] relative shrink-0 w-[128.557px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle24} />
            </div>
            <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[112.195px] justify-center leading-[0] relative shrink-0 text-[28.049px] text-center text-white w-[140.244px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[25.711px]">Monstruos</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[22.205px] h-[140px] items-center pl-[30px] pr-0 py-0 relative shrink-0 w-[339px]">
            <div className="relative rounded-[35.061px] shrink-0 size-[87.652px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[35.061px] size-full" src={imgFrame20} />
            </div>
            <Text text="El Huerto" />
          </div>
        </div>
      </div>
      <div className="bg-[#e4e4e4] h-[76px] relative rounded-[30.52px] shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[25.434px] relative size-full">
            <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[31.538px] relative shrink-0 text-[#454545] text-[24.416px] text-center w-[173.571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Guardar
            </p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-13.391px_3.826px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}