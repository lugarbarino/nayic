import img1 from "figma:asset/bbbc3f023a3575a7513d42af028de10cae05fa05.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 text-center w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[21.155px] relative shrink-0 text-[#343434] text-[13.462px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS:
      </p>
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[61.543px] leading-[59.619px] relative shrink-0 text-[53.85px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1289
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#11312c] box-border content-stretch flex gap-[25.526px] h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jugar de nuevo
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-14px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <p className="font-['Capriola:Regular',sans-serif] leading-[23.399px] min-w-full not-italic relative shrink-0 text-[#163b35] text-[32.27px] text-center w-[min-content]">¡Perdiste!</p>
      <Frame3 />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21.155px] min-w-full relative shrink-0 text-[#343434] text-[19.232px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tu puntaje máximo:3000
      </p>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[26.545px] items-center justify-center relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[297.803px]">
      <div className="h-[169.64px] relative shrink-0 w-[375px]" data-name="1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img1} />
      </div>
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[420px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[10.636px] h-[420px] items-end px-[30.844px] py-[34.035px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[29.78px] h-[420px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[368px]">
      <Frame1 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame2 />
    </div>
  );
}