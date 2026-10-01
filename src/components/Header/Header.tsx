import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '/assets/logo.png'

const links = [
  { to: '/', label: 'Início' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/cadastro', label: 'Cadastre-se' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [menuAbertoEm, setMenuAbertoEm] = useState<string | null>(null)
  const aberto = menuAbertoEm === pathname

  function alternarMenu() {
    setMenuAbertoEm((atual) => (atual === pathname ? null : pathname))
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_content__logo}>
          <h1>
            <img src={logo} alt="Logo Menu" />
            <span>Instituto Patas da Rua</span>
          </h1>
        </div>
        <button
          type="button"
          className={aberto ? `${styles.header_menu} ${styles.aberto}` : styles.header_menu}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu"
          onClick={alternarMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="menu" className={aberto ? styles.aberto : undefined}>
          <ul>
            {links.map((link) => (
              <li key={link.to} className={pathname === link.to ? styles.active : undefined}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
