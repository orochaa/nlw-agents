# Backend - NLW Agents

Este é o backend do projeto NLW Agents, uma API RESTful responsável por gerenciar as salas, o upload e transcrição de áudios, e a interação com a IA para responder perguntas.

## 🚀 Tecnologias

- **Node.js** com TypeScript
- **Fastify** - Framework web rápido e de baixo overhead
- **PostgreSQL** com extensão **pgvector** para operações com vetores
- **Drizzle ORM** - ORM type-safe para interações com o banco de dados
- **Zod** - Validação de schemas e tipos
- **Docker** - Para containerização do ambiente de banco de dados

## 🌐 Endpoints da API

- `POST /rooms`: Cria uma nova sala.
- `GET /rooms`: Lista todas as salas disponíveis.
- `POST /rooms/:roomId/audio`: Faz o upload de um áudio para uma sala específica, que é então transcrito.
- `POST /rooms/:roomId/questions`: Cria uma nova pergunta em uma sala, que será respondida pela IA.
- `GET /rooms/:roomId/questions`: Lista todas as perguntas e respostas de uma sala.

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js
- Docker e Docker Compose
- pnpm (ou outro gerenciador de pacotes)

### Passos

1.  Instale as dependências:
    ```bash
    pnpm install
    ```
2.  Inicie o container do banco de dados:
    ```bash
    docker-compose up -d
    ```
3.  Crie um arquivo `.env` a partir do `.env.example` e preencha as variáveis de ambiente, incluindo a `DATABASE_URL`.
4.  Execute as migrações do banco de dados:
    ```bash
    pnpm drizzle-kit migrate
    ```
5.  (Opcional) Popule o banco com dados de exemplo:
    ```bash
    pnpm run db:seed
    ```
6.  Inicie o servidor em modo de desenvolvimento:
    ```bash
    pnpm run dev
    ```

O servidor estará rodando em `http://localhost:3333`.

---

Desenvolvido com ❤️ durante o NLW da Rocketseat.
