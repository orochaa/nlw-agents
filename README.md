# NLW Agents

![NLW Agents](./.github/assets/cover.webp)

Projeto desenvolvido durante o evento **NLW Agents** da [Rocketseat](https://rocketseat.com.br), focado na criação de uma aplicação web com agentes inteligentes.

## 🚀 Sobre o Projeto

A aplicação permite a criação de "salas de aula" onde é possível gravar o conteúdo de uma aula em áudio. Esse áudio é transcrito e utilizado como contexto para que os usuários possam fazer perguntas e obter respostas geradas por uma inteligência artificial.

## ✨ Funcionalidades Principais

- **Criação de Salas:** Usuários podem criar salas com um título específico.
- **Gravação de Áudio:** É possível gravar o conteúdo da aula diretamente pelo navegador.
- **Transcrição de Áudio:** O áudio gravado é enviado para o backend, transcrito e armazenado.
- **Perguntas e Respostas com IA:** Os usuários podem fazer perguntas dentro de uma sala, e uma IA responde com base no conteúdo da aula transcrito.
- **Listagem de Salas e Perguntas:** A interface exibe a lista de salas disponíveis e o histórico de perguntas e respostas de cada sala.

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js** com TypeScript
- **Fastify**
- **PostgreSQL** com **pgvector**
- **Drizzle ORM**
- **Zod**
- **Docker**

### Frontend

- **React** com TypeScript
- **Vite**
- **TailwindCSS**
- **Radix UI** e **Shadcn/ui**
- **React Query**

## ⚙️ Como Executar

### Pré-requisitos

- Node.js
- Docker e Docker Compose
- pnpm (ou outro gerenciador de pacotes)

### Backend

1.  Navegue até a pasta `backend`:
    ```bash
    cd backend
    ```
2.  Instale as dependências:
    ```bash
    pnpm install
    ```
3.  Inicie o container do banco de dados:
    ```bash
    docker-compose up -d
    ```
4.  Crie um arquivo `.env` a partir do `.env.example` e preencha as variáveis de ambiente.
5.  Execute as migrações do banco de dados:
    ```bash
    pnpm drizzle-kit migrate
    ```
6.  Inicie o servidor de desenvolvimento:
    ```bash
    pnpm run dev
    ```

### Frontend

1.  Navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```
2.  Instale as dependências:
    ```bash
    pnpm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    pnpm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.

---

Desenvolvido com ❤️ durante o NLW da Rocketseat.
