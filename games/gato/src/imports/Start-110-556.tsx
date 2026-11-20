import svgPaths from "./svg-ye5ro3wmr0";
import imgGato3 from "figma:asset/3e23abba6d703484a24c9bd3459b2da1ec0be466.png";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";
import img110 from "figma:asset/47024adfd3e85d274dc21843334e28e9dd99dc5b.png";
import img191 from "figma:asset/c8af05ec44eb891079ab8f6a7a8d87570e32ea93.png";
import imgGato1 from "figma:asset/91781c497b081403e4108cfc11ee0f1db3e3a0bb.png";
import imgRojoTop1 from "figma:asset/36cb9e26586948b5968543ec8393e41d7b3d9c52.png";
import imgRojoTop3 from "figma:asset/8d919654193ae4942f6de8a3b840840ec3a6bef7.png";
import imgAzulAbajo2 from "figma:asset/5ec0d980b0312f008ff81883c8c4d87a8421bf7b.png";
import imgLilaMedio2 from "figma:asset/447b28d3e94b16f871bfcdf6e5a54c7ae668f7fe.png";
import imgRojoAbajo2 from "figma:asset/4c1f2d26b48066608296bc59334e0df524996f72.png";
import imgLilaTop2 from "figma:asset/b159430c4c677c4ed94d6aac1bd51ecedce89ba3.png";
import imgAzulMedio5 from "figma:asset/532a853563b8bfe99f9f72a8cc7ee029c146b2c0.png";
import img151 from "figma:asset/c6d1319ead5189f45ea6cf756781445fddee50aa.png";
import img41 from "figma:asset/e54d2c41850b272e4fcad2cd9e18f29742c38ed9.png";

function Fondo() {
  return (
    <div className="absolute bottom-[1.11px] h-[124.888px] left-[calc(50%-421.5px)] overflow-clip translate-x-[-50%] w-[800px]" data-name="FONDO">
      <div className="absolute left-0 size-[800px] top-[-675.11px]" data-name="gato 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGato3} />
      </div>
    </div>
  );
}

function Fondo1() {
  return (
    <div className="h-[124.888px] overflow-clip relative w-[800px]" data-name="FONDO">
      <div className="absolute left-0 size-[800px] top-[-675.11px]" data-name="gato 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGato3} />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute bottom-[1.11px] contents left-[calc(50%-21.5px)] translate-x-[-50%]">
      <Fondo />
      <div className="absolute bottom-[1.11px] flex h-[124.888px] items-center justify-center left-[calc(50%+378.5px)] translate-x-[-50%] w-[800px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Fondo1 />
        </div>
      </div>
    </div>
  );
}

function Techo() {
  return (
    <div className="h-[86px] overflow-clip relative shrink-0 w-[800px]" data-name="TECHO">
      <div className="absolute left-[-5px] size-[557px] top-[-3px]" data-name="gato 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGato3} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[86px] items-center relative shrink-0 w-[552px]">
      <Techo />
    </div>
  );
}

function Techo1() {
  return (
    <div className="h-[86px] overflow-clip relative shrink-0 w-[800px]" data-name="TECHO">
      <div className="absolute left-[-5px] size-[557px] top-[-3px]" data-name="gato 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGato3} />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[86px] items-center relative w-[552px]">
      <Techo1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0">
      <Frame9 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame10 />
        </div>
      </div>
      <Frame9 />
      <Frame9 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2abb5] text-[16px] text-center tracking-[-0.32px] w-[82px]">
        <p className="css-4hzbpn leading-[1.2]">{`Hecho con `}</p>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="snake 1">
        <img alt="love" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f2abb5] text-[16px] text-center tracking-[-0.32px] w-[31px]">
        <p className="css-4hzbpn leading-[1.2]">por</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[23.112px] ml-0 mt-0 relative row-1 w-[87px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.0001 23.1116">
        <g id="Group 2">
          <path d={svgPaths.p21c72f80} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p15fe8f00} fill="var(--fill-0, #47225A)" id="Vector_2" />
          <path d={svgPaths.p3fec5bf2} fill="var(--fill-0, #47225A)" id="Vector_3" />
          <path d={svgPaths.p3f01ab00} fill="var(--fill-0, #47225A)" id="Vector_4" />
          <path d={svgPaths.p3737b600} fill="var(--fill-0, #47225A)" id="Vector_5" />
          <path d={svgPaths.p10d4f700} fill="var(--fill-0, #47225A)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group />
    </div>
  );
}

