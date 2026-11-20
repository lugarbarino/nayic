// Reorganiza un juego exportado de Figma Make:
//  - mueve archivos de código según un mapa viejo→nuevo
//  - mueve imágenes usadas a assets-src/<nombre>.png
//  - reescribe todos los imports (alias @/, relativos, figma:asset) con rutas relativas nuevas
// Uso: node scripts/reorganizar-juego.mjs games/<juego> <mapa.json>
// El mapa se arma a mano con los nombres nuevos (ver games/tetris/CLAUDE.md para un ejemplo del proceso).
//   mapa.json: { "code": { "src/app/App.tsx": "src/App.tsx", ... }, "assets": { "<hash>": "texturas/lava", ... } }
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const game = path.resolve(process.argv[2])
const map = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'))
const codeMap = map.code            // relpaths
const assetMap = map.assets         // hash -> nombre (sin extensión)
const exts = ['', '.tsx', '.ts', '.jsx', '.js', '.css', '/index.tsx', '/index.ts']

const resolveOld = (fromRel, spec) => {
  let base
  if (spec.startsWith('@/')) base = path.join('src', spec.slice(2))
  else if (spec.startsWith('.')) base = path.join(path.dirname(fromRel), spec)
  else return null
  for (const e of exts) { const c = path.normalize(base + e); if (codeMap[c] || fs.existsSync(path.join(game, c)) && fs.statSync(path.join(game, c)).isFile()) return c }
  return null
}
const rel = (fromNew, toNew) => {
  let r = path.relative(path.dirname(fromNew), toNew).replace(/\.(tsx|ts|jsx|js)$/, '')
  if (!r.startsWith('.')) r = './' + r
  return r
}

// 1) reescribir contenido de cada archivo de código (con rutas viejas) antes de mover
const newContents = {}
for (const [oldRel, newRel] of Object.entries(codeMap)) {
  let src = fs.readFileSync(path.join(game, oldRel), 'utf8')
  src = src.replace(/(from\s+|import\s+|@import\s+)(['"])([^'"]+)\2/g, (m, kw, q, spec) => {
    const fa = spec.match(/^figma:asset\/([a-f0-9]+)\.(png|jpe?g)$/)
    if (fa) {
      const name = assetMap[fa[1]]
      if (!name) throw new Error(`Imagen sin nombre: ${fa[1]} en ${oldRel}`)
      return `${kw}${q}${rel(newRel, `src/assets/${name}.webp`)}${q}`
    }
    const target = resolveOld(oldRel, spec)
    if (!target) return m
    const tNew = codeMap[target]
    if (!tNew) throw new Error(`${oldRel} importa ${spec} (${target}) que no está en el mapa`)
    return `${kw}${q}${rel(newRel, tNew)}${q}`
  })
  newContents[newRel] = src
}
// 2) mover imágenes (git mv conserva historia)
for (const [hash, name] of Object.entries(assetMap)) {
  const from = `src/assets/${hash}.png`, to = `assets-src/${name}.png`
  fs.mkdirSync(path.join(game, path.dirname(to)), { recursive: true })
  execSync(`git mv "${from}" "${to}"`, { cwd: game })
}
// 3) mover código y escribir contenido nuevo
for (const [oldRel, newRel] of Object.entries(codeMap)) {
  fs.mkdirSync(path.join(game, path.dirname(newRel)), { recursive: true })
  if (oldRel !== newRel) execSync(`git mv "${oldRel}" "${newRel}"`, { cwd: game })
  fs.writeFileSync(path.join(game, newRel), newContents[newRel])
}
console.log(`ok: ${Object.keys(codeMap).length} archivos de código, ${Object.keys(assetMap).length} imágenes`)
