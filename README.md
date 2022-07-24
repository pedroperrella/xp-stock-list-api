# Stock List API

API CRUD desenvolvida em Node.js, com Express, MySQL e Sequelize, que conecta informações de ações disponíveis na corretora e contas de clientes que negociam as ações e movimentam a conta.

## Instalação

1. Clone o projeto
  `git clone git@github.com:pedroperrella/xp-stock-list-api.git`
  
2. Acesse projeto
  `cd xp-stock-list-api.git`
  
## Execução
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
  
 ## Explicação
 Nesse projeto eu utilizei o ORM Sequelize para trabalhar com o banco de dados MySql e foram criados 3 tabelas:
  * **Clients**: Possui 3 colunas (clientId, fullName, balance: saldo disponível na conta)
  * **Assets**: Possui 4 colunas (assetId, name, amount: qauntidade da ação disponível na corretora, value: valor da ação)
  * **Investments**: Possui 3 colunas (clientId, assetId, amount: quantidade da ação que o cliente possui)
  
A API retorna todos os endpoints indicados no desafio e faz as devidas validações.

## Considerações Finais
Esse projeto foi muito desafiador para mim, como eu ainda divido o meu tempo entre trabalho e o curso da Trybe, então acabei não conseguindo entregar com os requisitos adicionais.

Gostei muito de desenvolver esse projeto e pretendo continuar desenvolvendo, melhorando e criando novas funcionalidades que faltam e ter esse projeto no meu portfolio. 


##### O que ainda falta ser desenvolvido:
- [ ] Testes
- [ ] Autenticação
- [ ] Lint
- [ ] Deploy da aplicação
- [ ] Documentação

