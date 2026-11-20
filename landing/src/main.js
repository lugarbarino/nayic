import { games, featured } from './games.js'

// Las tarjetas muestran la imagen a 350x268 (guardada al doble para pantallas retina)
const card = (g, { cls = '', link = true, priority = false } = {}) => `
  <${link ? `a href="${g.href}"${g.external ? ' target="_blank" rel="noopener"' : ''}` : 'div'} class="card ${cls}">
    <div class="card-img">
      <img src="${g.img}" alt="${g.title}" width="350" height="268"
        ${priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} />
    </div>
    <div class="card-body">
      <p class="intro">${g.intro}</p>
      <p class="title">${g.title}</p>
      <span class="play">${link ? 'Jugá ahora' : 'Próximamente'}</span>
    </div>
  </${link ? 'a' : 'div'}>`

document.getElementById('hero').innerHTML = `
  <img class="hero-bg" src="/img/hero-1200.webp"
    srcset="/img/hero-1200.webp 1200w, /img/hero-2000.webp 2000w"
    sizes="(max-width: 1100px) 100vw, 67vw" alt="" fetchpriority="high" decoding="async" />
  ${card(featured, { cls: 'card-hero', priority: true })}
  <a class="more" href="#juegos">Ver más
    <img src="/img/icon-arrow.svg" alt="" width="8" height="9" />
  </a>`

// La grilla muestra todos menos el destacado (ya está en el hero)
document.getElementById('grid').innerHTML = games
  .filter((g) => g.id !== featured.id)
  .map((g) => card(g))
  .join('')