function Frame7() {
  return (
    <a
      href="https://nayic.com.ar/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-[calc(50%+267.5px)] translate-x-[-50%] translate-y-[-50%] cursor-pointer group z-50 transition-transform hover:translate-y-[calc(-50%-2px)]"
    >
      <Frame8 />
      <Group8 />
    </a>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center justify-center pb-[20px] pt-0 px-0 relative shrink-0 text-center w-[233px]">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[#4e3767] text-[32px] w-[298px]">
        <p className="css-4hzbpn leading-[36.4px]">Empezá tu aventura</p>
      </div>
      <p className="css-4hzbpn font-['SF_Pro:Medium_Italic',sans-serif] font-[508] italic leading-[23.399px] relative shrink-0 text-[#3c3c3e] text-[17.697px] w-[234px]" style={{ fontVariationSettings: "'YAXS' 436" }}>{`Usá la barra espaciadora o hacé click para subir. `}</p>
      <p className="css-4hzbpn font-['SF_Pro:Medium_Italic',sans-serif] font-[508] italic leading-[0] relative shrink-0 text-[#3c3c3e] text-[17.697px] w-[234px]" style={{ fontVariationSettings: "'YAXS' 436" }}>
        <span className="font-['SF_Pro:Bold_Italic',sans-serif] font-bold leading-[23.399px]" style={{ fontVariationSettings: "'YAXS' 430" }}>{`¡Cuidado! `}</span>
        <span className="leading-[23.399px]">Si parás, te caés.</span>
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.061px] items-center relative shrink-0 w-full">
      <div className="h-[126px] relative shrink-0 w-[299px]" data-name="1 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.36%] left-[-0.16%] max-w-none top-[-68.99%] w-full" src={img110} />
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#8e3274] content-stretch flex h-[80px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[233px] cursor-pointer hover:brightness-110 transition-all active:scale-95"
    >
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Iniciar Juego
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </button>
  );
}

function Frame1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[263px]">
      <Frame4 />
      <Frame onClick={onClick} />
    </div>
  );
}

function Frame2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-white h-[407px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[30.844px] py-[34.035px] relative size-full">
          <Frame1 onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function Frame3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[388.225px] items-center left-1/2 top-[calc(50%+0.61px)] translate-x-[-50%] translate-y-[-50%] w-[325px]">
      <Frame2 onClick={onClick} />
    </div>
  );
}

function Group3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%+0.61px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame3 onClick={onClick} />
    </div>
  );
}

function Group4({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%+0.61px)] translate-x-[-50%] translate-y-[-50%]">
      <Group3 onClick={onClick} />
    </div>
  );
}

function Group5({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%+0.61px)] translate-x-[-50%] translate-y-[-50%]">
      <Group4 onClick={onClick} />
    </div>
  );
}

function Group6({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%+0.61px)] translate-x-[-50%] translate-y-[-50%]">
      <Group5 onClick={onClick} />
    </div>
  );
}

function Group7({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%+0.61px)] translate-x-[-50%] translate-y-[-50%]">
      <Group6 onClick={onClick} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(50%-260.49px)] top-[calc(50%+89.54px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute flex h-[110.648px] items-center justify-center left-[calc(50%-255.02px)] top-[calc(50%+78.91px)] translate-x-[-50%] translate-y-[-50%] w-[86.855px]" style={{ "--transform-inner-width": "1563", "--transform-inner-height": "1566.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.253deg]">
          <div className="h-[101.205px] relative w-[73.084px]" data-name="19 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[220.45%] left-[-89.94%] max-w-none top-0 w-[305.27%]" src={img191} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[15.885px] left-[calc(50%-301.65px)] top-[calc(50%+90.58px)] translate-x-[-50%] translate-y-[-50%] w-[15.456px]" data-name="19 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[810.31%] left-[-416.84%] max-w-none top-[-405.43%] w-[831.02%]" src={img191} />
        </div>
      </div>
      <div className="absolute h-[31.406px] left-[calc(50%-288.73px)] top-[calc(50%+139.8px)] translate-x-[-50%] translate-y-[-50%] w-[30.557px]" data-name="19 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[810.31%] left-[-416.84%] max-w-none top-[-405.43%] w-[831.02%]" src={img191} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%-197.44px)] top-[calc(50%+37px)] translate-x-[-50%] translate-y-[-50%]">
      <Group1 />
      <div className="absolute h-[182.241px] left-[calc(50%-185.37px)] top-[calc(50%+9.62px)] translate-x-[-50%] translate-y-[-50%] w-[199.736px]" data-name="gato 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[180.8%] left-[-22.26%] max-w-none top-[-39.6%] w-[164.96%]" src={imgGato1} />
        </div>
      </div>
    </div>
  );
}

