// Convierte los originales de un juego a WebP livianos.
//   Uso:  npm run optimize -- games/tateti
// Lee   <juego>/assets-src/**/*.png|jpg  (originales, NO se publican)
// Crea  <juego>/src/assets/**/*.webp     (lo que usa el código)
// Ancho máximo por defecto: 1024px. Para cambiarlo en una imagen, agregala a
// <juego>/assets-src/tamanos.json, por ejemplo: { "corazon-firma.png": 140 }
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const dir = process.argv[2]
if (!dir) { console.error('Falta la carpeta del juego. Ej: npm run optimize -- games/tateti'); process.exit(1) }
const src = path.join(dir, 'assets-src')
const out = path.join(dir, 'src/assets')
const sizesFile = path.join(src, 'tamanos.json')
const sizes = fs.existsSync(sizesFile) ? JSON.parse(fs.readFileSync(sizesFile, 'utf8')) : {}
const DEFAULT_MAX = 1024

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((f) => {
  const p = path.join(d, f.name)
  return f.isDirectory() ? walk(p) : /\.(png|jpe?g)$/i.test(f.name) ? [p] : []
})

let antes = 0, despues = 0
for (const file of walk(src)) {
  const rel = path.relative(src, file)
  const dest = path.join(out, rel.replace(/\.(png|jpe?g)$/i, '.webp'))
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  const max = sizes[rel] ?? DEFAULT_MAX
  const meta = await sharp(file).metadata()
  await sharp(file)
    .resize({ width: Math.min(meta.width, max), withoutEnlargement: true })
    .webp({ quality: 85, alphaQuality: 90 })
    .toFile(dest)
  antes += fs.statSync(file).size
  despues += fs.statSync(dest).size
  console.log(`ok ${rel} → ${path.relative(dir, dest)}`)
}
console.log(`\n${(antes / 1e6).toFixed(1)} MB → ${(despues / 1e6).toFixed(1)} MB`)
