# Teste técnico Minutrade apiTicketUser
A estratégia utilizada para o desenvolvimento desta aplicação foi criar uma API utilizando Node.js e MongoDB, apesar de não serem tecnologias que possuo maior domínio, optei por esse caminho para superar o desafio em absorver o conhecimento das duas tecnologias dentro do prazo estipulado para o teste e também seguindo uma indicação do Lucas para esta opção de desenvolvimento.

#Instruções para testar

##Download e Instalação NodeJS e MongoDB

https://nodejs.org 

https://www.mongodb.com/

##Clone ou baixe o repositório

git clone https://lucasbrandaobh@bitbucket.org/lucasbrandaobh/apiticketuser.git

https://bitbucket.org/lucasbrandaobh/apiticketuser

##Acesse o diretório do projeto

No bash/prompt de comando, acesse o diretorio local da aplição e execute o comando "npm install" para que a instação das dependências do projeto sejam baixadas.

Edite o arquivo 'server.js', adicionando a URL do seu mongodb na 'var db'.

##Iniciar Servidor

Inicie o servidor HTTP executando o comando "node server.js".

ou

Para rodar os testes execute o comando "npm run cover".

##Com POSTMAN ou outra ferramenta de http requests execute as rotas abaixo: **

##Rota (post/users) http://localhost:3000/users

- Parâmetros body requisição=> { "name": "Lary Page", "email": "lary@gmail.com", "cardId": "9999222", "password": "987654" }

- Validação => Caso um novo usuário seja inserido com "email" já cadastrado a mensagem abaixo será exibida:
"E-mail já existente"


##Rota (post/login) http://localhost:3000/login

- Parâmetros body requisição => { "username": "lary@gmail.com", "password": "987654" }

- Retorno => token de segurança para autenticação na rota (port/debit)


##Rota (post/debits) http://localhost:3000/debits

- Parâmetros headers requisição => key : x*access-token, value : 'numero do token gerado na rota (post/login)'

- Parâmetros body requisição => 
[
    {"cardId": "9999222", "code": "2101", "value": "3.1", "debitedAt" : "2017-11-02"},
    {"cardId": "9999222", "code": "3455", "value": "4.0", "debitedAt" : "2017-11-03"},
    {"cardId": "9999221", "code": "5600", "value": "5.0", "debitedAt" : "2017-11-04"}
]


##Rota (get/debits) http://localhost:3000/debits

- Parâmetros querystring requisição => 

http://localhost:3000/debits?cardId=9999222

http://localhost:3000/debits?initialDate='2017-11-01'&finalDate='2017-11-03'

- Retorno => array de débitos do usuário conforme filtro aplicado.


## Testes de integração
Foram criados testes da aplicação testando os possíveis retornos das requisições HTTP que foram implementados.
Ressalto a importância de ter criado mocks das dependências externas da aplicação o que não foi abordado por mim nessa teste devido ao curto prazo de implementação.


## Módulos

* [Express] - Web Framework.
* [Mocha] - Test Runner para Node.js.
* [Chai] - Interface BDD e TDD para implementação de testes.
* [bcrypt-nodejs] - utilizado para encriptar as senhas do usuário salvas no banco.
* [body-parser] - Utilizado para parsear requisições, permite o uso urls complexas.
* [mongoose] - ORM para integração com mongoDb. (O uso do drive do mongoclient teria sido uma melhor estratégia devido ao desempenho inferior do mongoose em relação ao drive nativo).
* [jwt-simple] - Utilizado para gerar e conferir o JSON Web Token.
* [moment] - Utilizado para formatação e manipulação de datas.
* [request] - Utilizado para realizar requisições http nos testes de integração.
* [instanbul] - Code coverage, utilizado para mostrar metricas de cobertura de teste.
