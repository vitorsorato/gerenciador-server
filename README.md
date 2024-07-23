# Extrator-Server

## Descrição

O projeto **server** é um servidor para extração de dados, requisições e módulos. Ele é construído utilizando TypeScript e bibliotecas para auxiliar o desenvolvimento, testes e deploy dq aplicação web.

## Tecnologias Utilizadas

### Linguagens e Frameworks

- **TypeScript**: Linguagem de programação que é um superconjunto do JavaScript, oferecendo tipagem estática opcional e outros recursos avançados.
- **Express**: Framework web rápido e minimalista para Node.js, utilizado para criar o servidor HTTP e gerenciar as rotas.

### Ferramentas de Desenvolvimento

- **ts-node**: Permite executar código TypeScript diretamente no Node.js, sem precisar transpilar para JavaScript.
- **nodemon**: Ferramenta que reinicia automaticamente a aplicação quando mudanças nos arquivos são detectadas, facilitando o desenvolvimento.
- **typescript**: Compilador TypeScript utilizado para converter o código TypeScript em JavaScript.
- **jest**: Framework de testes em JavaScript com foco em simplicidade, que permite escrever e executar testes.
- **ts-jest**: Permite utilizar o Jest em projetos TypeScript, facilitando a configuração e execução dos testes.

### Banco de Dados

- **Prisma**: ORM (Object-Relational Mapping) moderno e tipo seguro para Node.js e TypeScript, utilizado para facilitar a interação com o banco de dados.
- **@prisma/client**: Cliente Prisma gerado automaticamente a partir do esquema do banco de dados, utilizado para realizar consultas e operações no banco de dados.

### Dependências de Produção

- **axios**: Cliente HTTP baseado em Promises para o Node.js e navegador, utilizado para fazer requisições HTTP.
- **body-parser**: Middleware do Node.js que analisa o corpo das requisições HTTP, facilitando o acesso aos dados enviados pelo cliente.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing) em aplicativos Express.
- **https**: Módulo nativo do Node.js para criar servidores e clientes HTTPS.
- **node-fetch**: Biblioteca para fazer requisições HTTP, similar ao fetch do navegador.
- **pdf-parse**: Biblioteca para extração de texto e metadados de arquivos PDF.

### Scripts

- **start**: Inicia a aplicação utilizando ts-node para executar o arquivo `app.ts`.
- **dev**: Inicia a aplicação em modo de desenvolvimento utilizando nodemon para monitorar alterações no código.
- **test**: Executa os testes utilizando Jest.
- **build**: Gera o cliente Prisma e transpila o código TypeScript para JavaScript.
- **postinstall**: Script executado após a instalação das dependências, gera o cliente Prisma.

## Autor

- **Vitor Sorato Bez Fontana**