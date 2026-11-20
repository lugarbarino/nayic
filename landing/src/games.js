// Editá acá los juegos. Cada uno vive en /games/<carpeta> y se publica en /<ruta>/
export const games = [
  { id: 'viborita', title: 'La Viborita', intro: 'El clásico renovado:', img: '/img/viborita.png', href: '/viborita/' },
  { id: 'tetris', title: 'Tetris', intro: 'Texturas y el clásico:', img: '/img/tetris.png', href: '/tetris/' },
  { id: 'gato', title: 'Gato', intro: 'Click para flotar, evitá las rocas:', img: '/img/gato.png', href: '/gato/' },
  { id: 'memoria', title: 'Juego de memoria', intro: 'Entrená tu mente:', img: '/img/memoria.png', href: '/memoria/' },
  { id: 'tateti', title: 'Tateti', intro: 'No necesita introducción:', img: '/img/tateti.png', href: '/tateti/' },
]

// Tarjeta de relleno para el próximo juego (sacala o completala cuando haya uno).
export const nextGame = { title: 'Nombre del juego', intro: 'breve intro:', img: '/img/proximo.png' }

// Juego destacado en el hero
export const featured = games[0]
