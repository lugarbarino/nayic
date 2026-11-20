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
      <svg className="girar-celular-icono" width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
        <rect x="30" y="12" width="36" height="64" rx="7" stroke="white" strokeWidth="4" />
        <circle cx="48" cy="66" r="3" fill="white" />
        <path d="M14 58a34 34 0 0 1 8-30" stroke="#f2abb5" strokeWidth="4" strokeLinecap="round" />
        <path d="M17 22l5 6 6-5" stroke="#f2abb5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="font-['Capriola:Regular',sans-serif] text-[28px] leading-tight text-white">Girá el celular</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[17px] leading-snug text-[#f2abb5] max-w-[260px]">
        Gato se juega en horizontal, así tenés tiempo de esquivar las rocas.
      </p>
    </div>
  );
}
