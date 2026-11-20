# Gato — contexto del juego

Ver primero el `CLAUDE.md` de la raíz del repo. Este archivo cubre solo lo propio de Gato.

## Qué es
"Infinite runner" en una cueva: un gato con mochila cohete avanza solo; con la **barra espaciadora o un click/toque** sube, y si soltás cae.
Hay que esquivar rocas del suelo, estalactitas del techo, rocas flotantes y murciélagos, y juntar poderes (vida, estrella, cristal) y burbujas.
Se publica en `/gato/`.

## Estado
- **Limpio, sin nada de Figma** (nov 2026). Comparado contra el Gato publicado en Figma (gatovolador.figma.site): pantalla de inicio igual en 1440px y 390px, pantalla de juego igual.
- Se arregló que la página quedaba **en blanco** fuera de Figma (faltaba `height: 100%` en `html, body, #root`, ver `src/styles.css`).
- No faltaba ninguna imagen: el precargador (`AssetPreloader.tsx`) apuntaba a 4 versiones viejas de las rocas azules; ahora precarga las mismas que usa el juego.
- Peso de imágenes: 47,7 MB → 4,5 MB.

## Estructura
```
assets-src/                 originales PNG (NO se publican)
  gato/                     el gato: subiendo, volando, bajando
  suelo/ techo/ flotantes/  obstáculos en 3 colores (lila, roja, azul), numerados
  burbujas/                 burbujas y destello
  poderes/                  vida, estrella, cristales
  murcielago/               2 cuadros de aleteo
  escenario/                piso, techo y bordes de la cueva
  inicio/ carga/            capas decorativas de la pantalla de inicio y de carga
  interfaz/                 corazones y "¡UPS!" del game over
  logo-gato.png
  tamanos.json              ancho máximo por carpeta/imagen
public/                     favicon.png y og.jpg
src/
  main.tsx, App.tsx
  components/
    InfiniteRunner.tsx      el juego (física, obstáculos, puntos, vidas) — archivo central
    Obstacle / CeilingObstacle / FloatingRock / Bat / Bubble   cosas que aparecen en la cueva
    LifePowerUp / StarPowerUp / CrystalPowerUp                 poderes
    GameHeader / MobileGameHeader / GameOverModal              interfaz
    StartScreen.tsx + inicio/   pantalla de inicio (versión escritorio y celular)
    LoadingScreen.tsx + carga/  pantalla de carga (escritorio y celular)
    AssetPreloader.tsx          baja todas las imágenes antes de jugar
    FondoDegradado.tsx, GroundFloor.tsx, CeilingFloor.tsx      fondo, piso y techo
  svg/                      trazos vectoriales de íconos
  styles.css                Tailwind + fuentes compartidas + tema + animaciones (temblor, flash rojo)
```

## Cómo se trabaja
- Probar: `cd games/gato && npm install && npm run dev`.
- Cambiar o agregar una imagen: ponerla en `assets-src/`, desde la raíz correr `npm run optimize -- games/gato`.
- Librerías: solo React y Tailwind.

## Pendientes / ideas
- `inicio/InicioEscritorio.tsx`, `InicioCelular.tsx` y `carga/*` son capas posicionadas a mano exportadas de Figma (muchas medidas fijas): se pueden simplificar.
- Las listas de imágenes de obstáculos están repetidas en el componente y en `AssetPreloader.tsx`: conviene un solo archivo con las listas.
