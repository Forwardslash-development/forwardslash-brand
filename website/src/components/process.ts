export function renderProcess(): string {
  return `
    <section class="section" id="process">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>03 — process
        </div>
        <h2 class="section-heading reveal reveal-delay-1">How we work.</h2>
        <div class="process-list">
          <div class="process-step reveal">
            <div class="process-num">01</div>
            <div class="process-content">
              <h3 class="process-title">Scope</h3>
              <p class="process-body">Every engagement starts with a thorough discovery. We ask the questions that matter — what problem is this solving, who uses it, what does done actually look like. The output is a written scope: what's in, what's out, what it costs, and why.</p>
            </div>
          </div>
          <div class="process-step reveal reveal-delay-1">
            <div class="process-num">02</div>
            <div class="process-content">
              <h3 class="process-title">Build</h3>
              <p class="process-body">Work happens in the open. You get access to the repository from day one. Progress is visible, feedback is continuous, and there are no surprises at handoff. We write code as if the next developer is reading over our shoulder — because they will be.</p>
            </div>
          </div>
          <div class="process-step reveal reveal-delay-2">
            <div class="process-num">03</div>
            <div class="process-content">
              <h3 class="process-title">Ship</h3>
              <p class="process-body">Deployment is part of the engagement, not an afterthought. Applications go live with CI/CD in place, monitoring configured, and documentation written. No lock-in — you own the infrastructure, the codebase, and the deployment process outright.</p>
            </div>
          </div>
          <div class="process-step reveal reveal-delay-3">
            <div class="process-num">04</div>
            <div class="process-content">
              <h3 class="process-title">Maintain</h3>
              <p class="process-body">Most engagements continue after launch. We stay on for features, fixes, and questions — or hand off cleanly with full documentation when your team is ready to take over. Either way, you're never dependent on us to keep the lights on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
