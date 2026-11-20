import { useState } from 'react';
import { NavigationButtons } from './NavigationButtons';
import img24661 from '../assets/retos/fuera-de-las-lineas.webp';
import img24662 from '../assets/retos/combina.webp';
import img24663 from '../assets/retos/modo-fantasma.webp';
import img24664 from '../assets/retos/hojas-por-todos-lados.webp';
import img24665 from '../assets/retos/truco-3d.webp';
import img24666 from '../assets/retos/todo-es-comida.webp';
import img24667 from '../assets/retos/modo-lujo.webp';
import img24668 from '../assets/retos/todo-helado.webp';
import img24669 from '../assets/retos/tema-halloween.webp';
import img24670 from '../assets/retos/multiverso.webp';
import img24672 from '../assets/retos/mensaje-secreto.webp';
import img24673 from '../assets/retos/mono-locura.webp';
import img24674 from '../assets/retos/agrega-patrones.webp';
import img24675 from '../assets/retos/los-opuestos-se-atraen.webp';
import img24676 from '../assets/retos/vision-de-sueno.webp';
import img24677 from '../assets/retos/regla-de-la-naturaleza.webp';
import img24678 from '../assets/retos/mano-opuesta.webp';
import img24679 from '../assets/retos/magia-de-mosaico.webp';
import img24680 from '../assets/retos/flor.webp';
import img24681 from '../assets/retos/brillo-extra.webp';
import img24682 from '../assets/retos/modo-noche.webp';
import img24683 from '../assets/retos/solo-puntos.webp';
import img24684 from '../assets/retos/vibras-de-graffiti.webp';
import img24685 from '../assets/retos/pasado-por-agua.webp';
import img24686 from '../assets/retos/logica-alienigena.webp';
import img24687 from '../assets/retos/navidad.webp';
import img24688 from '../assets/retos/lluvia-de-unicornios.webp';
import img24690 from '../assets/retos/sombras-cambiadas.webp';
import img24691 from '../assets/retos/estilo-vintage.webp';
import img24692 from '../assets/retos/doble-desafio.webp';
import img24659 from '../assets/retos/reglas-opuestas.webp';
import img24660 from '../assets/retos/upside-down.webp';

type CardData = {
  title: string;
  instruction: string;
  image: string;
};

type CardsGameProps = {
  onSelectMode: (mode: 'cartas' | 'paletas' | 'dados') => void;
};

const cards: CardData[] = [
  {
    title: 'Doble desafío',
    instruction: 'Sacá 2 cartas y seguí ambos retos',
    image: img24692
  },
  {
    title: 'Brillo extra',
    instruction: 'Agregá brillos, destellos o estrellitas en algún lugar',
    image: img24681
  },
  {
    title: 'Modo frío',
    instruction: 'No se permiten colores cálidos. Solo fríos, oscuros o apagados',
    image: img24663
  },
  {
    title: 'Fuera de las líneas',
    instruction: 'Olvidate de los bordes, dejá que el color se escape',
    image: img24661
  },
  {
    title: 'Combiná',
    instruction: 'Solo rivales permitidos. Usá colores complementarios',
    image: img24675
  },
  {
    title: 'Escena fantasma',
    instruction: 'Convertí la escena en una versión fantástica',
    image: img24676
  },
  {
    title: 'Hojas por todos lados',
    instruction: 'Agregá hojas en toda la escena',
    image: img24664
  },
  {
    title: 'Truco 3D',
    instruction: 'Hacé que algo resalte con sombreado o contraste',
    image: img24665
  },
  {
    title: 'Todo es comida',
    instruction: 'Casas de queso, cielos de caramelo, árboles brócoli',
    image: img24666
  },
  {
    title: 'Modo Halloween',
    instruction: 'Murciélagos, calabazas, brujas. Lo que quieras.',
    image: img24669
  },
  {
    title: 'Hallado y trazado',
    instruction: 'Agregá oro, gemas o cosas brillantes',
    image: img24667
  },
  {
    title: 'Tema estación',
    instruction: 'Elegí una estación y coloreá con su paleta.',
    image: img24677
  },
  {
    title: 'Multi verso',
    instruction: 'Dividí la página en 3 mundos: normal, oscuro y de golosinas.',
    image: img24670
  },
  {
    title: 'Regla de la naturaleza',
    instruction: 'Sumá flores a toda la escena',
    image: img24680
  },
  {
    title: 'Visión de invierno',
    instruction: 'Convertí la escena en invierno total.',
    image: img24668
  },
  {
    title: 'Mundo al revés',
    instruction: 'Coloreá todo al revés de lo que harías normalmente',
    image: img24659
  },
  {
    title: 'Reglas locas',
    instruction: 'Sumá texturas, estampados o diseños repetidos.',
    image: img24674
  },
  {
    title: 'Agregá patrones',
    instruction: 'Coloreá por fragmentos, como vitral o mosaico.',
    image: img24679
  },
  {
    title: 'Mano nocturna',
    instruction: 'Convertí la página en noche',
    image: img24682
  },
  {
    title: 'Mensaje secreto',
    instruction: 'Escondé una palabra o símbolo secreto',
    image: img24672
  },
  {
    title: 'Modo noche',
    instruction: 'Elegí un solo color y usá todos sus tonos',
    image: img24673
  },
  {
    title: 'Solo puntos',
    instruction: 'Coloreá solo usando puntos',
    image: img24683
  },
  {
    title: 'Lógica alienígena',
    instruction: 'Imaginá un planeta bizarro: pasto violeta, cielo verde.',
    image: img24686
  },
  {
    title: 'Pasado por agua',
    instruction: 'La escena está bajo el agua: burbujas, algas, peces.',
    image: img24685
  },
  {
    title: 'Vibras de graffiti',
    instruction: 'Agregá tags, sprays o doodles como arte urbano',
    image: img24684
  },
  {
    title: 'Lluvia de unicornios',
    instruction: 'Agregá rayos de colores cayendo del cielo',
    image: img24688
  },
  {
    title: 'Mano opuesta',
    instruction: 'Coloreá solo con tu mano no dominante.',
    image: img24678
  },
  {
    title: 'Estilo vintage',
    instruction: 'Dale un toque antiguo, gastado o retro',
    image: img24691
  },
  {
    title: 'Sombras raras',
    instruction: 'Las sombras van para el lado incorrecto o con colores raros',
    image: img24690
  },
  {
    title: 'Navidad',
    instruction: 'Agregá decoración navideña',
    image: img24687
  },
  {
    title: 'Realidad invertida',
    instruction: 'Realidad invertida. Girá la página y coloreá al revés.',
    image: img24660
  },
  {
    title: 'Outfit del día',
    instruction: 'Usá colores inspirados en tu outfit de hoy',
    image: img24662
  }
];

