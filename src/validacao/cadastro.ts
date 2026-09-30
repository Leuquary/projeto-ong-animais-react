const telefoneRegex = /^\([1-9]{2}\) 9[0-9]{4}-[0-9]{4}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

function digitoVerificador(numeros: number[], pesoInicial: number) {
  const soma = numeros.reduce((total, numero, indice) => total + numero * (pesoInicial - indice), 0)
  const resto = soma % 11
  return resto < 2 ? 0 : 11 - resto
}

function cpfComDigitosValidos(valor: string) {
  const numeros = valor.replace(/\D/g, '').split('').map(Number)
  if (numeros.every((numero) => numero === numeros[0])) return false

  const primeiro = digitoVerificador(numeros.slice(0, 9), 10)
  const segundo = digitoVerificador(numeros.slice(0, 10), 11)
  return primeiro === numeros[9] && segundo === numeros[10]
}

export function mensagemNome(valor: string) {
  if (valor.trim() === '') return 'Informe o nome completo.'
  return ''
}

export function mensagemTelefone(valor: string) {
  if (valor === '' || telefoneRegex.test(valor)) return ''
  return 'Informe o telefone no formato (11) 90000-0000.'
}

export function mensagemEmail(valor: string) {
  if (valor === '' || emailRegex.test(valor)) return ''
  return 'Informe um e-mail válido, como nome@email.com.'
}

export function mensagemCpf(valor: string) {
  if (valor === '') return ''
  if (!cpfRegex.test(valor)) return 'Informe o CPF no formato 000.000.000-00.'
  if (!cpfComDigitosValidos(valor)) return 'Informe um CPF válido.'
  return ''
}
