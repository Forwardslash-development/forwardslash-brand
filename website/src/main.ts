import './style.css'
import { renderNav, initNav } from './components/nav'
import { renderHero, initHero } from './components/hero'
import { renderAbout } from './components/about'
import { renderServices } from './components/services'
import { renderProcess } from './components/process'
import { renderWork } from './components/work'
import { renderContact, initContact } from './components/contact'
import { renderFooter } from './components/footer'
import { initReveal } from './components/reveal'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${renderNav()}
  ${renderHero()}
  ${renderAbout()}
  ${renderServices()}
  ${renderProcess()}
  ${renderWork()}
  ${renderContact()}
  ${renderFooter()}
`

initNav()
initHero()
initContact()
initReveal()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    })
  })
}
