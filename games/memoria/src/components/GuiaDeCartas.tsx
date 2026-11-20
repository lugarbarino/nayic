import { useState } from "react";
import svgPaths from "../imports/svg-3lqgr1kc7o";
import imgVerCartas1 from "figma:asset/50df561745e166806948d7218e43c826952cf890.png";
import imgBomba from "figma:asset/433489d86a39e3c139747f0341e375e6eebc4c7f.png";
import imgGatosMagic02 from "figma:asset/5e48e7fa8ee790fd3c0148ae049b767157121558.png";
import imgVerCartas2 from "figma:asset/f62b6c16a4ac80afea9b365305a3ef88e87133f5.png";
import imgEasy from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgVerCartas3 from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";

// Elementos images
import imgElementoCongelada from "figma:asset/8ce711ff33a06bd161590fe669506a9ac66ed56f.png";
import imgElementoMagica from "figma:asset/24cedf90396b694f937714c129389502ed8097a4.png";
import imgElementoCongeladaII from "figma:asset/a29b9d7104e1df8ecd6ec339fe4ae3e229949967.png";
import imgElementoFuego from "figma:asset/9959946bd606dbbc76d922c18711993dd5e0cb0b.png";
import imgElementoEnterrada from "figma:asset/00d1358d020569606eb1993a7db5b5b2428b3c23.png";
import imgElementoPico from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgElementoNube1 from "figma:asset/15a6ace6b2cdbe828fcae78b43510672c51c03c8.png";
import imgElementoNube2 from "figma:asset/4577f4ffc63cd16b87b4f3e50dfd5d6905de6509.png";
import imgElementoMagiaII1 from "figma:asset/e382f64ceae0184dd4445c4a78d2b0e7a9ee096d.png";
import imgElementoMagiaII2 from "figma:asset/b6eb6905b759277b8a0f1a8f9ecfb3bfc875a43b.png";

// Detalle imports
import imgDetalleVerCartas from "figma:asset/ccfb6cf9e0bd8c8a97bc0109f13328ca9bfdf65d.png"; // Ver todas las cartas detalle
import imgDetalleMezclar from "figma:asset/ccfb6cf9e0bd8c8a97bc0109f13328ca9bfdf65d.png"; // Se mezclan detalle
import imgDetalleMatch from "figma:asset/f62b6c16a4ac80afea9b365305a3ef88e87133f5.png"; // Ganaste un match detalle
import imgDetalleBombaMedio from "figma:asset/ccfb6cf9e0bd8c8a97bc0109f13328ca9bfdf65d.png"; // Bomba medio detalle
import imgDetalleBombaDificil from "figma:asset/ccfb6cf9e0bd8c8a97bc0109f13328ca9bfdf65d.png"; // Bomba difícil detalle
import imgDetallePico from "figma:asset/ccfb6cf9e0bd8c8a97bc0109f13328ca9bfdf65d.png"; // Pico detalle

import svgPathsDetalle from "../imports/svg-fsfo3ksrm6";
import svgPathsMezclar from "../imports/svg-p989wi6x0n";
import svgPathsMatch from "../imports/svg-zi9s5ajrks";
import svgPathsBombaDificil from "../imports/svg-bokxdmafc0";
import svgPathsPico from "../imports/svg-spsfjfve6e";
import svgPathsBombaMedio from "../imports/svg-0q2p6xos7g";
import svgPathsSuerte from "../imports/svg-32ti6h6uez";

import imgEasyPico from "figma:asset/580131cd10a19aa8ab5d3ca919eacefbe7c60e57.png";
import imgPicoTool from "figma:asset/355ac75d16f94ac73a5847d2313e5c71ea9e84b1.png";

import Group84Nube from "../imports/Group84";
import Group83MagiaII from "../imports/Group83";
import Pico from "../imports/Pico-337-213";

import DetalleDeCarta, { CardDetail } from "./DetalleDeCarta";

