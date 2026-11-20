import StartDesktop from "@/imports/Start-110-462";
import StartMobile from "@/imports/Start-110-556";
import { useState, useEffect } from "react";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative size-full">
      {isMobile ? (
        <StartMobile onStartClick={onStart} />
      ) : (
        <StartDesktop onStartClick={onStart} />
      )}
    </div>
  );
}