// Resuelve los imports "figma:asset/<hash>.png" de Figma Make a src/assets/<hash>.png.
// Si el archivo no vino en el export, usa un PNG transparente de 1x1 y avisa en consola
// (esos archivos faltantes están listados en docs/ASSETS-FALTANTES.md).
import fs from 'node:fs'
import path from 'node:path'

const PLACEHOLDER = '\0figma-missing-asset.png'
const PIXEL = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
  'base64',
)

export default function figmaAssets() {
  let root = process.cwd()
  const missing = new Set()
  return {
    name: 'figma-assets',
    enforce: 'pre',
    configResolved(config) { root = config.root },
    resolveId(id) {
      if (!id.startsWith('figma:asset/')) return
      const name = id.slice('figma:asset/'.length)
      const file = path.resolve(root, 'src/assets', name)
      if (fs.existsSync(file)) return file
      missing.add(name)
      return PLACEHOLDER
    },
    load(id) {
      if (id === PLACEHOLDER) {
        const ref = this.emitFile({ type: 'asset', name: 'placeholder.png', source: PIXEL })
        return `export default import.meta.ROLLUP_FILE_URL_${ref}`
      }
    },
    buildEnd() {
      if (missing.size) console.warn(`[figma-assets] ${missing.size} imagen(es) faltante(s) reemplazadas por un pixel transparente`)
    },
  }
}
