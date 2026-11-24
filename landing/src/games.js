// Editá acá los juegos. Cada uno vive en /games/<carpeta> y se publica en /<ruta>/
// - label / intro: los textos que van debajo del ícono (el nombre ya lo dice el logo)
// - color: el fondo del ícono, el mismo color de la pantalla del juego [centro, borde]
// - relleno: cuánto aire hay alrededor del logo dentro del ícono (logos anchos = más chico)
// - personaje: el que se asoma por la esquina del ícono; ancho = su tamaño en compu
export const games = [
  {
    id: 'viborita', title: 'La Viborita', href: '/viborita/',
    label: 'Clásico', intro: 'El clásico, renovado.',
    logo: '/img/logos/viborita.webp', color: ['#2e8a76', '#1d6658'], relleno: '18px',
    personaje: '/img/personajes/vibora.webp', ancho: 116,
  },
  {
    id: 'caos', title: 'CAOS de color', href: '/caos/',
    label: 'Para dibujar', intro: 'Retos, paletas y números al azar.',
    logo: '/img/logos/caos.webp', color: ['#2f43a0', '#1c2a66'], relleno: '32px',
    personaje: '/img/personajes/flor.webp', ancho: 78,
  },
  {
    id: 'tetris', title: 'Tetris Texturas', href: '/tetris/',
    label: 'Clásico', intro: 'El de siempre, con otra piel.',
    logo: '/img/logos/tetris.webp', color: ['#283a66', '#16203a'], relleno: '18px',
    personaje: '/img/personajes/tetris.webp', ancho: 50,
  },
  {
    id: 'gato', title: 'Gato', href: '/gato/',
    label: 'De reflejos', intro: 'Corré, flotá y esquivá las rocas.',
    logo: '/img/logos/gato.webp', color: ['#e79ab9', '#b8577f'], relleno: '32px',
    personaje: '/img/personajes/gato.webp', ancho: 150,
  },
  {
    id: 'memoria', title: 'Juego de memoria', href: '/memoria/',
    label: 'Para pensar', intro: 'Entrená tu mente, carta por carta.',
    logo: '/img/logos/memoria.webp', color: ['#55305a', '#341b37'], relleno: '18px',
    personaje: '/img/personajes/monstruo.webp', ancho: 88,
  },
  {
    id: 'tateti', title: 'Tateti', href: '/tateti/',
    label: 'De a dos', intro: 'No necesita introducción.',
    logo: '/img/logos/tateti.webp', color: ['#2f3858', '#1d2234'], relleno: '18px',
    personaje: '/img/personajes/cruz.webp', ancho: 72,
  },
]

// Personajes que flotan alrededor del logo en la portada.
// La víbora y el gato van pegados al logo (están en index.html).
// La posición de cada uno está en style.css (.pj-<id>), con otra para celular.
export const flotantes = [
  { id: 'caos', nombre: 'CAOS de color', href: '/caos/', img: '/img/personajes/flor.webp', profundidad: 14 },
  { id: 'memoria', nombre: 'Juego de memoria', href: '/memoria/', img: '/img/personajes/monstruo.webp', profundidad: 18 },
  { id: 'tetris', nombre: 'Tetris', href: '/tetris/', img: '/img/personajes/tetris.webp', profundidad: 12 },
  { id: 'tateti', nombre: 'Tateti', href: '/tateti/', img: '/img/personajes/cruz.webp', profundidad: 18 },
]

// Pasos para instalar Nayic como app (pestañas Safari / Chrome)
export const pasos = {
  safari: [
    { titulo: 'Abrí nayic.com.ar en Safari', texto: 'Tocá el botón Compartir, abajo en la pantalla.' },
    { titulo: 'Agregar a pantalla de inicio', texto: 'Bajá en el menú y elegí esa opción.' },
    { titulo: 'Abrilo desde el ícono', texto: 'Se abre a pantalla completa, como una app.' },
  ],
  chrome: [
    { titulo: 'Abrí nayic.com.ar en Chrome', texto: 'Tocá el menú ⋮, arriba a la derecha.' },
    { titulo: 'Instalar app', texto: 'Elegí “Instalar app” o “Agregar a pantalla principal”.' },
    { titulo: 'Abrilo desde el ícono', texto: 'Se abre a pantalla completa, como una app.' },
  ],
}
