import { useState } from 'react';
import svgPaths from '../imports/svg-acdyai6iac';
import imgSnake1 from "figma:asset/bf54a6b9017dd3f234a135bdd258525c98448591.png";
import CircularTimer from './CircularTimer';
import CircularTimerSlow from './CircularTimerSlow';

interface MobileGameUIProps {
  lives: number;
  score: number;
  gameMode: 'normal' | 'rapido' | 'timer';
  timerSeconds: number;
  isImmune: boolean;
  isSlowMotion: boolean;
  onDirectionChange: (direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => void;
  onExit: () => void;
  onToggleMode: () => void;
  disabled?: boolean;
}

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

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Play">
          <path d="M5 3L19 12L5 21V3Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FastForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fast forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Fast forward">
          <path d="M13 5L20 12L13 19V5Z" id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 5L11 12L4 19V5Z" id="Icon2" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Timer() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M12 6v6l4 2" stroke="#23252D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <circle cx="12" cy="12" r="9" stroke="#23252D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function MobileGameUI({
  lives,
  score,
  gameMode,
  timerSeconds,
  isImmune,
  isSlowMotion,
  onDirectionChange,
  onExit,
  onToggleMode,
  disabled = false
}: MobileGameUIProps) {
  const [pressedButton, setPressedButton] = useState<string | null>(null);

  const handlePress = (direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => {
    setPressedButton(direction);
    onDirectionChange(direction);
    
    // Reset pressed state after a short delay
    setTimeout(() => {
      setPressedButton(null);
    }, 150);
  };

  const getButtonStyle = (direction: string) => ({
    backgroundColor: pressedButton === direction ? '#0A1A1F' : '#0e302b',
    transform: pressedButton === direction ? 'scale(0.95)' : 'scale(1)',
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* HUD superior */}
      <div className="absolute w-full top-[81px] left-0 pointer-events-none">
        {/* Label VIDAS o TIEMPO */}
        <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[29px] text-[#aaae68] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {gameMode === 'timer' ? 'TIEMPO' : 'VIDAS'}
        </p>
        
        {/* Label PUNTOS */}
        <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] right-[29px] text-[#aaae68] text-[14px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          PUNTOS
        </p>
        
        {/* Vidas o Timer */}
        {gameMode !== 'timer' ? (
          <div className="absolute left-[29px] top-[22px] flex gap-[0px] items-center">
            {[...Array(Math.min(lives, 5))].map((_, i) => (
              <div 
                key={i} 
                className="relative size-[41px]" 
                data-name={`snake ${i + 1}`}
              >
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake1} />
              </div>
            ))}
            {lives > 5 && (
              <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] ml-[8px] text-[#f3f3f4] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                +{lives - 5}
              </p>
            )}
          </div>
        ) : (
          <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] left-[29px] text-[#f3f3f4] text-[32px] text-nowrap top-[28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            {Math.floor(timerSeconds / 60)}:{String(timerSeconds % 60).padStart(2, '0')}
          </p>
        )}
        
        {/* Score */}
        <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] right-[29px] text-[#f3f3f4] text-[32px] text-nowrap text-right top-[28px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {score}
        </p>
      </div>

      {/* Controles direccionales */}
      <div className="absolute bottom-[21.34px] content-stretch flex gap-[22px] items-center justify-center left-[calc(50%+0.66px)] translate-x-[-50%] pointer-events-auto">
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
          className="bg-[#0e302b] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92px] transition-all duration-100 cursor-pointer"
          style={getButtonStyle('LEFT')}
          type="button"
          data-name="button left"
        >
          <ChevronLeft />
          <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
        </button>

        {/* UP and DOWN Buttons Column */}
        <div className="content-stretch flex flex-col gap-[17.66px] items-start relative shrink-0 w-[92.322px]">
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
            className="bg-[#0e302b] content-stretch flex h-[42px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full transition-all duration-100 cursor-pointer"
            style={getButtonStyle('UP')}
            type="button"
            data-name="button up"
          >
            <ChevronUp />
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
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
            className="bg-[#0e302b] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-full transition-all duration-100 cursor-pointer"
            style={getButtonStyle('DOWN')}
            type="button"
            data-name="button down"
          >
            <ChevronDown />
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
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
          className="bg-[#0e302b] content-stretch flex h-[43px] items-center justify-center relative rounded-[19.987px] shrink-0 w-[92px] transition-all duration-100 cursor-pointer"
          style={getButtonStyle('RIGHT')}
          type="button"
          data-name="button right"
        >
          <ChevronRight />
          <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[19.987px]" />
        </button>
      </div>

      {/* Botón Salir */}
      <button
        onClick={onExit}
        className="absolute bg-[#11312c] content-stretch flex gap-[4px] items-start left-[29px] p-[8px] rounded-[12px] top-[25px] pointer-events-auto cursor-pointer hover:bg-[#1a3f39] transition-colors"
      >
        <ArrowLeft />
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#f3f3f4] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Salir
        </p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[12px]" />
      </button>

      {/* Botón Modo */}
      <button
        onClick={onToggleMode}
        disabled={disabled}
        className="absolute bg-white content-stretch flex gap-[4px] items-start right-[29px] p-[8px] rounded-[12px] top-[25px] pointer-events-auto cursor-pointer hover:bg-[#e0e0e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {gameMode === 'normal' && <Play />}
        {gameMode === 'rapido' && <FastForward />}
        {gameMode === 'timer' && <Timer />}
        <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#23252d] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Modo
        </p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)] rounded-[12px]" />
      </button>

      {/* Circular Timer - Inmunidad y Slow Motion */}
      <div className="absolute top-[25px] left-1/2 -translate-x-1/2 pointer-events-none">
        <CircularTimer isActive={isImmune} />
        <CircularTimerSlow isActive={isSlowMotion} />
      </div>
    </div>
  );
}