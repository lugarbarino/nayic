# Tetris Texturas — contexto del juego

Ver primero el `CLAUDE.md` de la raíz del repo. Este archivo cubre solo lo propio de Tetris.

## Qué es
El Tetris de siempre (caer, rotar, encajar), pero los bloques tienen **texturas** según el tema elegido.
Se publica en `/tetris/`. El tema elegido se guarda en el navegador (`localStorage`, clave `tetris-theme`).

- **Temas** (`src/contexts/ThemeContext.tsx`): Colores, Retro, Naturaleza, Rojo, Rocas, Dulces. Colores y Retro son bloques dibujados en código (`src/bloques/`); los otros 4 usan 12 texturas cada uno (`src/assets/texturas/`). Varias texturas se repiten entre temas.
- **Modos de juego**: clásico y aventura (con bloques especiales: bomba, piedra, hielo, brillo, reloj rápido y ladrón; ver `SHAPES` en `src/TetrisGameWrapper.tsx`).
- **Controles**: teclado en compu; botones en pantalla en celular y tablet; también se pueden arrastrar piezas.
- En el menú, los 3 cuadraditos de muestra del tema salen **al azar** cada vez que carga (no es un error).

## Estado
- **Limpio, sin nada de Figma** (nov 2026). Comparado contra la versión anterior: menú idéntico en 1440px y 390px, pantalla de juego con el tablero en la misma posición, los 6 temas cargan sus texturas, se juega igual.
- Se sacó un cartel de depuración que quedó en el código de Figma ("Touch: YES | Mode: … | Screen: …") y en celular tapaba el encabezado.
- Se creó `src/types.ts`: el export de Figma importaba los tipos `Board` y `Piece` de un archivo que no existía.
- Peso publicado: 20 MB → 1,8 MB.

## Estructura
```
assets-src/                 originales PNG (NO se publican)
  texturas/                 42 texturas de bloques (diamante, lava, galletita, panal, …)
  temas/                    miniaturas de cada tema
  especiales/               bloques especiales del modo aventura
  carga/                    piezas que flotan en la pantalla de carga
  efectos/explosion.png     explosión de la bomba
  logo-tetris.png, logo-tetris-chico.png, corazon-firma.png
  tamanos.json              ancho máximo por carpeta/imagen
public/                     favicon.png y og.jpg
src/
  main.tsx, App.tsx
  TetrisGameWrapper.tsx     lógica del juego (piezas, tablero, puntos, modos) — archivo grande (~1400 líneas)
  types.ts                  tipos Piece / Board
  contexts/ThemeContext.tsx temas y sus bloques
  bloques/colores/          bloques del tema Colores (un color cada uno)
  bloques/retro/            bloques del tema Retro (SVG) y sus trazos
  components/               pantallas y piezas de interfaz (inicio, carga, tablero, controles, ajustes, game over…)
  svg/                      trazos vectoriales de íconos, por pantalla
  styles.css                Tailwind + variables del tema + animaciones + optimizaciones
```

## Cómo se trabaja
- Probar: `cd games/tetris && npm install && npm run dev`.
- Cambiar o agregar una textura: ponerla en `assets-src/texturas/`, desde la raíz correr `npm run optimize -- games/tetris` y usarla en `src/contexts/ThemeContext.tsx`.
- Librerías: React, `react-dnd` (arrastrar piezas) y Tailwind.

## Pendientes / ideas
- `TetrisGameWrapper.tsx` es muy largo: conviene separar la lógica (movimientos, colisiones, líneas) de la interfaz.
- Hay versiones duplicadas por tamaño de pantalla (celular / tablet / escritorio) que se podrían unificar.
- Los bloques de `bloques/colores/` son 9 archivos casi iguales: se pueden reemplazar por una lista de colores.
- Los textos usan "SF Pro" (solo Apple): definir una fuente propia.
