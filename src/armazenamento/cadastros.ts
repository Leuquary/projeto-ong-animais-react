export type Cadastro = {
  nome: string
  telefone: string
  email: string
  cpf: string
  interesse: string
  mensagem: string
}

const CHAVE = 'cadastros'

export function lerCadastros(): Cadastro[] {
  try {
    const salvos = JSON.parse(localStorage.getItem(CHAVE) ?? '[]')
    if (!Array.isArray(salvos)) return []
    return salvos.filter(cadastroValido)
  } catch {
    return []
  }
}

export function salvarCadastro(cadastro: Cadastro) {
  const lista = lerCadastros()
  localStorage.setItem(CHAVE, JSON.stringify([...lista, cadastro]))
}

function cadastroValido(valor: unknown): valor is Cadastro {
  if (!valor || typeof valor !== 'object') return false
  const item = valor as Record<string, unknown>
  return ['nome', 'telefone', 'email', 'cpf', 'interesse', 'mensagem'].every(
    (chave) => typeof item[chave] === 'string',
  )
}
