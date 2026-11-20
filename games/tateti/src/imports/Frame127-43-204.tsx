import svgPaths from "./svg-9pjgn41qju";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2.157px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c9d0f0] text-[17.255px] text-center tracking-[-0.3451px] w-[88.431px]">
        <p className="css-4hzbpn leading-[1.2]">{`Hecho con `}</p>
      </div>
      <div className="relative shrink-0 size-[34.51px]" data-name="snake 1">
        <img alt="love" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c9d0f0] text-[17.255px] text-center tracking-[-0.3451px] w-[33.431px]">
        <p className="css-4hzbpn leading-[1.2]">por</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[24.924px] ml-0 mt-0 relative row-1 w-[93.824px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.8237 24.9243">
        <g id="Group 2">
          <path d={svgPaths.p242d3f00} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p1dff3b80} fill="var(--fill-0, #29304E)" id="Vector_2" />
          <path d={svgPaths.p3d575f00} fill="var(--fill-0, #29304E)" id="Vector_3" />
          <path d={svgPaths.pf97da00} fill="var(--fill-0, #29304E)" id="Vector_4" />
          <path d={svgPaths.p36dc7480} fill="var(--fill-0, #29304E)" id="Vector_5" />
          <path d={svgPaths.p699e00} fill="var(--fill-0, #29304E)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8.627px] items-center relative size-full">
      <Frame1 />
      <Group1 />
    </div>
  );
}