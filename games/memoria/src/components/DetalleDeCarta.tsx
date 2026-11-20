import svgPaths from "../svg/detalle-carta";
import svgPathsCard from "../svg/guia-detalle";
import imgVerCartas1 from "../assets/especiales/mezclar-ojo.webp";

export interface CardDetail {
  id: string;
  name: string;
  description: string;
  difficulties: ("facil" | "medio" | "dificil")[];
  image?: string;
  type: "especial" | "elemento";
  renderCard?: () => React.ReactNode;
}

interface DetalleDeCartaProps {
  card: CardDetail;
  allCards: CardDetail[];
  onClose: () => void;
  onNavigate: (cardId: string) => void;
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[48.45px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        {children}
      </svg>
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
  isActive: boolean;
  noBorder?: boolean;
};

function BackgroundImageAndText({ text, isActive, noBorder = false }: BackgroundImageAndTextProps) {
  return (
    <div className={`content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 ${text === 'FÁCIL' ? 'w-[93px]' : 'w-[107px]'}`}>
      {isActive && !noBorder && (
        <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
      )}
      <div className={`flex flex-col font-['Capriola:Regular',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[19.04px] text-center ${isActive ? 'text-[#ebebeb]' : 'text-[#cdb3d0]'} ${text === 'FÁCIL' ? 'w-[62px]' : 'w-[77px]'}`}>
        <p className="leading-[17.454px]">{text}</p>
      </div>
    </div>
  );
}

export default function DetalleDeCarta({ card, allCards, onClose, onNavigate }: DetalleDeCartaProps) {
  const currentIndex = allCards.findIndex(c => c.id === card.id);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < allCards.length - 1;

  const handlePrev = () => {
    if (canGoPrev) {
      onNavigate(allCards[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onNavigate(allCards[currentIndex + 1].id);
    }
  };

  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter fixed inset-0 z-[60] size-full flex items-center justify-center" data-name="Detalle de carta" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      {/* Exit Button - Fixed position */}
      <button
        onClick={onClose}
        className="absolute bg-[#4d2951] content-stretch flex h-[40px] md:h-[78px] items-start rounded-[12px] cursor-pointer hover:opacity-80 transition-opacity left-[calc(50%-170.5px)] top-[40px] z-10"
        data-name="button"
      >
        <div className="h-[40px] md:h-[78px] relative rounded-[10px] shrink-0 w-[75px]" data-name="System / Chips Item">
          <div className="absolute left-[calc(50%+0.5px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Arrow left">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Arrow left">
                <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[12px] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
      </button>

      <div className="content-stretch flex flex-col gap-[40px] items-start w-[361px] max-w-[95vw]">
        {/* Card Display with Navigation */}
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full gap-2">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`${canGoPrev ? 'cursor-pointer hover:opacity-80' : 'opacity-30 cursor-not-allowed'} transition-opacity`}
            >
              <BackgroundImage>
                <g id="Chevron left">
                  <path d={svgPaths.p3975f9d0} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
                </g>
              </BackgroundImage>
            </button>

            {/* Card Image */}
            <div className="h-[285px] relative shrink-0 w-[300px] flex items-center justify-center animate-float">
              {card.renderCard ? card.renderCard() : (
                <img
                  src={card.image || imgVerCartas1}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`${canGoNext ? 'cursor-pointer hover:opacity-80' : 'opacity-30 cursor-not-allowed'} transition-opacity`}
            >
              <BackgroundImage>
                <g id="Chevron right">
                  <path d={svgPaths.p3af8da0} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
                </g>
              </BackgroundImage>
            </button>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-[16px] items-center w-[263px] max-w-[90vw] h-[160px]">
            {/* Card Title - Only for elementos */}
            {card.type === "elemento" && (
              <h2 className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic text-[#cdb3d0] text-[20px] text-center shrink-0">
                {card.name}
              </h2>
            )}
            {/* Card Description */}
            <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal flex-1 justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[32px]">{card.description}</p>
            </div>
          </div>

          {/* Difficulty Tags */}
          <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-[337px] max-w-[90vw]">
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#f3f3f4] text-[16px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>DIFICULTAD</p>
            <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0 w-full flex-wrap">
              {card.id === 'ver-cartas' ? (
                <>
                  {/* Special rendering for "ver todas las cartas" */}
                  <BackgroundImageAndText 
                    text="FÁCIL" 
                    isActive={true}
                    noBorder={false}
                  />
                  <BackgroundImageAndText 
                    text="MÉDIO" 
                    isActive={true}
                    noBorder={false}
                  />
                  <BackgroundImageAndText 
                    text="DIFÍCIL" 
                    isActive={false}
                    noBorder={true}
                  />
                </>
              ) : card.id === 'suerte' ? (
                <>
                  {/* Special rendering for "Ganaste un match" (suerte) */}
                  <BackgroundImageAndText 
                    text="FÁCIL" 
                    isActive={false}
                    noBorder={true}
                  />
                  <BackgroundImageAndText 
                    text="MÉDIO" 
                    isActive={true}
                    noBorder={false}
                  />
                  <BackgroundImageAndText 
                    text="DIFÍCIL" 
                    isActive={true}
                    noBorder={false}
                  />
                </>
              ) : (
                <>
                  {/* Normal rendering for other cards */}
                  <BackgroundImageAndText 
                    text="FÁCIL" 
                    isActive={card.difficulties.includes("facil")}
                  />
                  <BackgroundImageAndText 
                    text="MÉDIO" 
                    isActive={card.difficulties.includes("medio")}
                  />
                  <BackgroundImageAndText 
                    text="DIFÍCIL" 
                    isActive={card.difficulties.includes("dificil")}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}