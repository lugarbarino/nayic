import svgPaths from '@/imports/svg-z4hp8aypht';

interface TabletControlsProps {
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  rotatePiece: () => void;
  drop: () => void;
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[15.255px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2546 15.2546">
        <path d={svgPaths.p22dabd00} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.27122" />
      </svg>
    </div>
  );
}

function RotateCw() {
  return (
    <div className="relative shrink-0 size-[15.255px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2546 15.2546">
        <g clipPath="url(#clip0_64_776)">
          <path d={svgPaths.p2840b358} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.27122" />
        </g>
        <defs>
          <clipPath id="clip0_64_776">
            <rect fill="white" height="15.2546" width="15.2546" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[15.255px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2546 15.2546">
        <path d={svgPaths.p22cc9980} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.27122" />
      </svg>
    </div>
  );
}

function ChevronsDown() {
  return (
    <div className="relative shrink-0 size-[15.255px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2546 15.2546">
        <path d={svgPaths.p3104e200} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.27122" />
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[15.255px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2546 15.2546">
        <path d={svgPaths.p35dda300} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.27122" />
      </svg>
    </div>
  );
}

export function TabletControls({
  moveLeft,
  moveRight,
  moveDown,
  rotatePiece,
  drop,
}: TabletControlsProps) {
  return (
    <div className="absolute content-stretch flex gap-[13.262px] h-[93.042px] items-center justify-center left-1/2 -translate-x-1/2 bottom-8 z-50">
      {/* Left button */}
      <div 
        onClick={moveLeft}
        className="bg-[#0065c1] content-stretch flex h-[33.156px] items-center justify-center relative rounded-[13.348px] shrink-0 w-[77.916px] cursor-pointer active:bg-[#0056a3] active:scale-95 transition-all"
      >
        <ChevronLeft />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-5.72px_2.542px_0px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Center buttons group */}
      <div className="content-stretch flex flex-col gap-[14.179px] items-start relative shrink-0 w-[112.729px]">
        {/* Rotate button */}
        <div 
          onClick={rotatePiece}
          className="bg-[#0065c1] content-stretch flex h-[33.156px] items-center justify-center relative rounded-[13.348px] shrink-0 w-full cursor-pointer active:bg-[#0056a3] active:scale-95 transition-all"
        >
          <RotateCw />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-5.72px_2.542px_0px_rgba(0,0,0,0.25)]" />
        </div>

        {/* Bottom row: Down and Drop buttons */}
        <div className="content-stretch flex gap-[14.091px] items-start relative shrink-0 w-full">
          {/* Down button */}
          <div 
            onClick={moveDown}
            className="bg-[#005eb3] content-stretch flex flex-[1_0_0] h-[33.156px] items-center justify-center min-h-px min-w-px relative rounded-[13.348px] cursor-pointer active:bg-[#004d8f] active:scale-95 transition-all"
          >
            <ChevronDown />
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-5.72px_2.542px_0px_rgba(0,0,0,0.25)]" />
          </div>

          {/* Drop button (double chevron) */}
          <div 
            onClick={drop}
            className="bg-[#bd3c3f] content-stretch flex flex-[1_0_0] h-[33.156px] items-center justify-center min-h-px min-w-px relative rounded-[13.348px] cursor-pointer active:bg-[#a03336] active:scale-95 transition-all"
          >
            <ChevronsDown />
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-5.72px_2.542px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>

      {/* Right button */}
      <div 
        onClick={moveRight}
        className="bg-[#0065c1] content-stretch flex h-[33.156px] items-center justify-center relative rounded-[13.348px] shrink-0 w-[79.573px] cursor-pointer active:bg-[#0056a3] active:scale-95 transition-all"
      >
        <ChevronRight />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-5.72px_2.542px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}