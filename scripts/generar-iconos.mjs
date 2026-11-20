// Genera los íconos de la app web de Nayic a partir del logo (landing/assets-src/logo-nayic.svg).
//   Uso: node scripts/generar-iconos.mjs
// Crea en landing/public/icons/: icon-192.png, icon-512.png, maskable-512.png y apple-touch-icon.png
import sharp from 'sharp'
import fs from 'node:fs'

const LOGO = 'landing/assets-src/logo-nayic.svg'
const OUT = 'landing/public/icons'
const FONDO = '#2b2031'
fs.mkdirSync(OUT, { recursive: true })

async function icono(tam, anchoLogo, archivo) {
  const logo = await sharp(LOGO, { density: 600 }).resize({ width: Math.round(tam * anchoLogo) }).png().toBuffer()
  const { width, height } = await sharp(logo).metadata()
  await sharp({ create: { width: tam, height: tam, channels: 4, background: FONDO } })
    .composite([{ input: logo, left: Math.round((tam - width) / 2), top: Math.round((tam - height) / 2) }])
    .png()
    .toFile(`${OUT}/${archivo}`)
  console.log('ok', archivo)
}

await icono(192, 0.78, 'icon-192.png')
await icono(512, 0.78, 'icon-512.png')
await icono(512, 0.62, 'maskable-512.png') // Android recorta en círculo/forma: más aire alrededor
await icono(180, 0.74, 'apple-touch-icon.png') // iPhone/iPad
