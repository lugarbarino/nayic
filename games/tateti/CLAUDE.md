# Tateti — contexto del juego

Ver primero el `CLAUDE.md` de la raíz del repo. Este archivo cubre solo lo propio de Tateti.

## Qué es
Tres en línea con **3 fichas por jugador**: cuando ya pusiste las 3, las movés (arrastrando) para formar la línea.
Modos: 1 jugador (contra la computadora) o 2 jugadores. Cada jugador elige su ficha tocándola en el menú.
Se publica en `/tateti/`.

## Estado
- **Limpio, sin nada de Figma** (piloto de la limpieza, nov 2026). Comparado contra la versión anterior: menú idéntico en desktop (1440px) y celular (390px); se juega igual.
- Se arregló que la pantalla de juego quedaba cortada arriba (faltaba `height: 100%` en `html, body, #root`; ver `src/styles.css`).

- Celular: el "Salir" del juego es un botón de 48x48 solo con la flecha (antes medía 50x26).

## Estructura
```
assets-src/            originales PNG (NO se publican)
  logo-tateti.png
  corazon-firma.png    el corazón de "Hecho con ❤ por Nayic"
  fichas/              14 fichas en 7 pares (ver src/fichas.ts)
  tamanos.json         ancho máximo por imagen (por defecto 1024px)
public/                favicon.png y og.jpg (imagen para compartir)
src/
  main.tsx             arranque
  App.tsx              cambia entre menú y partida; elige mouse o touch para arrastrar
  fichas.ts            lista de fichas de cada jugador (en pares)
  components/
    StartMenu.tsx      menú: 1 o 2 jugadores, elegir fichas, "Iniciar juego"
    TatetiGame.tsx     tablero, turnos, computadora, ganador
  svg/                 trazos vectoriales (logo de Nayic del pie, flecha de "Salir")
  styles.css           Tailwind + base (fondo degradado, altura completa)
  assets/              WebP generados desde assets-src (no editar a mano)
```

## Cómo se trabaja
- Probar: `cd games/tateti && npm install && npm run dev`.
- Cambiar o agregar una imagen: ponerla en `assets-src/` y desde la raíz correr `npm run optimize -- games/tateti`. Si es una ficha nueva, sumarla en `src/fichas.ts` (por pares).
- Librerías: solo React, `react-dnd` (arrastrar fichas, con backend touch en celular) y Tailwind.

## Pendientes / ideas
- Los textos usan la fuente "SF Pro", que solo existe en Apple: en Windows/Android se ve otra. Conviene definir una fuente propia (por ejemplo Plus Jakarta Sans, como la landing).
- En celular el tablero queda casi pegado a los bordes.
- Los componentes son largos (TatetiGame ~650 líneas) y tienen la versión móvil y la de escritorio duplicadas: se pueden partir en piezas más chicas.
