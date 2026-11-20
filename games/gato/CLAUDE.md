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
- **Fluidez (nov 2026)**: el bucle del juego era un `setInterval` de 16ms dentro de un `useEffect` que dependía de `speed`, `gameTime`, `lives`…, así que se destruía y recreaba en cada paso (60 veces por segundo): el ritmo real dependía de cuánto tardaba en redibujar → tirones, y en aparatos lentos todo (incluido el fondo) avanzaba más despacio. Ahora: `requestAnimationFrame` creado una sola vez por partida + `tickRef` con el paso actual + factor `f` de tiempo real (1 = un cuadro de 60fps, tope 3). Todo lo que se mueve "por cuadro" se multiplica por `f`. Medido: se actualiza en cada cuadro de pantalla (120/s en Mac) a ~340 px/s; antes ~57/s con pausas de 25ms. También se arregló el temporizador de limpieza, que dependía de `cameraX` y nunca llegaba a ejecutarse.
- **Vuelo (nov 2026, "tiene que andar súper bien, tipo flappy bird")**: física tipo jetpack en `InfiniteRunner.tsx` (constante `VUELO` arriba del componente): mientras apretás acelera hacia arriba (`empuje`), al soltar la gravedad lo baja enseguida (`gravedad` alta), con velocidades máximas. Unidades: % del alto de pantalla por segundo (igual en cualquier pantalla). El gato no se sale por arriba. Se sacó una transición CSS de 0,1s que hacía que el gato "siguiera" su posición con retraso. Para que se sienta más pesado/liviano: tocar solo `VUELO`.
- **Controles**: un solo manejador de pointer (mouse, dedo, lápiz) en el contenedor; soltar en cualquier lugar de la ventana (o perder el foco) deja de subir. Barra espaciadora / flecha arriba: ignora la repetición del teclado y suelta el botón que haya quedado seleccionado (antes "Iniciar Juego" quedaba seleccionado y el espacio no respondía).
- **Choques por forma real** (`src/colision.ts`): cada imagen tiene una máscara de 48 celdas de lo que es sólido (con un borde de tolerancia). Chocan solo si se tocan partes sólidas del gato y del obstáculo, usando la posición **dibujada** (`getBoundingClientRect`), así nunca se desfasa. Cada imagen se marca con `data-hit` (`gato`, `suelo-<id>`, `techo-<id>`, `flotante-<id>`, `murcielago-<id>`). Antes eran rectángulos y además estaban corridos: rocas del suelo 60px, estalactitas 40px y rocas flotantes media altura respecto de lo que se veía. Los poderes (vida, cristal, estrella) siguen con caja rectangular (es para agarrarlos, conviene que sea generosa).
- **Fondo que cambia de color**: es un degradado de 32.846px (morado → rojo → azul → morado) que se desplaza con `bgPosition`; las rocas cambian de color según la zona (`getCurrentColorRegion`): lila hasta 5.318px (~17s), roja hasta 15.845px (~50s), azul hasta 27.831px. Con el bucle nuevo se llega a esos cambios al ritmo previsto en cualquier aparato.
- **Celular (nov 2026, decisión de Lucía: se juega en horizontal)**:
  - En celular vertical se muestra el cartel "Girá el celular" (`src/components/GirarCelular.tsx`, consulta `(orientation: portrait) and (pointer: coarse) and (max-width: 900px)`) y el juego se pausa.
  - `src/escala.ts`: `escalaPantalla()` = alto/700 (máximo 1). Multiplica tamaños del gato, rocas (suelo, techo, flotantes), piso, techo, poderes, murciélago, burbujas **y la velocidad**, así un celular girado (~375px de alto) se juega igual que la compu pero más chico. En pantallas de 700px o más es 1 (sin cambios).
  - Pantallas de menos de 500px de alto usan el encabezado compacto.
  - La pantalla de inicio de escritorio se achica entera (`StartScreen.tsx`, alto de diseño 800px); el diseño "celular" del inicio se usa solo en vertical.
- **Ojo con el tamaño de las imágenes**: las rocas calculan su tamaño con `naturalWidth × escala`, así que achicar sus archivos achica las rocas en el juego. `suelo/` se guarda a ancho original (`tamanos.json`: 2000).
- **Para medir rendimiento** con el navegador de Claude, el panel tiene que estar visible: si está oculto, el navegador frena la animación (da 3 fps falsos).

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
