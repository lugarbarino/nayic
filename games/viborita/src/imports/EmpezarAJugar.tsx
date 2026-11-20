import svgPaths from "./svg-pi1cmxiifz";
import imgSnake15 from "figma:asset/bbbc3f023a3575a7513d42af028de10cae05fa05.png";

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-center w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[21.155px] relative shrink-0 text-[19.232px] text-neutral-900 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jugá usando las flechas o haciendo click
      </p>
      <div className="font-['SF_Pro:Medium_Italic',sans-serif] font-[508] italic leading-[21.155px] relative shrink-0 text-[#646364] text-[16px] w-full" style={{ fontVariationSettings: "'YAXS' 436" }}>
        <p className="mb-0">Come las bolas para crecer</p>
        <p>{`Evita chocarte contigo mismo `}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="h-[140px] relative shrink-0 w-[269px]" data-name="snake (1) 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake15} />
      </div>
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#23252d] box-border content-stretch flex gap-[23.078px] h-[72.12px] items-center justify-center p-[24.04px] relative rounded-[28.848px] shrink-0 w-[260.594px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[29.81px] relative shrink-0 text-[#ededed] text-[23.078px] text-center w-[164.061px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Iniciar Juego
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[30.771px] items-center relative shrink-0 w-[269.249px]">
      <Frame5 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[373px] relative rounded-[28.848px] shadow-[0px_0.962px_17.213px_3.846px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[9.616px] h-[373px] items-end px-[27.886px] py-[30.771px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="mb-[-1.923px] relative shrink-0 size-[23.078px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p37b69ba0} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.92321" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#163b35] box-border content-stretch flex flex-col items-center justify-center pb-[25.963px] pt-[24.04px] px-[24.04px] relative rounded-[28.848px] shrink-0 size-[72.12px]">
      <X />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[21.155px] relative shrink-0 text-[#f3f3f4] text-[11.539px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26.925px] items-center left-[calc(50%+0.36px)] top-[calc(50%+72.02px)] translate-x-[-50%] translate-y-[-50%] w-[332.715px]">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+0.36px)] top-[calc(50%+72.02px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame4 />
    </div>
  );
}

export default function EmpezarAJugar() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter bg-[rgba(33,19,34,0.51)] relative size-full" data-name="Empezar a jugar">
      <Group />
    </div>
  );
}