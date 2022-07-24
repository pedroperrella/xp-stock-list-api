# Stock List API

API CRUD desenvolvida em Node.js, com Express, MySQL e Sequelize, que conecta informações de ações disponíveis na corretora e contas de clientes que negociam as ações e movimentam a conta.

## Instalando o projeto

1. Clone o projeto
  `git clone git@github.com:pedroperrella/xp-stock-list-api.git`
  
2. Acesse projeto
  `cd xp-stock-list-api.git`
  
## Exercutando o projeto
### Com Docker
1. Crie o arquivo `.env`, copie as váriaveis do arquivo `.env.example` e coloque suas váriaveis de ambiente local

2. Execute o comando `docker-compose up -d --build` 
  
3. Acesse o terminal do Docker
  `docker exec -it stock-list bash`
  
4. Rode o servidor
`node server.js` ou `npm start` 
### Sem Docker
1. Crie o arquivo `.env`, copie as váriaveis do arquivo `.env.example` e coloque suas váriaveis de ambiente local
 
2. Instale as dependências
  npm install
 
3. Rode o servidor
  `node server.js` ou `npm start`
