# Nayic — contexto del proyecto

Leé esto primero. Resume todo lo decidido para no tener que re-explicar.

## Quién y cómo trabajar
- La dueña es diseñadora de producto (Lucía), de Córdoba, Argentina. **No es desarrolladora**: explicá en español, simple, con pasos numerados y sin jerga. Si algo requiere que ella haga algo (GitHub, Vercel, DNS), dale los pasos exactos.
- Ya no quiere depender de Figma: todo lo que se publique tiene que ser código editable en este repo.
- Repo privado: https://github.com/lugarbarino/nayic (rama `main`). Local: `~/Documents/GitHub/nayic`.
- No hay `gh` ni Homebrew en su Mac. El permiso de `git push` a veces lo bloquea el sistema: en ese caso dale el comando para pegar en la app Terminal.
- **Lucía sube los cambios ella misma con GitHub Desktop** (Commit to main + Push origin). Claude NO commitea ni pushea: cuando un trabajo está terminado y probado (build completo OK), avisale "listo para subir" y pasale el texto del commit listo para pegar: **Summary** (una línea corta) y **Description** (2-4 viñetas simples, en español).
- A veces sube con trabajo a medias: antes de empezar, mirá `git log`/`git status`, y avisale si algo quedó incompleto (rompe el build de Vercel).

## Qué es
Sitio de mini juegos en **nayic.com.ar**: una landing y 6 juegos, todos en este repo. Todo se publica junto en un único proyecto de Vercel (plan Hobby, cuenta personal).

```
/            -> landing/            (Vite, JS vanilla)
/viborita/   -> games/viborita      La Viborita
/tetris/     -> games/tetris        Tetris Texturas
/gato/       -> games/gato          Gato (corre y flota, evita rocas)
/memoria/    -> games/memoria       Juego de memoria
/tateti/     -> games/tateti        Tateti
/caos/       -> games/caos          CAOS de color (retos, paletas y números al azar para dibujar)
```

- Los juegos vienen de **Figma Make** (React + Vite + Tailwind). Son proyectos independientes con su propio `package.json`.
- La landing la reconstruí desde el sitio de Figma Sites publicado (que no permite exportar código).
- Hoy los links públicos van a `*.figma.site` (laviborita, ttris, gatovolador, juegodememoria, tateti, caosdecolor). La landing nueva ya apunta a `/<juego>/`; los juegos salen de Figma cuando el dominio pase a Vercel.
- **Exports nuevos de Figma Make** (como CAOS, nov 2026) ya traen su propio resolvedor de `figma:asset` en `vite.config.ts` y vienen con todas las imágenes. Re-exportar Gato y Memoria probablemente recupere sus imágenes faltantes.

## Build y deploy
- `node scripts/build.mjs` compila la landing y cada juego (`vite build --base=/<juego>/ --outDir dist`) y lo junta todo en `dist/`.
- `vercel.json` (raíz): `framework: null`, `installCommand: "echo skip"`, `buildCommand: "node scripts/build.mjs"`, `outputDirectory: "dist"`.
- En Vercel el proyecto debe importarse con **Root Directory = `./`** y **Application Preset = Other** (si no, detecta "Services" o solo la landing).
- Probar local: `node scripts/build.mjs` y servir `dist/` (por ejemplo `npx serve dist`).
- Dominio: pendiente de conectar. Agregar `nayic.com.ar` en Vercel → Settings → Domains y cargar los registros DNS donde esté el DNS del dominio (NIC Argentina u otro; hoy apunta a Figma Sites). Figma sigue online hasta cambiar el DNS.

