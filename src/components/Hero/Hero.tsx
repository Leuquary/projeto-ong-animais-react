import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.hero_title}>
          <h2>
            Todo animal que vive na rua merece um caminho de{' '}
            <span style={{ color: 'var(--vermelho)' }}>
              <i>volta</i>
            </span>{' '}
            para casa.
          </h2>
          <p>
            Resgatamos, oferecemos cuidados e encontramos famílias para cães e gatos abandonados na
            cidade de São Paulo. Um trabalho diário, sustentado por quem acredita que todo bichinho
            deveria ter seu lar.
          </p>
          <div className={styles.hero_buttons}>
            <Link to="/cadastro" className={styles.ajuda}>
              Quero ajudar
            </Link>
            <Link to="/projetos" className={styles.projetos}>
              Nossos projetos
            </Link>
          </div>
        </div>
        <div className={styles.hero_image}>
          <img src="/assets/logo-grande.png" alt="Logo Patas da Rua" />
        </div>
      </div>
    </section>
  )
}
