import svgPaths from "./svg-2klal9omvk";

export default function ProgresBar({ progress }: { progress: number }) {
  // progress is a value from 0 to 1 (0% to 100%)
  // Calculate rotation angle (starts at -90 degrees to begin at top)
  const rotation = -90 + (progress * 360);

  return (
    <div className="relative size-full" data-name="progres bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 110">
        <g clipPath="url(#clip0_76_24)" id="progres bar">
          {/* Background circle (dark green stroke) */}
          <circle 
            cx="55.1543" 
            cy="55" 
            r="36.5" 
            stroke="#11312C" 
            strokeWidth="5" 
            fill="none" 
            id="Ellipse 1" 
          />
          
          {/* Progress arc (cream fill) - rotates as time progresses */}
          <g 
            id="Ellipse 3"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: '55.1543px 55px'
            }}
          >
            <path d={svgPaths.p20b87a00} fill="#FCE5BD" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_76_24">
            <rect fill="white" height="110" width="110" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
