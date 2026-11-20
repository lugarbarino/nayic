import { motion } from 'motion/react';
import svgPaths from "../imports/svg-iw0hqtljt6";
import img61 from "figma:asset/d9ce681e04236e6b84ab3c315d31775f6a82456b.png";
import img1290 from "figma:asset/58f8be9dc479ca431859592bcdb0cbce044045c6.png";
import img22 from "figma:asset/ca96a3074c164d9036d7b420bf0e513dec1a5ce2.png";
import img17 from "figma:asset/8af0565be2af0ab9aed4e7000ae9cb8760cba576.png";
import img1 from "figma:asset/41c21cef901c02aea2ead08edd5a613864d0c6ea.png";

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Refresh cw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Refresh cw">
          <path d={svgPaths.p2ca87680} id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow right">
          <path d={svgPaths.p39396800} id="Icon" stroke="var(--stroke-0, #E9E9E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="mb-[-2px] relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d="M18 6L6 18M6 6L18 18" id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface GameOverModalProps {
  score: number;
  maxScore: number;
  onRestart: () => void;
  onNextLevel: () => void;
  onClose: () => void;
}

export default function GameOverModal({ score, maxScore, onRestart, onNextLevel, onClose }: GameOverModalProps) {
  return (
    <motion.div 
      className="backdrop-blur-[3.8px] backdrop-filter bg-[rgba(33,19,34,0.51)] fixed inset-0 z-50" 
      data-name="sucess"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Main Content */}
      <motion.div
        className="absolute content-stretch flex flex-col gap-[22.484px] min-[907px]:gap-[28px] items-center left-1/2 top-[calc(50%+12.69px)] min-[907px]:top-[calc(50%+31.5px)] translate-x-[-50%] translate-y-[-50%] w-[277.834px] min-[907px]:w-[346px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Card Background */}
        <div className="bg-white min-h-[460.916px] min-[907px]:min-h-[574px] relative rounded-[24.09px] min-[907px]:rounded-[30px] shadow-[0px_0.803px_14.374px_3.212px_rgba(0,0,0,0.15)] min-[907px]:shadow-[0px_1px_17.9px_4px_rgba(0,0,0,0.15)] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[8.03px] min-[907px]:gap-[10px] min-h-[460.916px] min-[907px]:min-h-[574px] items-center px-[23.287px] min-[907px]:px-[29px] py-[25.696px] min-[907px]:py-[32px] relative w-full">
              <div className="content-stretch flex flex-col gap-[25.696px] min-[907px]:gap-[32px] items-center relative shrink-0 w-[224.837px] min-[907px]:w-[280px]">
                <p className="font-['Capriola:Regular',sans-serif] h-[51.391px] min-[907px]:h-[64px] leading-[25.696px] min-[907px]:leading-[32px] relative shrink-0 text-[28.908px] min-[907px]:text-[36px] text-[#49274d] text-center w-full">
                  Nivel completado!
                </p>
                <div className="content-stretch flex flex-col gap-[14.175px] min-[907px]:gap-[17px] items-start relative shrink-0 text-center w-full">
                  <div className="content-stretch flex flex-col items-start pb-[2.5px] pt-0 px-0 relative shrink-0 w-full">
                    <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[17.666px] min-[907px]:leading-[22px] relative shrink-0 text-[#343434] text-[11.242px] min-[907px]:text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      PUNTOS:
                    </p>
                    <p className="font-['Capriola:Regular',sans-serif] h-[51.391px] min-[907px]:h-[64px] leading-[49.785px] min-[907px]:leading-[62px] relative shrink-0 text-[#39213c] text-[53.29px] min-[907px]:text-[66.39px] w-full">
                      {score}
                    </p>
                  </div>
                  <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[17.666px] min-[907px]:leading-[22px] relative shrink-0 text-[#2e2e2e] text-[16.058px] min-[907px]:text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Puntaje máximo: {maxScore}
                  </p>
                </div>
                
                {/* Retry Button */}
                <button 
                  onClick={onRestart}
                  className="bg-[#e4e4e4] h-[60.224px] min-[907px]:h-[75px] relative rounded-[24.09px] min-[907px]:rounded-[30px] shadow-[inset_0px_-13.391px_3.826px_0px_rgba(0,0,0,0.25)] shrink-0 w-full hover:opacity-80 transition-opacity"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-[19.272px] min-[907px]:gap-[24px] h-[60.224px] min-[907px]:h-[75px] items-center justify-center p-[20.075px] min-[907px]:p-[25px] relative w-full">
                      <div className="relative shrink-0 size-[19.272px] min-[907px]:size-[24px]" data-name="Refresh cw">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g id="Refresh cw">
                            <path d={svgPaths.p2ca87680} id="Icon" stroke="var(--stroke-0, #23252D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[17.666px] min-[907px]:leading-[22px] relative shrink-0 text-[19.272px] min-[907px]:text-[24px] text-black w-[143px] min-[907px]:w-auto text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Reintentar
                      </p>
                    </div>
                  </div>
                </button>

                {/* Next Level Button */}
                <button
                  onClick={onNextLevel}
                  className="bg-[#4b294f] box-border content-stretch flex gap-[19.272px] min-[907px]:gap-[24px] h-[60.224px] min-[907px]:h-[75px] items-center justify-center p-[20.075px] min-[907px]:p-[25px] relative rounded-[24.09px] min-[907px]:rounded-[30px] shadow-[inset_0px_-13.391px_3.826px_0px_rgba(0,0,0,0.25)] shrink-0 w-[217.61px] min-[907px]:w-[271px] hover:opacity-80 transition-opacity"
                >
                  <div className="relative shrink-0 size-[19.272px] min-[907px]:size-[24px]" data-name="Arrow right">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Arrow right">
                        <path d={svgPaths.p39396800} id="Icon" stroke="var(--stroke-0, #E9E9E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[24.893px] min-[907px]:leading-[31px] relative shrink-0 text-[#ededed] text-[19.272px] min-[907px]:text-[24px] w-[137px] min-[907px]:w-[161px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Siguiente nivel
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-[#4b294f] box-border content-stretch flex flex-col items-center justify-center pb-[21.681px] min-[907px]:pb-[27px] pt-[20.075px] min-[907px]:pt-[25px] px-[20.075px] min-[907px]:px-[25px] relative rounded-[24.09px] min-[907px]:rounded-[30px] shrink-0 size-[60.224px] min-[907px]:size-[75px] hover:opacity-80 transition-opacity"
        >
          <div className="mb-[-1.606px] min-[907px]:mb-[-2px] relative shrink-0 size-[19.272px] min-[907px]:size-[24px]" data-name="X">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="X">
                <path d="M18 6L6 18M6 6L18 18" id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[17.666px] min-[907px]:leading-[22px] relative shrink-0 text-[#f3f3f4] text-[9.636px] min-[907px]:text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Salir
          </p>
        </button>
      </motion.div>

      {/* Floating Monsters */}
      {/* Monster top right - green/blue */}
      <motion.div 
        className="absolute h-[145.167px] min-[907px]:h-[181px] left-[calc(50%+119.44px)] min-[907px]:left-[calc(50%+176.5px)] top-[calc(50%-201.8px)] min-[907px]:top-[calc(50%-255.5px)] translate-x-[-50%] translate-y-[-50%] w-[163.202px] min-[907px]:w-[203px]" 
        data-name="6 1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1,
          y: [0, -15, 0]
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: 0.2 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img61} />
      </motion.div>

      {/* Monster top left - purple/pink */}
      <motion.div 
        className="absolute h-[100.36px] min-[907px]:h-[125px] left-[calc(50%-76.18px)] min-[907px]:left-[calc(50%-231px)] top-[calc(50%-256.32px)] min-[907px]:top-[calc(50%-307.5px)] translate-x-[-50%] translate-y-[-50%] w-[93.159px] min-[907px]:w-[116px]" 
        data-name="12 90"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1,
          y: [0, -12, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: 0.25 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 },
          rotate: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1290} />
      </motion.div>

      {/* Monster bottom right - orange/red */}
      <motion.div 
        className="absolute h-[125.113px] min-[907px]:h-[156px] left-[calc(50%+131.07px)] min-[907px]:left-[calc(50%+161px)] top-[calc(50%+161.57px)] min-[907px]:top-[calc(50%+239px)] translate-x-[-50%] translate-y-[-50%] w-[138.283px] min-[907px]:w-[172px]" 
        data-name="22"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0],
          x: [0, -8, 0]
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: 0.3 },
          y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          x: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img22} />
      </motion.div>

      {/* Monster bottom left - small */}
      <motion.div 
        className="absolute h-[74.625px] min-[907px]:h-[93px] left-[calc(50%-155.64px)] min-[907px]:left-[calc(50%-207px)] top-[calc(50%+85.73px)] min-[907px]:top-[calc(50%+121.5px)] translate-x-[-50%] translate-y-[-50%] w-[131.784px] min-[907px]:w-[164px]" 
        data-name="17"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: [0, 8, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: 0.35 },
          y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
          rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img17} />
      </motion.div>

      {/* Monster right side - large */}
      <motion.div 
        className="absolute h-[207.173px] min-[907px]:h-[258px] left-[calc(50%+161.9px)] min-[907px]:left-[calc(50%+199.5px)] top-[calc(50%+1.05px)] min-[907px]:top-[calc(50%+17px)] translate-x-[-50%] translate-y-[-50%] w-[158.188px] min-[907px]:w-[197px]" 
        data-name="1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: 1,
          y: [0, -10, 0],
          x: [0, 8, 0]
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: 0.4 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
          x: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </motion.div>

      {/* Monster left side - large */}
      <motion.div 
        className="absolute h-[207.173px] min-[907px]:h-[258px] left-[calc(50%-160.91px)] min-[907px]:left-[calc(50%-242.5px)] top-[calc(50%-95.31px)] min-[907px]:top-[calc(50%-103px)] translate-x-[-50%] translate-y-[-50%] w-[158.188px] min-[907px]:w-[197px]" 
        data-name="23"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: 1,
          y: [0, -12, 0],
          x: [0, -5, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: 0.45 },
          y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 },
          x: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 },
          rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 }
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </motion.div>
    </motion.div>
  );
}