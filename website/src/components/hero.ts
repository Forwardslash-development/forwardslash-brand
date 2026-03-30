export function renderHero(): string {
  return `
    <section class="hero" id="hero">
      <div class="hero-bg-grid"></div>
      <div class="container">
        <div class="hero-eyebrow">
          <span class="typed-url" id="typedUrl"></span><span class="cursor">_</span>
        </div>
        <h1 class="hero-heading">
          Web applications.<br>
          <span class="hero-heading-accent">Built right.</span>
        </h1>
        <p class="hero-sub">
          Precision development for founders and teams who care about the craft. No agency overhead — you work directly with the person writing the code.
        </p>
        <div class="hero-actions">
          <a href="#work" class="btn-primary">see the work</a>
          <a href="#contact" class="btn-ghost">start a project</a>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <span class="mono-sm">scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `
}

export function initHero(): void {
  const el = document.getElementById('typedUrl')
  if (!el) return

  const text = 'https://forwardslash.dev'
  let i = 0

  const type = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i++)
      setTimeout(type, i === 1 ? 400 : 55 + Math.random() * 30)
    }
  }

  setTimeout(type, 600)
}
