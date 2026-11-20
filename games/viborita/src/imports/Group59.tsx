import imgFrame371 from "figma:asset/97a0d6f3d3836e0146eb5c78ea93c62980267449.png";
import Frame128 from "./Frame128";

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[18px] items-start leading-[0] px-0 py-[20px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Capriola',sans-serif] h-[124px] justify-center not-italic relative shrink-0 text-[#163b35] text-[29.27px] w-[298px]">
        <p className="leading-[36.4px]">Jugá usando las flechas para moverte</p>
      </div>
      <div className="font-['SF_Pro',sans-serif] italic leading-[23.399px] min-w-full relative shrink-0 text-[#646364] text-[17.697px] w-[min-content]" style={{ fontVariationSettings: "'YAXS' 436" }}>
        <p className="mb-0">Come las gemas para crecer</p>
        <p>{`Evita chocarte contigo mismo `}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[11.061px] items-center mb-[-21px] relative shrink-0 w-full">
      <div className="h-[176px] relative shrink-0 w-[414px]" data-name="Frame 37 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame371} />
      </div>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[21px] pt-0 px-0 relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame({ onStartGame }: { onStartGame: () => void }) {
  return (
    <button
      onClick={onStartGame}
      className="bg-[#11312c] box-border content-stretch flex gap-[25.526px] h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px] cursor-pointer hover:bg-[#1a3f39] transition-colors"
    >
      <p className="font-['SF_Pro',sans-serif] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Iniciar Juego
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-14px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[31.908px]" />
    </button>
  );
}

function Frame1({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[297.803px]">
      <Frame4 />
      <Frame onStartGame={onStartGame} />
    </div>
  );
}

function Frame2({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="bg-white h-[407px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[10.636px] h-[407px] items-end px-[30.844px] py-[34.035px] relative w-full">
          <Frame1 onStartGame={onStartGame} />
        </div>
      </div>
    </div>
  );
}

function Frame3({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[368px] md:scale-100 scale-90">
      <Frame2 onStartGame={onStartGame} />
      
      {/* Agency Footer */}
      <div 
        onClick={() => window.open('https://nayic.com.ar/', '_blank')}
        className="cursor-pointer transition-all duration-300 hover:-translate-y-1 mt-6"
      >
        <Frame128 />
      </div>
    </div>
  );
}

function Group({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame3 onStartGame={onStartGame} />
    </div>
  );
}

function Group1({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group onStartGame={onStartGame} />
    </div>
  );
}

function Group2({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group1 onStartGame={onStartGame} />
    </div>
  );
}

export default function Group59({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="bg-gradient-to-b from-[#094138] absolute inset-0 to-[#3c9e8e]">
      <Group2 onStartGame={onStartGame} />
    </div>
  );
}