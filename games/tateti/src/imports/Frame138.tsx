import svgPaths from "./svg-gvcvva861r";
import imgGato21 from "figma:asset/43ed8e526af030d6be6bb5981f4ffd72755f09d6.png";
import imgRectangle23 from "figma:asset/35cc8274d1f37113dfea8672ce0099dfa276599f.png";
import imgRectangle22 from "figma:asset/e427cdff90b620f63b175ccf12938bfe85678597.png";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="h-[162px] relative shrink-0 w-[512px]" data-name="gato (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGato21} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10.506px] items-center leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[50.427px] justify-center not-italic relative shrink-0 text-[33.618px] text-white tracking-[-0.3283px] w-full">
        <p className="css-4hzbpn leading-[25.214px]">{`3 fichas por jugador `}</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[27.753px] italic justify-center relative shrink-0 text-[#f6f6f6] text-[22.378px] tracking-[2.1011px] w-full">
        <p className="css-4hzbpn leading-[35.719px]">Muévelas para ganar</p>
      </div>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="h-[120.413px] relative rounded-[15.438px] shrink-0 text-[#ececec] text-center w-[115.782px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[33.963px] left-[58.93px] text-[12.433px] top-[62.54px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADOR
      </p>
      <div className="absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[41.184px] justify-center leading-[0] left-[calc(50%+0.39px)] text-[49.4px] top-[42.35px] translate-x-[-50%] translate-y-[-50%] w-[79.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[33.963px]">1</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#191e33] content-stretch flex h-[120.413px] items-start relative rounded-[32.419px] shrink-0 w-[115.782px]" data-name="button">
      <SystemChipsItem />
    </div>
  );
}

function SystemChipsItem1() {
  return (
    <div className="h-[119.506px] relative rounded-[15.321px] shrink-0 text-[#ececec] text-center w-[114.91px]" data-name="System / Chips Item">
      <p className="absolute css-ew64yg font-['SF_Pro:Bold',sans-serif] font-bold leading-[33.707px] left-[57.38px] text-[12.339px] top-[70.55px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        JUGADORES
      </p>
      <div className="absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[40.874px] justify-center leading-[0] left-[calc(50%+0.39px)] text-[49.028px] top-[50.51px] translate-x-[-50%] translate-y-[-50%] w-[78.663px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[33.707px]">2</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#191e33] content-stretch flex h-[119.506px] items-start relative rounded-[32.175px] shrink-0 w-[114.91px]" data-name="button">
      <div aria-hidden="true" className="absolute border-[#4264ff] border-[3.357px] border-solid inset-0 pointer-events-none rounded-[32.175px]" />
      <SystemChipsItem1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[71.172px] h-[114.126px] items-center relative shrink-0 w-[302.097px]">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[39.161px] items-start justify-center relative shrink-0 w-[333.031px]">
      <Frame4 />
      <Frame13 />
    </div>
  );
}

function Personaje() {
  return (
    <div className="absolute left-[-0.84px] overflow-clip size-[131.101px] top-[-2.07px]" data-name="personaje_5">
      <div className="absolute h-[134.606px] left-[3.51px] top-0 w-[127.596px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle23} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10.506px] items-center px-[8.405px] py-[7.354px] relative w-full">
          <div className="bg-[#191e33] rounded-[21.011px] shrink-0 size-[114.512px]" />
          <Personaje />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[131.321px]">
      <Frame6 />
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#c9d0f0] text-[17.902px] text-center tracking-[-0.358px] w-full">
        <p className="css-4hzbpn leading-[1.2]">{`Jugador  1`}</p>
      </div>
    </div>
  );
}

function Personaje1() {
  return (
    <div className="absolute left-0 overflow-clip size-[131.101px] top-0" data-name="personaje_6">
      <div className="absolute h-[126.069px] left-[-0.53px] top-[4.79px] w-[131.321px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle22} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10.506px] items-center p-[8.405px] relative w-full">
          <div className="bg-[#191e33] rounded-[21.011px] shrink-0 size-[114.512px]" />
          <Personaje1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[131.321px]">
      <Frame7 />
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#c9d0f0] text-[17.902px] text-center tracking-[-0.358px] w-full">
        <p className="css-4hzbpn leading-[1.2]">Jugador 2</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[55.68px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[14.545px] items-center relative shrink-0 w-[333.426px]">
      <div className="flex flex-col font-['SF_Pro_Display:Italic',sans-serif] h-[48.112px] italic justify-center leading-[22.378px] relative shrink-0 text-[#f6f6f6] text-[22.378px] text-center tracking-[2.1011px] w-full">
        <p className="css-4hzbpn mb-0">{`Clickeá para cambiar `}</p>
        <p className="css-4hzbpn">de personaje:</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[31.329px] items-start justify-center relative shrink-0">
      <Frame5 />
      <Frame12 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame15 />
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

export default function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative size-full">
      <Frame16 />
      <Frame />
      <Frame1 />
    </div>
  );
}