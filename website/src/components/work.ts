interface Project {
  tag: string
  year: string
  title: string
  body: string
  stack: string[]
}

const projects: Project[] = [
  {
    tag: 'pwa',
    year: '2024',
    title: 'Project Alpha',
    body: 'A PWA for field service teams — installable on any device, fully offline-capable, and syncing automatically when connectivity returns. Replaced a native iOS app and eliminated the App Store update cycle entirely.',
    stack: ['TypeScript', 'Workbox', 'IndexedDB'],
  },
  {
    tag: 'ai',
    year: '2024',
    title: 'Project Beta',
    body: 'An AI-powered document review tool for a legal services client. Streams LLM analysis directly into the UI, highlights key clauses, and surfaces risk flags — reducing average review time by 60%.',
    stack: ['Next.js', 'Anthropic API', 'PostgreSQL'],
  },
  {
    tag: 'web app',
    year: '2024',
    title: 'Project Gamma',
    body: 'A full-stack SaaS dashboard for managing [X]. Built with Next.js, Postgres, and Stripe. Scoped, built, and shipped in 8 weeks from first commit to production.',
    stack: ['Next.js', 'PostgreSQL', 'Stripe'],
  },
  {
    tag: 'device',
    year: '2023',
    title: 'Project Delta',
    body: 'A Web Bluetooth kiosk application for a retail client. Runs in the browser, connects directly to barcode scanners and receipt printers — no native app, no driver installation, no IT overhead.',
    stack: ['Web Bluetooth', 'Web USB', 'TypeScript'],
  },
  {
    tag: 'api',
    year: '2023',
    title: 'Project Epsilon',
    body: 'A GraphQL API layer connecting three legacy internal systems for a [industry] client. Reduced data sync time by 80% and eliminated manual exports entirely.',
    stack: ['GraphQL', 'Node.js', 'Redis'],
  },
  {
    tag: 'rescue',
    year: '2023',
    title: 'Project Zeta',
    body: 'Inherited a five-year-old React codebase with no tests and three critical security vulnerabilities. Stabilised, migrated to TypeScript, and handed back to the client\'s team with full documentation.',
    stack: ['React', 'TypeScript', 'Vitest'],
  },
]

function renderCard(p: Project, index: number): string {
  return `
    <div class="work-card reveal reveal-delay-${(index % 3) + 1}">
      <div class="work-card-header">
        <span class="work-tag">${p.tag}</span>
        <span class="work-year">${p.year}</span>
      </div>
      <h3 class="work-title">${p.title}</h3>
      <p class="work-body">${p.body}</p>
      <div class="work-stack">
        ${p.stack.map(s => `<span>${s}</span>`).join('')}
      </div>
    </div>
  `
}

export function renderWork(): string {
  return `
    <section class="section section-alt" id="work">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>04 — work
        </div>
        <h2 class="section-heading reveal reveal-delay-1">Selected projects.</h2>
        <div class="work-grid">
          ${projects.map((p, i) => renderCard(p, i)).join('')}
        </div>
        <p class="work-note mono-sm reveal">// placeholder projects — real case studies coming soon.</p>
      </div>
    </section>
  `
}
