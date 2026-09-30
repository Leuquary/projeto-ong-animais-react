import Etapa from '../Etapa/Etapa'
import styles from './ComoFunciona.module.css'

const etapas = [
  {
    imagem: '/assets/resgate.jpg',
    alt: 'Resgatando Animais',
    numero: '1',
    titulo: 'Resgate',
    texto:
      'Recebemos as denúncias, avaliamos a veracidade da informação e vamos até o animal, muitas vezes em situação de rua, maus-tratos ou abandono.',
  },
  {
    imagem: '/assets/cuidado.jpg',
    alt: 'Cuidando de Animais',
    numero: '2',
    titulo: 'Cuidado',
    texto:
      'Realizamos exames, vacinação, castração e tratamento veterinário completo antes de disponibilizar qualquer animal para adoção.',
  },
  {
    imagem: '/assets/adocao.jpg',
    alt: 'Adotando Animais',
    numero: '3',
    titulo: 'Adoção',
    texto:
      'Avaliamos cada lar rigorosamente, a fim de garantir que o animal não se encontre em situação de vulnerabilidade novamente.',
  },
]

export default function ComoFunciona() {
  return (
    <section>
      <div className={styles.ong_content}>
        <div className={styles.ong_content__title}>
          <h3>Como funciona?</h3>
          <p>Do primeiro chamado até a chegada a um novo lar, cada animal passa pelas mesmas três etapas:</p>
        </div>
        <div className={styles.ong_content__list}>
          {etapas.map((etapa) => (
            <Etapa key={etapa.numero} {...etapa} />
          ))}
        </div>
      </div>
    </section>
  )
}
