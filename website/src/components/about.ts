export function renderAbout(): string {
  return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>01 — about
        </div>
        <div class="about-grid">
          <div class="about-left reveal reveal-delay-1">
            <h2 class="section-heading">Expert craft.<br>No gatekeepers.</h2>
          </div>
          <div class="about-right reveal reveal-delay-2">
            <p class="body-lg">
              Forwardslash is a web application development practice built around a single principle: software should be engineered with precision, owned completely, and distributed on your terms.
            </p>
            <p class="body-md">
              We build full-stack web applications and Progressive Web Apps that run everywhere — without App Store approvals, platform cuts, or update cycles dictated by someone else's review queue. The web is the platform. We know it thoroughly.
            </p>
            <p class="body-md">
              Every engagement is characterised by direct communication, rigorous technical standards, and code that the next developer — or your own team — can actually work with. We write for longevity, not the deadline.
            </p>
            <div class="stat-row">
              <div class="stat">
                <div class="stat-num">full&#8209;stack</div>
                <div class="stat-label">front to back</div>
              </div>
              <div class="stat">
                <div class="stat-num">0%</div>
                <div class="stat-label">platform tax</div>
              </div>
              <div class="stat">
                <div class="stat-num">PWA&#8209;first</div>
                <div class="stat-label">own your distribution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
