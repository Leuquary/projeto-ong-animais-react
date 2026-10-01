# Instituto Patas da Rua

Site do Instituto Patas da Rua, uma organização fictícia de resgate e adoção de animais em São Paulo. O conteúdo é um protótipo de demonstração.

A aplicação é uma SPA (Single Page Application): o navegador carrega a página uma vez e a troca de endereço acontece sem recarregar o HTML. Cabeçalho e rodapé permanecem na tela. O miolo muda conforme a rota.

## Páginas

| Endereço | Conteúdo |
| --- | --- |
| `/` | Início: apresentação, números, etapas do trabalho e projeto em destaque |
| `/projetos` | Lista dos projetos do instituto |
| `/cadastro` | Formulário para adoção, voluntariado ou doação |
| qualquer outro | Aviso de página não encontrada, com link de volta ao início |

No celular, até 430px de largura, o menu vira um botão de três barras. O item da página atual fica marcado. Ao trocar de página, a rolagem volta ao topo.

## Tecnologias

- [React 19](https://react.dev/) desenha a interface a partir de componentes.
- [TypeScript](https://www.typescriptlang.org/) descreve o formato dos dados, como o objeto de cadastro.
- [Vite](https://vite.dev/) sobe o servidor de desenvolvimento e gera a versão final.
- [React Router](https://reactrouter.com/) liga cada endereço a uma página.
- [react-imask](https://imask.js.org/guide.html) coloca a pontuação do telefone e do CPF enquanto a pessoa digita.
- CSS Modules guardam o estilo ao lado de cada componente. Cores e fontes ficam em `src/styles/global.css`.
- As fontes Fraunces e Work Sans vêm do Google Fonts. Se essa ligação falhar, o navegador usa Georgia e uma fonte sem serifa.

Não há servidor próprio nem banco de dados. Os cadastros ficam no `localStorage` do navegador, na chave `cadastros`.

## Como executar

É preciso ter [Node.js](https://nodejs.org/) instalado.

Na pasta `projeto-ong-animais-react`:

```bash
npm install
npm run dev
```

O Vite mostra um endereço local, em geral `http://127.0.0.1:5173/`. Abra esse endereço no navegador.

Outros comandos:

```bash
npm run lint
npm run build
npm run preview
```

`lint` confere o código. `build` gera a pasta `dist`. `preview` serve essa pasta, para ver o site como ficaria publicado.

## Como testar

### Navegação

1. Abra `/`. Confira o título da aba: "Projeto Patas de Rua".
2. Use o menu, o rodapé e os botões "Quero ajudar", "Nossos projetos" e "Fazer meu cadastro".
3. Em `/projetos`, o título passa a "Projetos | Projeto Patas de Rua".
4. Em `/cadastro`, o título passa a "Cadastro | Projeto Patas de Rua".
5. Digite um endereço que não existe, por exemplo `/teste`. A página deve avisar que o endereço não foi encontrado e oferecer "Voltar ao início".
6. Role até o rodapé e clique em um link. A página nova deve abrir no topo.
7. Reduza a janela até o menu de três barras aparecer. Abra o menu, troque de página e confira se ele fecha.

### Formulário

O envio só acontece quando os campos obrigatórios passam na verificação. O navegador mostra um balão ao lado do campo com problema. A mensagem de sucesso só aparece depois de um envio aceito.

Experimente estes casos:

- Nome vazio, ou só com espaços: "Informe o nome completo."
- Telefone fora de `(11) 90000-0000`, ou sem o 9 depois do DDD: "Informe o telefone no formato (21) 90000-0000."
- E-mail sem `@` e sem domínio, por exemplo `ana@`: "Informe um e-mail válido, como nome@email.com."
- CPF sem a máscara `000.000.000-00`: "Informe o CPF no formato 000.000.000-00."
- CPF com a máscara certa e dígitos finais errados, como `111.111.111-11`: "Informe um CPF válido."
- Interesse sem opção escolhida: o navegador impede o envio.
- A mensagem é opcional.

Um envio válido pode usar, por exemplo:

- Nome: Ana Souza
- Telefone: `(11) 90000-0000`
- E-mail: `ana@email.com`
- CPF: `529.982.247-25`
- Interesse: Adoção

Depois do envio, deve aparecer: "Cadastro enviado. Entramos em contato em até 3 dias úteis." Se a pessoa alterar um campo em seguida, essa frase some. Um novo envio só a mostra de novo se os dados passarem outra vez.

Para ver o que foi gravado, abra as ferramentas do navegador, em Application (ou Armazenamento), e procure `cadastros` em Local Storage. Cada envio entra no final da lista. Um segundo envio não apaga o anterior.

Se o navegador recusar a gravação, o formulário mostra: "Não foi possível guardar o cadastro neste navegador. Tente novamente."

## Organização do código

```text
  src/
    main.tsx                 liga o React à div #root e ao endereço do navegador
    App.tsx                  declara as rotas
    styles/global.css        cores, fontes e reset
    pages/                   Início, Projetos, Cadastro e página não encontrada
    components/              cada seção da interface, com o próprio CSS Module
    validacao/cadastro.ts    regras de nome, telefone, e-mail e CPF
    armazenamento/cadastros.ts   leitura e gravação no localStorage
```

A tela, a validação e o armazenamento ficam em arquivos separados.

- `src/validacao/cadastro.ts` recebe o texto digitado e devolve uma mensagem. Mensagem vazia significa que o valor passou. Esse arquivo não desenha a tela e não grava dados.
- `src/armazenamento/cadastros.ts` lê e grava a lista `cadastros`. `lerCadastros` transforma o texto salvo de volta em uma lista. `salvarCadastro` acrescenta um cadastro e grava a lista de novo como texto. Esse arquivo não conhece os campos do formulário.
- `FormularioCadastro` monta os campos e a máscara. Ele pede a mensagem de validação e, no envio aceito, entrega os dados para `salvarCadastro`.

O formulário importa a validação e o armazenamento. Esses dois módulos não importam o formulário e não importam um ao outro.

## O que o protótipo não faz

Não envia o cadastro para um servidor, não cria conta e não filtra a lista de projetos. Os números, os textos e os contatos são fictícios.
