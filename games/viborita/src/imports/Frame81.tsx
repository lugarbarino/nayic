import svgPaths from "./svg-ndov8m3lm8";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron left">
          <path d={svgPaths.p3bb2af00} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92.322px]" data-name="button">
      <ChevronLeft />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron up">
          <path d={svgPaths.p3b19b400} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <ChevronUp />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron down">
          <path d={svgPaths.p3d401380} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full" data-name="button">
      <ChevronDown />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6.662px] items-start relative shrink-0 w-[92.322px]">
      <Button1 />
      <Button2 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[22.842px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Chevron right">
          <path d={svgPaths.p2e7f8f00} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#11312c] content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92.322px]" data-name="button">
      <ChevronRight />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[9.518px] items-end justify-center relative size-full">
      <Button />
      <Frame />
      <Button3 />
    </div>
  );
}