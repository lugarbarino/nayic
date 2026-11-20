import { useEffect, useState } from 'react';

// Gato se juega en horizontal. En un celular en vertical la pantalla es tan angosta
// que los obstáculos cruzan en ~1 segundo, así que pedimos girarlo.
// "Celular en vertical" = pantalla táctil, angosta y más alta que ancha.
export const CONSULTA_CELULAR_VERTICAL = '(orientation: portrait) and (pointer: coarse) and (max-width: 900px)';

export function esCelularVertical() {
  return typeof window !== 'undefined' && window.matchMedia(CONSULTA_CELULAR_VERTICAL).matches;
}

export function useCelularVertical() {
  const [vertical, setVertical] = useState(esCelularVertical);
  useEffect(() => {
    const mq = window.matchMedia(CONSULTA_CELULAR_VERTICAL);
    const actualizar = () => setVertical(mq.matches);
    actualizar();
    mq.addEventListener('change', actualizar);
    return () => mq.removeEventListener('change', actualizar);
  }, []);
  return vertical;
}

// Cartel a pantalla completa que tapa el juego (y lo pausa) mientras el celular está en vertical
export default function GirarCelular() {
  return (
    <div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-6 px-8 text-center"
      style={{ backgroundImage: 'linear-gradient(160deg, rgb(75, 43, 107) 10%, rgb(120, 56, 80) 55%, rgb(41, 64, 139) 100%)' }}
      role="dialog"
      aria-label="Girá el celular para jugar"
    >
      <style>{`
        @keyframes girar-celular {
          0%, 20% { transform: rotate(0deg); }
          45%, 75% { transform: rotate(90deg); }
          100% { transform: rotate(0deg); }
        }
        .girar-celular-telefono { transform-origin: 60px 60px; animation: girar-celular 2.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .girar-celular-telefono { animation: none; } }
      `}</style>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        {/* Flecha curva (sentido horario) alrededor del celular */}
        <path d="M44.3 16.8 A46 46 0 0 1 103.2 44.3" stroke="#f2abb5" strokeWidth="5" strokeLinecap="round" />
        <path d="M106.3 32.7 L103.2 44.3 L93.4 37.4" stroke="#f2abb5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Celular que gira de vertical a horizontal */}
        <g className="girar-celular-telefono">
          <rect x="43" y="30" width="34" height="60" rx="7" stroke="white" strokeWidth="5" />
          <circle cx="60" cy="81" r="3" fill="white" />
        </g>
      </svg>
      <p className="font-['Capriola:Regular',sans-serif] text-[28px] leading-tight text-white">Girá el celular</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[17px] leading-snug text-[#f2abb5] max-w-[260px]">
        Gato se juega en horizontal, así tenés tiempo de esquivar las rocas.
      </p>
    </div>
  );
}
