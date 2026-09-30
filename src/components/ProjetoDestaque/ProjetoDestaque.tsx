import { Link } from 'react-router-dom'
import styles from './ProjetoDestaque.module.css'

export default function ProjetoDestaque() {
  return (
    <section>
      <div className={styles.projeto_destaque__content}>
        <div className={styles.projeto_destaque__title}>
          <span>Projeto destaque</span>
        </div>
        <div className={styles.projeto_destaque__desc}>
          <h4>Castração popular nas comunidades</h4>
          <p>
            Mutirões gratuitos de castração para reduzir o abandono de animais, em parceria com
            clínicas veterinárias locais.
          </p>
        </div>
        <div className={styles.projeto_destaque__button}>
          <Link to="/projetos">Conhecer projetos</Link>
        </div>
      </div>
    </section>
  )
}
