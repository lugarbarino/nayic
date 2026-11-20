import { useState } from "react";
import LoadingDesktop from "@/imports/Loading-100-1164";
import LoadingMobile from "@/imports/Loading-100-1226";
import AssetPreloader from "@/app/components/AssetPreloader";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  
  const handleProgress = (loaded: number, total: number) => {
    const newProgress = (loaded / total) * 100;
    setProgress(newProgress);
  };

  return (
    <div className="relative size-full pointer-events-auto">
      {/* Preloader invisible */}
      <AssetPreloader onProgress={handleProgress} onComplete={onLoadComplete} />
      
      <div className="hidden md:block size-full">
        <LoadingDesktop progress={progress} />
      </div>
      <div className="block md:hidden size-full">
        <LoadingMobile progress={progress} />
      </div>
    </div>
  );
}