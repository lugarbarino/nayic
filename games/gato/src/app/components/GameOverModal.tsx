import imgGato2 from "figma:asset/a9ae34a8191967ca751f907ce4945e866b250ed8.png";

interface GameOverModalProps {
  score: number;
  highScore: number;
  onRestart: () => void;
}

function Frame4({ score }: { score: number }) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 text-[#23252d] text-center w-full">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21.155px] relative shrink-0 text-[13.462px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS DE LA PARTIDA:
      </p>
      <p className="css-4hzbpn font-['SF_Pro:Heavy',sans-serif] font-[860] h-[61.543px] leading-[59.619px] relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {score}
      </p>
    </div>
  );
}

function Frame8({ highScore }: { highScore: number }) {
  return (
    <div className="content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[5px] h-[30px] items-center justify-center leading-[0] relative shrink-0 text-[#343434] w-full">
      <div className="flex flex-col h-[14px] justify-center relative shrink-0 text-[13.462px] text-right w-[85px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[21.155px]">TU RECORD:</p>
      </div>
      <div className="flex flex-col h-[30px] justify-center relative shrink-0 text-[24px] w-[62px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[21.155px]">{highScore}</p>
      </div>
    </div>
  );
}

function Frame7({ score, highScore }: { score: number; highScore: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[42px] justify-center leading-[0] not-italic relative shrink-0 text-[#4e3767] text-[32px] text-center w-[298px]">
        <p className="css-4hzbpn leading-[36.4px]">¿Otra vez?</p>
      </div>
      <Frame4 score={score} />
      <Frame8 highScore={highScore} />
    </div>
  );
}

function Frame6({ score, highScore }: { score: number; highScore: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[11.061px] items-center relative shrink-0 w-full">
      <div className="h-[199px] relative shrink-0 w-[365px]" data-name="gato 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[247.77%] left-[-17.37%] max-w-none top-[-69.29%] w-[135.45%]" src={imgGato2} />
        </div>
      </div>
      <Frame7 score={score} highScore={highScore} />
    </div>
  );
}

function Frame5({ score, highScore }: { score: number; highScore: number }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame6 score={score} highScore={highScore} />
    </div>
  );
}

function Frame({ onRestart }: { onRestart: () => void }) {
  return (
    <div 
      className="bg-[#8e3274] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px] cursor-pointer hover:scale-105 transition-transform"
      onClick={onRestart}
    >
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Volver a jugar 
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[297.803px]">
      <Frame5 score={score} highScore={highScore} />
      <Frame onRestart={onRestart} />
    </div>
  );
}

function Frame2({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="bg-white h-[407px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[30.844px] py-[34.035px] relative size-full">
          <Frame1 score={score} highScore={highScore} onRestart={onRestart} />
        </div>
      </div>
    </div>
  );
}

function Frame3({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="absolute content-stretch flex flex-col h-[388.225px] md:h-[388.225px] h-[300px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[368px] md:w-[368px] w-[280px] scale-[0.8] md:scale-100">
      <Frame2 score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}

function Group({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame3 score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}

function Group1({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}

function Group2({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group1 score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}

function Group3({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group2 score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}

export default function GameOverModal({ score, highScore, onRestart }: GameOverModalProps) {
  return (
    <div className="relative size-full">
      <Group3 score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}