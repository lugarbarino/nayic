import React from 'react';

interface GridToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export function GridToggle({ enabled, onToggle }: GridToggleProps) {
  return (
    <div 
      className="content-start flex flex-wrap gap-[15px_7px] items-start relative shrink-0 w-[64px] cursor-pointer"
      onClick={onToggle}
    >
      {/* Grid icon */}
      <div className="relative shrink-0 size-[24px]" data-name="Grid">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Grid">
            <g id="Icon">
              <path d="M10 3H3V10H10V3Z" stroke="var(--stroke-0, #EDEDED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M21 3H14V10H21V3Z" stroke="var(--stroke-0, #EDEDED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M21 14H14V21H21V14Z" stroke="var(--stroke-0, #EDEDED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M10 14H3V21H10V14Z" stroke="var(--stroke-0, #EDEDED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
      
      {/* Label */}
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#ededed] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grilla
      </p>
      
      {/* Toggle switch */}
      <div className={`${enabled ? 'bg-[#54a454]' : 'bg-[#c35050]'} h-[28px] overflow-clip relative rounded-[100px] shrink-0 w-[64px] transition-colors duration-300`} data-name="Toggle - Switch">
        <div className="absolute h-[10px] left-[41px] top-[9px] w-[21px]" data-name="Frame" />
        <div 
          className={`absolute bg-white bottom-[7.14%] rounded-[100px] top-[7.14%] w-[39px] transition-all duration-300 ${enabled ? 'left-[23px]' : 'left-[2px]'}`}
          data-name="Knob" 
        />
      </div>
    </div>
  );
}
