import svgPaths from "./svg-fsfo3ksrm6";
import imgVerCartas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";

export default function VerTodas() {
  return (
    <div className="relative size-full" data-name="ver todas">
      <div className="absolute h-[255.364px] left-0 top-0 w-[278px]">
        <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 245">
            <g filter="url(#filter0_d_333_16)" id="Star 14">
              <path d={svgPaths.pdcc5980} fill="var(--fill-0, #3C7262)" />
              <path d={svgPaths.p27a8ec00} stroke="var(--stroke-0, #3C7262)" strokeWidth="5.65903" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="244.799" id="filter0_d_333_16" width="237.768" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="2.82952" dy="3.5369" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.149554 0 0 0 0 0.283579 0 0 0 0 0.243868 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_16" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_16" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[36.784px] left-[calc(50%+6.72px)] not-italic text-[35.948px] text-center text-white top-[calc(50%-7.75px)] translate-x-[-50%] w-[176.845px]">
        <p className="mb-0">{`Ver todas `}</p>
        <p>las cartas</p>
      </div>
      <div className="absolute h-[144.189px] left-[calc(50%-0.29px)] top-[-10.61px] translate-x-[-50%] w-[157.165px]" data-name="ver cartas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
      </div>
    </div>
  );
}