import svgPaths from "./svg-bzog21zwjf";

function ClipPathGroup() {
  return <div className="absolute contents inset-0" data-name="Clip path group" />;
}

function Bg1() {
  return (
    <div className="absolute bottom-0 h-[915px] left-0 overflow-clip w-[32846px]" data-name="BG 1">
      <ClipPathGroup />
    </div>
  );
}

export default function Bg() {
  return (
    <div className="relative size-full" data-name="BG" style={{ backgroundImage: "linear-gradient(90deg, rgb(95, 40, 95) 0%, rgb(38, 27, 65) 30.288%, rgb(28, 46, 108) 56.25%, rgb(78, 55, 103) 80.769%, rgb(95, 40, 95) 100%)" }}>
      <div className="absolute inset-[-12.85%_51.85%_111.79%_48.1%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3767 9.66358">
          <path clipRule="evenodd" d={svgPaths.p3a22200} fill="url(#paint0_linear_75_986)" fillRule="evenodd" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_75_986" x1="8.68836" x2="8.68836" y1="9.66358" y2="0">
              <stop stopColor="#0C072A" />
              <stop offset="1" stopColor="#0E001F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[-12.85%_51.85%_111.79%_48.1%] mix-blend-multiply" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3767 9.66358">
          <path clipRule="evenodd" d={svgPaths.p3a22200} fill="url(#paint0_linear_75_525)" fillRule="evenodd" id="Vector" opacity="0.3" style={{ mixBlendMode: "multiply" }} />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_75_525" x1="17.3767" x2="0" y1="4.83179" y2="4.83179">
              <stop stopColor="#7A70D1" />
              <stop offset="0.13" stopColor="#6B53B1" />
              <stop offset="0.29" stopColor="#5C358F" />
              <stop offset="0.45" stopColor="#511E75" />
              <stop offset="0.62" stopColor="#480D62" />
              <stop offset="0.8" stopColor="#430357" />
              <stop offset="0.99" stopColor="#420054" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[-7.08%_45.67%_-8.34%_44.68%] items-center justify-center">
        <div className="flex-none h-[1056.13px] rotate-[180deg] w-[3169px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector"></g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[14.56%_10.44%_84.53%_89.52%] mix-blend-screen" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7249 8.28816">
          <g id="Vector" opacity="0.35" style={{ mixBlendMode: "screen" }}>
            <path d={svgPaths.p1986c200} fill="var(--fill-0, #FFCE61)" />
          </g>
        </svg>
      </div>
      <Bg1 />
    </div>
  );
}