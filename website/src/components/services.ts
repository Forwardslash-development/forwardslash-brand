export function renderServices(): string {
  return `
    <section class="section section-alt" id="services">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>02 — services
        </div>
        <h2 class="section-heading reveal reveal-delay-1">What gets built.</h2>
        <div class="services-grid reveal reveal-delay-2">
          <div class="service-card">
            <div class="service-icon">[app]</div>
            <h3 class="service-title">Web Applications</h3>
            <p class="service-body">Full-stack applications built to production standards. From internal tools to customer-facing products — scoped, architected, and shipped.</p>
            <ul class="service-stack">
              <li>TypeScript / JavaScript</li>
              <li>React, Next.js, Remix</li>
              <li>Node.js, REST &amp; GraphQL</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon">[api]</div>
            <h3 class="service-title">APIs &amp; Backends</h3>
            <p class="service-body">Robust, well-documented APIs and server-side systems. Built to scale cleanly and integrate with whatever stack you're running.</p>
            <ul class="service-stack">
              <li>PostgreSQL, Redis</li>
              <li>REST, GraphQL, WebSockets</li>
              <li>Auth, payments, third-party APIs</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon">[fix]</div>
            <h3 class="service-title">Rescue &amp; Refactor</h3>
            <p class="service-body">Existing codebase that's become a liability? I audit, stabilise, and modernise — without rewriting everything from scratch unless that's genuinely the right call.</p>
            <ul class="service-stack">
              <li>Performance audits</li>
              <li>Technical debt reduction</li>
              <li>Migration &amp; modernisation</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon">[ops]</div>
            <h3 class="service-title">Ongoing Development</h3>
            <p class="service-body">Retained development for teams who need a reliable engineering resource without the overhead of a full-time hire.</p>
            <ul class="service-stack">
              <li>Monthly retainer</li>
              <li>Feature development</li>
              <li>Maintenance &amp; support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
}
