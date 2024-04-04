# Livraria Node API Rest Express e MongoDB

Fiz esse projeto nos meus estudos de Node.js para criação de uma API Rest, aqui temos basicamente um CRUD de uma livraria e seus autores.

## Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Executando os Testes](#executando-os-testes)
- [Desenvolvimento](#desenvolvimento)
- [Construído Com](#construído-com)
- [Contribuição](#contribuição)
- [Versão](#versão)
- [Autores](#autores)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)

## Introdução

Durante minhas primeiras férias comecei a estudar a finco o NODE.js, linguagem que uso muito no meu trabalho atual (no ínicio de 2024), e durante meu processo de formação na ALURA há esse projeto que é esse CRUD

## Pré-requisitos

Para esse projeto funcionar, precisamos ter node.js na máquina local, um banco mongoDB, aqui utilizei uma conexão na gratuita na nuvem no Atlas, e adicionei a string de conexão em um arquivo local .env

## Instalação

Para esse projeto rodar é bem simples, clonamos o repositorio e instalamos os dados do package

```bash
clone https://github.com/MarcusPinheiro37/nodejs-api-express-mongo.git
npm install
```
Após isso, pegamos nossa string de conexão e colocamos em um arquivo .env, com o nome padrão DB_CONNECTION_STRING.

## Uso

Para rodarmos o projeto, usamos um dos runs que temos

```bash
npm run dev
```
Para vermos uma documentação bem detalhada, podemos acessar o localhost:3000/documentacao.
Um atento, caso queira mudar a porta, recomendo adicionar a variável PORT=<portadesejada> para que a documentação continue funcionando

## Construído Com

- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript
- [Express](https://expressjs.com/) - Framework para aplicativo da web para Node.js
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL
- [Swagger-editor](https://github.com/swagger-api/swagger-editor/) - Framework para Documentação

## Autores

- **Marcus** - *Estudos* - [GitHub](https://github.com/MarcusPinheiro37)

## Agradecimentos

- Agradecimentos ao Jake por esquentar meu pé enquanto dormia em cima dele
