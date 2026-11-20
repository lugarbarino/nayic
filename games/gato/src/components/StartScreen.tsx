import StartDesktop from "./inicio/InicioEscritorio";
import StartMobile from "./inicio/InicioCelular";
import { useState, useEffect } from "react";

interface StartScreenProps {
  onStart: () => void;
}

// La pantalla de inicio de escritorio está diseñada con posiciones fijas para una pantalla
// de unos 800px de alto. En pantallas más bajas (por ejemplo un celular girado) la
// achicamos entera, proporcionalmente, para que entre todo (logo, texto y botón).
const ALTO_DISENO = 800;

export default function StartScreen({ onStart }: StartScreenProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [escala, setEscala] = useState(1);

  useEffect(() => {
    const medir = () => {
      // Diseño de celular solo en vertical; un celular girado usa el de escritorio achicado
      setIsMobile(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
      setEscala(Math.min(1, window.innerHeight / ALTO_DISENO));
    };

    medir();
    window.addEventListener('resize', medir);

    return () => window.removeEventListener('resize', medir);
  }, []);

  if (isMobile) {
    return (
      <div className="relative size-full">
        <StartMobile onStartClick={onStart} />
      </div>
    );
  }

  return (
    <div className="relative size-full overflow-hidden">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={
          escala < 1
            ? { width: `${100 / escala}%`, height: `${100 / escala}%`, transform: `scale(${escala})` }
            : { width: '100%', height: '100%' }
        }
      >
        <StartDesktop onStartClick={onStart} />
      </div>
    </div>
  );
}
