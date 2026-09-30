import Tag, { type VarianteTag } from '../Tag/Tag'
import styles from './CardProjeto.module.css'

type CardProjetoProps = {
  tag: string
  variante: VarianteTag
  titulo: string
  texto: string
  valor: string
  legenda: string
}

export default function CardProjeto({ tag, variante, titulo, texto, valor, legenda }: CardProjetoProps) {
  return (
    <div className={styles.projetos_content__item}>
      <Tag texto={tag} variante={variante} />
      <div className={styles.projetos_item__desc}>
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
      <div className={styles.projetos_item__stat}>
        <span>{valor}</span>
        <span>{legenda}</span>
      </div>
    </div>
  )
}
