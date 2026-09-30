import styles from './Etapa.module.css'

type EtapaProps = {
  imagem: string
  alt: string
  numero: string
  titulo: string
  texto: string
}

export default function Etapa({ imagem, alt, numero, titulo, texto }: EtapaProps) {
  return (
    <div className={styles.ong_content__item}>
      <img src={imagem} alt={alt} />
      <div className={styles.ong_item__desc}>
        <span>{numero}</span>
        <h4>{titulo}</h4>
        <p>{texto}</p>
      </div>
    </div>
  )
}
