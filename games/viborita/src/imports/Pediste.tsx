import img1 from "figma:asset/bbbc3f023a3575a7513d42af028de10cae05fa05.png";
import Frame37 from "./Frame37";

interface PedisteProps {
  score: number;
  highScore: number;
  onRestart: () => void;
}

function Frame4({ score }: { score: number }) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 text-center w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[21.155px] relative shrink-0 text-[#343434] text-[13.462px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS:
      </p>
      <p className="font-['SF_Pro:Heavy',sans-serif] font-[860] h-[61.543px] leading-[59.619px] relative shrink-0 text-[53.85px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {score}
      </p>
    </div>
  );
}

function Frame({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[#23252d] box-border content-stretch flex gap-[23.078px] h-[82px] items-center justify-center p-[24.04px] relative rounded-[28.848px] shrink-0 w-[298px] cursor-pointer hover:bg-[#2f3139] transition-colors"
    >
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[29.81px] relative shrink-0 text-[#ededed] text-[23.078px] w-[164.061px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Juega de nuevo
      </p>
    </div>
  );
}

function Frame6({ score, highScore, onRestart }: { score: number; highScore: number; onRestart: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[23.399px] min-w-full relative shrink-0 text-[#163b35] text-[32.27px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¡Perdiste!
      </p>
      <Frame4 score={score} />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21.155px] min-w-full relative shrink-0 text-[#343434] text-[19.232px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tu puntaje máximo:{highScore}
      </p>
      <Frame onClick={onRestart} />
    </div>
  );
}

function Frame5({ score, highScore, onRestart }: { score: number; highScore: number; onRestart: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[26.545px] items-center justify-center relative shrink-0 w-full">
      <Frame6 score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}

function Frame1({ score, highScore, onRestart }: { score: number; highScore: number; onRestart: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[297.803px]">
      <div className="h-[224px] relative shrink-0 w-[496px]" data-name="1">
        <Frame37 />
      </div>
      <Frame5 score={score} highScore={highScore} onRestart={onRestart} />
    </div>
  );
}

function Frame2({ score, highScore, onRestart }: { score: number; highScore: number; onRestart: () => void }) {
  return (
    <div className="bg-white h-[420px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[10.636px] h-[420px] items-end px-[30.844px] py-[34.035px] relative w-full">
          <Frame1 score={score} highScore={highScore} onRestart={onRestart} />
        </div>
      </div>
    </div>
  );
}

export default function Pediste({ score, highScore, onRestart }: PedisteProps) {
  return (
    <div className="relative size-full flex items-center justify-center" data-name="pediste">
      <div className="content-stretch flex flex-col gap-[29.78px] h-[420px] items-center w-[368px] max-w-[90%] scale-[0.825] md:scale-100">
        <Frame2 score={score} highScore={highScore} onRestart={onRestart} />
      </div>
    </div>
  );
}