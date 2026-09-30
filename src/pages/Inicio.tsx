import { useEffect } from 'react'
import ComoFunciona from '../components/ComoFunciona/ComoFunciona'
import DisclaimerCadastro from '../components/DisclaimerCadastro/DisclaimerCadastro'
import Hero from '../components/Hero/Hero'
import InformacoesOng from '../components/InformacoesOng/InformacoesOng'
import ProjetoDestaque from '../components/ProjetoDestaque/ProjetoDestaque'

export default function Inicio() {
  useEffect(() => {
    document.title = 'Projeto Patas de Rua'
  }, [])

  return (
    <>
      <Hero />
      <InformacoesOng />
      <ComoFunciona />
      <ProjetoDestaque />
      <DisclaimerCadastro
        titulo="Nos ajude a melhorar esse projeto!"
        texto="Seja voluntário, apadrinhe um animal ou contribua com uma doação mensal."
      />
    </>
  )
}
