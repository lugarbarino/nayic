import imgEasy from "../../assets/especiales/enterrada.webp";
import imgVerCartas1 from "../../assets/especiales/pico.webp";

export default function Pico() {
  return (
    <div className="relative size-full" data-name="pico">
      <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[30.756px]" data-name="easy">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30.756px]">
          <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgEasy} />
        </div>
        <div className="absolute font-['Capriola:Regular',sans-serif] leading-[22.848px] left-[75.21px] not-italic text-[22.328px] text-black text-center text-nowrap top-[46.13px] translate-x-[-50%]">
          <p className="mb-0">{`libera la `}</p>
          <p className="mb-0">{`carta `}</p>
          <p>enterrada</p>
        </div>
      </div>
      <div className="absolute aspect-[166/175.96] left-[39.69%] right-[3.82%] top-0" data-name="ver cartas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
      </div>
    </div>
  );
}