export function CardsGame({ onSelectMode }: CardsGameProps) {
  const [currentCard, setCurrentCard] = useState<CardData>(() => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const getNewCard = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * cards.length);
      setCurrentCard(cards[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative size-full overflow-y-auto flex flex-col" data-name="Cartas" style={{ backgroundImage: 'linear-gradient(180.031deg, rgb(53, 38, 57) 15.278%, rgb(176, 113, 192) 99.963%)' }}>
      {/* Title */}
      <p className="font-['Capriola:Regular',sans-serif] leading-[32px] sm:leading-[32px] md:leading-[31.146px] lg:leading-[36px] not-italic text-[24px] sm:text-[28px] md:text-[28px] lg:text-[32.344px] xl:text-[36px] text-center text-white pt-6 sm:pt-8 md:pt-12 lg:pt-16 px-4 flex-shrink-0">
        Tu reto es:
      </p>

      {/* Card Display */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-[120px] sm:pb-[130px] md:pb-[150px] lg:pb-[180px]">
        <div 
          className={`w-[300px] h-[302px] sm:w-[320px] sm:h-[322px] md:w-[313.439px] md:h-[316.738px] lg:w-[350px] lg:h-[353px] xl:w-[380px] xl:h-[384px] mb-4 sm:mb-5 md:mb-6 lg:mb-8 transition-all duration-300 cursor-pointer hover:scale-105 flex-shrink-0 ${ 
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`} 
          data-name="Card"
          onClick={getNewCard}
        >
          <div className="relative size-full overflow-hidden rounded-lg">
            <img 
              alt="" 
              className="w-full h-full object-contain" 
              src={currentCard.image} 
            />
          </div>
        </div>
        
        {/* Card Instruction */}
        <p 
          className={`font-['SF_Pro:Italic',sans-serif] italic leading-[24px] text-[20px] text-center text-[#dedede] max-w-[280px] sm:max-w-[300px] md:max-w-[313.439px] lg:max-w-[400px] xl:max-w-[450px] mx-auto transition-all duration-300 ${ 
            isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          {currentCard.instruction}
        </p>
      </div>

      {/* Buttons */}
      <div className="fixed left-1/2 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 translate-x-[-50%] z-10">
        <NavigationButtons 
          currentMode="cartas"
          onSelectMode={onSelectMode}
          onActiveAction={getNewCard}
        />
      </div>
    </div>
  );
}