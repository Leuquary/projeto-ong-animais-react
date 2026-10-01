import { useRef, useState, type FormEvent } from 'react'
import { IMaskInput } from 'react-imask'
import { salvarCadastro } from '../../armazenamento/cadastros'
import { mensagemCpf, mensagemEmail, mensagemNome, mensagemTelefone } from '../../validacao/cadastro'
import styles from './FormularioCadastro.module.css'

export default function FormularioCadastro() {
  const [enviado, setEnviado] = useState(false)
  const [falhaAoSalvar, setFalhaAoSalvar] = useState(false)
  const nomeRef = useRef<HTMLInputElement>(null)
  const telefoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const cpfRef = useRef<HTMLInputElement>(null)
  const formularioRef = useRef<HTMLFormElement>(null)

  function validarNome() {
    const nome = nomeRef.current
    if (!nome) return

    nome.setCustomValidity(mensagemNome(nome.value))
  }

  function validarTelefone() {
    const telefone = telefoneRef.current
    if (!telefone) return

    telefone.setCustomValidity(mensagemTelefone(telefone.value))
  }

  function validarEmail() {
    const email = emailRef.current
    if (!email) return

    email.setCustomValidity(mensagemEmail(email.value))
  }

  function validarCpf() {
    const cpf = cpfRef.current
    if (!cpf) return

    cpf.setCustomValidity(mensagemCpf(cpf.value))
  }

  function validarCampos() {
    validarNome()
    validarTelefone()
    validarEmail()
    validarCpf()

    if (formularioRef.current && !formularioRef.current.checkValidity()) {
      setEnviado(false)
    }
  }

  function aoEditar() {
    setEnviado(false)
    setFalhaAoSalvar(false)
  }

  function aoEnviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formulario = formularioRef.current
    if (!formulario) return

    const dados = new FormData(formulario)
    const cadastro = {
      nome: String(dados.get('nome') ?? ''),
      telefone: String(dados.get('telefone') ?? ''),
      email: String(dados.get('email') ?? ''),
      cpf: String(dados.get('cpf') ?? ''),
      interesse: String(dados.get('interesse') ?? ''),
      mensagem: String(dados.get('mensagem') ?? ''),
    }

    try {
      salvarCadastro(cadastro)
      setFalhaAoSalvar(false)
      setEnviado(true)
    } catch {
      setEnviado(false)
      setFalhaAoSalvar(true)
    }
  }

  return (
    <form ref={formularioRef} className={styles.formulario} onInput={aoEditar} onSubmit={aoEnviar}>
      <fieldset>
        <legend>Meus dados</legend>
        <div className={styles.formulario__row}>
          <div className={styles.formulario__field}>
            <label htmlFor="nome">Nome completo</label>
            <input
              ref={nomeRef}
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              required
              onInput={validarNome}
            />
          </div>
          <div className={styles.formulario__field}>
            <label htmlFor="telefone">Telefone</label>
            <IMaskInput
              inputRef={telefoneRef}
              mask="(00) 00000-0000"
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(11) 90000-0000"
              pattern="\([1-9]{2}\) 9[0-9]{4}-[0-9]{4}"
              required
              onAccept={validarTelefone}
            />
          </div>
        </div>
        <div className={styles.formulario__field}>
          <label htmlFor="email">E-mail</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
            onInput={validarEmail}
          />
        </div>
        <div className={styles.formulario__field}>
          <label htmlFor="cpf">CPF</label>
          <IMaskInput
            inputRef={cpfRef}
            mask="000.000.000-00"
            type="text"
            id="cpf"
            name="cpf"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            placeholder="000.000.000-00"
            required
            onAccept={validarCpf}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Como quer ajudar</legend>
        <div className={styles.formulario__field}>
          <label htmlFor="interesse">Tenho interesse em</label>
          <select id="interesse" name="interesse" required defaultValue="">
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="adocao">Adoção</option>
            <option value="voluntariado">Voluntariado</option>
            <option value="doacoes">Doações</option>
          </select>
        </div>
        <div className={styles.formulario__field}>
          <label htmlFor="mensagem">Conte um pouco mais</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Disponibilidade de horário, experiência com animais, tipo de animal de interesse..."
          />
        </div>
      </fieldset>
      <button type="submit" onClick={validarCampos}>
        Enviar cadastro
      </button>
      <p className={styles.formulario__sucesso} hidden={!enviado}>
        Cadastro realizado com sucesso. Entramos em contato em até 3 dias úteis.
      </p>
      <p className={styles.formulario__erro} hidden={!falhaAoSalvar}>
        Não foi possível guardar o cadastro neste navegador. Tente novamente.
      </p>
    </form>
  )
}
