import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const links = [
  { to: '/', label: 'Início' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/cadastro', label: 'Cadastre-se' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content__top}>
          <div className={styles.footer_content__item}>
            <h4>Instituto Patas da Rua</h4>
            <span>
              Organização sem fins lucrativos dedicada ao resgate, tratamento e adoção de animais em
              situação de rua.
            </span>
          </div>
          <div className={styles.footer_content__item}>
            <h4>Navegação</h4>
            <ul>
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer_content__item}>
            <h4>Contato</h4>
            <span>institutopatas@gmail.com</span>
            <span>(11) 93830-4568</span>
            <span>São Paulo, SP</span>
          </div>
        </div>
        <hr />
        <div className={styles.footer_content__bottom}>
          <span>
            © 2026 Instituto Patas da Rua. Protótipo de site — conteúdo fictício para fins de
            demonstração.
          </span>
        </div>
      </div>
    </footer>
  )
}
