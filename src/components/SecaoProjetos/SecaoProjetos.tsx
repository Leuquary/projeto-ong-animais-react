import CardProjeto from '../CardProjeto/CardProjeto'
import styles from './SecaoProjetos.module.css'

const projetos = [
  {
    tag: 'Resgate',
    variante: 'tag_resgate' as const,
    titulo: 'Resgate de rua 24h',
    texto:
      'Equipe de plantão para atender denúncias de animais feridos, doentes ou em situação de risco em qualquer ponto da cidade.',
    valor: '340',
    legenda: 'resgates em 2026',
  },
  {
    tag: 'Saúde',
    variante: 'tag_saude' as const,
    titulo: 'Castração popular nas comunidades',
    texto:
      'Mutirões gratuitos de castração em parceria com clínicas veterinárias locais, para reduzir o abandono na origem.',
    valor: '2.100',
    legenda: 'castrações realizadas',
  },
  {
    tag: 'Adoção',
    variante: 'tag_adocao' as const,
    titulo: 'Feiras de adoção responsável',
    texto:
      'Encontros mensais para apresentar animais prontos para adoção, com avaliação de perfil e acompanhamento pós-adoção.',
    valor: '840',
    legenda: 'adoções concluídas',
  },
  {
    tag: 'Educação',
    variante: 'tag_educacao' as const,
    titulo: 'Guarda responsável nas escolas',
    texto:
      'Palestras e oficinas em escolas públicas sobre posse responsável, prevenção de maus-tratos e primeiros cuidados.',
    valor: '18',
    legenda: 'escolas atendidas',
  },
  {
    tag: 'Saúde',
    variante: 'tag_saude' as const,
    titulo: 'Casa de recuperação',
    texto:
      'Espaço de acolhimento para animais em tratamento prolongado, antes de estarem prontos para uma nova família.',
    valor: '45',
    legenda: 'vagas ativas',
  },
]

export default function SecaoProjetos() {
  return (
    <section>
      <div className={styles.projetos_content}>
        <div className={styles.projetos_content__title}>
          <h2>Nossos projetos</h2>
          <p>
            Cada frente de trabalho ataca uma parte do mesmo problema: o abandono. Vão do resgate
            imediato à educação de longo prazo.
          </p>
        </div>
        <div className={styles.projetos_content__list}>
          {projetos.map((projeto) => (
            <CardProjeto key={projeto.titulo} {...projeto} />
          ))}
        </div>
      </div>
    </section>
  )
}
