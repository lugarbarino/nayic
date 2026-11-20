import imgEasy from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgVerCartas1 from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";
import imgEasy1 from "figma:asset/00d1358d020569606eb1993a7db5b5b2428b3c23.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[189.1px] items-center justify-center left-[103px] top-0 w-[193.037px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.871deg]">
          <div className="h-[144.635px] relative w-[151.446px]" data-name="pico">
            <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[28.046px]" data-name="easy">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[28.046px]">
                <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgEasy} />
              </div>
              <div className="absolute font-['Capriola:Regular',sans-serif] leading-[20.834px] left-[68.93px] not-italic text-[20.36px] text-black text-center text-nowrap top-[42.07px] translate-x-[-50%]">
                <p className="mb-0">{`libera la `}</p>
                <p className="mb-0">{`carta `}</p>
                <p>enterrada</p>
              </div>
            </div>
            <div className="absolute aspect-[166/175.96] left-[47.78%] right-[-4.26%] top-[-27.59px]" data-name="ver cartas 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[213px] left-0 top-[109.11px] w-[232px]" data-name="dificil_enterrada">
        <div className="absolute inset-[-0.55%_0]" data-name="easy">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[123.84%] left-[-7.8%] max-w-none top-[-10.88%] w-[113.76%]" src={imgEasy1} />
          </div>
        </div>
      </div>
    </div>
  );
}