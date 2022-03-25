Configurações

- npm init -y
- npm install mysql2 - mais rápido e tem suporte a promises permite uso de funcionalidades mais modernas do JS e node.js

Foi criado um CRUD HTML CSS JS no qual pudesse manipular informações de clientes em uma tabela , porém as informações se perdiam ao atualizar a página, necessitando a criação de um Banco de dados (MySQL) aonde eu pudesse armazenar as informações de cada cliente, e uma API aonde pudesse fazer a conexão com o Banco de dados e realizar as requisições (retorno) dos dados para o Front-end (html) , e dessa forma manipular os dados, criando novos cadastros (CREATE) , listando os dados cadastrados na tabela (READ) , atualizando os dados (UPDATE) e excluindo dados (DELETE).

A conexão com o Banco de dados foi feita através do Node.js, a construção da API com Express, e foi configurado o CORS para liberação dos recursos da API.

-O CORS (Cross-origin Resource Sharing) é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. O CORS é uma especificação do W3C e faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.