import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada() {
  useEffect(() => {
    document.title = 'Página não encontrada | Projeto Patas de Rua'
  }, [])

  return (
    <section className={styles.nao_encontrada}>
      <h2>Página não encontrada</h2>
      <p>O endereço digitado não corresponde a nenhuma página do instituto.</p>
      <Link to="/">Voltar ao início</Link>
    </section>
  )
}
