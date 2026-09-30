import CardInformacao from '../CardInformacao/CardInformacao'
import styles from './InformacoesOng.module.css'

const informacoes = [
  { valor: '1.230+', legenda: 'Animais resgatados' },
  { valor: '840+', legenda: 'Animais adotados' },
  { valor: '12 anos', legenda: 'Como instituto' },
]

export default function InformacoesOng() {
  return (
    <div className={styles.ong_info}>
      <div className={styles.ong_info__content}>
        {informacoes.map((informacao) => (
          <CardInformacao
            key={informacao.legenda}
            valor={informacao.valor}
            legenda={informacao.legenda}
          />
        ))}
      </div>
    </div>
  )
}
