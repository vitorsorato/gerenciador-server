# Gerenciador de Projetos e Atividades

Este projeto é um sistema para gerenciar projetos e atividades, com o backend desenvolvido em Node.js, TypeScript e Prisma ORM, e o frontend em React, Next.js e Tailwind.

![Tela Inicial](https://github.com/vitorsorato/gerenciador-web/blob/master/gerenciador_inicio.gif)


## Tecnologias

- **Backend**: Node.js, Express, TypeScript, Prisma ORM, Express
- **Frontend**: React, Next.js, TypeScript, Tailwind
- **Deploy**: Docker, Git, Railway, Vercel, Supabase (Postgres)
- **Testes**: Supertest
- **Banco de Dados**: PostgreSQL via Supabase

## Pré-requisitos

### Backend

| Ferramenta  | Versão Requerida |
|-------------|------------------|
| Node.js     | v18.20.2         |
| npm         | 10.5.0          |
| Prisma      | 4.10.1          |
| TypeScript      | 4.9.5          |

### Frontend

| Ferramenta  | Versão Requerida |
|-------------|------------------|
| Node.js     | v18.20.2         |
| pnpm        | 8.10.2           |
| React        | 18.2.0           |
| Next.js        | 14.2.0        |
| Tailwind        | 3.3.3        |

### Deploy
  - Docker: Para empacotar e isolar a aplicação.
  - Git: Para controle de versão do código.
  - Railway: Para deploy e gerenciamento do backend em Node.js com TypeScript.
  - Vercel: Para deploy e hospedagem do frontend em React com Next.js.
  - Supabase: Para banco de dados e funcionalidades de backend utilizando Postgres.

## Configuração

### Backend

1. Instale as dependências:
   `npm install`

2. Execute as migrações do Prisma:
   `npx prisma migrate dev`

3. Inicie o servidor:
   `npm run dev`

4. Para rodar os testes:
   `npm test`

### Frontend

1. Instale as dependências:
   `pnpm install`

2. Inicie o servidor de desenvolvimento:
   `pnpm dev`

## Rotas do Backend

### Projetos

- `GET /projects`: Lista todos os projetos
- `POST /projects`: Cria um novo projeto
- `PUT /projects/:id`: Atualiza um projeto existente
- `DELETE /projects/:id`: Deleta um projeto

### Atividades

- `GET /activities/:projectId`: Lista todas as atividades de um projeto
- `POST /activities`: Cria uma nova atividade
- `PUT /activities/:id`: Atualiza uma atividade existente
- `DELETE /activities/:id`: Deleta uma atividade

## Testes

Os testes do backend, realizados com Supertest, cobrem as seguintes operações:

- **Projetos**
  - Criar Projeto: Testa a criação de um novo projeto.
  - Listar Projetos: Testa a listagem de todos os projetos.
  - Atualizar Projeto: Testa a atualização de um projeto existente.
  - Deletar Projeto: Testa a exclusão de um projeto.

- **Atividades**
  - Criar Atividade: Testa a criação de uma nova atividade.
  - Listar Atividades: Testa a listagem de todas as atividades para um projeto específico.
  - Atualizar Atividade: Testa a atualização de uma atividade existente.
  - Deletar Atividade: Testa a exclusão de uma atividade.

Este projeto foi desenvolvido para demonstrar habilidades em backend e frontend, além de incluir testes automatizados. O código segue boas práticas de desenvolvimento e está documentado para facilitar a compreensão e a manutenção.

[Visite o Gerenciador](https://gerenciador-web.vercel.app/projetos)