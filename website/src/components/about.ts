export function renderAbout(): string {
  return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>01 — about
        </div>
        <div class="about-grid">
          <div class="about-left reveal reveal-delay-1">
            <h2 class="section-heading">One developer.<br>Full accountability.</h2>
          </div>
          <div class="about-right reveal reveal-delay-2">
            <p class="body-lg">
              Forwardslash is a solo web application development practice. There is no team, no account manager, no junior handed your project once the contract is signed.
            </p>
            <p class="body-md">
              You get one person — who scopes, designs, builds, ships, and maintains your application. That means faster decisions, tighter feedback loops, and work that someone actually gives a damn about.
            </p>
            <p class="body-md">
              The name comes from <span class="inline-code">https://</span> — the double forward slash at the start of every URL on the web. This is native territory.
            </p>
            <div class="stat-row">
              <div class="stat">
                <div class="stat-num">full&#8209;stack</div>
                <div class="stat-label">front to back</div>
              </div>
              <div class="stat">
                <div class="stat-num">0</div>
                <div class="stat-label">layers of overhead</div>
              </div>
              <div class="stat">
                <div class="stat-num">1</div>
                <div class="stat-label">person responsible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
