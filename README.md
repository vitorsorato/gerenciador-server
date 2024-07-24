# Gerenciador de Projetos e Atividades

Este projeto é um sistema para gerenciar projetos e atividades, com o backend desenvolvido em Node.js, TypeScript e Prisma ORM, e o frontend em React, Next.js e Tailwind CSS.

## Tecnologias

- **Backend**: Node.js, Express, TypeScript, Prisma ORM
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Testes**: Supertest
- **Banco de Dados**: PostgreSQL via Supabase

## Pré-requisitos

### Backend

| Ferramenta  | Versão Requerida |
|-------------|------------------|
| Node.js     | v18.20.2         |
| npm         | 10.5.0          |

### Frontend

| Ferramenta  | Versão Requerida |
|-------------|------------------|
| Node.js     | v18.20.2         |
| pnpm        | 8.10.2           |

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
