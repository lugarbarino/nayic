# Juego de memoria — contexto del juego

Ver primero el `CLAUDE.md` de la raíz del repo. Este archivo cubre solo lo propio de Memoria.

## Qué es
Memotest con cartas hexagonales: hay que encontrar los pares antes de que se acabe el tiempo.
3 niveles (Fácil, Medio, Difícil) con 8 tableros cada uno, puntaje por nivel, y **cartas especiales**
(bomba, congelada, enterrada —se libera con el pico—, mágica, nube, pista, suerte, mezclar).
Se publica en `/memoria/`. El tema y el modo elegidos se guardan en el navegador (`localStorage`).

- **Temas de cartas** (`src/components/Configuracion.tsx`): monstruos, animales, huerto y gatos. Cada tema tiene 5 elementos (magia, fuego, aire, tierra, agua) × 4 cartas = 20 cartas.
- Hay una guía de cartas (`GuiaDeCartas.tsx` + `DetalleDeCarta.tsx`) y un botón para compartir.

## Estado
- **Limpio, sin nada de Figma** (nov 2026). Comparado contra la versión publicada en Figma (juegodememoria.figma.site): inicio igual en 1440px y 390px; carga, tablero y cartas funcionan.
- **No faltaba ninguna imagen**: la pantalla de carga tenía anotadas versiones viejas de 40 cartas. Ahora usa exactamente las mismas cartas que el juego (la fuente de verdad son los mazos de `Configuracion.tsx`, que coinciden con `Game.tsx`). Antes la pantalla de carga se veía incompleta.
- Se sacaron 7 imports que no se usaban.
- Peso de imágenes: 71 MB → 6,2 MB.

## Estructura
```
assets-src/                 originales PNG (NO se publican)
  cartas/<tema>/<elemento>-<n>.png   80 cartas (monstruos, animales, huerto, gatos)
  especiales/               cartas especiales (bomba, congelada, enterrada, mágica, nube, pista, suerte, pico…)
  niveles/ hexagonos/       fondos de los hexágonos
  guia/                     imágenes de la guía de cartas
  decoracion/ carga/ inicio/ temas/ configuracion/
  logo.png, corazon-firma.png
  tamanos.json              ancho máximo por carpeta/imagen
public/                     favicon.png y og.jpg
src/
  main.tsx, App.tsx
  components/
    Home.tsx                inicio (niveles, compartir)
    Game.tsx                el juego — archivo muy grande (~2400 líneas)
    Configuracion.tsx       ajustes y MAZOS de cartas por tema
    TemaSelector / ModoSelector / GuiaDeCartas / DetalleDeCarta / GameOverModal / ShareBanner / LoadingScreen / Logo
  disenos/tableros/         formas de los tableros por nivel (exportadas de Figma)
  disenos/guia/             piezas de la guía
  svg/                      trazos vectoriales de íconos, por pantalla
  styles.css                Tailwind + fuentes compartidas + tema + animaciones
```

## Cómo se trabaja
- Probar: `cd games/memoria && npm install && npm run dev`.
- Cambiar una carta: reemplazar el PNG en `assets-src/cartas/<tema>/` y desde la raíz correr `npm run optimize -- games/memoria`.
- Librerías: React, `motion` (animaciones), `lucide-react` (íconos), `clsx` y Tailwind.

## Pendientes / ideas
- `Game.tsx` es enorme: separar lógica del tablero, cartas especiales e interfaz.
- Los mazos de cartas se importan en varios archivos (Configuracion, Game, LoadingScreen): conviene un solo archivo `cartas.ts`.
