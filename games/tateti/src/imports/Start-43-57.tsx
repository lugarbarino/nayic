import svgPaths from "./svg-lsu9zhsy1a";
import imgRectangle23 from "figma:asset/35cc8274d1f37113dfea8672ce0099dfa276599f.png";
import imgRectangle22 from "figma:asset/e427cdff90b620f63b175ccf12938bfe85678597.png";
import imgGato21 from "figma:asset/43ed8e526af030d6be6bb5981f4ffd72755f09d6.png";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[9.389px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[45.07px] justify-center not-italic relative shrink-0 text-[30.046px] text-white tracking-[-0.2934px] w-full">
        <p className="css-4hzbpn leading-[22.535px]">{`3 fichas por jugador `}</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[24.804px] italic justify-center relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[1.8779px] w-full">
        <p className="css-4hzbpn leading-[31.924px]">Muévelas para ganar</p>
      </div>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="h-[107.62px] relative rounded-[13.797px] shrink-0 text-[#ececec] text-center w-[103.48px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[30.354px] left-[52.57px] text-[11.112px] top-[55.89px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADOR
      </p>
      <div className="absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[36.808px] justify-center leading-[0] left-[calc(50%+0.35px)] text-[44.152px] top-[37.85px] translate-x-[-50%] translate-y-[-50%] w-[70.839px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[30.354px]">1</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f111a] content-stretch flex h-[107.62px] items-start relative rounded-[28.975px] shrink-0 w-[103.48px]" data-name="button">
      <SystemChipsItem />
    </div>
  );
}

function SystemChipsItem1() {
  return (
    <div className="h-[106.809px] relative rounded-[13.693px] shrink-0 text-[#ececec] text-center w-[102.701px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[30.125px] left-[51.48px] text-[11.028px] top-[63.05px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADORES
      </p>
      <div className="absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[36.531px] justify-center leading-[0] left-[calc(50%+0.34px)] text-[43.819px] top-[45.15px] translate-x-[-50%] translate-y-[-50%] w-[70.305px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[30.125px]">2</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f111a] content-stretch flex h-[106.809px] items-start relative rounded-[28.756px] shrink-0 w-[102.701px]" data-name="button">
      <div aria-hidden="true" className="absolute border-3 border-[#4264ff] border-solid inset-0 pointer-events-none rounded-[28.756px]" />
      <SystemChipsItem1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[63.61px] h-[102px] items-center relative shrink-0 w-[270px]">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] min-w-full relative shrink-0 text-[#c9d0f0] text-[16px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[1.2]">Seleccioná cantidad de jugadores:</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[34.51px] items-start justify-center relative shrink-0 w-[297.647px]">
      <Frame4 />
      <Frame13 />
    </div>
  );
}

function Personaje() {
  return (
    <div className="absolute left-[-0.75px] overflow-clip size-[117.172px] top-[-1.85px]" data-name="personaje_5">
      <div className="absolute h-[120.305px] left-[3.13px] top-0 w-[114.039px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle23} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.389px] items-center px-[7.512px] py-[6.573px] relative w-full">
          <div className="bg-[#0f111a] rounded-[18.779px] shrink-0 size-[102.346px]" />
          <Personaje />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[117.369px]">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] text-center tracking-[-0.4px] w-full">
        <p className="css-4hzbpn leading-[1.2]">{`Jugador  1:`}</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Personaje1() {
  return (
    <div className="absolute left-0 overflow-clip size-[117.172px] top-0" data-name="personaje_6">
      <div className="absolute h-[112.674px] left-[-0.47px] top-[4.28px] w-[117.369px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle22} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.389px] items-center p-[7.512px] relative w-full">
          <div className="bg-[#0f111a] rounded-[18.779px] shrink-0 size-[102.346px]" />
          <Personaje1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[117.369px]">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] text-center tracking-[-0.4px] w-full">
        <p className="css-4hzbpn leading-[1.2]">Jugador 2:</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[49.764px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[298px]">
      <Frame10 />
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] min-w-full relative shrink-0 text-[#c9d0f0] text-[16px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[1.2]">Clickeá para ir cambiando de personaje</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start justify-center relative shrink-0">
      <Frame5 />
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="h-[162px] relative shrink-0 w-[512px]" data-name="gato (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGato21} />
      </div>
      <Frame14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#2c44b2] content-stretch flex h-[86.025px] items-center justify-center p-[28.675px] relative rounded-[34.41px] shrink-0 w-[310.838px]">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[35.557px] relative shrink-0 text-[#ededed] text-[27.528px] text-center w-[195.693px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Iniciar juego
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-15.098px_4.314px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame2() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8.627px] items-center relative shrink-0">
      <Frame2 />
      <Group1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%-0.5px)] top-[calc(50%-27.58px)] translate-x-[-50%] translate-y-[-50%] w-[660px]">
      <Frame15 />
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function Start() {
  return (
    <div className="relative size-full" data-name="start" style={{ backgroundImage: "linear-gradient(134.547deg, rgb(12, 14, 23) 0%, rgb(58, 68, 111) 115.08%)" }}>
      <Frame11 />
    </div>
  );
}