export default function Start({ onStartClick }: { onStartClick?: () => void }) {
  return (
    <div className="relative size-full overflow-hidden" data-name="start" style={{ backgroundImage: "linear-gradient(104.844deg, rgb(75, 43, 107) 10.974%, rgb(120, 56, 80) 53.272%, rgb(41, 64, 139) 93.198%)" }}>
      <Group9 />
      <div className="absolute h-[166px] left-[calc(50%+139px)] top-[calc(50%-309.5px)] translate-x-[-50%] translate-y-[-50%] w-[35px]" data-name="rojo top_1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[170.24%] left-[-55.74%] max-w-none top-0 w-[806.56%]" src={imgRojoTop1} />
        </div>
      </div>
      <div className="absolute h-[166px] left-[calc(50%+84.5px)] top-[calc(50%-309.5px)] translate-x-[-50%] translate-y-[-50%] w-[74px]" data-name="rojo top_3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[286.05%] left-[-123.38%] max-w-none top-0 w-[638.96%]" src={imgRojoTop3} />
        </div>
      </div>
      <div className="absolute h-[163px] left-[calc(50%+405.5px)] top-[calc(50%+277px)] translate-x-[-50%] translate-y-[-50%] w-[348px]" data-name="azul abajo_2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[213.42%] left-[-0.1%] max-w-none top-[-113.42%] w-[100.2%]" src={imgAzulAbajo2} />
        </div>
      </div>
      <div className="absolute h-[122px] left-[calc(50%-478px)] top-[calc(50%-122.5px)] translate-x-[-50%] translate-y-[-50%] w-[179px]" data-name="lila medio_2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[439.29%] left-[-20.73%] max-w-none top-[-25.89%] w-[300%]" src={imgLilaMedio2} />
        </div>
      </div>
      <div className="absolute h-[239px] left-[calc(50%-465px)] top-[calc(50%+242px)] translate-x-[-50%] translate-y-[-50%] w-[521px]" data-name="rojo abajo_2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[218.14%] left-0 max-w-none top-[-117.92%] w-full" src={imgRojoAbajo2} />
        </div>
      </div>
      <div className="absolute h-[182px] left-[calc(50%-529.5px)] top-[calc(50%-317.5px)] translate-x-[-50%] translate-y-[-50%] w-[76px]" data-name="lila top_2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[219.64%] left-[-105.32%] max-w-none top-0 w-[523.4%]" src={imgLilaTop2} />
        </div>
      </div>
      <div className="absolute h-[82px] left-[calc(50%+611px)] top-[calc(50%+38.5px)] translate-x-[-50%] translate-y-[-50%] w-[125px]" data-name="azul medio_5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[339.52%] left-[-110.98%] max-w-none top-[-232.17%] w-[222.07%]" src={imgAzulMedio5} />
        </div>
      </div>
      <Frame11 />
      <Frame7 />
      <Group7 onClick={onStartClick} />
      <Group2 />
      <div className="absolute h-[150px] left-[calc(50%+159px)] top-[calc(50%-13.5px)] translate-x-[-50%] translate-y-[-50%] w-[149px]" data-name="15 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[145%] left-[-22.69%] max-w-none top-[-23.33%] w-[146.22%]" src={img151} />
        </div>
      </div>
      <div className="absolute flex h-[149px] items-center justify-center left-[calc(50%-82px)] top-[calc(50%-235px)] translate-x-[-50%] translate-y-[-50%] w-[99px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[149px] relative w-[99px]" data-name="4 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[149.85%] left-[-53.44%] max-w-none top-[-15.08%] w-[225.28%]" src={img41} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}