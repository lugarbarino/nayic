import svgPaths from "../svg/compartir";
import imgSnake1 from "../assets/corazon-firma.webp";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[235px]">
      <p className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#23252d] text-[20px] w-[235px]">Compartilo</p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] min-w-full relative shrink-0 text-[#84858d] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enviá este juego a tus amigos
      </p>
    </div>
  );
}

function SystemChipsItem() {
  return (
    <div className="h-[78px] relative shrink-0 w-[75px]" data-name="System / Chips Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 78">
        <g id="System / Chips Item">
          <path d={svgPaths.p28776100} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#8d3397] content-stretch flex h-[78px] items-start relative rounded-[31px] shrink-0 hover:-translate-y-1 transition-transform cursor-pointer" 
      data-name="button"
      aria-label="Compartir juego"
    >
      <SystemChipsItem />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-9px_4px_0px_rgba(0,0,0,0.25)]" />
    </button>
  );
}

function Frame2({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Button onClick={onClick} />
    </div>
  );
}

function Frame1({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#f3f3f4] relative rounded-[40px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[82px] items-center px-[24px] py-[12px] relative w-full">
          <Frame />
          <Frame2 onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] w-[82px]">
        <p className="leading-[1.2]">Hecho con </p>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="snake 1">
        <img alt="love" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSnake1} />
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] w-[31px]">
        <p className="leading-[1.2]">por</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[23.112px] ml-0 mt-0 relative row-1 w-[87px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.0001 23.1116">
        <g id="Group 2">
          <path d={svgPaths.p21c72f80} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.p15fe8f00} fill="var(--fill-0, #412344)" id="Vector_2" />
          <path d={svgPaths.p3fec5bf2} fill="var(--fill-0, #412344)" id="Vector_3" />
          <path d={svgPaths.p3f01ab00} fill="var(--fill-0, #412344)" id="Vector_4" />
          <path d={svgPaths.p3737b600} fill="var(--fill-0, #412344)" id="Vector_5" />
          <path d={svgPaths.p10d4f700} fill="var(--fill-0, #412344)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group2({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 cursor-pointer"
      aria-label="Visitar sitio web de NAYIC"
    >
      <Group />
    </button>
  );
}

function Frame3({ onNayicClick }: { onNayicClick: () => void }) {
  return (
    <button 
      onClick={onNayicClick}
      className="content-stretch flex gap-[8px] items-center relative shrink-0 hover:-translate-y-1 transition-transform cursor-pointer bg-transparent border-none p-0"
      aria-label="Visitar sitio web de NAYIC"
    >
      <Frame4 />
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
        <Group />
      </div>
    </button>
  );
}

export default function ShareBanner() {
  const handleShare = async () => {
    const shareData = {
      title: 'Juego de Memoria',
      text: '¡Juega conmigo a este divertido juego de memoria con personajes lindos!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copiar URL al portapapeles
        await navigator.clipboard.writeText(window.location.href);
        alert('¡Enlace copiado al portapapeles!');
      }
    } catch (err) {
      console.log('Error al compartir:', err);
    }
  };

  const handleNayicClick = () => {
    window.open('https://nayic.com.ar/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-[431px]">
      <Frame1 onClick={handleShare} />
      <Frame3 onNayicClick={handleNayicClick} />
    </div>
  );
}