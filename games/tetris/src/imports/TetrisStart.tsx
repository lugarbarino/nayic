import img23 from "figma:asset/e561a759cc81a124d2cad453f997597f9ce3f65d.png";

interface TetrisStartProps {
  onStart?: () => void;
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Capriola:Regular',sans-serif] h-[82px] leading-[39px] not-italic relative shrink-0 text-[#f7f7f7] text-[32px] w-full">No dejes huecos en tu estrategia</p>
      <div className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[75px] italic leading-[25px] relative shrink-0 text-[#dedede] text-[20px] w-[368px]" style={{ fontVariationSettings: "'YAXS' 400" }}>
        <p className="css-4hzbpn mb-0">{`Cada pieza cuenta. `}</p>
        <p className="css-4hzbpn">Gira, mueve y acelera antes de que sea demasiado tarde.</p>
      </div>
    </div>
  );
}

function Frame({ onStart }: { onStart?: () => void }) {
  return (
    <div 
      onClick={onStart}
      className="bg-[#3568c3] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px] cursor-pointer hover:bg-[#2d5aab] transition-colors"
    >
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empeza a jugar
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function TetrisStart({ onStart }: TetrisStartProps) {
  return (
    <div className="relative size-full flex items-center justify-center" data-name="Tetris start" style={{ backgroundImage: "linear-gradient(142.81deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[35px] items-center w-[481px]">
        <div className="h-[291px] relative shrink-0 w-[433px]" data-name="2 3">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[167.97%] left-[-5.42%] max-w-none top-[-22.62%] w-[112.95%]" src={img23} />
          </div>
        </div>
        <Frame2 />
        <Frame onStart={onStart} />
      </div>
    </div>
  );
}