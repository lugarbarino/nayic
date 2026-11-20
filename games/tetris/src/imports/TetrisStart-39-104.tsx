import imgRoca1 from "figma:asset/acfb32633bfb96bcc556f3add87a375c055b497f.png";
import img23 from "figma:asset/e561a759cc81a124d2cad453f997597f9ce3f65d.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Capriola:Regular',sans-serif] h-[39px] leading-[39px] not-italic relative shrink-0 text-[#ececec] text-[24px] w-full">No dejes huecos en tu estrategia</p>
      <div className="font-['SF_Pro:Light_Italic',sans-serif] font-[276.30999755859375] h-[75px] italic leading-[25px] relative shrink-0 text-[#dedede] text-[16px] w-[368px]" style={{ fontVariationSettings: "'YAXS' 400" }}>
        <p className="css-4hzbpn mb-0">{`Cada pieza cuenta. `}</p>
        <p className="css-4hzbpn">Gira, mueve y acelera antes de que sea demasiado tarde.</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron down">
          <path d="M6 9L12 15L18 9" id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Capriola:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-center text-white">Rocas</p>
      <ChevronDown />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0">
      <p className="css-4hzbpn font-['SF_Pro:Regular',sans-serif] font-normal h-[39px] leading-[39px] relative shrink-0 text-[#8eb0cf] text-[20px] text-center w-[273px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Hace click para elgir tu tema: `}</p>
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-center relative shrink-0">
      <Frame3 />
      <div className="h-[69px] relative shrink-0 w-[225px]" data-name="Roca 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRoca1} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#3568c3] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px]">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empeza a jugar
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-center left-[373px] top-[50px] w-[481px]">
      <div className="h-[209px] relative shrink-0 w-[311px]" data-name="2 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[167.97%] left-[-5.42%] max-w-none top-[-22.62%] w-[112.95%]" src={img23} />
        </div>
      </div>
      <Frame2 />
      <Frame4 />
      <Frame />
    </div>
  );
}

export default function TetrisStart() {
  return (
    <div className="relative size-full" data-name="Tetris start" style={{ backgroundImage: "linear-gradient(142.81deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Frame1 />
    </div>
  );
}