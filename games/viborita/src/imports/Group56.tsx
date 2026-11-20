import svgPaths from "./svg-6uomorpze9";
import imgSnake15 from "figma:asset/cfa03a7b3621618c641d60359c760409d54694b7.png";
import imgSparkle1 from "figma:asset/14255001134d2258fe60fd054c0841ac4bda8edc.png";
import ProgresBar from "./ProgresBar";
import { useState, useEffect } from "react";

export default function Group56({ isVisible }: { isVisible: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      return;
    }

    // Reset progress when becoming visible
    setProgress(0);
    const startTime = Date.now();
    const duration = 15000; // 15 seconds
    let animationFrameId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Cleanup function to cancel animation when component unmounts or isVisible changes
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="absolute left-1/2 top-[32px] translate-x-[-50%] z-50" style={{ width: '125px', height: '125px' }}>
      <div className="relative size-full">
        {/* Progress Bar - 110px positioned to match 78px circle center */}
        <div className="absolute left-[7.5px] size-[110px] top-[7.5px]">
          <ProgresBar progress={progress} />
        </div>

        {/* Glow effect 1 */}
        <div className="absolute flex items-center justify-center left-[7.35px] size-[110.309px] top-[5.85px]" style={{ "--transform-inner-width": "78", "--transform-inner-height": "78" } as React.CSSProperties}>
          <div className="flex-none rotate-[45deg]">
            <div className="relative size-[78px]">
              <div className="absolute inset-[-10%_-9.9%_40%_5.97%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 55">
                  <g filter="url(#filter0_f_75_840)">
                    <path d={svgPaths.p166aa3b0} fill="#FCE5BD" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="54.6" id="filter0_f_75_840" width="81.0702" x="0" y="9.828e-08">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_75_840" stdDeviation="3.9" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Glow effect 2 */}
        <div className="absolute flex items-center justify-center left-[7.35px] size-[110.309px] top-[5.85px]" style={{ "--transform-inner-width": "78", "--transform-inner-height": "78" } as React.CSSProperties}>
          <div className="flex-none rotate-[45deg]">
            <div className="relative size-[78px]">
              <div className="absolute bottom-1/2 left-[15.97%] right-[0.1%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 39">
                  <path d={svgPaths.p11e9c800} fill="#FCE5BD" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Star icon - 50px */}
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] size-[50px]" data-name="snake (1) 5">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnake15} />
        </div>

        {/* Sparkles - 120px with float animation */}
        <div 
          className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] size-[120px]" 
          data-name="sparkle 1"
          style={{
            animation: 'float-subtle 2.5s ease-in-out infinite'
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSparkle1} />
        </div>
      </div>
    </div>
  );
}