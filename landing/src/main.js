import { games, nextGame, featured } from './games.js'

const card = (g, { cls = '', link = true } = {}) => `
  <${link ? `a href="${g.href}"` : 'div'} class="card ${cls}">
    <div class="card-img"><img src="${g.img}" alt="${g.title}" loading="lazy" /></div>
    <div class="card-body">
      <p class="intro">${g.intro}</p>
      <p class="title">${g.title}</p>
      ${link ? '<span class="play">Jugá ahora</span>' : '<span class="play">Próximamente</span>'}
    </div>
  </${link ? 'a' : 'div'}>`

document.getElementById('hero').innerHTML = `
  <img class="hero-bg" src="/img/hero.png" alt="" />
  ${card(featured, { cls: 'card-hero' })}
  <a class="more" href="#juegos">Ver más
    <img src="/img/b80063942e8a4d8ef390a373ac260e25605121f4.svg" alt="" width="8" height="9" />
  </a>`

document.getElementById('grid').innerHTML =
  games.map((g) => card(g)).join('') + card(nextGame, { link: false })
