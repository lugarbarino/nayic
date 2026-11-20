import { useState, useEffect } from 'react';
import imgGeminiGeneratedImage from "../assets/carga/logo.webp";
import img3511 from "../assets/carga/bloque-dorado.webp";
import img32871 from "../assets/carga/caramelo-rojo.webp";
import img33201 from "../assets/carga/roca-lava.webp";
import img33571 from "../assets/carga/hielo-azul.webp";
import imgChocolate1 from "../assets/carga/chocolate.webp";
import imgContainer11 from "../assets/carga/cuadrado-azul.webp";
import imgContainer1 from "../assets/carga/cuadrado-rosa.webp";
import imgGroup1110 from "../assets/carga/bloque-violeta.webp";
import imgGroup121 from "../assets/carga/bloque-crema.webp";
import imgGroup941 from "../assets/carga/peluche-rojo.webp";
import imgGroup1131 from "../assets/carga/cuadrado-rojo.webp";
import imgGroup1151 from "../assets/carga/barra-roja.webp";
import imgGroup1161 from "../assets/carga/malvaviscos.webp";
import imgGroup1171 from "../assets/carga/bloque-azul.webp";
import imgGroup1181 from "../assets/carga/malaquita.webp";
import imgGroup1191 from "../assets/carga/escamas-azules.webp";
import imgJiraffBottom12 from "../assets/carga/leopardo.webp";
import imgLightBlueBottom1 from "../assets/carga/ceramica-celeste.webp";
import imgWoodBottom1 from "../assets/carga/madera.webp";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulamos una carga progresiva más lenta y visible
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 8 + 3; // Incrementos aleatorios entre 3-11 (más lento)
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        // Delay para mostrar el 100% antes de continuar
        setTimeout(() => {
          onLoadComplete();
        }, 500);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 200); // Intervalo más lento: 200ms en lugar de 100ms

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="relative w-full h-dvh overflow-hidden" style={{ backgroundImage: "linear-gradient(142.009deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      {/* Piezas decorativas flotantes */}
      <div className="animate-float-slow -translate-x-1/2 -translate-y-1/2 absolute flex h-[42.882px] items-center justify-center left-[calc(50%-352.75px)] top-[calc(50%+215.94px)] w-[38.503px]">
        <div className="flex-none rotate-[-20.85deg]">
          <div className="h-[35.318px] relative w-[27.749px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3511} />
          </div>
        </div>
      </div>
      <div className="animate-float-medium -translate-x-1/2 -translate-y-1/2 absolute flex h-[35.669px] items-center justify-center left-[calc(50%+420.86px)] top-[calc(50%+144.33px)] w-[31.726px]">
        <div className="flex-none rotate-[-11.45deg]">
          <div className="h-[31.113px] relative w-[26.068px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img32871} />
          </div>
        </div>
      </div>
      <div className="animate-float-fast -translate-x-1/2 -translate-y-1/2 absolute flex h-[44.504px] items-center justify-center left-[calc(50%-281.04px)] top-[calc(50%-275.25px)] w-[39.924px]">
        <div className="flex-none rotate-[-16.22deg]">
          <div className="h-[37.42px] relative w-[30.693px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img33201} />
          </div>
        </div>
      </div>
      <div className="animate-float-slow -translate-x-1/2 -translate-y-1/2 absolute flex h-[38.125px] items-center justify-center left-[calc(50%+347.1px)] top-[calc(50%+5.56px)] w-[34.191px]">
        <div className="flex-none rotate-[16.8deg]">
          <div className="h-[31.954px] relative w-[26.068px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img33571} />
          </div>
        </div>
      </div>
      <div className="animate-float-medium -translate-x-1/2 -translate-y-1/2 absolute flex h-[39.57px] items-center justify-center left-[calc(50%-185.64px)] top-[calc(50%+199.28px)] w-[36.714px]">
        <div className="flex-none rotate-[21.4deg]">
          <div className="h-[31.954px] relative w-[26.909px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChocolate1} />
          </div>
        </div>
      </div>
      <div className="animate-float-fast -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+219.07px)] size-[30.782px] top-[calc(50%+17.6px)]">
        <div className="flex-none rotate-[-11.61deg]">
          <div className="relative size-[26.068px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer11} />
          </div>
        </div>
      </div>
      <div className="animate-float-slow -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-369.55px)] size-[32.263px] top-[calc(50%-123.67px)]">
        <div className="flex-none rotate-[-16.07deg]">
          <div className="relative size-[26.068px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
          </div>
        </div>
      </div>
      <div className="animate-float-medium -translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+38.51px)] size-[29.011px] top-[calc(50%-275.99px)]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1110} />
      </div>
      <div className="animate-float-fast -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+77.38px)] size-[36.762px] top-[calc(50%+255.88px)]">
        <div className="flex-none rotate-[-18.64deg]">
          <div className="relative size-[29.011px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup121} />
          </div>
        </div>
      </div>
      <div className="animate-float-slow -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+182.43px)] size-[42.858px] top-[calc(50%-186.07px)]">
        <div className="flex-none rotate-[9.99deg]">
          <div className="relative size-[36.999px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup941} />
          </div>
        </div>
      </div>
      <div className="animate-float-medium -translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-292.68px)] size-[62.647px] top-[calc(50%+104.82px)]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1131} />
      </div>
      <div className="animate-float-fast -translate-x-1/2 -translate-y-1/2 absolute h-[88.714px] left-[calc(50%+240.19px)] top-[calc(50%+170.86px)] w-[106.373px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1151} />
      </div>
      <div className="animate-float-slow -translate-x-1/2 -translate-y-1/2 absolute h-[71.055px] left-[calc(50%-178.15px)] top-[calc(50%-207.97px)] w-[67.692px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1161} />
      </div>
      <div className="animate-float-medium -translate-x-1/2 -translate-y-1/2 absolute flex h-[74.319px] items-center justify-center left-[calc(50%-57.65px)] top-[calc(50%+163.66px)] w-[74.692px]">
        <div className="flex-none rotate-[-26.67deg]">
          <div className="h-[55.078px] relative w-[55.919px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1171} />
          </div>
        </div>
      </div>
      <div className="animate-float-fast -translate-x-1/2 -translate-y-1/2 absolute h-[87.873px] left-[calc(50%+298.19px)] top-[calc(50%-117.56px)] w-[98.384px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1181} />
      </div>
      <div className="animate-float-slow -translate-x-1/2 -translate-y-1/2 absolute h-[62.647px] left-[calc(50%+39.46px)] top-[calc(50%-127.18px)] w-[92.919px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1191} />
      </div>
      <div className="animate-float-medium -translate-x-1/2 -translate-y-1/2 absolute flex h-[36.295px] items-center justify-center left-[calc(50%-276.63px)] top-[calc(50%-55.14px)] w-[32.246px]">
        <div className="flex-none rotate-[10.42deg]">
          <div className="h-[31.954px] relative w-[26.909px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJiraffBottom12} />
          </div>
        </div>
      </div>
      <div className="animate-float-fast -translate-x-1/2 -translate-y-1/2 absolute flex h-[37.781px] items-center justify-center left-[calc(50%-402.9px)] top-[calc(50%+32.39px)] w-[34.196px]">
        <div className="flex-none rotate-[14.84deg]">
          <div className="h-[31.954px] relative w-[26.909px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLightBlueBottom1} />
          </div>
        </div>
      </div>
      <div className="animate-float-slow -translate-x-1/2 -translate-y-1/2 absolute h-[31.954px] left-[calc(50%-81.55px)] top-[calc(50%-91.52px)] w-[26.909px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWoodBottom1} />
      </div>

      {/* Contenido central */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[17px] items-center w-[90%] max-w-[336px]">
        {/* Logo TETRIS */}
        <div className="aspect-[2285/517] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="TETRIS" className="absolute h-[346.62%] left-[-2.76%] max-w-none top-[-113.73%] w-[105.03%]" src={imgGeminiGeneratedImage} />
          </div>
        </div>
        
        {/* Texto Cargando */}
        <p className="font-['Capriola:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-pre-wrap">
          Cargando
        </p>
        
        {/* Barra de progreso */}
        <div className="relative w-full max-w-[207px] h-[6px] bg-[#070b11] rounded-[30px] overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-[#da6b13] rounded-[30px] transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}