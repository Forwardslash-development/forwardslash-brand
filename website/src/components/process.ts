export function renderProcess(): string {
  return `
    <section class="section" id="process">
      <div class="container">
        <div class="section-label reveal">
          <span class="signal">// </span>03 — process
        </div>
        <h2 class="section-heading reveal reveal-delay-1">How it works.</h2>
        <div class="process-list">
          <div class="process-step reveal">
            <div class="process-num">01</div>
            <div class="process-content">
              <h3 class="process-title">Scope</h3>
              <p class="process-body">We start with a call. I ask the questions that matter — what problem is this solving, who uses it, what does done look like. Then I send a clear written scope: what's in, what's out, what it costs.</p>
            </div>
          </div>
          <div class="process-step reveal reveal-delay-1">
            <div class="process-num">02</div>
            <div class="process-content">
              <h3 class="process-title">Build</h3>
              <p class="process-body">Work happens in the open. You get access to the repository from day one. No black box — progress is visible, feedback is continuous, and there are no surprises at handoff.</p>
            </div>
          </div>
          <div class="process-step reveal reveal-delay-2">
            <div class="process-num">03</div>
            <div class="process-content">
              <h3 class="process-title">Ship</h3>
              <p class="process-body">Deployment is part of the job, not an afterthought. The application goes live with CI/CD in place, monitoring configured, and documentation written. You own everything.</p>
            </div>
          </div>
          <div class="process-step reveal reveal-delay-3">
            <div class="process-num">04</div>
            <div class="process-content">
              <h3 class="process-title">Maintain</h3>
              <p class="process-body">Most engagements continue after launch. I stay on for bugs, features, and questions — or hand off cleanly if you have an internal team ready to take over.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
