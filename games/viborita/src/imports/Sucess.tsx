import svgPaths from "./svg-o31d2i9gxf";
import imgSnake13 from "figma:asset/2194cc6a5f401bccd55512ebebff2f4ccc01a11b.png";
import imgSnake12 from "figma:asset/5e66b8b62866724b7e018c4f9eda969e0d804e47.png";
import imgSnake14 from "figma:asset/eaea606bf9f2d290603e03ece9d39c728eaef0bf.png";

function Frame5() {
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

function Play() {
  return (
    <div className="relative shrink-0 size-[23.078px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d={svgPaths.p21a7800} id="Icon" stroke="var(--stroke-0, #E9E9E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.92321" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#23252d] box-border content-stretch flex gap-[23.078px] h-[72.12px] items-center justify-center p-[24.04px] relative rounded-[28.848px] shrink-0 w-[260.594px]">
      <Play />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[29.81px] relative shrink-0 text-[#ededed] text-[23.078px] w-[164.061px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Juega de nuevo
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[30.771px] items-center relative shrink-0 w-[269.249px]">
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[61.543px] leading-[30.771px] relative shrink-0 text-[34.618px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¡Perdiste!
      </p>
      <Frame5 />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21.155px] min-w-full relative shrink-0 text-[#343434] text-[19.232px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tu puntaje máximo:3000
      </p>
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[457px] relative rounded-[28.848px] shadow-[0px_0.962px_17.213px_3.846px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[9.616px] h-[457px] items-center px-[27.886px] py-[30.771px] relative w-full">
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
    <div className="absolute content-stretch flex flex-col gap-[26.925px] items-center left-[calc(50%+1.44px)] top-[calc(50%+32.23px)] translate-x-[-50%] translate-y-[-50%] w-[332.715px]">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+1.44px)] top-[calc(50%+32.23px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame4 />
    </div>
  );
}

export default function Sucess() {
  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter bg-[rgba(33,19,34,0.51)] relative size-full" data-name="sucess">
      <Group />
      <div className="absolute left-[275px] size-[109px] top-[226px]" data-name="snake (1) 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake13} />
      </div>
      <div className="absolute left-[622px] size-[109px] top-[94px]" data-name="snake (1) 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake12} />
      </div>
      <div className="absolute left-[602px] size-[109px] top-[517px]" data-name="snake (1) 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake14} />
      </div>
    </div>
  );
}