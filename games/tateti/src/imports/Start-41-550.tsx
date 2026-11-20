import svgPaths from "./svg-9jnbw1kyw7";
import imgRectangle23 from "figma:asset/35cc8274d1f37113dfea8672ce0099dfa276599f.png";
import imgRectangle22 from "figma:asset/e427cdff90b620f63b175ccf12938bfe85678597.png";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";
import imgGato21 from "figma:asset/43ed8e526af030d6be6bb5981f4ffd72755f09d6.png";

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.472px] items-center leading-[0] left-[61px] text-center top-[199px] w-[314px]">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[40.603px] justify-center not-italic relative shrink-0 text-[28.874px] text-white tracking-[-0.2648px] w-[306.782px]">
        <p className="css-4hzbpn leading-[20.333px]">{`3 fichas por jugador `}</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[22.381px] italic justify-center relative shrink-0 text-[#cdcfd3] text-[20px] tracking-[1.6944px] w-full">
        <p className="css-4hzbpn leading-[28.805px]">Muévelas para ganar</p>
      </div>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="font-['SF_Pro:Bold',sans-serif] font-bold h-[108.395px] relative rounded-[13.897px] shrink-0 text-[#ececec] text-center w-[104.226px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg leading-[30.573px] left-[52.74px] text-[11.192px] top-[56.3px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADOR
      </p>
      <div className="absolute flex flex-col h-[37.074px] justify-center leading-[0] left-[calc(50%+0.35px)] text-[44.47px] top-[38.12px] translate-x-[-50%] translate-y-[-50%] w-[71.349px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[30.573px]">1</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2c44b2] content-stretch flex h-[108.395px] items-start relative rounded-[29.183px] shrink-0 w-[104.226px]" data-name="button">
      <SystemChipsItem />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-12.507px_5.559px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function SystemChipsItem1() {
  return (
    <div className="font-['SF_Pro:Bold',sans-serif] font-bold h-[108.395px] relative rounded-[13.897px] shrink-0 text-[#ececec] text-center w-[104.226px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg leading-[30.573px] left-[52.22px] text-[11.192px] top-[63.99px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADORES
      </p>
      <div className="absolute flex flex-col h-[37.074px] justify-center leading-[0] left-[calc(50%+0.35px)] text-[44.47px] top-[45.82px] translate-x-[-50%] translate-y-[-50%] w-[71.349px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[30.573px]">2</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#d13735] content-stretch flex h-[108.395px] items-start relative rounded-[29.183px] shrink-0 w-[104.226px]" data-name="button">
      <SystemChipsItem1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_12.591px_4.162px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8.627px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#c9d0f0] text-[18px] w-[131px]">
        <p className="css-4hzbpn leading-[1.2]">Seleccioná cantidad de jugadores:</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[24px] top-[304px] w-[388px]">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[98px]">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#c9d0f0] text-[18px] w-[122px]">
        <p className="css-4hzbpn leading-[1.2]">Clickeá para ir cambiando de personaje:</p>
      </div>
    </div>
  );
}

function Personaje() {
  return (
    <div className="absolute left-0 overflow-clip size-[117.172px] top-0" data-name="personaje_5">
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
          <div className="bg-[#1a1e31] rounded-[18.779px] shrink-0 size-[102.346px]" />
          <Personaje />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[117.369px]">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#cdcfd3] text-[20px] text-center tracking-[-0.4px] w-full">
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
          <div className="bg-[#1a1e31] rounded-[18.779px] shrink-0 size-[102.346px]" />
          <Personaje1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[117.369px]">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#cdcfd3] text-[20px] text-center tracking-[-0.4px] w-full">
        <p className="css-4hzbpn leading-[1.2]">Jugador 2:</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[34.51px] items-center left-[24px] top-[466px] w-[388px]">
      <Frame14 />
      <Frame10 />
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
          <path d={svgPaths.p1dff3b80} fill="var(--fill-0, #30385C)" id="Vector_2" />
          <path d={svgPaths.p3d575f00} fill="var(--fill-0, #30385C)" id="Vector_3" />
          <path d={svgPaths.pf97da00} fill="var(--fill-0, #30385C)" id="Vector_4" />
          <path d={svgPaths.p36dc7480} fill="var(--fill-0, #30385C)" id="Vector_5" />
          <path d={svgPaths.p699e00} fill="var(--fill-0, #30385C)" id="Vector_6" />
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
    <div className="absolute content-stretch flex flex-col gap-[25.882px] items-center left-[calc(50%+3.5px)] top-[calc(50%+230.21px)] translate-x-[-50%] translate-y-[-50%] w-[329px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function Start() {
  return (
    <div className="relative size-full" data-name="start" style={{ backgroundImage: "linear-gradient(105.242deg, rgb(12, 14, 23) 0%, rgb(65, 76, 125) 115.08%)" }}>
      <div className="absolute h-[141px] left-[13px] top-[71px] w-[410px]" data-name="gato (2) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.73%] left-[-3.62%] max-w-none top-[0.27%] w-[108.99%]" src={imgGato21} />
        </div>
      </div>
      <Frame4 />
      <Frame5 />
      <Frame12 />
      <Frame11 />
    </div>
  );
}