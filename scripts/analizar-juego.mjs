// Analiza un juego exportado de Figma Make: qué archivos de src/, qué paquetes y qué imágenes
// se usan de verdad partiendo de src/main.tsx.
//   Uso: node scripts/analizar-juego.mjs games/<juego>   (el juego tiene que tener node_modules instalado)
// Ojo: los imports que son solo de tipos (TypeScript) no aparecen como usados.
import path from 'node:path'
import fs from 'node:fs'
const game = path.resolve(process.argv[2])
const { build } = await import(path.join(game, 'node_modules/esbuild/lib/main.js'))
const pkgs = new Set()
const res = await build({
  entryPoints: [path.join(game, 'src/main.tsx')], bundle: true, write: false, metafile: true,
  logLevel: 'silent', outdir: '/tmp/reach-out', jsx: 'automatic',
  loader: { '.png': 'empty', '.jpg': 'empty', '.svg': 'empty', '.css': 'empty', '.webp': 'empty', '.mp3': 'empty', '.wav': 'empty', '.gif': 'empty', '.jpeg': 'empty' },
  plugins: [{ name: 'r', setup(b) {
    b.onResolve({ filter: /^figma:asset\// }, a => ({ path: a.path, external: true }))
    b.onResolve({ filter: /^@\// }, a => b.resolve('./' + a.path.slice(2), { resolveDir: path.join(game, 'src'), kind: a.kind }))
    b.onResolve({ filter: /^[^./]/ }, a => {
      if (a.path.startsWith('figma:')) return
      const name = a.path.replace(/^(@[^/]+\/[^/@]+|[^/@]+)(@[\d.]+)?.*/, '$1')
      pkgs.add(name); return { path: a.path, external: true }
    })
  } }],
})
const inputs = Object.keys(res.metafile.inputs).filter(f => f.includes('src/'))
const all = []
const walk = d => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) { if (f.name !== 'assets') walk(p) } else if (/\.(tsx?|jsx?)$/.test(f.name)) all.push(path.relative(game, p)) } }
walk(path.join(game, 'src'))
const used = new Set(inputs.map(f => f.replace(/^.*?src\//, 'src/')))
const unused = all.filter(f => !used.has(f))
const deps = Object.keys(JSON.parse(fs.readFileSync(path.join(game, 'package.json'))).dependencies || {})
console.log(`${path.basename(game)}: ${used.size}/${all.length} archivos de código usados; ${unused.length} sin usar (${unused.filter(f=>f.includes('/ui/')).length} de ui/, ${unused.filter(f=>f.includes('imports/')).length} de imports/)`)
console.log(`   paquetes usados (${pkgs.size}/${deps.length}): ${[...pkgs].sort().join(' ')}`)
console.log("   USADOS: "+[...used].join(", "));console.log(`   sin usar (ejemplos): ${unused.filter(f=>!f.includes('/ui/')).slice(0,8).join(', ')}`)
// imágenes realmente usadas
const usedAssets = new Set()
for (const f of used) { const src = fs.readFileSync(path.join(game, f), 'utf8'); for (const m of src.matchAll(/figma:asset\/([a-f0-9]+\.\w+)/g)) usedAssets.add(m[1]) }
const assetDir = path.join(game, 'src/assets')
const files = fs.existsSync(assetDir) ? fs.readdirSync(assetDir) : []
let usedBytes = 0, totalBytes = 0
for (const f of files) { const s = fs.statSync(path.join(assetDir, f)).size; totalBytes += s; if (usedAssets.has(f)) usedBytes += s }
// también imports relativos a ./assets o ../assets
console.log(`   imágenes: ${[...usedAssets].filter(a=>files.includes(a)).length}/${files.length} usadas, ${(usedBytes/1e6).toFixed(0)} MB de ${(totalBytes/1e6).toFixed(0)} MB`)
