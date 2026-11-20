import { useState } from 'react';
import { NavigationButtons } from './NavigationButtons';
import svgPaths from '../../imports/svg-lnndtygec0';
import img24661 from 'figma:asset/0fd2218493d22b0f641699722879219bd05d0966.png';
import img24662 from 'figma:asset/90477ea21d6ff78c579981c4f44f52294cbd5799.png';
import img24663 from 'figma:asset/e14f9504fe456127b37d09f0009e4ab1531834c7.png';
import img24664 from 'figma:asset/a5655b127043639d6f4978fbf2f8b6d1b4fe1b2b.png';
import img24665 from 'figma:asset/313dca417339168eb684ed22e4f6455acac8119e.png';
import img24666 from 'figma:asset/6fca2cce9565ac064a333c813f8b9f9063c22dc1.png';
import img24667 from 'figma:asset/3aaf7e9407c7c2224576b2bf7777afdbed0c6b21.png';
import img24668 from 'figma:asset/1f9bcf77582165f09248aed38cf9cd974b840ac1.png';
import img24669 from 'figma:asset/5504c8d5aa62265b954a2e9d59afad97b271ce6c.png';
import img24670 from 'figma:asset/2496fa400acd588632bf76a2c01b62ad696b1add.png';
import img24672 from 'figma:asset/1bc0d6f798fc1da7c33bcf8a110c6518f3dce20c.png';
import img24673 from 'figma:asset/6da87fde8002613df5435ae442d98cf7efb8037d.png';
import img24674 from 'figma:asset/bfd1b159c4413c9b505f6879d170732bc10ed7dd.png';
import img24675 from 'figma:asset/1e45a9cdfc89efed056bf69008a1baa0296299af.png';
import img24676 from 'figma:asset/e9358f2405897c794bb650ada3f78d804cec1ad4.png';
import img24677 from 'figma:asset/93ff393ec2b33fafcfc3e80bf92b8df28335cd4f.png';
import img24678 from 'figma:asset/e1a665f901fd0f0a775fbd97a3ac06e1e16005af.png';
import img24679 from 'figma:asset/c305a2e466fa52ab3ff5859d685996213ed40c2a.png';
import img24680 from 'figma:asset/527479194df3eda26611eb20e803cd5ad832b148.png';
import img24681 from 'figma:asset/8b5578c23c943937be070ab9ef3a35823a5745aa.png';
import img24682 from 'figma:asset/fe9870ab6aea068053adb94839e44d2c0bcf8dd1.png';
import img24683 from 'figma:asset/f1139b664f25401b3fc2824f71f78aee292dfbe2.png';
import img24684 from 'figma:asset/3aeadfc1499de4bdb2d7ccef7be7d32eaec73617.png';
import img24685 from 'figma:asset/f85aa35ea30fd64bd5514b9853ae41b5485261df.png';
import img24686 from 'figma:asset/2224b5524a0da09ae9965b8b6fc954d396604aaf.png';
import img24687 from 'figma:asset/68f27beb59c68c0cfd63fae69c3cdd5ee1d76a45.png';
import img24688 from 'figma:asset/6386bb3fb8cce39b405d58c4dbd7dc54b0e6cee6.png';
import img24690 from 'figma:asset/4eb81bad4b1a4b9aa071f00bf6dce73580bddcdd.png';
import img24691 from 'figma:asset/d5484e3a0f94f27214c6865cda053d1654a281bc.png';
import img24692 from 'figma:asset/0b0a793af3ecb785d85ef0990594ac1935f427dc.png';
import img24659 from 'figma:asset/47fca2315a0dfa44f3d7f62d21f2a2ea7d01370e.png';
import img24660 from 'figma:asset/1688a4967012d03e5e5142e10524f63f3f0f159f.png';

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