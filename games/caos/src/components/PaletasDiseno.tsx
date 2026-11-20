import { NavigationButtons } from "./NavigationButtons";
import { ResponsiveLogo } from "./ResponsiveLogo";

type PaletasProps = {
  onSelectMode: (mode: 'cartas' | 'paletas' | 'dados') => void;
};

export default function Paletas({ onSelectMode }: PaletasProps) {
  return (
    <div className="bg-gradient-to-b from-[#0b0941] relative size-full to-[#3c5d9e] flex flex-col items-center overflow-hidden" data-name="Paletas">
      {/* Logo - Top */}
      <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-4 xl:pt-6">
        <ResponsiveLogo />
      </div>

      {/* Text - Center */}
      <div className="flex-1 flex items-center justify-center px-4 pb-32 sm:pb-36 md:pb-40 lg:pb-20 xl:pb-24">
        <div className="text-center -translate-y-[30px] lg:-translate-y-[60px] xl:-translate-y-[80px]">
          <div className="font-['Capriola:Regular',sans-serif] leading-[28px] sm:leading-[36px] md:leading-[36px] lg:leading-[36px] text-[#f7f7f7] text-[24px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] mb-2 sm:mb-3 md:mb-4">
            <p className="mb-0">Retos, paletas y</p>
            <p>decisiones al azar</p>
          </div>
          <p className="font-['SF_Pro:Italic',sans-serif] italic leading-[24px] text-[#dedede] text-[20px] max-w-[265px] sm:max-w-[300px] md:max-w-[320px] mx-auto">
            para que cada dibujo sea una aventura distinta
          </p>
        </div>
      </div>

      {/* Buttons - Bottom (Fixed) */}
      <div className="fixed left-1/2 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 translate-x-[-50%] z-10">
        <NavigationButtons onSelectMode={onSelectMode} />
      </div>
    </div>
  );
}