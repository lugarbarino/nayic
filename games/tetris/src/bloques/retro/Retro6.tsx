import svgPaths from "./retro6-trazos";

export default function Group() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 115">
        <g clipPath="url(#clip0_59_155)" id="Group 7">
          <path d="M115 0H0V115H115V0Z" fill="var(--fill-0, #376869)" id="Vector" />
          <path d="M0 115V0H115L0 115Z" fill="var(--fill-0, #ABF8FB)" id="Vector_2" />
          <path d={svgPaths.p3240de00} fill="var(--fill-0, #68C0C3)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_59_155">
            <rect fill="white" height="115" width="115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}