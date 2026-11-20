# CAOS de color — contexto del juego

Ver primero el `CLAUDE.md` de la raíz del repo. Este archivo cubre solo lo propio de CAOS.

## Qué es
Herramienta de juego para dibujar: tres botones al pie dan algo al azar.
- **Retos**: una carta con un desafío ("Modo noche", "Pasado por agua", "Navidad"…).
- **Paletas**: una paleta de colores con nombre ("Constructivismo"…), se puede cambiar.
- **Números**: un número del 1 al 6 con una consigna ("Nivel de detalle"…).
Se publica en `/caos/`.

## Estado
- **Limpio, sin nada de Figma** (nov 2026). Comparado contra caosdecolor.figma.site: portada igual en 1440px y 390px; los tres modos funcionan.
- Se sacaron 3 imports que no se usaban.
- Peso de imágenes: 37 MB → 2,8 MB.

## Estructura
```
assets-src/          originales PNG (NO se publican)
  retos/             32 cartas de retos (nombre = texto de la carta)
  numeros/           1.png … 6.png
  logo-caos.png
  tamanos.json
public/              favicon.png y og.jpg
src/
  main.tsx, App.tsx
  components/
    CardsGame.tsx        modo Retos (lista de retos y sus textos)
    PalettesGame.tsx     modo Paletas (lista de paletas)
    DiceGame.tsx         modo Números
    NavigationButtons.tsx  los 3 botones del pie
    ResponsiveLogo.tsx, IconoPaletas.tsx, PaletasDiseno.tsx
  svg/                trazos vectoriales de íconos
  styles.css          Tailwind + fuentes compartidas + tema
```

## Cómo se trabaja
- Probar: `cd games/caos && npm install && npm run dev`.
- Agregar un reto: poner la imagen en `assets-src/retos/`, desde la raíz `npm run optimize -- games/caos`, y sumarlo en `CardsGame.tsx` con su texto.
- Librerías: React, `clsx` y Tailwind.

## Pendientes / ideas
- En pantallas bajas (≈600px de alto) los 3 botones del pie tapan la bajada "para que cada dibujo sea una aventura distinta" (ya pasaba en Figma).
