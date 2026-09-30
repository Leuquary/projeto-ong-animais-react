import { useEffect } from 'react'
import DisclaimerCadastro from '../components/DisclaimerCadastro/DisclaimerCadastro'
import SecaoProjetos from '../components/SecaoProjetos/SecaoProjetos'

export default function Projetos() {
  useEffect(() => {
    document.title = 'Projetos | Projeto Patas de Rua'
  }, [])

  return (
    <>
      <SecaoProjetos />
      <DisclaimerCadastro
        titulo="Escolha como quer entrar nessa"
        texto="Voluntariado, apadrinhamento ou doação — cada projeto precisa de mãos diferentes."
      />
    </>
  )
}
