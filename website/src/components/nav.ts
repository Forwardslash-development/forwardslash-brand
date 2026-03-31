import { renderThemeToggle } from './theme'
import anime from 'animejs'

function renderLogoSVG(): string {
  return `
    <svg class="nav-logo-svg" width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="forwardslash development">
      <path class="slash-1" d="M6 32 L18 4" stroke="#00E5B0" stroke-width="4" stroke-linecap="round"/>
      <path class="slash-2" d="M22 32 L34 4" stroke="#00E5B0" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `
}

export function renderNav(): string {
  return `
    <nav class="nav" id="nav">
      <a href="#" class="nav-mark" aria-label="forwardslash development home">
        ${renderLogoSVG()}
      </a>
      <div class="nav-links">
        <a href="#about">about</a>
        <a href="#services">services</a>
        <a href="#process">process</a>
        <a href="#work">work</a>
        <a href="#contact" class="nav-cta">get in touch</a>
      </div>
      <div class="nav-right">
        ${renderThemeToggle()}
        <button class="nav-burger" id="burger" aria-label="menu">
          <span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      <a href="#about" class="mobile-link">about</a>
      <a href="#services" class="mobile-link">services</a>
      <a href="#process" class="mobile-link">process</a>
      <a href="#work" class="mobile-link">work</a>
      <a href="#contact" class="mobile-link">contact</a>
    </div>
  `
}

export function initNav(): void {
  const nav = document.getElementById('nav')
  const burger = document.getElementById('burger')
  const menu = document.getElementById('mobileMenu')

  if (nav) {
    const update = () => nav.classList.toggle('scrolled', window.scrollY > 20)
    window.addEventListener('scroll', update, { passive: true })
    update()
  }

  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open')
      burger.classList.toggle('open', open)
      document.body.style.overflow = open ? 'hidden' : ''
    })

    menu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open')
        burger.classList.remove('open')
        document.body.style.overflow = ''
      })
    })
  }

  // Draw-in animation
  const slashes = document.querySelectorAll<SVGPathElement>('.slash-1, .slash-2')
  slashes.forEach(path => {
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
  })

  anime({
    targets: '.slash-1',
    strokeDashoffset: [anime.get(document.querySelector('.slash-1')!, 'strokeDashoffset'), 0],
    duration: 500,
    delay: 200,
    easing: 'easeInOutCubic',
  })

  anime({
    targets: '.slash-2',
    strokeDashoffset: [anime.get(document.querySelector('.slash-2')!, 'strokeDashoffset'), 0],
    duration: 500,
    delay: 420,
    easing: 'easeInOutCubic',
  })
}
