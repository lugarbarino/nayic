// Escala del juego según el alto de la pantalla.
// Los tamaños del juego (gato, rocas, piso, poderes) y la velocidad están pensados para
// pantallas de 700px de alto o más. En pantallas más bajas (un celular girado, ~375px)
// achicamos todo en la misma proporción para que se juegue igual, solo que más chico.
// En compu (700px o más) la escala es 1: queda exactamente como el diseño original.
export const ALTO_REFERENCIA = 700;

export function escalaPantalla() {
  if (typeof window === 'undefined') return 1;
  return Math.min(1, window.innerHeight / ALTO_REFERENCIA);
}

// Pantalla baja: se usa el encabezado compacto (el de celular)
export function esPantallaBaja() {
  return typeof window !== 'undefined' && window.innerHeight < 500;
}
