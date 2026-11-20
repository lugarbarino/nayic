import svgPaths from "./svg-9re6rr5si4";
import imgVerCartas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";

export default function VerTodas() {
  return (
    <div className="relative size-full" data-name="ver todas">
      <div className="absolute h-[168.145px] left-0 top-0 w-[183.05px]">
        <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 162">
            <g filter="url(#filter0_d_328_85)" id="Star 14">
              <path d={svgPaths.p3a92e200} fill="var(--fill-0, #3C7262)" />
              <path d={svgPaths.paf66200} stroke="var(--stroke-0, #3C7262)" strokeWidth="3.72621" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="161.189" id="filter0_d_328_85" width="156.559" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1.86311" dy="2.32888" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.149554 0 0 0 0 0.283579 0 0 0 0 0.243868 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_85" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_85" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-[calc(50%+4.42px)] not-italic text-[23.67px] text-center text-white top-[calc(50%-4.89px)] translate-x-[-50%] w-[116.444px]">
        <p className="mb-0">{`Ver todas `}</p>
        <p>las cartas</p>
      </div>
      <div className="absolute h-[94.941px] left-[calc(50%-0.19px)] top-[-6.99px] translate-x-[-50%] w-[103.486px]" data-name="ver cartas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
      </div>
    </div>
  );
}