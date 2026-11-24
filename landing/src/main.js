import { games, flotantes, pasos } from './games.js'

// ---------- Portada: personajes flotando alrededor del logo ----------
document.getElementById('flotantes').innerHTML = flotantes
  .map(
    (p) => `
  <a class="personaje pj-${p.id}" href="${p.href}" aria-label="Jugar ${p.nombre}" style="--d: ${p.profundidad}">
    <span class="aparece"><span class="flota"><img src="${p.img}" alt="" /></span></span>
    <span class="rotulo">${p.nombre}</span>
  </a>`,
  )
  .join('')

// Efecto de profundidad: los personajes se mueven un poco con el mouse (solo en compu)
const portada = document.querySelector('.portada')
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches
if (!quieto && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let pendiente = false
  portada.addEventListener('mousemove', (e) => {
    if (pendiente) return
    pendiente = true
    requestAnimationFrame(() => {
      const r = portada.getBoundingClientRect()
      portada.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
      portada.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
      pendiente = false
    })
  })
  portada.addEventListener('mouseleave', () => {
    portada.style.setProperty('--mx', 0)
    portada.style.setProperty('--my', 0)
  })
}

// ---------- Juegos como mini apps (logo adentro, personaje asomándose) ----------
const apps = document.getElementById('apps')
apps.innerHTML = games
  .map(
    (g, i) => `
  <a class="app" href="${g.href}" style="--i: ${i}">
    <span class="app-marco">
      <span class="icono-app" role="img" aria-label="${g.title}"
        style="background: radial-gradient(75% 75% at 50% 40%, ${g.color[0]} 0%, ${g.color[1]} 100%); padding: calc(${g.relleno} * var(--escala))">
        <img src="${g.logo}" alt="" loading="lazy" decoding="async" />
      </span>
      <img class="asoma" src="${g.personaje}" alt="" loading="lazy" decoding="async"
        style="width: calc(${g.ancho}px * var(--escala))" />
    </span>
    <span class="app-texto">
      <span class="app-tipo">${g.label}</span>
      <span class="app-intro">${g.intro}</span>
    </span>
  </a>`,
  )
  .join('')

// ---------- Instalar: pasos según el navegador elegido ----------
const lista = document.getElementById('pasos')
const botones = document.querySelectorAll('.pestanas button')
const mostrarPasos = (navegador) => {
  lista.innerHTML = pasos[navegador]
    .map(
      (p, i) => `
    <li style="animation-delay: ${i * 60}ms">
      <span class="paso-num" aria-hidden="true">${i + 1}</span>
      <span class="paso-texto"><strong>${p.titulo}</strong><span>${p.texto}</span></span>
    </li>`,
    )
    .join('')
  botones.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.navegador === navegador)))
}
botones.forEach((b) => b.addEventListener('click', () => mostrarPasos(b.dataset.navegador)))
// En Android arranca mostrando Chrome; en el resto, Safari
mostrarPasos(/android/i.test(navigator.userAgent) ? 'chrome' : 'safari')

// ---------- Entradas al bajar: cada bloque aparece cuando llega a la pantalla ----------
const aparecen = document.querySelectorAll('.revelar, .apps')
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )
  aparecen.forEach((el) => obs.observe(el))
} else {
  aparecen.forEach((el) => el.classList.add('visible'))
}

// ---------- El corazón del pie late dos veces al llegar abajo ----------
const corazon = document.querySelector('.hecho-con img')
if (corazon && 'IntersectionObserver' in window) {
  new IntersectionObserver(
    ([entrada]) => corazon.classList.toggle('latiendo', entrada.isIntersecting),
    { threshold: 1 },
  ).observe(corazon)
}
