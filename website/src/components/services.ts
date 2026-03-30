export function renderServices(): string {
  return `
    <section class="section section-alt" id="services">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>02 — services
        </div>
        <h2 class="section-heading reveal reveal-delay-1">What we build.</h2>
        <div class="services-grid reveal reveal-delay-2">
          <div class="service-card">
            <div class="service-icon">[pwa]</div>
            <h3 class="service-title">Progressive Web Apps</h3>
            <p class="service-body">Ship once to every device — desktop, mobile, tablet — without App Store approvals, platform cuts, or fragmented codebases. PWAs are installed directly from the browser, update silently, and work offline. You own the distribution channel entirely.</p>
            <ul class="service-stack">
              <li>Install from browser — no app store</li>
              <li>Offline-capable, push notifications</li>
              <li>Single codebase, every platform</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon">[app]</div>
            <h3 class="service-title">Web Applications</h3>
            <p class="service-body">Full-stack applications built to production standards. From internal tools to customer-facing products — scoped precisely, architected for maintainability, and shipped with CI/CD from day one.</p>
            <ul class="service-stack">
              <li>TypeScript / JavaScript</li>
              <li>React, Next.js, Remix</li>
              <li>Node.js, REST &amp; GraphQL</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon">[api]</div>
            <h3 class="service-title">APIs &amp; Backends</h3>
            <p class="service-body">Robust, well-documented APIs and server-side systems built to scale cleanly. Designed with clear contracts, sensible abstractions, and the kind of documentation that means your team isn't reverse-engineering intent six months later.</p>
            <ul class="service-stack">
              <li>PostgreSQL, Redis</li>
              <li>REST, GraphQL, WebSockets</li>
              <li>Auth, payments, third-party APIs</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon">[fix]</div>
            <h3 class="service-title">Rescue &amp; Refactor</h3>
            <p class="service-body">Inherited a codebase that's become a liability? We audit, stabilise, and modernise — with a clear assessment of what needs fixing now, what can wait, and what should be left alone.</p>
            <ul class="service-stack">
              <li>Performance &amp; security audits</li>
              <li>Technical debt reduction</li>
              <li>Migration &amp; modernisation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
}
