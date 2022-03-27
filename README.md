CONFIGURAÇÔES

<li> Instalar todas as dependencias indicada pelo package.json

### npm install 

<li> Instalação nodemon global

### npm install nodemon -g

<li> Instalação nodemon local

### npm install nodemon --save--dev

<li>Rodar o projeto com nodemon

### nodemon index.js
#
CONFIGURAÇÕES PARA O DESENVOLVIMENTO

 <li>Criar o arquivo package.json

### npm init -y 

<li> Instalação Express. Gerencia as requisições, rotas e URLS, entre outras funcionalidades

### npm install express

<li> Instalação Drive do banco de dados MySql, rápido e tem suporte a promises permite uso de funcionalidades mais modernas do JS e node.js

### npm install --save mysql2
# 
CONFIGURAÇÔES DO MOCHA

<li> Instalação Mocha.js & Chai.js global

### npm install -g mocha 

<li> Instalação Mocha.js & Chai.js local

### npm install mocha --save--dev
#
 Para executar os testes basta acessar pelo terminal a pasta de classes de teste ..\test\classTest\ ...  , e acessar a pasta do teste a ser realizado 

ex. ..\test\classTest\metodoGet e executar o comando no arquivo a ser testado.
### mocha getVehicles.test.js

Também pode-se executar um teste geral de todas as requisições, para isso , acessar pelo terminal o diretório ../test e executar o comando 

### mocha testeGeral.test.js

#
 Aplicação para manipulação de dados inseridos em uma tabela através de um formulário, foi utilizado Banco de dados MySQL para armazenar informações de cada veiculo, e uma API para realizar requisições (HTTP) para o Front-end (html) , e dessa forma manipular os dados, criando novos cadastros (CREATE) , listando os dados cadastrados na tabela (READ) , atualizando os dados (UPDATE) e excluindo dados (DELETE).

 A conexão com o Banco de dados foi feita através do Node.js, a construção da API com Express, e foi configurado o CORS para liberação dos recursos da API.

 ### npm install --save cors

-O CORS (Cross-origin Resource Sharing) é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. O CORS é uma especificação do W3C e faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.

