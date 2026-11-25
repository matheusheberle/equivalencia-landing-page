# EquivalencIA — Landing Page

Landing page do **EquivalencIA**, uma proposta de plataforma para facilitar a análise de equivalências acadêmicas por meio da comparação organizada de disciplinas e conteúdos curriculares.

🔗 **Aplicação publicada:** [equivalencia-landing-page.netlify.app](https://equivalencia-landing-page.netlify.app/)  
📦 **Repositório:** [github.com/matheusheberle/equivalencia-landing-page](https://github.com/matheusheberle/equivalencia-landing-page)

## Sobre o EquivalencIA

O EquivalencIA apresenta a ideia de tornar mais clara e prática a análise de equivalências entre cursos e instituições de ensino. A landing page comunica essa proposta a estudantes e profissionais da área acadêmica e oferece um canal de contato para dúvidas.

## Objetivo deste projeto

Apresentar a proposta do EquivalencIA em uma página responsiva, explicar seus benefícios e permitir que visitantes enviem mensagens pelo formulário de contato. O escopo deste repositório é a landing page: os planos, chamadas de cadastro e login são apresentados visualmente e não estão conectados a um sistema de análise, autenticação ou pagamento.

## Funcionalidades implementadas

- Página institucional com seções de apresentação, soluções, depoimentos, planos e contato.
- Navegação por âncoras e menu adaptado para dispositivos móveis.
- Carrossel visual de depoimentos com animação contínua.
- Formulário de contato com validação dos campos obrigatórios, estado de envio e mensagens de sucesso ou erro.
- Envio de mensagens por uma Netlify Function, com validação dos dados e encaminhamento por SMTP.

## Tecnologias

- **React** e **React DOM** para a interface.
- **TypeScript** para tipagem do código.
- **Vite** para desenvolvimento e geração do build.
- **CSS** para os estilos da página.
- **Netlify Functions** para a função de contato.
- **Nodemailer** para envio de e-mail via SMTP.
- **ESLint** para análise estática do código.

## Estrutura do projeto

```text
.
├── netlify/
│   └── functions/
│       └── send-email.ts       # Função serverless de envio de contato
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── icons/              # Ícones SVG usados na interface
│   │   └── images/             # Imagens da página e perfis dos depoimentos
│   ├── components/             # Header, Footer, Contact, Card, Button e depoimentos
│   ├── styles/                 # Folhas de estilo por seção e estilos compartilhados
│   ├── Home.tsx                # Composição das seções da landing page
│   └── main.tsx                # Ponto de entrada React
├── netlify.toml                # Build, publicação, Functions e redirecionamento da API
├── index.html                  # Documento HTML principal
├── package.json                # Dependências e scripts npm
└── vite.config.ts              # Configuração do Vite
```

## Executar localmente

Pré-requisitos: Node.js e npm instalados.

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone https://github.com/matheusheberle/equivalencia-landing-page.git
   cd equivalencia-landing-page
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento da interface:

   ```bash
   npm run dev
   ```

   O Vite exibirá no terminal o endereço local para abrir no navegador.

Para testar também a função de contato localmente, use o Netlify CLI:

```bash
npx netlify dev
```

O envio de e-mail depende das variáveis de ambiente de SMTP descritas abaixo. Sem a configuração SMTP, a página pode ser visualizada, mas o envio do formulário não será concluído.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local do Vite. |
| `npm run build` | Executa a verificação TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente o build de produção. |
| `npm run lint` | Executa o ESLint. |

## Formulário de contato e Netlify Function

O componente `src/components/Contact.tsx` envia o e-mail e a mensagem em uma requisição `POST` para `/api/send-email`. Em `netlify.toml`, esse caminho é redirecionado para a função `netlify/functions/send-email.ts`.

A função valida o método HTTP, o JSON recebido, os campos obrigatórios e o formato do e-mail. Em seguida, usa o Nodemailer para enviar a mensagem via SMTP ao endereço de contato configurado. A resposta da função permite que o formulário mostre o resultado do envio.

Configure no ambiente local ou nas variáveis de ambiente do site na Netlify os seguintes nomes, sem incluí-los no código ou no repositório:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`
- `ALLOWED_ORIGIN` (opcional; usado para definir a origem permitida nas respostas CORS)

Mantenha credenciais e valores privados fora do Git. O arquivo `.env.example` pode servir como referência para a configuração local; não publique os valores de um arquivo `.env`.

## Deploy na Netlify

O arquivo `netlify.toml` define a configuração de build e publicação:

- **Comando de build:** `npm run build`
- **Diretório publicado:** `dist`
- **Diretório das Functions:** `netlify/functions`
- **Rota da API:** `/api/*` é encaminhada para as Netlify Functions correspondentes.

Para publicar, conecte o repositório à Netlify e mantenha essas configurações de build. Cadastre as variáveis de ambiente exigidas pelo envio de e-mail nas configurações do site antes de usar o formulário em produção. A Netlify executará o build e disponibilizará a função junto com a página.

## Contexto acadêmico

O EquivalencIA é uma proposta de projeto voltada ao contexto de equivalências acadêmicas. Este repositório documenta a landing page de apresentação da proposta; não identifica uma instituição de ensino, curso ou disciplina específicos.