// Card data
const CARDS_DATA: CardDetail[] = [
  {
    id: "ver-cartas",
    name: "Ver todas las cartas",
    description: "Muestra todas las cartas por unos segundos.",
    difficulties: ["facil", "medio", "dificil"],
    type: "especial",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center" data-name="ver todas">
        <div className="relative h-[255.364px] w-[254px]">
          <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 245">
              <g filter="url(#filter0_d_333_16)" id="Star 14">
                <path d={svgPathsDetalle.pdcc5980} fill="var(--fill-0, #3C7262)" />
                <path d={svgPathsDetalle.p27a8ec00} stroke="var(--stroke-0, #3C7262)" strokeWidth="5.65903" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="244.799" id="filter0_d_333_16" width="237.768" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="2.82952" dy="3.5369" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.149554 0 0 0 0 0.283579 0 0 0 0 0.243868 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_16" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_16" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute font-['Capriola:Regular',sans-serif] leading-[36.784px] left-[calc(50%+6.72px)] not-italic text-[35.948px] text-center text-white top-[calc(50%-7.75px)] translate-x-[-50%] w-[176.845px]">
            <p className="mb-0">{`Ver todas `}</p>
            <p>las cartas</p>
          </div>
          <div className="absolute h-[144.189px] left-[calc(50%-0.29px)] top-[-10.61px] translate-x-[-50%] w-[157.165px]" data-name="ver cartas 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "bomba-medio",
    name: "Una pareja se da vuelta",
    description: "Una pareja correcta se da vuelta sola.",
    difficulties: ["facil", "medio"],
    type: "especial",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center overflow-clip" data-name="Bomba_medio">
        <div className="relative h-[260px] w-[283.047px]">
        <div className="absolute h-[260px] left-0 top-0 w-[283.047px]">
          <div className="absolute inset-[2.76%_6.47%_1.65%_7.74%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243 249">
              <g filter="url(#filter0_d_333_251)" id="Star 14">
                <path d={svgPathsBombaMedio.p26035e00} fill="var(--fill-0, #FF7E5E)" />
                <path d={svgPathsBombaMedio.p3f41c680} stroke="var(--stroke-0, #FF7E5E)" strokeWidth="5.76177" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="248.524" id="filter0_d_333_251" width="242.805" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="3.60111" dy="2.88089" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.491587 0 0 0 0 0.198322 0 0 0 0 0.125574 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_251" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_251" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute left-[62.66px] size-[157.729px] top-[-10.08px]" data-name="bomba">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
          </div>
        </div>
        <div className="absolute font-['Capriola:Regular',sans-serif] leading-[36.011px] left-[calc(50%-0.63px)] not-italic text-[36.6px] text-center text-nowrap text-white top-[calc(50%-0.36px)] tracking-[-1.4404px] translate-x-[-50%]">
          <p className="mb-0">{`Una pareja `}</p>
          <p>se da vuelta</p>
        </div>
        </div>
      </div>
    )
  },
  {
    id: "mezclar",
    name: "Se mezclan las cartas",
    description: "Las cartas cambian de lugar.",
    difficulties: ["facil", "medio", "dificil"],
    type: "especial",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center" data-name="se mezclan las cartas">
        <div className="relative h-[261.84px] w-[285.05px]">
        <div className="absolute h-[261.84px] left-0 top-0 w-[285.05px]">
          <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 251">
              <g filter="url(#filter0_d_333_127)" id="Star 14">
                <path d={svgPathsMezclar.p7b99380} fill="var(--fill-0, #603265)" />
                <path d={svgPathsMezclar.pffa2f00} stroke="var(--stroke-0, #603265)" strokeWidth="5.80255" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="251.008" id="filter0_d_333_127" width="243.798" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="2.90127" dy="3.62659" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.270987 0 0 0 0 0.138039 0 0 0 0 0.285438 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_127" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_127" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute font-['Capriola:Regular',sans-serif] leading-[37.717px] left-[calc(50%-0.31px)] not-italic text-[36.859px] text-center text-nowrap text-white top-[calc(50%+6.17px)] translate-x-[-50%]">
          <p className="mb-0">Se mezclan</p>
          <p>{` las cartas`}</p>
        </div>
        <div className="absolute flex h-[157.338px] items-center justify-center left-[42.07px] top-[-7.25px] w-[200.039px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.381deg]">
            <div className="h-[156.02px] opacity-90 relative w-[199.007px]" data-name="gatos_Magic0 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[101.04%] left-[0.39%] max-w-none top-[1.04%] w-full" src={imgGatosMagic02} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  },
  {
    id: "bomba-dificil",
    name: "Las parejas se dan vuelta",
    description: "Las parejas que ya habías ganado se vuelven a esconder.",
    difficulties: ["dificil"],
    type: "especial",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center" data-name="Bomba_ dificil">
        <div className="relative h-[254.491px] w-[277.05px]">
        <div className="absolute h-[254.491px] left-0 top-0 w-[277.05px]">
          <div className="absolute inset-[2.76%_6.47%_1.65%_7.74%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 244">
              <g filter="url(#filter0_d_334_294)" id="Star 14">
                <path d={svgPathsBombaDificil.p66d5e80} fill="var(--fill-0, #CF4460)" />
                <path d={svgPathsBombaDificil.p395f1e00} stroke="var(--stroke-0, #CF4460)" strokeWidth="5.6397" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="243.258" id="filter0_d_334_294" width="237.661" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="3.52481" dy="2.81985" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.536264 0 0 0 0 0.17007 0 0 0 0 0.243836 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_334_294" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_334_294" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute left-[61.33px] size-[154.387px] top-[-9.87px]" data-name="bomba">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
          </div>
        </div>
        <div className="absolute font-['Capriola:Regular',sans-serif] leading-[35.248px] left-[calc(50%+0.47px)] not-italic text-[35.825px] text-center text-nowrap text-white top-[calc(50%-0.35px)] tracking-[-1.4099px] translate-x-[-50%]">
          <p className="mb-0">{`Las parejas `}</p>
          <p>se dan vuelta</p>
        </div>
        </div>
      </div>
    )
  },
  {
    id: "suerte",
    name: "Ganaste un match",
    description: "Una pareja correcta se revela sola.",
    difficulties: ["facil", "medio", "dificil"],
    type: "especial",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center overflow-clip" data-name="suerte">
        <div className="relative h-[261.794px] w-[285px]">
        <div className="absolute h-[261.794px] left-0 top-0 w-[285px]">
          <div className="absolute inset-[2.76%_6.47%_1.65%_7.74%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 251">
              <g filter="url(#filter0_d_333_206)" id="Star 14">
                <path d={svgPathsSuerte.p1de65580} fill="var(--fill-0, #CF449E)" />
                <path d={svgPathsSuerte.p1d4440f0} stroke="var(--stroke-0, #CF449E)" strokeWidth="5.80153" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="250.238" id="filter0_d_333_206" width="244.481" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="3.62595" dy="2.90076" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.407039 0 0 0 0 0.170634 0 0 0 0 0.323702 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_333_206" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_333_206" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute h-[150.722px] left-[calc(50%-0.3px)] top-[calc(50%-51.18px)] translate-x-[-50%] translate-y-[-50%] w-[164.021px]" data-name="ver cartas 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas2} />
        </div>
        <div className="absolute font-['Capriola:Regular',sans-serif] leading-[37.71px] left-[calc(50%-0.06px)] not-italic text-[36.853px] text-center text-nowrap text-white top-[calc(50%-0.36px)] translate-x-[-50%]">
          <p className="mb-0">{`Ganaste `}</p>
          <p>un match</p>
        </div>
        </div>
      </div>
    )
  },
  // Elementos
  {
    id: "congelada",
    name: "Congelada",
    description: "La carta queda congelada y no se da vuelta durante 10 segundos.",
    difficulties: ["medio"],
    image: imgElementoCongelada,
    type: "elemento"
  },
  {
    id: "magica",
    name: "Mágica",
    description: "Revela su par por unos segundos.",
    difficulties: ["medio"],
    image: imgElementoMagica,
    type: "elemento"
  },
  {
    id: "congelada-ii",
    name: "Congelada II",
    description: "La carta queda congelada y no se da vuelta durante 10 segundos.",
    difficulties: ["dificil"],
    image: imgElementoCongeladaII,
    type: "elemento"
  },
  {
    id: "fuego",
    name: "Fuego",
    description: "La carta se quema. Tócala para apagarla.",
    difficulties: ["dificil"],
    image: imgElementoFuego,
    type: "elemento"
  },
  {
    id: "enterrada",
    name: "Enterrada",
    description: "La carta queda enterrada. Solo el pico puede liberarla.",
    difficulties: ["dificil"],
    type: "elemento",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center">
        <div className="relative h-[322px] w-[296px]">
          <div className="absolute flex h-[189.1px] items-center justify-center left-[103px] top-0 w-[193.037px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[20.871deg]">
              <div className="h-[144.635px] w-[151.446px]">
                <Pico />
              </div>
            </div>
          </div>
          <div className="absolute h-[213px] left-0 top-[109.11px] w-[232px]" data-name="dificil_enterrada">
            <div className="absolute inset-[-0.55%_0]" data-name="easy">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[123.84%] left-[-7.8%] max-w-none top-[-10.88%] w-[113.76%]" src={imgElementoEnterrada} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "nube",
    name: "Nube",
    description: "Una pista real, dos falsas.",
    difficulties: ["dificil"],
    type: "elemento",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center">
        <div className="relative h-[346px] w-[305px]">
          <Group84Nube />
        </div>
      </div>
    )
  },
  {
    id: "magia-ii",
    name: "Magia II",
    description: "Revela su par con una pista por unos segundos.",
    difficulties: ["dificil"],
    type: "elemento",
    renderCard: () => (
      <div className="relative size-full flex items-center justify-center">
        <div className="relative h-[296px] w-[319px]">
          <Group83MagiaII />
        </div>
      </div>
    )
  },
];

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[168.145px] left-0 top-0 w-[183.05px]">
      <div className="absolute inset-[2.76%_6.47%_1.65%_7.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 161">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[168.145px] left-0 top-0 w-[183.05px]">
      <div className="absolute inset-[2.76%_6.73%_1.38%_7.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 162">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BombaBackgroundImage() {
  return (
    <div className="absolute left-[40.52px] size-[102.005px] top-[-6.52px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[98.68%] left-[0.51%] max-w-none top-[0.94%] w-[96.82%]" src={imgBomba} />
      </div>
    </div>
  );
}

