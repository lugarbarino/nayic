import svgPaths from "./svg-ela22dhsdl";
import img10 from "figma:asset/2dc2284d25deeeee1ffb37a776a298f5edd8db3c.png";

export default function Bg() {
  return (
    <div className="bg-white relative size-full" data-name="BG">
      <div className="absolute h-[2137px] left-0 top-0 w-[33495.98px]" style={{ backgroundImage: "linear-gradient(109.126deg, rgb(43, 52, 121) 3.5007%, rgb(100, 133, 178) 45.77%, rgb(110, 52, 149) 101.79%, rgba(217, 217, 217, 0) 101.8%)" }} />
      <div className="absolute blur-[2917.304px] h-[10440px] left-[-3208px] mix-blend-hard-light top-[-3685px] w-[21270px]" data-name="10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[15.13%] max-w-none size-full top-[-56.19%]" src={img10} />
        </div>
      </div>
      <div className="absolute blur-[2917.304px] h-[10440px] left-[7627px] mix-blend-hard-light top-[-3201px] w-[21270px]" data-name="12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[15.13%] max-w-none size-full top-[-56.19%]" src={img10} />
        </div>
      </div>
      <div className="absolute flex h-[10440.306px] items-center justify-center left-[18062px] mix-blend-hard-light top-[-2318px] w-[19260.188px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="blur-[2917.304px] h-[10440.306px] relative w-[19260.188px]" data-name="11">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[112.95%] left-[-15.24%] max-w-none top-[12.63%] w-full" src={img10} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[864px] items-center justify-center left-[-22px] mix-blend-darken top-[88px] w-[32905px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[864px] relative w-[32905px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32905 864">
              <g id="Vector 2" opacity="0.4" style={{ mixBlendMode: "darken" }}>
                <path d={svgPaths.p1eabba80} fill="var(--fill-0, #2B3479)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[915px] left-[-22px] mix-blend-darken top-[37px] w-[32905px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32905 915">
          <g id="Vector 3" opacity="0.4" style={{ mixBlendMode: "darken" }}>
            <path d={svgPaths.p3081af80} fill="var(--fill-0, #0BA07B)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[237px] left-0 mix-blend-darken top-[678px] w-[32905px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32905 237">
          <g id="Vector 1" opacity="0.8" style={{ mixBlendMode: "darken" }}>
            <path d={svgPaths.p3754f200} fill="var(--fill-0, #4F1B55)" />
          </g>
        </svg>
      </div>
    </div>
  );
}