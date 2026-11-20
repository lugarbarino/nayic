import svgPaths from "../../svg/tablero-medio";
import imgMedio from "../../assets/niveles/medio.webp";

export default function Medio() {
  return (
    <div className="relative size-full" data-name="medio">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="341.065" src={imgMedio} width="332.126" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 151">
          <g filter="url(#filter0_i_201_53)" id="Vector">
            <path d={svgPaths.p29c37d00} fill="var(--fill-0, #5568BF)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="154.289" id="filter0_i_201_53" width="141.94" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="7" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_201_53" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}