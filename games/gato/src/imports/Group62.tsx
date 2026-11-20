import imgGato2 from "figma:asset/fffdf0f0685b80465b7b7193bdd536092d7eea96.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 text-[#23252d] text-center w-full">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21.155px] relative shrink-0 text-[13.462px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS DE LA PARTIDA:
      </p>
      <p className="css-4hzbpn font-['SF_Pro:Heavy',sans-serif] font-[860] h-[61.543px] leading-[59.619px] relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1289
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[5px] h-[30px] items-center justify-center leading-[0] relative shrink-0 text-[#343434] w-full">
      <div className="flex flex-col h-[14px] justify-center relative shrink-0 text-[13.462px] text-right w-[85px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[21.155px]">TU RECORD:</p>
      </div>
      <div className="flex flex-col h-[30px] justify-center relative shrink-0 text-[24px] w-[62px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[21.155px]">3000</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full">
      <Frame4 />
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[11.061px] items-center relative shrink-0 w-full">
      <div className="h-[225px] relative shrink-0 w-[579px]" data-name="gato 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[257.92%] left-[0.03%] max-w-none top-[-81.97%] w-full" src={imgGato2} />
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#8e3274] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px]">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jugar de nuevo
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[297.803px]">
      <Frame5 />
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
    <div className="absolute content-stretch flex flex-col h-[388.225px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[368px]">
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Group2 />
    </div>
  );
}

export default function Group4() {
  return (
    <div className="relative size-full">
      <Group3 />
    </div>
  );
}