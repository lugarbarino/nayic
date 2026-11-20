import svgPaths from '@/imports/svg-p6oi539f1i';

interface MobileControlsProps {
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  rotatePiece: () => void;
  drop: () => void;
}

export function MobileControls({
  moveLeft,
  moveRight,
  moveDown,
  rotatePiece,
  drop,
}: MobileControlsProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[8px] content-stretch flex gap-[16px] items-center justify-center z-50">
      {/* Left button */}
      <div 
        onClick={moveLeft}
        className="bg-[#005eb3] content-stretch flex h-[40px] items-center justify-center relative rounded-[16.103px] shrink-0 w-[94px] cursor-pointer active:bg-[#004d8f]"
      >
        <div className="relative shrink-0 size-[18.404px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
            <path d={svgPaths.p19353200} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Center buttons group */}
      <div className="content-stretch flex flex-col gap-[17.106px] items-start relative shrink-0 w-[136px]">
        {/* Rotate button */}
        <div 
          onClick={rotatePiece}
          className="bg-[#005eb3] content-stretch flex h-[40px] items-center justify-center relative rounded-[16.103px] shrink-0 w-full cursor-pointer active:bg-[#004d8f]"
        >
          <div className="relative shrink-0 size-[18.404px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
              <g clipPath="url(#clip0_49_157)">
                <path d={svgPaths.p53f0280} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
              </g>
              <defs>
                <clipPath id="clip0_49_157">
                  <rect fill="white" height="18.4037" width="18.4037" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
        </div>

        {/* Bottom row: Down and Drop buttons */}
        <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full">
          {/* Down button */}
          <div 
            onClick={moveDown}
            className="bg-[#005eb3] content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-h-px min-w-px relative rounded-[16.103px] cursor-pointer active:bg-[#004d8f]"
          >
            <div className="relative shrink-0 size-[18.404px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
                <path d={svgPaths.p3580f400} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
              </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
          </div>

          {/* Drop button (double chevron) */}
          <div 
            onClick={drop}
            className="bg-[#bd3c3f] content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-h-px min-w-px relative rounded-[16.103px] cursor-pointer active:bg-[#a03336]"
          >
            <div className="relative shrink-0 size-[18.404px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
                <path d={svgPaths.p3a5c1540} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
              </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>

      {/* Right button */}
      <div 
        onClick={moveRight}
        className="bg-[#005eb3] content-stretch flex h-[40px] items-center justify-center relative rounded-[16.103px] shrink-0 w-[96px] cursor-pointer active:bg-[#004d8f]"
      >
        <div className="relative shrink-0 size-[18.404px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4037 18.4037">
            <path d={svgPaths.p372d5ac0} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.53364" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-6.901px_3.067px_0px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}