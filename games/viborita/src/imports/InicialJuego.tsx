import svgPaths from "./svg-texovtyeyu";
import img1 from "figma:asset/97a0d6f3d3836e0146eb5c78ea93c62980267449.png";

function Frame1() {
  return (
    <div className="h-[176px] mb-[-21px] overflow-clip relative shrink-0 w-[414px]">
      <div className="absolute h-[155.732px] left-[calc(50%-0.99px)] top-[calc(50%-0.63px)] translate-x-[-50%] translate-y-[-50%] w-[367.415px]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-2.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 173">
            <path d={svgPaths.p329d0480} fill="var(--fill-0, #225953)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="8.62586" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(50%-1.73px)] top-[calc(50%+8px)] translate-x-[-50%] translate-y-[-50%] w-[340px]" data-name="1">
        <img alt="La Viborita" className="w-full h-auto mix-blend-multiply" src={img1} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[18px] items-start leading-[0] px-0 py-[20px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Capriola',sans-serif] h-[124px] justify-center not-italic relative shrink-0 text-[#163b35] text-[29.27px] w-[298px]">
        <p className="leading-[36.4px]">Jugá usando las flechas o hacé click para moverte</p>
      </div>
      <div className="font-['SF_Pro',sans-serif] italic leading-[23.399px] min-w-full relative shrink-0 text-[#646364] text-[17.697px] w-[min-content]" style={{ fontVariationSettings: "'YAXS' 436" }}>
        <p className="mb-0">Come las gemas para crecer</p>
        <p>{`Evita chocarte contigo mismo `}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[11.061px] items-start mb-[-21px] relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[21px] pt-0 px-0 relative shrink-0 w-full">
      <Frame1 />
      <Frame6 />
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
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-14px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </button>
  );
}

function Frame2({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[297.803px]">
      <Frame5 />
      <Frame onStartGame={onStartGame} />
    </div>
  );
}

function Frame3({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="bg-white h-[407px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[10.636px] h-[407px] items-end px-[30.844px] py-[34.035px] relative w-full">
          <Frame2 onStartGame={onStartGame} />
        </div>
      </div>
    </div>
  );
}

function Frame4({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[29.78px] h-[388.225px] items-center left-[calc(50%+0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%] w-[368px]">
      <Frame3 onStartGame={onStartGame} />
    </div>
  );
}

function Group({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame4 onStartGame={onStartGame} />
    </div>
  );
}

function Group1({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Group onStartGame={onStartGame} />
    </div>
  );
}

function Group2({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Group1 onStartGame={onStartGame} />
    </div>
  );
}

function Group3({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Group2 onStartGame={onStartGame} />
    </div>
  );
}

export default function InicialJuego({ onStartGame }: { onStartGame: () => void }) {
  return (
    <div className="bg-gradient-to-b from-[#094138] absolute inset-0 to-[#3c9e8e]" data-name="inicial juego">
      <Group3 onStartGame={onStartGame} />
    </div>
  );
}