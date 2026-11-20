import { useState } from 'react';
import svgPaths from '../imports/svg-ndov8m3lm8';

interface MobileControlsProps {
  onDirectionChange: (direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => void;
}

export default function MobileControls({ onDirectionChange }: MobileControlsProps) {
  const [pressedButton, setPressedButton] = useState<string | null>(null);

  const handlePress = (direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => {
    setPressedButton(direction);
    onDirectionChange(direction);
    
    // Reset pressed state after a short delay
    setTimeout(() => {
      setPressedButton(null);
    }, 150);
  };

  const ChevronLeft = () => (
    <div className="relative shrink-0 size-[22.842px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <path d={svgPaths.p3bb2af00} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
      </svg>
    </div>
  );

  const ChevronUp = () => (
    <div className="relative shrink-0 size-[22.842px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <path d={svgPaths.p3b19b400} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
      </svg>
    </div>
  );

  const ChevronDown = () => (
    <div className="relative shrink-0 size-[22.842px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <path d={svgPaths.p3d401380} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
      </svg>
    </div>
  );

  const ChevronRight = () => (
    <div className="relative shrink-0 size-[22.842px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <path d={svgPaths.p2e7f8f00} stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.90354" />
      </svg>
    </div>
  );

  const getButtonStyle = (direction: string) => ({
    backgroundColor: pressedButton === direction ? '#0A1A1F' : '#11312c',
    transform: pressedButton === direction ? 'scale(0.95)' : 'scale(1)',
  });

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="content-stretch flex gap-[9.518px] items-end justify-center">
        {/* LEFT Button */}
        <button
          onTouchStart={(e) => {
            e.preventDefault();
            handlePress('LEFT');
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            handlePress('LEFT');
          }}
          className="content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92.322px] transition-all duration-100 cursor-pointer"
          style={getButtonStyle('LEFT')}
          type="button"
        >
          <ChevronLeft />
          <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
        </button>

        {/* UP and DOWN Buttons Column */}
        <div className="content-stretch flex flex-col gap-[6.662px] items-start shrink-0 w-[92.322px]">
          {/* UP Button */}
          <button
            onTouchStart={(e) => {
              e.preventDefault();
              handlePress('UP');
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              handlePress('UP');
            }}
            className="content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full transition-all duration-100 cursor-pointer"
            style={getButtonStyle('UP')}
            type="button"
          >
            <ChevronUp />
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
          </button>

          {/* DOWN Button */}
          <button
            onTouchStart={(e) => {
              e.preventDefault();
              handlePress('DOWN');
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              handlePress('DOWN');
            }}
            className="content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full transition-all duration-100 cursor-pointer"
            style={getButtonStyle('DOWN')}
            type="button"
          >
            <ChevronDown />
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
          </button>
        </div>

        {/* RIGHT Button */}
        <button
          onTouchStart={(e) => {
            e.preventDefault();
            handlePress('RIGHT');
          }}
          onMouseDown={(e) => {
              e.preventDefault();
            handlePress('RIGHT');
          }}
          className="content-stretch flex gap-[15.228px] h-[50.444px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92.322px] transition-all duration-100 cursor-pointer"
          style={getButtonStyle('RIGHT')}
          type="button"
        >
          <ChevronRight />
          <div className="absolute inset-0 pointer-events-none shadow-[0px_-8.566px_3.807px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
        </button>
      </div>
    </div>
  );
}
