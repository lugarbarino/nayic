import imgEasy from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgVerCartas1 from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";

function Easy() {
  return (
    <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[70px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[70px]">
        <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgEasy} />
      </div>
      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[52px] left-[171px] not-italic text-[50.818px] text-black text-center text-nowrap top-[105px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">{`libera la `}</p>
        <p className="mb-0">{`carta `}</p>
        <p>enterrada</p>
      </div>
    </div>
  );
}

export default function Pico() {
  return (
    <div className="relative size-full" data-name="pico">
      <Easy />
      <div className="absolute aspect-[166/175.96] left-[39.69%] right-[3.82%] top-0" data-name="ver cartas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
      </div>
    </div>
  );
}