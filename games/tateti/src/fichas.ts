// Fichas (personajes) de cada jugador. Van en pares: la posición 0 del Jugador 1
// juega contra la posición 0 del Jugador 2, y así.
// Para agregar un par: poné los PNG en assets-src/fichas/, corré
// `npm run optimize -- games/tateti` desde la raíz del repo y sumalos acá.
import o from './assets/fichas/o.webp';
import x from './assets/fichas/x.webp';
import flor from './assets/fichas/flor.webp';
import corazon from './assets/fichas/corazon.webp';
import gatoColgado from './assets/fichas/gato-colgado.webp';
import gatoCaja from './assets/fichas/gato-caja.webp';
import abeja from './assets/fichas/abeja.webp';
import erizo from './assets/fichas/erizo.webp';
import gemaVerde from './assets/fichas/gema-verde.webp';
import gemaNaranja from './assets/fichas/gema-naranja.webp';
import rabanito from './assets/fichas/rabanito.webp';
import arvejas from './assets/fichas/arvejas.webp';
import monstruoAzul from './assets/fichas/monstruo-azul.webp';
import monstruoRosa from './assets/fichas/monstruo-rosa.webp';

export const FICHAS_JUGADOR_1 = [o, flor, gatoColgado, abeja, gemaVerde, rabanito, monstruoAzul];
export const FICHAS_JUGADOR_2 = [x, corazon, gatoCaja, erizo, gemaNaranja, arvejas, monstruoRosa];
