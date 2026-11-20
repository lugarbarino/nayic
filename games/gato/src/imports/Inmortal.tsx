import svgPaths from "./svg-igykp24qvw";
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";
import img191 from "figma:asset/c8af05ec44eb891079ab8f6a7a8d87570e32ea93.png";
import imgGato1 from "figma:asset/91781c497b081403e4108cfc11ee0f1db3e3a0bb.png";
import imgInmortal from "figma:asset/086a7ff2ac735fa11cec54d1aca4c67cdbcf4e93.png";
import img110 from "figma:asset/47024adfd3e85d274dc21843334e28e9dd99dc5b.png";
import img91 from "figma:asset/27b44f2e97e38bbdd93ec9fc41621f0566af340f.png";

function Frame5() {
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

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-[calc(50%+328.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame5 />
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[184px] items-start px-0 py-[20px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[44px] justify-center leading-[0] not-italic relative shrink-0 text-[29.27px] text-white w-[298px]">
        <p className="css-4hzbpn leading-[36.4px]">Volá con gato</p>
      </div>
      <p className="css-4hzbpn font-['SF_Pro:Regular_Italic',sans-serif] font-normal italic leading-[23.399px] min-w-full relative shrink-0 text-[#f2abb5] text-[17.697px] w-[min-content]" style={{ fontVariationSettings: "'YAXS' 400" }}>{`Usá la barra espaciadora o hacé click para subir. `}</p>
      <p className="css-4hzbpn font-['SF_Pro:Medium_Italic',sans-serif] font-[508] italic leading-[23.399px] min-w-full relative shrink-0 text-[#f2abb5] text-[17.697px] w-[min-content]" style={{ fontVariationSettings: "'YAXS' 436" }}>
        <span>{`¡Cuidado! `}</span>
        <span className="font-['SF_Pro:Regular_Italic',sans-serif] font-normal" style={{ fontVariationSettings: "'YAXS' 400" }}>
          Si parás, te caés.
        </span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+9.5px)] top-[calc(50%+21.5px)] translate-x-[-50%] translate-y-[-50%] w-[298px]">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#852e64] content-stretch flex h-[79.769px] items-center justify-center left-[calc(50%+9.5px)] p-[26.59px] rounded-[31.908px] top-[calc(50%+175.38px)] translate-x-[-50%] translate-y-[-50%] w-[288.231px]">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[25.526px] text-center text-white w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¡A Volar!
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(50%-266.76px)] top-[calc(50%+52.91px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute flex h-[103.448px] items-center justify-center left-[calc(50%-260.63px)] top-[calc(50%+44.32px)] translate-x-[-50%] translate-y-[-50%] w-[81.203px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.253deg]">
          <div className="h-[94.619px] relative w-[68.329px]" data-name="19 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[220.45%] left-[-89.94%] max-w-none top-0 w-[305.27%]" src={img191} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[14.852px] left-[calc(50%-306.27px)] top-[calc(50%+53.86px)] translate-x-[-50%] translate-y-[-50%] w-[14.45px]" data-name="19 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[810.31%] left-[-416.84%] max-w-none top-[-405.43%] w-[831.02%]" src={img191} />
        </div>
      </div>
      <div className="absolute h-[29.363px] left-[calc(50%-293.76px)] top-[calc(50%+98.54px)] translate-x-[-50%] translate-y-[-50%] w-[28.569px]" data-name="19 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[810.31%] left-[-416.84%] max-w-none top-[-405.43%] w-[831.02%]" src={img191} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%-206.5px)] top-[calc(50%+4.86px)] translate-x-[-50%] translate-y-[-50%]">
      <Group1 />
      <div className="absolute h-[170.382px] left-[calc(50%-192.87px)] top-[calc(50%-18.31px)] translate-x-[-50%] translate-y-[-50%] w-[186.739px]" data-name="gato 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[180.8%] left-[-22.26%] max-w-none top-[-39.6%] w-[164.96%]" src={imgGato1} />
        </div>
      </div>
    </div>
  );
}

export default function Inmortal() {
  return (
    <div className="relative size-full" data-name="Inmortal">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInmortal} />
      <Frame4 />
      <Frame1 />
      <Frame />
      <div className="absolute h-[169px] left-[calc(50%+9.5px)] top-[calc(50%-155px)] translate-x-[-50%] translate-y-[-50%] w-[400px]" data-name="1 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[236.36%] left-[-0.16%] max-w-none top-[-68.99%] w-full" src={img110} />
        </div>
      </div>
      <div className="absolute flex h-[225px] items-center justify-center left-[calc(50%+481.5px)] top-[calc(50%+356px)] translate-x-[-50%] translate-y-[-50%] w-[562px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[225px] relative w-[562px]" data-name="9 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[250.5%] left-0 max-w-none top-[-150.5%] w-full" src={img91} />
            </div>
          </div>
        </div>
      </div>
      <Group2 />
    </div>
  );
}