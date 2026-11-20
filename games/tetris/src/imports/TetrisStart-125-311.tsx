import svgPaths from "./svg-hqnbej81z8";
import imgRoca1 from "figma:asset/acfb32633bfb96bcc556f3add87a375c055b497f.png";
import imgGeminiGeneratedImageO3Nx01O3Nx01O3Nx1 from "figma:asset/18d26e0d7a2f4256d07f027dea879df286c57dc7.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
      <div className="font-['Capriola:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#ececec] text-[24px] w-[min-content]">
        <p className="mb-0">{`No dejes huecos `}</p>
        <p>en tu estrategia</p>
      </div>
      <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[46px] italic leading-[25px] relative shrink-0 text-[#8eb0cf] text-[18px] w-[368px]" style={{ fontVariationSettings: "'YAXS' 400" }}>
        Gira, mueve y acelera antes de que sea demasiado tarde.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[153px]">
      <p className="font-['Capriola:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-white w-[175px] whitespace-pre-wrap">Naturaleza</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0">
      <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[39px] italic leading-[39px] relative shrink-0 text-[#8eb0cf] text-[18px] text-center w-[59px] whitespace-pre-wrap" style={{ fontVariationSettings: "'YAXS' 400" }}>{`Tema: `}</p>
      <Frame5 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[27.889px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.8893 27.8893">
        <g id="Arrow right">
          <path d={svgPaths.p7ad6d40} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.32411" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0">
      <Frame3 />
      <div className="h-[36px] relative shrink-0 w-[119px]" data-name="Roca 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRoca1} />
      </div>
      <ArrowRight />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[27.889px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.8893 27.8893">
        <g id="Arrow right">
          <path d={svgPaths.p7ad6d40} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.32411" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Capriola:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-center text-white w-[150px] whitespace-pre-wrap">Aventura</p>
      <ArrowRight1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0">
      <p className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal h-[39px] italic leading-[39px] relative shrink-0 text-[#8eb0cf] text-[18px] w-[192px] whitespace-pre-wrap" style={{ fontVariationSettings: "'YAXS' 400" }}>{`Modo de juego: `}</p>
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start justify-center relative shrink-0">
      <Frame8 />
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start justify-center relative shrink-0 w-full">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0065c1] content-stretch flex h-[71px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[257px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Empeza a jugar
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_18px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[50px] items-center justify-center left-1/2 top-1/2 w-[369px]">
      <div className="h-[83.263px] relative shrink-0 w-[368px]" data-name="Gemini_Generated_Image_o3nx01o3nx01o3nx 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageO3Nx01O3Nx01O3Nx1} />
      </div>
      <Frame9 />
      <Frame />
    </div>
  );
}

export default function TetrisStart() {
  return (
    <div className="relative size-full" data-name="Tetris start" style={{ backgroundImage: "linear-gradient(145.892deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Frame1 />
    </div>
  );
}