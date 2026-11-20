import svgPaths from "../../svg/tablero-dificil";

export default function Dificil() {
  return (
    <div className="relative size-full" data-name="dificil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 361">
        <g id="dificil">
          <path d={svgPaths.pb764680} fill="var(--fill-0, #A967BD)" id="Star 13" />
          <g filter="url(#filter1_i_201_71)" id="Vector">
            <path d={svgPaths.pf00e880} fill="var(--fill-0, #9054A2)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="154.289" id="filter1_i_201_71" width="141.94" x="126" y="105.333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_201_71" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}