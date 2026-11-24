// Genera las imágenes livianas de public/img a partir de los originales.
// Uso (en landing/): npm run optimize   (solo hace falta cuando cambiás o agregás un original)
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { join, parse } from 'node:path'

const out = 'public/img'
mkdirSync(join(out, 'logos'), { recursive: true })
mkdirSync(join(out, 'personajes'), { recursive: true })

const webp = (src, dest, width, quality = 86) =>
  sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(dest)

// Imagen para compartir en redes (la original de Figma), en JPG liviano
await sharp('assets-src/og.png').resize({ width: 1200 }).flatten({ background: '#1d171f' }).jpeg({ quality: 84, mozjpeg: true }).toFile(join(out, 'og.jpg'))
console.log('ok og.jpg')

// Logos de cada juego (assets-src/logos): se muestran a ~150px de ancho, guardamos 2x
for (const file of readdirSync('assets-src/logos')) {
  const { name, ext } = parse(file)
  if (ext !== '.png') continue
  await webp(join('assets-src/logos', file), join(out, 'logos', `${name}.webp`), 360)
  console.log('ok logo', name)
}

// Personajes. Los que ya existen en los juegos NO se copian: se toman de sus originales.
const personajes = [
  ['assets-src/personajes/gato-burbujas.png', 'gato.webp', 900],      // el que pasó Lucía (con la estela de burbujas)
  ['assets-src/personajes/vibora.png', 'vibora.webp', 400],           // del Figma de Nayic (original chico)
  ['../games/tateti/assets-src/fichas/flor.png', 'flor.webp', 360], // flor = CAOS
  ['../games/memoria/assets-src/especiales/mezclar-monstruo.png', 'monstruo.webp', 360],
  ['../games/tateti/assets-src/fichas/x.png', 'cruz.webp', 360],
]
for (const [src, name, width] of personajes) {
  await webp(src, join(out, 'personajes', name), width)
  console.log('ok personaje', name)
}

// Pieza "L" de Tetris armada con la gomita roja del juego (4 bloques)
const b = 160
const bloque = await sharp('../games/tetris/assets-src/texturas/gomita-roja.png').resize(b, b).png().toBuffer()
await sharp({ create: { width: b * 2, height: b * 3, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([
    { input: bloque, left: 0, top: 0 },
    { input: bloque, left: 0, top: b },
    { input: bloque, left: 0, top: b * 2 },
    { input: bloque, left: b, top: b * 2 },
  ])
  .webp({ quality: 86 })
  .toFile(join(out, 'personajes', 'tetris.webp'))
console.log('ok personaje tetris.webp (desde games/tetris)')

// Corazón peludo del pie ("Hecho con ❤"): es el MISMO que usan los juegos.
await sharp('../games/tateti/assets-src/corazon-firma.png').resize({ width: 128 }).webp({ quality: 85 }).toFile(join(out, 'corazon.webp')) // se ve a 32px
console.log('ok corazón (desde games/tateti/assets-src/corazon-firma.png)')
