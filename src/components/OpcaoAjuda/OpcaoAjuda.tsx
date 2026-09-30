import styles from './OpcaoAjuda.module.css'

export type VarianteAjuda = 'adocao' | 'voluntariado' | 'doacao'

type OpcaoAjudaProps = {
  titulo: string
  texto: string
  variante: VarianteAjuda
}

export default function OpcaoAjuda({ titulo, texto, variante }: OpcaoAjudaProps) {
  return (
    <div className={styles.cadastro_content__item}>
      <h4 className={styles[variante]}>{titulo}</h4>
      <p>{texto}</p>
    </div>
  )
}
