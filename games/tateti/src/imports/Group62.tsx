import imgRectangle28 from "figma:asset/7ab9cee1b0dbd80a012990d467fea2289db19b37.png";

function Frame6() {
  return <div className="h-[50px] shrink-0 w-full" />;
}

function Personaje() {
  return (
    <div className="overflow-clip relative shrink-0 size-[187px]" data-name="personaje_1">
      <div className="absolute h-[163px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[173px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[255.22%] left-[-134.91%] max-w-none top-[-77.61%] w-[240.47%]" src={imgRectangle28} />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame6 />
      <Personaje />
      <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[42px] justify-center leading-[0] not-italic relative shrink-0 text-[#30385c] text-[32px] text-center w-[298px]">
        <p className="css-4hzbpn leading-[36.4px]">¡Ganaste!</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#1a1e31] text-[20px] text-center tracking-[1px]">
        <p className="css-ew64yg leading-[34px]">Tu estrategia habló por vos.</p>
      </div>
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
    <div className="bg-[#2c44b2] content-stretch flex h-[79.769px] items-center justify-center p-[26.59px] relative rounded-[31.908px] shrink-0 w-[288.231px]">
      <p className="css-4hzbpn font-['SF_Pro:Medium',sans-serif] font-[510] leading-[32.971px] relative shrink-0 text-[#ededed] text-[25.526px] text-center w-[181.461px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Volver a jugar `}</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-14px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[297.803px]">
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[447px] relative rounded-[31.908px] shadow-[0px_1.064px_19.038px_4.254px_rgba(0,0,0,0.15)] shrink-0 w-full">
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
    <div className="absolute content-stretch flex flex-col h-[447.225px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[368px]">
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