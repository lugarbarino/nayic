import svgPaths from "./svg-ydgt95lvac";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";
import img110 from "figma:asset/47024adfd3e85d274dc21843334e28e9dd99dc5b.png";
import img191 from "figma:asset/c8af05ec44eb891079ab8f6a7a8d87570e32ea93.png";
import imgGato1 from "figma:asset/91781c497b081403e4108cfc11ee0f1db3e3a0bb.png";
import imgStart from "figma:asset/e505a6f597797a90be56e934df808b4f975d1e73.png";
import img91 from "figma:asset/27b44f2e97e38bbdd93ec9fc41621f0566af340f.png";
import img510 from "figma:asset/b61c7119ac678d66c83c11ed2386aec30be9212b.png";
import img41 from "figma:asset/e54d2c41850b272e4fcad2cd9e18f29742c38ed9.png";

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
    <div className="h-[22.414px] relative shrink-0 w-[91px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 22.4137">
        <g id="Group 2">
          <path d={svgPaths.p256cb80} fill="var(--fill-0, #F2ABB5)" id="Vector" />
          <path d={svgPaths.p33fff300} fill="var(--fill-0, #F2ABB5)" id="Vector_2" />
          <path d={svgPaths.p2ac9e880} fill="var(--fill-0, #F2ABB5)" id="Vector_3" />
          <path d={svgPaths.p294f05c0} fill="var(--fill-0, #F2ABB5)" id="Vector_4" />
          <path d={svgPaths.p1ee35b80} fill="var(--fill-0, #F2ABB5)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-[calc(50%+267.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame8 />
      <Group />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start pb-[20px] pt-0 px-0 relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[42px] justify-center leading-[0] not-italic relative shrink-0 text-[#163b35] text-[29.27px] w-[298px]">
        <p className="css-4hzbpn leading-[36.4px]">Volá con gato</p>
      </div>
      <p className="css-4hzbpn font-['SF_Pro:Medium_Italic',sans-serif] font-[508] italic leading-[23.399px] min-w-full relative shrink-0 text-[#646364] text-[17.697px] w-[min-content]" style={{ fontVariationSettings: "'YAXS' 436" }}>{`Usá la barra espaciadora o hacé click para subir. `}</p>
      <p className="css-4hzbpn font-['SF_Pro:Medium_Italic',sans-serif] font-[508] italic leading-[23.399px] min-w-full relative shrink-0 text-[#646364] text-[17.697px] w-[min-content]" style={{ fontVariationSettings: "'YAXS' 436" }}>
        ¡Cuidado! Si parás, te caés.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.061px] items-center relative shrink-0 w-full">
      <div className="h-[169px] relative shrink-0 w-[400px]" data-name="1 10">
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

function Frame() {
  return (
    <div className="bg-[#8e3274] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px]">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Iniciar Juego
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[297.803px]">
      <Frame4 />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[407px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[30.844px] py-[34.035px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[388.225px] items-center left-[calc(50%-0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%] w-[368px]">
      <Frame2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[calc(50%-0.39px)] translate-x-[-50%] translate-y-[-50%]">
      <Group6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(50%-392.02px)] top-[calc(50%+126.11px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute flex h-[105.43px] items-center justify-center left-[calc(50%-384.91px)] top-[calc(50%+118.43px)] translate-x-[-50%] translate-y-[-50%] w-[82.76px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.253deg]">
          <div className="h-[96.433px] relative w-[69.638px]" data-name="19 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[220.45%] left-[-89.94%] max-w-none top-0 w-[305.27%]" src={img191} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[15.136px] left-[calc(50%-433.14px)] top-[calc(50%+127.06px)] translate-x-[-50%] translate-y-[-50%] w-[14.727px]" data-name="19 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[810.31%] left-[-416.84%] max-w-none top-[-405.43%] w-[831.02%]" src={img191} />
        </div>
      </div>
      <div className="absolute h-[29.925px] left-[calc(50%-420.03px)] top-[calc(50%+171.54px)] translate-x-[-50%] translate-y-[-50%] w-[29.116px]" data-name="19 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[810.31%] left-[-416.84%] max-w-none top-[-405.43%] w-[831.02%]" src={img191} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%-329.5px)] top-[calc(50%+78px)] translate-x-[-50%] translate-y-[-50%]">
      <Group1 />
      <div className="absolute h-[173.647px] left-[calc(50%-313.66px)] top-[calc(50%+56.32px)] translate-x-[-50%] translate-y-[-50%] w-[190.317px]" data-name="gato 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[180.8%] left-[-22.26%] max-w-none top-[-39.6%] w-[164.96%]" src={imgGato1} />
        </div>
      </div>
    </div>
  );
}

export default function Start() {
  return (
    <div className="relative size-full" data-name="start">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStart} />
      <Frame7 />
      <div className="absolute flex h-[191px] items-center justify-center left-[calc(50%+200.5px)] top-[calc(50%+379px)] translate-x-[-50%] translate-y-[-50%] w-[480px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[191px] relative w-[480px]" data-name="9 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[250.5%] left-0 max-w-none top-[-150.5%] w-full" src={img91} />
            </div>
          </div>
        </div>
      </div>
      <Group7 />
      <Group2 />
      <div className="absolute h-[251px] left-[calc(50%-176.5px)] top-[calc(50%-338px)] translate-x-[-50%] translate-y-[-50%] w-[188px]" data-name="5 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[187.42%] left-[-86.32%] max-w-none top-[0.07%] w-[250.36%]" src={img510} />
        </div>
      </div>
      <div className="absolute flex h-[116px] items-center justify-center left-[calc(50%+266px)] top-[calc(50%-206.5px)] translate-x-[-50%] translate-y-[-50%] w-[77px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[116px] relative w-[77px]" data-name="4 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[149.85%] left-[-53.44%] max-w-none top-[-15.08%] w-[225.28%]" src={img41} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}