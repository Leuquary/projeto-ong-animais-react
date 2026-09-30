import { Link } from 'react-router-dom'
import styles from './DisclaimerCadastro.module.css'

type DisclaimerCadastroProps = {
  titulo: string
  texto: string
}

export default function DisclaimerCadastro({ titulo, texto }: DisclaimerCadastroProps) {
  return (
    <section className={styles.disclaimer_cadastro}>
      <div className={styles.disclaimer_cadastro__content}>
        <h4>{titulo}</h4>
        <p>{texto}</p>
      </div>
      <div className={styles.disclaimer_cadastro__button}>
        <Link to="/cadastro">Fazer meu cadastro</Link>
      </div>
    </section>
  )
}
