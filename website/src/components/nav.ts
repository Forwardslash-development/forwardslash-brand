import { renderThemeToggle } from './theme'

export function renderNav(): string {
  return `
    <nav class="nav" id="nav">
      <a href="#" class="nav-mark">//</a>
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
}
