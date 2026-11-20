import { useState, useEffect } from 'react';
import imgReloj from 'figma:asset/dffbdab3531d239ea02e1d2a651fa61484f0cfde.png';
import imgBrillos from 'figma:asset/8e2e9b3d5369540a2e66a7ef52a71b683ecee3ac.png';

interface CircularTimerSlowProps {
  isActive: boolean;
  onComplete?: () => void;
}

export default function CircularTimerSlow({ isActive, onComplete }: CircularTimerSlowProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    // Reset progress when becoming active
    setProgress(0);
    const startTime = Date.now();
    const duration = 15000; // 15 seconds total

    // Custom progress curve: 4s=15%, 8s=50%, 12s=75%, 15s=100%
    const getProgressForTime = (elapsed: number): number => {
      const seconds = elapsed / 1000;
      
      if (seconds <= 4) {
        // 0-4s: 0% to 15%
        return (seconds / 4) * 0.15;
      } else if (seconds <= 8) {
        // 4-8s: 15% to 50%
        return 0.15 + ((seconds - 4) / 4) * 0.35;
      } else if (seconds <= 12) {
        // 8-12s: 50% to 75%
        return 0.50 + ((seconds - 8) / 4) * 0.25;
      } else {
        // 12-15s: 75% to 100%
        return 0.75 + ((seconds - 12) / 3) * 0.25;
      }
    };

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= duration) {
        setProgress(1);
        clearInterval(interval);
        onComplete?.();
      } else {
        const newProgress = getProgressForTime(elapsed);
        setProgress(newProgress);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => {
      clearInterval(interval);
    };
  }, [isActive, onComplete]);

  // Circle parameters
  const size = 89.7;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Progress circle should fill up as progress increases from 0 to 1
  // When progress = 0, offset = circumference (nothing visible)
  // When progress = 1, offset = 0 (fully visible)
  const progressOffset = circumference - (progress * circumference);

  // Only show if active
  if (!isActive) return null;

  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Base circle (background) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgb(18, 49, 43)"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle (fills up) - usando el mismo color que la estrella */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgb(252, 229, 189)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Clock image in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={imgReloj} 
          alt="Clock" 
          className="w-[65px] h-[65px] object-contain"
        />
      </div>
      
      {/* Brillos on top layer - same size as component */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          animation: 'float-subtle 2.5s ease-in-out infinite'
        }}
      >
        <img 
          src={imgBrillos} 
          alt="Brillos" 
          className="w-full h-full object-contain opacity-90"
        />
      </div>
    </div>
  );
}