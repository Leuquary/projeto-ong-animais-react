import { useEffect } from 'react'
import SecaoCadastro from '../components/SecaoCadastro/SecaoCadastro'

export default function Cadastro() {
  useEffect(() => {
    document.title = 'Cadastro | Projeto Patas de Rua'
  }, [])

  return <SecaoCadastro />
}
