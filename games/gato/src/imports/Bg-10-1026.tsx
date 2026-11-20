import svgPaths from "./svg-5v3j46dn3d";
import img59 from "figma:asset/7f3cd6e7bd4f74c12939d3eda695aba00f6c6517.png";

function Group() {
  return (
    <div className="absolute bottom-0 h-[474px] left-0 w-[32875px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32875 474">
        <g id="Group 6">
          <path d={svgPaths.pcde9c00} fill="url(#paint0_linear_10_943)" id="Vector 2" />
          <path d={svgPaths.p36d47880} fill="url(#paint1_linear_10_943)" id="Vector 3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_943" x1="32875" x2="0" y1="219.769" y2="219.769">
            <stop offset="0.0144231" stopColor="#713063" />
            <stop offset="0.452608" stopColor="#253572" />
            <stop offset="1" stopColor="#552657" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_10_943" x1="0" x2="32875" y1="338.891" y2="338.891">
            <stop stopColor="#4C2351" />
            <stop offset="0.547392" stopColor="#233062" />
            <stop offset="0.985577" stopColor="#642A58" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Bg() {
  return (
    <div className="relative size-full" data-name="BG" style={{ backgroundImage: "linear-gradient(90deg, rgb(95, 40, 95) 0%, rgb(73, 60, 105) 30.288%, rgb(41, 64, 139) 56.25%, rgb(78, 55, 103) 80.769%, rgb(142, 50, 116) 100%)" }}>
      <Group />
      <div className="absolute flex h-[257px] items-center justify-center left-[5034px] top-[751px] w-[151px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[257px] relative w-[151px]" data-name="5 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[246.96%] left-[-321.7%] max-w-none top-0 w-[421.7%]" src={img59} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}