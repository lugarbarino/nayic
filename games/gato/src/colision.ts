// Choques según la FORMA REAL de las imágenes (no rectángulos).
//
// Para cada imagen armamos una "máscara": una grilla chica (48 celdas en el lado mayor)
// que marca qué partes son sólidas (no transparentes). Dos cosas chocan solo si una parte
// sólida del gato toca una parte sólida del obstáculo.
//
// Las posiciones se leen de lo que está DIBUJADO en pantalla (getBoundingClientRect), así
// el choque siempre coincide con lo que se ve: incluye animaciones, escalas y desplazamientos.
//
// Las máscaras se "achican" un poco (erosión) para perdonar roces en los bordes: se siente
// justo para el jugador.

type Mascara = { w: number; h: number; solido: Uint8Array };

const RESOLUCION = 48; // celdas en el lado mayor de cada imagen
const UMBRAL_ALFA = 110; // de 0 a 255: a partir de cuánto un píxel cuenta como sólido
const cache = new Map<string, Mascara>();

function erosionar(m: Mascara): Mascara {
  const { w, h, solido } = m;
  const out = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (!solido[i]) continue;
      // sólido solo si sus 4 vecinas también lo son
      if (x > 0 && x < w - 1 && y > 0 && y < h - 1 &&
          solido[i - 1] && solido[i + 1] && solido[i - w] && solido[i + w]) {
        out[i] = 1;
      }
    }
  }
  return { w, h, solido: out };
}

function mascaraDe(img: HTMLImageElement): Mascara | null {
  const src = img.currentSrc || img.src;
  const guardada = cache.get(src);
  if (guardada) return guardada;
  if (!img.complete || !img.naturalWidth) return null;

  const escala = RESOLUCION / Math.max(img.naturalWidth, img.naturalHeight);
  const w = Math.max(3, Math.round(img.naturalWidth * escala));
  const h = Math.max(3, Math.round(img.naturalHeight * escala));
  const lienzo = document.createElement('canvas');
  lienzo.width = w;
  lienzo.height = h;
  const ctx = lienzo.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;
  ctx.drawImage(img, 0, 0, w, h);
  const pixeles = ctx.getImageData(0, 0, w, h).data;
  const solido = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) solido[i] = pixeles[i * 4 + 3] > UMBRAL_ALFA ? 1 : 0;

  const mascara = erosionar({ w, h, solido });
  cache.set(src, mascara);
  return mascara;
}

// Rectángulo donde realmente se dibuja la imagen (respeta object-fit: contain)
function rectDibujado(img: HTMLImageElement) {
  const r = img.getBoundingClientRect();
  if (getComputedStyle(img).objectFit !== 'contain' || !img.naturalWidth) return r;
  const proporcion = img.naturalWidth / img.naturalHeight;
  let ancho = r.width;
  let alto = r.width / proporcion;
  if (alto > r.height) {
    alto = r.height;
    ancho = r.height * proporcion;
  }
  const left = r.left + (r.width - ancho) / 2;
  const top = r.top + (r.height - alto) / 2;
  return { left, top, right: left + ancho, bottom: top + alto, width: ancho, height: alto };
}

function esSolido(m: Mascara, r: { left: number; top: number; width: number; height: number }, x: number, y: number) {
  const cx = Math.floor(((x - r.left) / r.width) * m.w);
  const cy = Math.floor(((y - r.top) / r.height) * m.h);
  if (cx < 0 || cy < 0 || cx >= m.w || cy >= m.h) return false;
  return m.solido[cy * m.w + cx] === 1;
}

// ¿Se tocan las partes sólidas de estas dos imágenes?
export function chocan(a: HTMLImageElement, b: HTMLImageElement): boolean {
  const ra = rectDibujado(a);
  const rb = rectDibujado(b);
  const x0 = Math.max(ra.left, rb.left);
  const x1 = Math.min(ra.right, rb.right);
  const y0 = Math.max(ra.top, rb.top);
  const y1 = Math.min(ra.bottom, rb.bottom);
  if (x0 >= x1 || y0 >= y1) return false; // ni siquiera se superponen las cajas

  const ma = mascaraDe(a);
  const mb = mascaraDe(b);
  if (!ma || !mb) return false;

  // Recorremos la zona compartida con un paso del tamaño de la celda más chica
  const paso = Math.max(1.5, Math.min(ra.width / ma.w, ra.height / ma.h, rb.width / mb.w, rb.height / mb.h));
  for (let y = y0 + paso / 2; y < y1; y += paso) {
    for (let x = x0 + paso / 2; x < x1; x += paso) {
      if (esSolido(ma, ra, x, y) && esSolido(mb, rb, x, y)) return true;
    }
  }
  return false;
}

// Atajo: ¿el gato choca con el elemento marcado con data-hit="<id>"?
export function chocaConGato(id: string): boolean {
  const gato = document.querySelector<HTMLImageElement>('img[data-hit="gato"]');
  const otro = document.querySelector<HTMLImageElement>(`img[data-hit="${id}"]`);
  return !!(gato && otro && chocan(gato, otro));
}
