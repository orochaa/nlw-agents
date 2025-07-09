# Frontend - NLW Agents

Este é o frontend do projeto NLW Agents, uma interface web construída com React para interagir com o backend. A aplicação permite que os usuários criem salas, gravem áudios de aulas e façam perguntas que são respondidas por uma IA.

## 🚀 Tecnologias

- **React** com TypeScript
- **Vite** - Ferramenta de build e servidor de desenvolvimento
- **TailwindCSS** - Framework CSS utility-first para estilização
- **Radix UI** e **Shadcn/ui** - Para componentes de UI acessíveis e bem estruturados
- **React Query** - Para gerenciamento de estado do servidor e caching de dados
- **Lucide React** - Biblioteca de ícones

## ✨ Funcionalidades da Interface

- **Página Inicial:** Lista as salas existentes e permite a criação de novas.
- **Página de Criação de Sala:** Formulário para criar uma nova sala.
- **Página de Gravação:** Permite que o usuário grave o áudio da aula diretamente no navegador.
- **Página da Sala:** Exibe o título da sala, a lista de perguntas e respostas, e um formulário para fazer novas perguntas.

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js
- pnpm (ou outro gerenciador de pacotes)
- O backend do projeto deve estar rodando na porta 3333.

### Passos

1.  Instale as dependências:
    ```bash
    pnpm install
    ```
2.  Inicie o servidor de desenvolvimento:
    ```bash
    pnpm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.

---

Desenvolvido com ❤️ durante o NLW da Rocketseat.