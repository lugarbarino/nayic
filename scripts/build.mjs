// Compila la landing y los juegos y los junta en dist/:
//   /            -> landing
//   /<juego>/    -> cada juego (carpeta games/<juego>)
import { execSync } from 'node:child_process'
import { cpSync, rmSync, mkdirSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const out = join(root, 'dist')
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' })

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })

// Landing
const landing = join(root, 'landing')
run('npm install --no-audit --no-fund', landing)
run('npm run build', landing)
cpSync(join(landing, 'dist'), out, { recursive: true })

// Juegos
const gamesDir = join(root, 'games')
for (const name of readdirSync(gamesDir)) {
  const dir = join(gamesDir, name)
  if (!existsSync(join(dir, 'package.json'))) continue
  console.log(`\n=== ${name} ===`)
  run('npm install --no-audit --no-fund', dir)
  run(`npx vite build --base=/${name}/ --outDir dist`, dir)
  cpSync(join(dir, 'dist'), join(out, name), { recursive: true })
}

console.log('\nListo: dist/')
