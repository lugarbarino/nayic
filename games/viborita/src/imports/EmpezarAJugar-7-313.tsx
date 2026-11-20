import img1 from "figma:asset/903f46ca7495604536b3719030a008af6acde6b0.png";

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.061px] items-start relative shrink-0 text-center w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[23.399px] relative shrink-0 text-[21.272px] text-neutral-900 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jugá usando las flechas o haciendo click
      </p>
      <div className="font-['SF_Pro:Medium_Italic',sans-serif] font-[508] italic leading-[23.399px] relative shrink-0 text-[#646364] text-[17.697px] w-full" style={{ fontVariationSettings: "'YAXS' 436" }}>
        <p className="mb-0">Come las bolas para crecer</p>
        <p>{`Evita chocarte contigo mismo `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[26.545px] items-center justify-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#23252d] box-border content-stretch flex gap-[25.526px] h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Iniciar Juego
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-center relative shrink-0 w-[297.803px]">
      <div className="h-[193.108px] relative shrink-0 w-[405.495px]" data-name="1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[209.98%] left-0 max-w-none top-[-58.19%] w-full" src={img1} />
        </div>
      </div>
      <Frame4 />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[388.225px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[10.636px] h-[388.225px] items-end px-[30.844px] py-[34.035px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[29.78px] h-[388.225px] items-center left-[calc(50%-14px)] top-[calc(50%+0.11px)] translate-x-[-50%] translate-y-[-50%] w-[368px]">
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%-14px)] top-[calc(50%+0.11px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame3 />
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