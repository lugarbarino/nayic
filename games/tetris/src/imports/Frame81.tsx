import svgPaths from "./svg-p6oi539f1i";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[18.404px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
        <g id="Chevron left">
          <path d={svgPaths.p19353200} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#005eb3] content-stretch flex h-[40px] items-center justify-center relative rounded-[16.103px] shrink-0 w-[94px]" data-name="button">
      <ChevronLeft />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function RotateCw() {
  return (
    <div className="relative shrink-0 size-[18.404px]" data-name="Rotate cw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
        <g clipPath="url(#clip0_49_157)" id="Rotate cw">
          <path d={svgPaths.p53f0280} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
        </g>
        <defs>
          <clipPath id="clip0_49_157">
            <rect fill="white" height="18.4037" width="18.4037" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#005eb3] content-stretch flex h-[40px] items-center justify-center relative rounded-[16.103px] shrink-0 w-full" data-name="button">
      <RotateCw />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[18.404px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
        <g id="Chevron down">
          <path d={svgPaths.p3580f400} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#005eb3] content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-h-px min-w-px relative rounded-[16.103px]" data-name="button">
      <ChevronDown />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronsDown() {
  return (
    <div className="relative shrink-0 size-[18.404px]" data-name="Chevrons down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
        <g id="Chevrons down">
          <path d={svgPaths.p3a5c1540} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#bd3c3f] content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-h-px min-w-px relative rounded-[16.103px]" data-name="button">
      <ChevronsDown />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[17.106px] items-start relative shrink-0 w-[136px]">
      <Button1 />
      <Frame2 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[18.404px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
        <g id="Chevron right">
          <path d={svgPaths.p372d5ac0} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#005eb3] content-stretch flex h-[40px] items-center justify-center relative rounded-[16.103px] shrink-0 w-[96px]" data-name="button">
      <ChevronRight />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative size-full">
      <Button />
      <Frame />
      <Button4 />
    </div>
  );
}