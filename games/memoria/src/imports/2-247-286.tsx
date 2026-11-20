import svgPaths from "./svg-xkga0js13i";
import imgEasy from "figma:asset/3eb9918f022d178596ac97cab0eb194eaaa1147f.png";

function Easy() {
  return (
    <div className="h-[163.587px] relative shrink-0 w-[178.088px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="154.554" src={imgEasy} width="150.503" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 69">
          <path d={svgPaths.p7e65580} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center mb-[-30.675px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy key={i} />
      ))}
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[163.587px] relative shrink-0 w-[178.088px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="154.554" src={imgEasy} width="150.503" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 69">
          <path d={svgPaths.p7e65580} fill="var(--fill-0, #50917D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mb-[-30.675px] relative shrink-0">
      <Easy1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-1/2 pb-[30.675px] pt-0 px-0 top-[calc(50%+89.16px)] translate-x-[-50%] translate-y-[-50%] w-[343px]">
      <Frame1 />
      <Frame />
      <Frame1 />
      <Frame />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute left-[26px] size-[24px] top-[16px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
      <ArrowLeft />
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38.5px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[37px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salir
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#4b294f] content-stretch flex h-[78px] items-start left-[22px] rounded-[21px] top-[19px] w-[75px]" data-name="button">
      <SystemChipsItem />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute left-[26px] size-[24px] top-[15px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_247_290)" id="Settings">
          <g id="Icon">
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3737f500} stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_247_290">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SystemChipsItem1() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38px] text-[#23252d] text-[12px] text-center text-nowrap top-[39px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ajustes
      </p>
      <Settings />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[78px] items-start left-[297px] rounded-[21px] top-[19px] w-[75px]" data-name="button">
      <SystemChipsItem1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-[#1c101d] relative size-full to-[#4b294f]" data-name="2">
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[67px] text-[#f3f3f4] text-[32px] text-center text-nowrap top-[158px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1:00
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[322.5px] text-[#f3f3f4] text-[32px] text-center text-nowrap top-[158px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3400
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[62px] text-[#b784c7] text-[14px] text-center text-nowrap top-[130px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIEMPO
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[333.5px] text-[#b784c7] text-[14px] text-center text-nowrap top-[130px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <Frame2 />
      <Button />
      <Button1 />
    </div>
  );
}