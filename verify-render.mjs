import { Window } from '/tmp/ong-verify/node_modules/happy-dom/lib/index.js'
import { createServer } from 'vite'

const window = new Window({ url: 'http://127.0.0.1:5173/' })
const document = window.document

for (const [key, value] of Object.entries({
  window,
  document,
  HTMLElement: window.HTMLElement,
  Element: window.Element,
  Node: window.Node,
  navigator: window.navigator,
  DocumentFragment: window.DocumentFragment,
  SVGElement: window.SVGElement,
  MutationObserver: window.MutationObserver,
  getComputedStyle: window.getComputedStyle.bind(window),
  requestAnimationFrame: window.requestAnimationFrame.bind(window),
  cancelAnimationFrame: window.cancelAnimationFrame.bind(window),
  IS_REACT_ACT_ENVIRONMENT: true,
})) {
  Object.defineProperty(globalThis, key, { value, configurable: true, writable: true })
}

document.body.innerHTML = '<div id="root"></div>'

const React = await import('react')
const { createRoot } = await import('react-dom/client')
const { BrowserRouter } = await import('react-router-dom')
const { act } = React

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
  ssr: {
    external: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
})

const { default: App } = await vite.ssrLoadModule('/src/App.tsx')

const root = createRoot(document.getElementById('root'))

await act(async () => {
  root.render(React.createElement(BrowserRouter, null, React.createElement(App)))
})

function text() {
  return document.body.textContent.replace(/\s+/g, ' ').trim()
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const home = text()
assert(home.includes('Instituto Patas da Rua'), 'home missing brand')
assert(home.includes('Quero ajudar'), 'home missing hero button')
assert(home.includes('1.230+'), 'home missing stat card')
assert(home.includes('Como funciona?'), 'home missing steps')
assert(home.includes('Castração popular nas comunidades'), 'home missing highlight')
assert(home.includes('Nos ajude a melhorar esse projeto!'), 'home missing disclaimer')
assert(document.title === 'Projeto Patas de Rua', `unexpected title: ${document.title}`)

const navItems = [...document.querySelectorAll('header nav li')]
assert(navItems.length === 3, 'expected 3 nav items')
assert(navItems[0].className.length > 0, 'home link should be active')
assert(navItems[1].className === '', 'projetos link should be inactive on home')

const menuButton = document.querySelector('header button')
assert(menuButton.getAttribute('aria-expanded') === 'false', 'menu starts closed')
await act(async () => {
  menuButton.click()
})
assert(menuButton.getAttribute('aria-expanded') === 'true', 'menu did not open')
assert(document.querySelector('header nav').className.length > 0, 'nav missing open class')

const projetosLink = [...document.querySelectorAll('header nav a')].find((link) =>
  link.textContent.includes('Projetos'),
)
await act(async () => {
  projetosLink.click()
})

const projetos = text()
assert(projetos.includes('Nossos projetos'), 'projetos page missing title')
assert(projetos.includes('Resgate de rua 24h'), 'projetos page missing card')
assert(projetos.includes('Guarda responsável nas escolas'), 'projetos page missing education card')
assert(projetos.includes('Escolha como quer entrar nessa'), 'projetos page missing disclaimer')
assert(!projetos.includes('Como funciona?'), 'home section leaked into projetos')
assert(document.title === 'Projetos | Projeto Patas de Rua', `unexpected title: ${document.title}`)
assert(menuButton.getAttribute('aria-expanded') === 'false', 'menu stayed open after navigation')
assert(navItems[1].className.length > 0, 'projetos link should be active')

const cadastroLink = [...document.querySelectorAll('a')].find((link) =>
  link.textContent.includes('Fazer meu cadastro'),
)
await act(async () => {
  cadastroLink.click()
})

assert(text().includes('Vamos começar'), 'cadastro page missing title')
assert(text().includes('Adoção'), 'cadastro missing help option')
assert(document.title === 'Cadastro | Projeto Patas de Rua', `unexpected title: ${document.title}`)
assert(document.querySelector('.formulario__sucesso, [hidden]') !== null, 'success message missing')
const sucesso = [...document.querySelectorAll('form p')].find((item) =>
  item.textContent.includes('Cadastro enviado'),
)
assert(sucesso.hidden === true, 'success message should start hidden')

const form = document.querySelector('form')
document.querySelector('#nome').value = 'Ana Souza'
document.querySelector('#telefone').value = '11900000000'
document.querySelector('#email').value = 'ana@email.com'
document.querySelector('#cpf').value = '123.456.789-00'
document.querySelector('#interesse').value = 'adocao'

await act(async () => {
  form.querySelector('button').click()
})
assert(sucesso.hidden === true, 'invalid phone should not show success')

document.querySelector('#telefone').value = '(11) 90000-0000'
await act(async () => {
  form.querySelector('button').click()
})
assert(sucesso.hidden === false, 'valid form should show success')
assert(text().includes('Cadastro enviado. Entramos em contato em até 3 dias úteis.'), 'success copy missing')

await vite.close()
console.log('render checks passed')
