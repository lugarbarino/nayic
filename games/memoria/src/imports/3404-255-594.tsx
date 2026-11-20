import svgPaths from "./svg-t0g4cbrmiu";
import imgEasy from "figma:asset/18575334af85e3bc5282b39625b4f586977fc0d4.png";
import imgEasy1 from "figma:asset/00d1358d020569606eb1993a7db5b5b2428b3c23.png";
import imgEasy2 from "figma:asset/3bafeaf96dd7ead134876226f920694fc9b5e479.png";

function Easy() {
  return (
    <div className="h-[115.296px] relative shrink-0 w-[125.516px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="108.929" src={imgEasy} width="106.074" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
          <path d={svgPaths.p7a23a00} fill="var(--fill-0, #85438E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center mb-[-21.619px] relative shrink-0">
      <Easy />
    </div>
  );
}

function Easy1() {
  return (
    <div className="h-[115.296px] relative shrink-0 w-[125.516px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="108.929" src={imgEasy} width="106.074" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
          <path d={svgPaths.p7a23a00} fill="var(--fill-0, #85438E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center mb-[-21.619px] relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Easy1 key={i} />
      ))}
    </div>
  );
}

function Easy2() {
  return (
    <div className="h-[123px] relative shrink-0 w-[134px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[123.84%] left-[-9.75%] max-w-none top-[-11.93%] w-[113.76%]" src={imgEasy1} />
      </div>
    </div>
  );
}

function Easy3() {
  return (
    <div className="h-[115.296px] relative shrink-0 w-[125.516px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="108.929" src={imgEasy} width="106.074" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
          <path d={svgPaths.p7a23a00} fill="var(--fill-0, #85438E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center mb-[-21.619px] relative shrink-0">
      <Easy2 />
      {[...Array(2).keys()].map((_, i) => (
        <Easy3 key={i} />
      ))}
    </div>
  );
}

function Easy4() {
  return (
    <div className="h-[115.296px] relative shrink-0 w-[125.516px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="108.929" src={imgEasy} width="106.074" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
          <path d={svgPaths.p7a23a00} fill="var(--fill-0, #85438E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center mb-[-21.619px] relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Easy4 key={i} />
      ))}
    </div>
  );
}

function Easy5() {
  return (
    <div className="h-[115.296px] relative shrink-0 w-[125.516px]" data-name="easy">
      <div className="absolute inset-[2.76%_7.74%]">
        <img alt="" className="block max-w-none size-full" height="108.929" src={imgEasy} width="106.074" />
      </div>
      <div className="absolute inset-[29.18%_31.82%_29.19%_32.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
          <path d={svgPaths.p7a23a00} fill="var(--fill-0, #85438E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Easy6() {
  return (
    <div className="h-[123px] relative shrink-0 w-[134px]" data-name="easy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.1%] left-[-9.75%] max-w-none top-[-14.74%] w-[119.51%]" src={imgEasy2} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mb-[-21.619px] relative shrink-0">
      <Easy5 />
      <Easy6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[calc(50%+2.37px)] pb-[21.619px] pt-0 px-0 top-[152px] translate-x-[-50%]">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame2 />
      <Frame4 />
      <Frame />
      <Frame1 />
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
    <div className="absolute bg-[#4b294f] content-stretch flex h-[78px] items-start left-[calc(50%-137px)] rounded-[21px] top-[calc(50%-368px)] translate-x-[-50%] translate-y-[-50%] w-[75px]" data-name="button">
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
    <div className="absolute bg-white content-stretch flex h-[78px] items-start left-[calc(50%+138px)] rounded-[21px] top-[calc(50%-368px)] translate-x-[-50%] translate-y-[-50%] w-[75px]" data-name="button">
      <SystemChipsItem1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-[#1c101d] relative size-full to-[#4b294f]" data-name="3404">
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#f3f3f4] text-[32px] text-nowrap top-[158px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1:00
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[158px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3400
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-166.5px)] text-[#b784c7] text-[14px] text-nowrap top-[130px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIEMPO
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+167.5px)] text-[#b784c7] text-[14px] text-nowrap text-right top-[130px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PUNTOS
      </p>
      <Frame5 />
      <Button />
      <Button1 />
    </div>
  );
}