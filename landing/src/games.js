// Editá acá los juegos. Cada uno vive en /games/<carpeta> y se publica en /<ruta>/
export const games = [
  { id: 'viborita', title: 'La Viborita', intro: 'El clásico renovado:', img: '/img/viborita.webp', href: '/viborita/' },
  { id: 'tetris', title: 'Tetris', intro: 'Texturas y el clásico:', img: '/img/tetris.webp', href: '/tetris/' },
  { id: 'gato', title: 'Gato', intro: 'Click para flotar, evitá las rocas:', img: '/img/gato.webp', href: '/gato/' },
  { id: 'memoria', title: 'Juego de memoria', intro: 'Entrená tu mente:', img: '/img/memoria.webp', href: '/memoria/' },
  { id: 'tateti', title: 'Tateti', intro: 'No necesita introducción:', img: '/img/tateti.webp', href: '/tateti/' },
]

// Tarjeta de relleno para el próximo juego (sacala o completala cuando haya uno).
export const nextGame = { title: 'Nombre del juego', intro: 'breve intro:', img: '/img/proximo.webp' }

// Juego destacado en el hero
export const featured = games[0]