## Landing (`landing/`)
- Edita los juegos en `landing/src/games.js` (lista, textos, imágenes, rutas). Los 6 juegos son tarjetas reales; `featured` va en el hero y la grilla muestra los demás. Si algún juego vive fuera del sitio, `external: true` lo abre en otra pestaña.
- Estilos en `landing/src/style.css`. Imágenes en `landing/public/img`, fuentes en `landing/public/fonts`.
- **Imágenes**: los originales PNG están en `landing/assets-src/` (NO se publican). `npm run optimize` (en `landing/`, usa `sharp`) genera los WebP livianos en `public/img` (tarjetas a 700px, hero en 1200/2000px con `srcset`, y `og.jpg` para redes). Para cambiar una imagen: reemplazá el original en `assets-src/` y corré `npm run optimize`. Peso de la landing: ~0,8 MB (antes 17 MB).
- **Responsive** (hecho): la página ocupa SIEMPRE todo el ancho (nada de `max-width` que deje franjas a los costados). Barra lateral `clamp(340px, 33.333vw, 480px)` y columna principal fluida. Barra fija solo en ≥1101px; en tablet/móvil va apilada arriba. Hero fijo (`sticky`) y las secciones de abajo suben por encima. Grilla con flex-wrap: 2 por fila (3 en ≥1920px), la última fila siempre centrada; la grilla no repite el juego destacado del hero. Logo con `aspect-ratio` fijo (el SVG tiene `preserveAspectRatio="none"`, no deformarlo). Probado a 390, 820, 1280, 1728, 1920 y 2560px.
- **Caché** (en `vercel.json` → `headers`): `/assets/*` y `/<juego>/assets/*` con `immutable` 1 año (Vite les pone hash en el nombre); `/img/*` y `/fonts/*` 30 días (sin hash en el nombre).
- Diseño original (desktop 1440px): barra lateral fija de 480px con logo, bajada "Juegos con acento propio" y "Desde Córdoba, Argentina"; columna principal de 960px con hero (imagen 960x609 + tarjeta de La Viborita), sección "Seguí jugando / Mini juegos" con grilla de 2 columnas de tarjetas de 370x460, y footer "Un segundo para **vos**" + link de feedback (https://tally.so/r/0Qer7Z) + "Hecho con ❤️".
- Colores: fondo `#2b2031`, secciones `#1d171f`, lila `#d7c1e8`, texto tarjeta `#3b3b3b`, subtexto `#756f6c`, link `#332115`.
- Tipografías: Capriola (títulos), Plus Jakarta Sans (texto), Giant Boss (la palabra "vos"; copiada del sitio original, confirmar que la licencia permita usarla).

## Favicons e imágenes para compartir
- Copiados de los sitios de Figma (nov 2026). Landing: `landing/public/favicon.png` y `landing/assets-src/og.png` (→ `public/img/og.jpg` con `npm run optimize`). Cada juego: `games/<juego>/public/favicon.png` y `public/og.jpg` (1200x630), más título, descripción y meta `og:` en su `index.html` (textos originales de Figma).
- Los favicons son de 48x48 (lo que publica Figma). Falta un ícono grande (512x512) para `apple-touch-icon` / pantalla de inicio del celular.
- Las `og:image` apuntan a `https://nayic.com.ar/...`: funcionan recién cuando el dominio apunte a Vercel.

## Fuentes de los juegos
- El código de Figma Make pide fuentes con nombres de Figma (`font-['SF_Pro:Bold',sans-serif]`, `Capriola:Regular`, `Inter`…). Figma Sites las cargaba solo; el código exportado no trae ninguna, así que fuera de Figma se veían con la letra genérica del sistema.
- Solución: `games/_shared/fuentes.css` + `games/_shared/fuentes/*.woff2` (Capriola, Plus Jakarta Sans, Inter; licencia SIL OFL, sacadas de los paquetes `@fontsource` instalados en la raíz). Cada juego lo importa al principio de su CSS (`@import '../../_shared/fuentes.css'`). Los juegos limpios tienen `server.fs.allow: ['..']` en `vite.config.ts` para que funcione en modo dev.
- **SF Pro** (la más usada) es de Apple y su licencia no permite publicarla: se reemplaza por **Inter**. Con eso Gato quedó igual a Figma salvo diferencias de 1-2px en textos.

## Juegos y Figma Make (cosas raras)
- Los imports `figma:asset/<hash>.png` se resuelven con el plugin `games/_shared/figma-assets.js` (ya agregado a `vite.config.ts` de gato, memoria, tateti y tetris; viborita los tiene como alias).
- **Imágenes faltantes**: el export de Figma Make no trajo 4 imágenes de Gato (pantalla de precarga) y 38 de Juego de memoria (pantalla de carga con hexágonos). El plugin las reemplaza por un píxel transparente y avisa en el build. Para recuperarlas hay que re-exportar esos juegos desde Figma Make (*Download code*) o conseguir las imágenes. Hasta entonces la pantalla de carga de memoria se ve incompleta.
- Memoria y Viborita traían `outDir: 'build'`; el script fuerza `--outDir dist`.
- No subir `node_modules`, `dist` ni `build` (están en `.gitignore`).
- Los juegos pesan mucho por las imágenes (viborita ~228 MB, memoria ~181 MB). Ningún archivo pasa los 100 MB de GitHub.

## Pendientes
1. Optimizar el peso de los juegos (dist: memoria ~68 MB, viborita ~51 MB, gato ~46 MB, tetris ~20 MB): convertir sus PNG a WebP. La landing ya está optimizada.
2. Revisar el responsive/uso en móvil de cada juego (solo se revisó la landing).
1b. ~~Traer CAOS al repo~~ (hecho: `games/caos/`, probado en `/caos/`). Detalle pendiente: en pantallas bajas (≈600px de alto) los 3 botones de abajo tapan la bajada "para que cada dibujo sea una aventura distinta" (ya pasaba en la versión de Figma).
1c. Limpieza de los juegos: borrar lo que Figma agrega y no se usa (~75% de los archivos, los 48 componentes de `ui/`, la mayoría de `imports/`, casi todas las dependencias), renombrar imágenes con nombres legibles y pasarlas a WebP. Después: un solo proyecto para landing + juegos, carpeta `shared/` común y plantilla para juegos nuevos.
   - **Tateti: hecho** (ver `games/tateti/CLAUDE.md`). Es el modelo a seguir: `assets-src/` con originales PNG renombrados → `npm run optimize -- games/<juego>` (script en `scripts/optimize-images.mjs`, usa `sharp` instalado en la raíz) → `src/assets/*.webp`; código en `src/` (`App.tsx`, `components/`, `svg/`, `styles.css`), sin alias `@`, sin plugin `figma-assets`, `package.json` solo con lo que se usa. Verificación: "huella" de la página (textos, imágenes y posiciones) antes y después en 1440px y 390px, más jugar una partida.
   - **Tetris: hecho** (ver `games/tetris/CLAUDE.md`). 20 MB → 1,8 MB.
   - **Gato: hecho** (ver `games/gato/CLAUDE.md`). Estaba en blanco fuera de Figma (faltaba la altura); no le faltaban imágenes (el precargador apuntaba a versiones viejas). 47,7 MB → 4,5 MB.
   - Siguen: La Viborita, Memoria, CAOS. **Memoria**: revisar si sus "38 imágenes faltantes" son también referencias viejas en un precargador antes de pedir un re-export.
   - Referencia para comparar: el juego publicado en `*.figma.site` (mientras exista), porque la versión exportada puede tener errores que Figma tapaba.
   - **Herramientas** (en `scripts/`): `analizar-juego.mjs` (qué archivos, paquetes e imágenes se usan; los imports solo de tipos no aparecen, revisarlos a mano) y `reorganizar-juego.mjs` (mueve código e imágenes según un mapa viejo→nuevo y reescribe todos los imports). Para nombrar imágenes: armar una planilla numerada con `sharp` y mirarla.
   - Los exports de Figma traen cosas olvidadas: carteles de depuración, imports a archivos que no existen. Revisar al limpiar.
   - **Bug a revisar en Gato**: igual que Tateti, le falta `html, body, #root { height: 100% }`; en Tateti eso hacía que la pantalla de juego quedara cortada arriba. Tetris no lo tenía (probado).
2b. Recuperar las imágenes faltantes (Gato y Memoria).
3. Conectar el dominio nayic.com.ar a Vercel.
4. Un `CLAUDE.md` por juego en `games/<juego>/` con lo propio de cada uno (qué hace, assets, pendientes).
5. Lista de tareas: decidir entre GitHub Issues (requiere instalar `gh` y loguearse) o un `TASKS.md` en el repo.
6. Revisar que cada juego funcione bien bajo su ruta (`/viborita/`, etc.) y en móvil.
