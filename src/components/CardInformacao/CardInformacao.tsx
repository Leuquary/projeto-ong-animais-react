import styles from './CardInformacao.module.css'

type CardInformacaoProps = {
  valor: string
  legenda: string
}

export default function CardInformacao({ valor, legenda }: CardInformacaoProps) {
  return (
    <div className={styles.ong_info__card}>
      <span>{valor}</span>
      <span>{legenda}</span>
    </div>
  )
}
