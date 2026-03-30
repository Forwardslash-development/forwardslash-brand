const GITHUB_REPO = 'Forwardslash-development/forwardslash-brand'

export function renderContact(): string {
  return `
    <section class="section section-contact" id="contact">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>05 — contact
        </div>
        <div class="contact-grid">
          <div class="contact-left reveal reveal-delay-1">
            <h2 class="section-heading">Start a project.</h2>
            <p class="body-lg">Tell me what you're building. I'll come back to you within one business day.</p>
            <div class="contact-meta">
              <div class="contact-meta-item">
                <span class="mono-sm signal">response time</span>
                <span class="body-md">&lt; 24 hours</span>
              </div>
              <div class="contact-meta-item">
                <span class="mono-sm signal">availability</span>
                <span class="body-md">taking new projects</span>
              </div>
            </div>
          </div>
          <div class="contact-right reveal reveal-delay-2">
            <form class="contact-form" id="contactForm">
              <div class="form-group">
                <label class="form-label" for="name">name</label>
                <input class="form-input" type="text" id="name" name="name" placeholder="Your name" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="email">email</label>
                <input class="form-input" type="email" id="email" name="email" placeholder="you@company.com" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="project">project brief</label>
                <textarea class="form-input form-textarea" id="project" name="project" placeholder="What are you building? What's the timeline? Any stack preferences?" required></textarea>
              </div>
              <button type="submit" class="btn-submit">
                open enquiry in github <span class="btn-arrow">↗</span>
              </button>
              <p class="form-note mono-sm">// this opens a pre-filled GitHub Issue — no email required.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
}

export function initContact(): void {
  const form = document.getElementById('contactForm') as HTMLFormElement | null
  if (!form) return

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const name    = (document.getElementById('name') as HTMLInputElement).value.trim()
    const email   = (document.getElementById('email') as HTMLInputElement).value.trim()
    const project = (document.getElementById('project') as HTMLTextAreaElement).value.trim()

    const title = `Enquiry from ${name}`
    const body  = [
      `**Name:** ${name}`,
      `**Email:** ${email}`,
      '',
      '**Project brief:**',
      project,
      '',
      '---',
      '_Submitted via forwardslash.dev_',
    ].join('\n')

    const url = new URL(`https://github.com/${GITHUB_REPO}/issues/new`)
    url.searchParams.set('title', title)
    url.searchParams.set('body', body)
    url.searchParams.set('labels', 'enquiry')

    window.open(url.toString(), '_blank', 'noopener')
  })
}