interface GuiaDeCartasProps {
  onClose: () => void;
  currentDifficulty: 'easy' | 'medium' | 'hard';
}

export default function GuiaDeCartas({ onClose, currentDifficulty }: GuiaDeCartasProps) {
  const [activeTab, setActiveTab] = useState<'especiales' | 'elementos'>('especiales');
  const [selectedCard, setSelectedCard] = useState<CardDetail | null>(null);

  const handleCardClick = (cardId: string) => {
    const card = CARDS_DATA.find(c => c.id === cardId);
    if (card) {
      setSelectedCard(card);
    }
  };

  const handleNavigate = (cardId: string) => {
    const card = CARDS_DATA.find(c => c.id === cardId);
    if (card) {
      setSelectedCard(card);
    }
  };

  const currentTabCards = CARDS_DATA.filter(card => 
    activeTab === 'especiales' ? card.type === 'especial' : card.type === 'elemento'
  );

  if (selectedCard) {
    return (
      <DetalleDeCarta
        card={selectedCard}
        allCards={currentTabCards}
        onClose={() => setSelectedCard(null)}
        onNavigate={handleNavigate}
      />
    );
  }

  return (
    <div className="backdrop-blur-[3.8px] backdrop-filter fixed inset-0 z-50 size-full flex items-center justify-center" data-name="Guia de Cartas" style={{ backgroundImage: "linear-gradient(179.947deg, rgb(27, 15, 28) 0%, rgb(76, 41, 80) 63.316%)" }}>
      {/* Exit Button - Fixed position */}
      <button
        onClick={onClose}
        className="absolute z-50 bg-[#4d2951] content-stretch flex gap-[4px] items-center justify-center p-[8px] rounded-[12px] cursor-pointer hover:opacity-80 transition-opacity left-[calc(50%-170.5px)] top-[40px] w-[75px]"
        data-name="button"
      >
        <div className="relative shrink-0 size-[24px]" data-name="Arrow left">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Arrow left">
              <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #F3F3F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[12px] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
      </button>

      <div className="content-stretch flex flex-col items-start w-[371.1px] max-w-[95vw] h-[90vh] max-h-[800px] pt-[100px]">

        {/* Title and Tabs - Fixed Header */}
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <p className="font-['Capriola:Regular',sans-serif] h-[60px] leading-[63.577px] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-2.3374px] w-full">Cartas</p>
          <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
            <button
              onClick={() => setActiveTab('especiales')}
              className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px] cursor-pointer hover:opacity-80 transition-opacity"
            >
              {activeTab === 'especiales' && (
                <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
              )}
              <div className={`flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[19.04px] text-center w-[106px] ${activeTab === 'especiales' ? 'text-[#ebebeb]' : 'text-[#cdb3d0]'}`}>
                <p className="leading-[17.454px]">Especiales</p>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('elementos')}
              className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px] cursor-pointer hover:opacity-80 transition-opacity"
            >
              {activeTab === 'elementos' && (
                <div aria-hidden="true" className="absolute border-[#9952a3] border-[2.715px] border-solid inset-0 pointer-events-none rounded-[31.734px]" />
              )}
              <div className={`flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[19.04px] text-center w-[106px] ${activeTab === 'elementos' ? 'text-[#ebebeb]' : 'text-[#cdb3d0]'}`}>
                <p className="leading-[17.454px]">Elementos</p>
              </div>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full mt-[27px] pb-4">
          {activeTab === 'especiales' ? (
            <div className="gap-[4px] grid grid-cols-[repeat(2,_fit-content(100%))] relative shrink-0 w-full justify-center">
              {/* Ver todas las cartas */}
              <button onClick={() => handleCardClick('ver-cartas')} className="[grid-area:1_/_1] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px] cursor-pointer hover:opacity-90 transition-opacity" data-name="ver todas">
                <BackgroundImage>
                  <g filter="url(#filter0_d_328_85)" id="Star 14">
                    <path d={svgPaths.p3a92e200} fill="var(--fill-0, #3C7262)" />
                    <path d={svgPaths.paf66200} stroke="var(--stroke-0, #3C7262)" strokeWidth="3.72621" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="161.189" id="filter0_d_328_85" width="156.559" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1.86311" dy="2.32888" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.149554 0 0 0 0 0.283579 0 0 0 0 0.243868 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_85" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_85" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </BackgroundImage>
                <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-1/2 not-italic text-[23.67px] text-center text-white top-[calc(50%-4.89px)] -translate-x-1/2 w-[116.444px]">
                  <p className="mb-0">{`Ver todas `}</p>
                  <p>las cartas</p>
                </div>
                <div className="absolute h-[94.941px] left-1/2 top-[-6.99px] -translate-x-1/2 w-[103.486px]" data-name="ver cartas 1">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas1} />
                </div>
              </button>

              {/* Bomba medio */}
              <button onClick={() => handleCardClick('bomba-medio')} className="[grid-area:1_/_2] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Bomba_medio">
                <BackgroundImage1>
                  <g filter="url(#filter0_d_328_79)" id="Star 14">
                    <path d={svgPaths.p3a92e200} fill="var(--fill-0, #FF7E5E)" />
                    <path d={svgPaths.paf66200} stroke="var(--stroke-0, #FF7E5E)" strokeWidth="3.72621" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.723" id="filter0_d_328_79" width="157.025" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="2.32888" dy="1.86311" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.491587 0 0 0 0 0.198322 0 0 0 0 0.125574 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_79" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_79" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </BackgroundImage1>
                <BombaBackgroundImage />
                <div className="absolute font-['Capriola:Regular',sans-serif] leading-[23.289px] left-[calc(50%-0.37px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%-0.23px)] tracking-[-0.9316px] translate-x-[-50%]">
                  <p className="mb-0">{`Una pareja `}</p>
                  <p>se da vuelta</p>
                </div>
              </button>

              {/* Se mezclan las cartas */}
              <button onClick={() => handleCardClick('mezclar')} className="[grid-area:2_/_1] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px] cursor-pointer hover:opacity-90 transition-opacity" data-name="se mezclan las cartas">
                <BackgroundImage>
                  <g filter="url(#filter0_d_328_81)" id="Star 14">
                    <path d={svgPaths.p3a92e200} fill="var(--fill-0, #603265)" />
                    <path d={svgPaths.paf66200} stroke="var(--stroke-0, #603265)" strokeWidth="3.72621" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="161.189" id="filter0_d_328_81" width="156.559" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1.86311" dy="2.32888" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.270987 0 0 0 0 0.138039 0 0 0 0 0.285438 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_81" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_81" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </BackgroundImage>
                <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-[calc(50%+0.2px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%+3.96px)] translate-x-[-50%]">
                  <p className="mb-0">Se mezclan</p>
                  <p>{` las cartas`}</p>
                </div>
                <div className="absolute flex h-[101.037px] items-center justify-center left-[27.02px] top-[-4.66px] w-[128.459px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[0.381deg]">
                    <div className="h-[100.191px] opacity-90 relative w-[127.796px]" data-name="gatos_Magic0 2">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[101.04%] left-[0.39%] max-w-none top-[1.04%] w-full" src={imgGatosMagic02} />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Bomba difícil */}
              <button onClick={() => handleCardClick('bomba-dificil')} className="[grid-area:2_/_2] h-[168.145px] overflow-clip relative shrink-0 w-[183.05px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Bomba_ dificil">
                <BackgroundImage1>
                  <g filter="url(#filter0_d_328_87)" id="Star 14">
                    <path d={svgPaths.p3a92e200} fill="var(--fill-0, #CF4460)" />
                    <path d={svgPaths.paf66200} stroke="var(--stroke-0, #CF4460)" strokeWidth="3.72621" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.723" id="filter0_d_328_87" width="157.025" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="2.32888" dy="1.86311" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.536264 0 0 0 0 0.17007 0 0 0 0 0.243836 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_87" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_87" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </BackgroundImage1>
                <BombaBackgroundImage />
                <div className="absolute font-['Capriola:Regular',sans-serif] leading-[23.289px] left-[calc(50%+0.14px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%-0.23px)] tracking-[-0.9316px] translate-x-[-50%]">
                  <p className="mb-0">{`Las parejas `}</p>
                  <p>se dan vuelta</p>
                </div>
              </button>

              {/* Suerte */}
              <button onClick={() => handleCardClick('suerte')} className="[grid-column:1_/_3] justify-self-center h-[168.145px] overflow-clip relative shrink-0 w-[183.05px] cursor-pointer hover:opacity-90 transition-opacity" data-name="suerte">
                <BackgroundImage1>
                  <g filter="url(#filter0_d_328_83)" id="Star 14">
                    <path d={svgPaths.p3a92e200} fill="var(--fill-0, #CF449E)" />
                    <path d={svgPaths.paf66200} stroke="var(--stroke-0, #CF449E)" strokeWidth="3.72621" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.723" id="filter0_d_328_83" width="157.025" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="2.32888" dy="1.86311" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.407039 0 0 0 0 0.170634 0 0 0 0 0.323702 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_328_83" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_328_83" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </BackgroundImage1>
                <div className="absolute h-[96.806px] left-[calc(50%-0.19px)] top-[calc(50%-32.87px)] translate-x-[-50%] translate-y-[-50%] w-[105.348px]" data-name="ver cartas 1">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas2} />
                </div>
                <div className="absolute font-['Capriola:Regular',sans-serif] leading-[24.22px] left-[calc(50%-0.02px)] not-italic text-[23.67px] text-center text-nowrap text-white top-[calc(50%-0.23px)] translate-x-[-50%]">
                  <p className="mb-0">{`Ganaste `}</p>
                  <p>un match</p>
                </div>
              </button>
            </div>
          ) : (
            <div className="content-stretch flex flex-col gap-[25px] items-end w-full max-w-[363px] mx-auto">
              <div className="content-start flex flex-wrap gap-[18px_15px] items-start relative shrink-0 w-full">
                {/* Congelada */}
                <button onClick={() => handleCardClick('congelada')} className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px] cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="h-[156.085px] relative shrink-0 w-[162.279px]">
                    <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElementoCongelada} />
                    </div>
                  </div>
                  <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
                    <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[20px] text-center w-[106px]">
                      <p className="leading-[17.454px]">Congelada</p>
                    </div>
                  </div>
                </button>
                
                {/* Mágica */}
                <button onClick={() => handleCardClick('magica')} className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px] cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="h-[150.085px] relative shrink-0 w-[156.041px]">
                    <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElementoMagica} />
                    </div>
                  </div>
                  <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[133px]">
                    <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[20px] text-center w-[106px]">
                      <p className="leading-[17.454px]">Mágica</p>
                    </div>
                  </div>
                </button>
                
                {/* Congelada II */}
                <button onClick={() => handleCardClick('congelada-ii')} className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px] cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="h-[150.254px] relative shrink-0 w-[156.217px]">
                    <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElementoCongeladaII} />
                    </div>
                  </div>
                  <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[172px]">
                    <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[20px] text-center w-[139px]">
                      <p className="leading-[17.454px]">Congelada II</p>
                    </div>
                  </div>
                </button>
                
                {/* Fuego */}
                <button onClick={() => handleCardClick('fuego')} className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[172.675px] cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="h-[146.254px] relative shrink-0 w-[152.058px]">
                    <div className="absolute inset-[-0.55%_-4.07%_-4.71%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElementoFuego} />
                    </div>
                  </div>
                  <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[172px]">
                    <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[20px] text-center w-[139px]">
                      <p className="leading-[17.454px]">Fuego</p>
                    </div>
                  </div>
                </button>
              </div>
              
              {/* Enterrada con Pico */}
              <button onClick={() => handleCardClick('enterrada')} className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                  <div className="h-[158.615px] relative shrink-0 w-[172.675px]">
                    <div className="absolute inset-[-0.55%_0]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[123.84%] left-[-7.8%] max-w-none top-[-10.88%] w-[113.76%]" src={imgElementoEnterrada} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[158.615px] relative shrink-0 w-[166.085px]">
                    <div className="absolute inset-[3.05%_3.82%_3.32%_3.56%] rounded-[30.756px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30.756px]">
                        <img alt="" className="absolute h-[106.84%] left-[2.33%] max-w-none top-[-3.95%] w-[95.34%]" src={imgElementoPico} />
                      </div>
                      <div className="absolute font-['Capriola:Regular',sans-serif] leading-[22.848px] left-[75.21px] not-italic text-[22.328px] text-black text-center text-nowrap top-[46.13px] translate-x-[-50%]">
                        <p className="mb-0">{`libera la `}</p>
                        <p className="mb-0">{`carta `}</p>
                        <p>enterrada</p>
                      </div>
                    </div>
                    <div className="absolute aspect-[166/175.96] left-[39.69%] right-[3.82%] top-0">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerCartas3} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[172px]">
                  <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[20px] text-center w-[139px]">
                    <p className="leading-[17.454px]">Enterrada</p>
                  </div>
                </div>
              </button>
              
              {/* Nube */}
              <button onClick={() => handleCardClick('nube')} className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                  <div className="h-[158.615px] relative shrink-0 w-[172.675px]">
                    <div className="absolute inset-[-0.55%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElementoNube1} />
                    </div>
                  </div>
                  <div className="h-[158.615px] relative shrink-0 w-[172.675px]">
                    <div className="absolute inset-[-0.55%_0]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[99.77%] left-[4.47%] max-w-none top-[-0.08%] w-[91.05%]" src={imgElementoNube2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[172px]">
                  <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[20px] text-center w-[139px]">
                    <p className="leading-[17.454px]">Nube</p>
                  </div>
                </div>
              </button>
              
              {/* Magia II */}
              <button onClick={() => handleCardClick('magia-ii')} className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                  <div className="h-[158.615px] relative shrink-0 w-[172.675px]">
                    <div className="absolute inset-[-0.55%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElementoMagiaII1} />
                    </div>
                  </div>
                  <div className="h-[158.615px] relative shrink-0 w-[172.675px]">
                    <div className="absolute inset-[-0.55%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElementoMagiaII2} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[41px] items-center px-[16.292px] py-[12.694px] relative rounded-[31.734px] shrink-0 w-[172px]">
                  <div className="flex flex-col font-['Capriola:Regular',sans-serif] h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#cdb3d0] text-[20px] text-center w-[139px]">
                    <p className="leading-[17.454px]">Magia II</p>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}