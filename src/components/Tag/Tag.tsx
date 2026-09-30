import styles from './Tag.module.css'

export type VarianteTag = 'tag_resgate' | 'tag_saude' | 'tag_adocao' | 'tag_educacao'

type TagProps = {
  texto: string
  variante: VarianteTag
}

export default function Tag({ texto, variante }: TagProps) {
  return <span className={`${styles.projetos_item__tag} ${styles[variante]}`}>{texto}</span>
}
