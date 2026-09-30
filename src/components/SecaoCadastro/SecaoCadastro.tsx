import FormularioCadastro from '../FormularioCadastro/FormularioCadastro'
import OpcaoAjuda, { type VarianteAjuda } from '../OpcaoAjuda/OpcaoAjuda'
import styles from './SecaoCadastro.module.css'

const opcoes: { variante: VarianteAjuda; titulo: string; texto: string }[] = [
  {
    variante: 'adocao',
    titulo: 'Adoção',
    texto: 'Quer conhecer animais disponíveis e passar pela nossa avaliação de adoção responsável.',
  },
  {
    variante: 'voluntariado',
    titulo: 'Voluntariado',
    texto: 'Pode ajudar em resgates, feiras de adoção, transporte ou cuidados na casa de recuperação.',
  },
  {
    variante: 'doacao',
    titulo: 'Doações',
    texto: 'Quer contribuir com valores mensais, ração, medicamentos ou materiais de limpeza.',
  },
]

export default function SecaoCadastro() {
  return (
    <section>
      <div className={styles.cadastro_content}>
        <div className={styles.cadastro_content__title}>
          <h2>Vamos começar</h2>
          <p>Preencha o formulário e diga como quer ajudar. Entramos em contato em até 3 dias úteis.</p>
          <div className={styles.cadastro_content__list}>
            {opcoes.map((opcao) => (
              <OpcaoAjuda key={opcao.variante} {...opcao} />
            ))}
          </div>
        </div>
        <FormularioCadastro />
      </div>
    </section>
  )
}
