import { useState, useEffect } from 'react';
import svgPathsDesktop from "../svg/inicio-1";
import svgPathsMobile from "../svg/inicio-2";
import imgRectangle21 from "../assets/inicio/collage.webp";
import Logo from "./Logo";
import ShareBanner from "./ShareBanner";

interface LevelHexProps {
  level: number;
  status: 'completed' | 'current' | 'locked';
  color: string;
  onPlay?: () => void;
  onSelect?: () => void;
  isBlockSelected?: boolean;
  mobile?: boolean;
}

function LevelHex({ level, status, color, onPlay, onSelect, isBlockSelected, mobile = false }: LevelHexProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // If block is not selected, select it first AND play the level if available
    if (!isBlockSelected && onSelect) {
      onSelect();
      // Also trigger play if available (for completed levels or unlocked levels)
      if (onPlay) {
        onPlay();
      }
      return;
    }
    
    // If block is already selected and onPlay is available, play the level
    if (isBlockSelected && onPlay) {
      onPlay();
    }
  };

  const svgPaths = mobile ? svgPathsMobile : svgPathsDesktop;
  const hexSize = mobile ? "h-[60.431px] w-[58.847px]" : "h-[66.908px] w-[65.154px]";
  const numberSize = mobile ? "text-[22px]" : "text-[22px]";
  const jugarSize = mobile ? "text-[14.451px]" : "text-[16px]";
  const textGap = mobile ? "gap-[4px]" : "gap-[4px]";
  const textLeading = mobile ? "leading-[13.729px]" : "leading-[15.2px]";
  const positionMobile = mobile ? "ml-[28px] mt-[29.95px]" : "ml-[31px] mt-[33.5px]";
  const strokeWidth = mobile ? "1.8064" : "2";
  const lockedPosition = mobile ? "ml-[28px] mt-[30.26px]" : "ml-[31px] mt-[33.5px]";

  if (status === 'completed') {
    return (
      <button
        onClick={handleClick}
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className={`[grid-area:1_/_1] ${hexSize} ml-0 mt-0 relative`}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={mobile ? "0 0 59 61" : "0 0 66 67"}>
            <g id="Group 1">
              <path d={mobile ? svgPaths.p17026e00 : svgPaths.p620d480} fill={color} id="Star 22" />
              <g id="Check">
                <path d={mobile ? svgPaths.p4c5e180 : svgPaths.p24246540} id="Icon" stroke="#F3F3F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
              </g>
            </g>
          </svg>
        </div>
      </button>
    );
  }

  if (status === 'current') {
    return (
      <button
        onClick={handleClick}
        className={`relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity ${mobile ? 'w-[58.847px] h-[60.431px]' : 'w-[65.154px] h-[66.908px]'}`}
      >
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={mobile ? "0 0 59 61" : "0 0 66 67"}>
            <g id="Group 1">
              <path d={mobile ? svgPaths.p276ca400 : svgPaths.p620d480} fill="#F3F3F4" id="Star 22" />
            </g>
          </svg>
        </div>
        <div className={`absolute flex flex-col ${textGap} font-['Capriola:Regular',sans-serif] justify-center ${textLeading} left-1/2 top-1/2 text-[#1b0e1c] text-[#2a1a2c] text-[0px] text-center translate-x-[-50%] translate-y-[-50%] pointer-events-none`}>
          <p className={`m-0 ${numberSize}`}>{level}</p>
          <p className={`m-0 ${jugarSize} font-['SF_Pro:Semibold',sans-serif] font-[590] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
            JUGAR
          </p>
        </div>
      </button>
    );
  }

  // locked
  return (
    <button
      onClick={handleClick}
      disabled={!onPlay}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity disabled:cursor-default disabled:hover:opacity-100"
    >
      <div className={`[grid-area:1_/_1] ${hexSize} ml-0 mt-0 relative`}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={mobile ? "0 0 59 61" : "0 0 66 67"}>
          <g id="Group 1">
            <path d={mobile ? svgPaths.p3a15a380 : svgPaths.p620d480} fill="#4B294F" id="Star 22" />
          </g>
        </svg>
      </div>
      <div className={`[grid-area:1_/_1] flex flex-col font-['Capriola:Regular',sans-serif] h-[35.225px] justify-center leading-[0] ${lockedPosition} relative text-[#f3f3f4] ${numberSize} text-center translate-x-[-50%] translate-y-[-50%]`}>
        <p className={textLeading}>{level}</p>
      </div>
    </button>
  );
}

interface DifficultyBlockProps {
  title: string;
  color: string;
  selected: boolean;
  completedLevels: number[];
  totalScore: number;
  maxScore: number;
  onPlay: (level: number) => void;
  onSelect: () => void;
  locked?: boolean;
  mobile?: boolean;
}

function DifficultyBlock({ title, color, selected, completedLevels, totalScore, maxScore, onPlay, onSelect, locked, mobile = false }: DifficultyBlockProps) {
  const getLevelStatus = (level: number): 'completed' | 'current' | 'locked' => {
    if (completedLevels.includes(level)) return 'completed';
    // When selected, first uncompleted level shows as "current" with JUGAR button
    if (selected && !completedLevels.includes(level)) {
      const firstUncompleted = [1, 2, 3, 4, 5, 6, 7, 8].find(l => !completedLevels.includes(l));
      if (level === firstUncompleted) return 'current';
    }
    return 'locked';
  };

  const containerClass = mobile 
    ? "bg-[#2a1a2c] content-stretch flex flex-col gap-[15.354px] items-center p-[18.064px] relative rounded-[18.064px] shrink-0 w-[252.896px] cursor-pointer hover:opacity-90 transition-opacity"
    : "bg-[#2a1a2c] content-stretch flex flex-col gap-[17px] items-center p-[20px] relative rounded-[20px] shrink-0 w-[280px] cursor-pointer hover:opacity-90 transition-opacity";

  const borderClass = mobile
    ? "absolute border-[#9952a3] border-[3.613px] border-solid inset-0 pointer-events-none rounded-[18.064px]"
    : "absolute border-4 border-[#9952a3] border-solid inset-0 pointer-events-none rounded-[20px]";

  const titleClass = mobile
    ? "font-['Capriola:Regular',sans-serif] h-[23.483px] leading-[23.669px] relative shrink-0 text-[14.451px] text-center uppercase w-full"
    : "font-['Capriola:Regular',sans-serif] h-[26px] leading-[26.206px] relative shrink-0 text-[16px] text-center uppercase w-full";

  const gridClass = mobile
    ? "content-stretch flex flex-col items-center pb-[9.032px] pt-0 px-0 relative shrink-0 w-[194.606px]"
    : "content-stretch flex flex-col items-center pb-[10px] pt-0 px-0 relative shrink-0 w-[215.463px]";

  const scoreClass = mobile
    ? "font-['SF_Pro:Semibold',sans-serif] font-[590] h-[23.483px] leading-[23.669px] relative shrink-0 text-[#f3f3f4] text-[0px] text-[14.451px] text-center w-full"
    : "font-['SF_Pro:Semibold',sans-serif] font-[590] h-[26px] leading-[26.206px] relative shrink-0 text-[#f3f3f4] text-[0px] text-[16px] text-center w-full";

  const gap1 = mobile ? "gap-[9.032px]" : "gap-[10px]";
  const gap2 = mobile ? "gap-[9.935px]" : "gap-[11px]";
  const mb = mobile ? "mb-[-9.032px]" : "mb-[-10px]";

  return (
    <div className={mobile ? "content-stretch flex items-center px-0 py-[9.032px] relative shrink-0" : "content-stretch flex items-center px-0 py-[10px] relative shrink-0"}>
      <div 
        onClick={onSelect}
        className={containerClass}
      >
        {selected && (
          <div 
            aria-hidden="true" 
            className={borderClass}
          />
        )}

        {/* Title */}
        <p 
          className={titleClass}
          style={{ fontVariationSettings: "'wdth' 100", color: '#cdb3d0' }}
        >
          {title}
        </p>

        {/* Levels Grid */}
        <div className={gridClass}>
          {/* Row 1 - 3 hexagons */}
          <div className={`content-stretch flex ${gap1} items-center leading-[0] ${mb} relative shrink-0 w-full`}>
            <LevelHex level={1} status={getLevelStatus(1)} color={color} onPlay={() => onPlay(1)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
            <LevelHex level={2} status={getLevelStatus(2)} color={color} onPlay={() => onPlay(2)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
            <LevelHex level={3} status={getLevelStatus(3)} color={color} onPlay={() => onPlay(3)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
          </div>

          {/* Row 2 - 2 hexagons centered */}
          <div className={`content-stretch flex ${gap2} items-center leading-[0] ${mb} relative shrink-0`}>
            <LevelHex level={4} status={getLevelStatus(4)} color={color} onPlay={() => onPlay(4)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
            <LevelHex level={5} status={getLevelStatus(5)} color={color} onPlay={() => onPlay(5)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
          </div>

          {/* Row 3 - 3 hexagons */}
          <div className={`content-stretch flex ${gap1} items-center leading-[0] ${mb} relative shrink-0 w-full`}>
            <LevelHex level={6} status={getLevelStatus(6)} color={color} onPlay={() => onPlay(6)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
            <LevelHex level={7} status={getLevelStatus(7)} color={color} onPlay={() => onPlay(7)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
            <LevelHex level={8} status={getLevelStatus(8)} color={color} onPlay={() => onPlay(8)} onSelect={onSelect} isBlockSelected={selected} mobile={mobile} />
          </div>
        </div>

        {/* Total Score */}
        <p 
          className={scoreClass}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100", color: '#cdb3d0' }}>
            Total:{" "}
          </span>
          <span className="font-['SF_Pro:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100", color: '#f3f3f4' }}>
            {totalScore}{" "}
          </span>
          <span className="font-['SF_Pro:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100", color: '#cdb3d0' }}>
            / {maxScore}
          </span>
        </p>
      </div>
    </div>
  );
}

type Difficulty = 'easy' | 'medium' | 'hard';

interface HomeProps {
  onStartGame: (difficulty: Difficulty, level: number) => void;
  completedLevels: { easy: number[]; medium: number[]; hard: number[] };
  scores: { easy: number; medium: number; hard: number };
  onOpenSettings: () => void;
  currentDifficulty: Difficulty;
}

export default function Home({ onStartGame, completedLevels, scores, onOpenSettings, currentDifficulty }: HomeProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(currentDifficulty);
  
  // Sync selectedDifficulty with currentDifficulty when it changes
  useEffect(() => {
    setSelectedDifficulty(currentDifficulty);
  }, [currentDifficulty]);
  
  const handleShare = () => {
    const shareUrl = 'https://juegodememoria.figma.site';
    
    if (navigator.share) {
      navigator.share({
        title: 'Juego de Memoria de Monstruos',
        text: '¡Juega este increíble juego de memoria!',
        url: shareUrl
      }).catch(err => console.log('Error sharing:', err));
    } else {
      const tempInput = document.createElement('input');
      tempInput.value = shareUrl;
      tempInput.style.position = 'absolute';
      tempInput.style.left = '-9999px';
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      
      try {
        document.execCommand('copy');
        alert('¡Link copiado al portapapeles!');
      } catch (err) {
        console.log('Error copying:', err);
        alert(`Copia este link: ${shareUrl}`);
      }
      
      document.body.removeChild(tempInput);
    }
  };

  const maxScore = 24000;

  return (
    <div className="relative size-full min-h-dvh" style={{ backgroundImage: "linear-gradient(179.423deg, rgb(25, 13, 26) 1.1129%, rgb(78, 41, 82) 59.8%)" }}>
      {/* MOBILE VERSION
          Columna que fluye (sin posiciones fijas): logo arriba, niveles, y abajo las
          ilustraciones con "Compartilo" ocupando el espacio que sobre. Así se adapta a
          cualquier alto de celular sin huecos ni superposiciones. */}
      <div className="flex min-[900px]:hidden flex-col h-dvh min-h-[560px]">
        {/* Header - Logo and Settings */}
        <div className="relative content-stretch flex items-center justify-between pl-[16px] pr-[18.064px] pt-[22px] w-full shrink-0">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <Logo />
          </div>
          <button
            onClick={onOpenSettings}
            className="bg-[#4b294f] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_268_574_mobile)" id="Settings">
                  <g id="Icon">
                    <path d={svgPathsMobile.p3cccb600} stroke="#FEFEFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPathsMobile.p3737f500} stroke="#FEFEFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_268_574_mobile">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Ajustes
            </p>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-4px_9px_0px_inset_rgba(0,0,0,0.4)]" />
          </button>
        </div>

        {/* Niveles Section */}
        <div className="relative content-stretch flex flex-col gap-[9.032px] items-start px-[18.064px] pt-[20px] w-full shrink-0">
          
          {/* Difficulty Blocks - Horizontal Scroll */}
          <div className="content-stretch flex gap-[14.451px] items-center relative shrink-0 -mx-[18.064px] px-[18.064px] w-[calc(100%+36.128px)] overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' }}>
            <DifficultyBlock
              title="Fácil"
              color="#5EA585"
              selected={selectedDifficulty === 'easy'}
              completedLevels={completedLevels.easy}
              totalScore={scores.easy}
              maxScore={maxScore}
              onPlay={(level) => onStartGame('easy', level)}
              onSelect={() => setSelectedDifficulty('easy')}
              mobile={true}
            />

            <DifficultyBlock
              title="Medio"
              color="#6F83DB"
              selected={selectedDifficulty === 'medium'}
              completedLevels={completedLevels.medium}
              totalScore={scores.medium}
              maxScore={maxScore}
              onPlay={(level) => onStartGame('medium', level)}
              onSelect={() => setSelectedDifficulty('medium')}
              mobile={true}
            />

            <DifficultyBlock
              title="Difícil"
              color="#A967BD"
              selected={selectedDifficulty === 'hard'}
              completedLevels={completedLevels.hard}
              totalScore={scores.hard}
              maxScore={maxScore}
              onPlay={(level) => onStartGame('hard', level)}
              onSelect={() => setSelectedDifficulty('hard')}
              mobile={true}
            />
          </div>
        </div>

        {/* Bottom Section - Character Images and Share Banner (ocupa el espacio que sobra) */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center w-full overflow-hidden">
          {/* la ilustración se achica para entrar en el espacio que queda (alto y ancho) */}
          <div className="relative h-full max-h-[401px] max-w-full aspect-[414/401]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgRectangle21} />
            {/* NAYIC Footer - Mobile */}
            <div className="absolute left-1/2 top-[calc(50%-20px)] translate-x-[-50%] translate-y-[-50%] scale-[0.80]">
              <ShareBanner />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden min-[900px]:block bg-gradient-to-b from-[#1a0e1b] to-[#4d2951] relative size-full min-h-dvh" data-name="d_home">
        <div className="absolute content-stretch flex flex-col items-center left-1/2 -translate-x-1/2 pb-[20px] pt-0 px-0 top-[26px] w-auto max-w-[1200px]">
          {/* Top section with Logo and Settings */}
          <div className="content-stretch flex flex-col gap-[30px] items-center mb-[-20px] relative shrink-0 w-full">
            {/* Logo and Settings Header */}
            <div className="content-stretch flex flex-col h-[103px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[509px] items-start justify-between relative shrink-0 w-full px-[20px]">
                {/* Logo */}
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <Logo />
                </div>
                
                {/* Settings Button */}
                <button 
                  onClick={onOpenSettings}
                  className="bg-[#4d2951] content-stretch flex h-[78px] items-start relative rounded-[21px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="h-[78px] relative rounded-[10px] shrink-0 w-[75px]">
                    <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] left-[38px] text-[#f3f3f4] text-[12px] text-center text-nowrap top-[37px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Ajustes
                    </p>
                    <div className="absolute left-[25.62px] size-[24px] top-[15.5px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g clipPath="url(#clip0_268_276)" id="Settings">
                          <g id="Icon">
                            <path d={svgPathsDesktop.p3cccb600} stroke="#FFFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPathsDesktop.p3737f500} stroke="#FFFCFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_268_276">
                            <rect fill="white" height="24" width="24" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[21px] shadow-[0px_-9px_4px_0px_inset_rgba(0,0,0,0.25)]" />
                </button>
              </div>
            </div>

            {/* Niveles Section */}
            <div className="relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[10px] items-center px-[20px] py-0 relative w-full">
                  <p className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f3f3f4] text-[20px] text-center w-full">Niveles</p>
                  
                  {/* Difficulty Blocks */}
                  <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
                    <DifficultyBlock
                      title="Fácil"
                      color="#5EA585"
                      selected={selectedDifficulty === 'easy'}
                      completedLevels={completedLevels.easy}
                      totalScore={scores.easy}
                      maxScore={maxScore}
                      onPlay={(level) => onStartGame('easy', level)}
                      onSelect={() => setSelectedDifficulty('easy')}
                    />

                    <DifficultyBlock
                      title="Medio"
                      color="#6F83DB"
                      selected={selectedDifficulty === 'medium'}
                      completedLevels={completedLevels.medium}
                      totalScore={scores.medium}
                      maxScore={maxScore}
                      onPlay={(level) => onStartGame('medium', level)}
                      onSelect={() => setSelectedDifficulty('medium')}
                    />

                    <DifficultyBlock
                      title="Difícil"
                      color="#A967BD"
                      selected={selectedDifficulty === 'hard'}
                      completedLevels={completedLevels.hard}
                      totalScore={scores.hard}
                      maxScore={maxScore}
                      onPlay={(level) => onStartGame('hard', level)}
                      onSelect={() => setSelectedDifficulty('hard')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with Character Images and Share Banner */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mb-[-20px] place-items-start relative shrink-0">
            {/* Character images background */}
            <div className="[grid-area:1_/_1] h-[398px] ml-0 mt-0 relative w-[581px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[110.77%] left-[4.63%] max-w-none top-[-0.86%] w-[90.42%]" src={imgRectangle21} />
              </div>
            </div>
            
            {/* Share Banner with NAYIC Footer */}
            <div className="[grid-area:1_/_1] ml-[75px] mt-[114px] relative">
              <ShareBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}