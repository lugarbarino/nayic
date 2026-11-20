// Pantalla completa al empezar a jugar (en celulares y tablets).
//
// Los navegadores solo dejan pasar a pantalla completa como respuesta a un toque, por eso
// se llama desde el botón de empezar de cada juego.
// - Android (Chrome y otros): oculta las barras del navegador. Con `horizontal: true`
//   además traba la pantalla en horizontal.
// - iPhone: Safari no lo permite para páginas web (no pasa nada). Ahí la forma de jugar sin
//   barras es "Agregar a pantalla de inicio" (ver manifest.webmanifest en la landing).
// - Compu: no hace nada (no queremos sorprender a quien juega con mouse).
// - Si el juego ya está abierto como app (desde la pantalla de inicio), tampoco hace falta.

type Opciones = { horizontal?: boolean };

function esPantallaTactil() {
  return window.matchMedia('(pointer: coarse)').matches;
}

function yaEsApp() {
  return (
    window.matchMedia('(display-mode: fullscreen)').matches ||
    window.matchMedia('(display-mode: standalone)').matches ||
    // iPhone/iPad abiertos desde la pantalla de inicio
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

export function pantallaCompletaAlJugar({ horizontal = false }: Opciones = {}) {
  try {
    if (!esPantallaTactil() || document.fullscreenElement) return;

    const trabarOrientacion = () => {
      if (!horizontal) return;
      const orientacion = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> };
      orientacion?.lock?.('landscape').catch(() => {});
    };

    if (yaEsApp()) {
      trabarOrientacion();
      return;
    }

    const raiz = document.documentElement;
    if (!raiz.requestFullscreen) return; // iPhone: no soportado
    raiz.requestFullscreen({ navigationUI: 'hide' }).then(trabarOrientacion).catch(() => {});
  } catch {
    // Si el navegador no lo permite, se juega igual con las barras
  }
}
