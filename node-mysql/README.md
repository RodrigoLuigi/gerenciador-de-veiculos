# <h1 id="top" align="center">Gerenciador de Veículos - API &nbsp; 🚗</h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#gear-features">Features</a> &#xa0; | &#xa0;
  <a href="#-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <a href="https://github.com/RodrigoLuigi" target="_blank">Author</a>
</p>

<br>

## <img id="sobre" src="https://imgur.com/VhTBbHg.png" alt="imagem de um notebook" align="center" width="30px"> _**O que desenvolvemos neste Projeto?**_

_**obs. precisa ser refatorado! aplicar padrões de projeto mvc, solid e clean-code**_

📌 Aplicação para manipulação de dados inseridos em uma tabela através de um formulário, foi utilizado Banco de dados MySQL para armazenar informações de cada veiculo, e uma API para realizar requisições (HTTP) para o Front-end (html) , e dessa forma manipular os dados, criando novos cadastros (CREATE) , listando os dados cadastrados na tabela (READ) , atualizando os dados (UPDATE) e excluindo dados (DELETE).

A conexão com o Banco de dados foi feita através do Node.js, a construção da API com Express, e foi configurado o CORS para liberação dos recursos da API.

Desenvolvido utilizando **Node.js**, **Express.js** e criação do banco de dados utilizando **MySQL**.

## :gear: Features

:heavy_check_mark: Cadastro de permissão de usuário\
:heavy_check_mark: Cadastro de veículo\
:heavy_check_mark: Deletar veículo\
:heavy_check_mark: Editar veículo\
:heavy_check_mark: Listar veículos\
:heavy_check_mark: Listar veículo pelo id\

## 👨‍💻 Tecnologias

As seguintes ferramentas foram usadas neste projeto:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.w3schools.com/js/default.asp)

## :books: Bibliotecas

_**As seguintes bibliotecas foram utilizadas neste projeto:**_

- [Express](https://expressjs.com/pt-br/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## 📝 Requisitos

- [Git](https://git-scm.com)
- [npm](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/)
- [MySQL](https://dev.mysql.com/doc/)

## :checkered_flag: Iniciando

```bash
# Clone este projeto
$ git clone https://github.com/RodrigoLuigi/gerenciador-de-veiculos

# Acesse o projeto
$ cd gerenciador-de-veiculos/node-mysql

# Instale as dependências
$ npm install

# Inicializando projeto
$ npm start

# Inicializando projeto modo Desenvolvimento
$ npm run dev

# O Server irá inicializar em:
http://localhost:3333

# Realizar teste de end-points unitários
$ mocha getVehicles.test.js

# Realizar teste de todos os end-points
$ mocha testeGeral.test.js
```

## 🔗 Rotas

<div style="display: flex">

```bash
# [POST] Cadastrar veículo
/veiculos

# [GET] Listar veículos
/veiculos

# [GET] Listar veículo pelo id
/veiculos/:id

# [PUT] Atualizar dados do veículo
/veiculos/:id

# [DELETE] Deletar veículo
/veiculos/:id
```

</div>

&#xa0;

_**Feito por <a href="https://github.com/RodrigoLuigi" target="_blank">Rodrigo Luigi</a>**_ 👨‍🚀

<a href="#top">Back to top</a>