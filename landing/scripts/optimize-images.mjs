// Genera las imágenes livianas de public/img a partir de los originales en assets-src/.
// Uso: npm run optimize   (solo hace falta cuando cambiás o agregás un original)
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { join, parse } from 'node:path'

const src = 'assets-src'
const out = 'public/img'
mkdirSync(out, { recursive: true })

for (const file of readdirSync(src)) {
  const { name, ext } = parse(file)
  if (!['.png', '.jpg', '.jpeg'].includes(ext.toLowerCase())) continue
  const img = sharp(join(src, file))

  if (name === 'hero') {
    // Fondo grande: dos tamaños para srcset
    await img.clone().resize({ width: 1200 }).webp({ quality: 72 }).toFile(join(out, 'hero-1200.webp'))
    await img.clone().resize({ width: 2000 }).webp({ quality: 72 }).toFile(join(out, 'hero-2000.webp'))
  } else if (name === 'corazon') {
    // Corazón peludo del pie ("Hecho con ❤"): se ve a ~24px, guardamos 96px
    await img.clone().resize({ width: 96 }).webp({ quality: 85 }).toFile(join(out, 'corazon.webp'))
  } else if (name === 'og') {
    // Imagen para compartir en redes (la original de Figma), en JPG liviano
    await img.clone().resize({ width: 1200 }).flatten({ background: '#1d171f' }).jpeg({ quality: 84, mozjpeg: true }).toFile(join(out, 'og.jpg'))
  } else {
    // Tarjetas: se muestran a 350px, guardamos 700px para pantallas retina
    await img.clone().resize({ width: 700 }).webp({ quality: 80 }).toFile(join(out, `${name}.webp`))
  }
  console.log('ok', file)
}
