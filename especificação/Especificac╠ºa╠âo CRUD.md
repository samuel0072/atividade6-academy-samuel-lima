![Logo Raro Academy](./images/logo.jpeg)

# Especificação C.R.U.D API 

## 1. Definições

- C. Create / Criar
- R. Read / Ler
- U. Update / Atualizar
- D. Delete / Remover

O propósito da aplicação ``C.R.U.D`` é ser um sistema que permite o gerenciamento de dados de usuário seguindo o conceito de CRUD. 

O sistema fornece as funcionalidades:

1. Criar um novo usuário;
2. Consultar as informações de um usuário cadastrado;
3. Atualizar as informações de um usuário cadastrado;
4. Remover as informações de um usuário cadastrado;
5. Pesquisar um usuário por nome ou e-mail.

Informações detalhadas sobre o contrato da API podem ser consultados em: [Documentação Swagger C.R.U.D API ](https://crud-api-academy.herokuapp.com/api-docs/).

## 2. *Users stories* e critérios de aceite utilizados

### 2.1. Listar usuários

| *User story* | Critérios de aceite |
| -----------  | ------------------- |
| **Como** uma pessoa qualquer<br>**Desejo** consultar todos os usuários cadastrados<br>**Para** ter as informações de todos os usuários | 1. Todos as informações de usuários cadastrados devem ser fornecidas após a consulta. |
| - | 2. Caso não existam usuários cadastrados, deve existir uma opção para cadastrar um usuário. |

### 2.2. Criar usuário

| *User story* | Critérios de aceite |
| -----------  | ------------------- |
| **Como** uma pessoa qualquer<br>**Desejo** registrar informações de usuário<br>**Para** poder manipular estas informações livremente | 1. As informações necessárias para cadastrar um usuário são: ``nome`` e `email`. |
| - | 2. O formato aceito de e-mail segue o padrão `nomeUtilizador@dominio`.<br>Exemplo: ``nome@email.com``.<br>Se o e-mail informado possuir um formato inválido, a operação de registro deverá ser cancelada. |
| - | 3. Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário. |
| - | 4. Se houver a tentativa de cadastrar um usuário com e-mail já existente, o processo deverá ser bloqueado com a mensagem: ``User already exists.`` | 
| - | 5. Não deve ser possível cadastrar um nome com mais de 100 caracteres. |
| - | 6. Não deve ser possível cadastrar um e-mail com mais de 60 caracteres. | 

### 2.3. Encontrar um usuário

| *User story* | Critérios de aceite |
| -----------  | ------------------- |
| **Como** uma pessoa qualquer<br>**Desejo** consultar os dados de um usuário<br>**Para** visualizar as informações deste usuário | 1. O usuário deve ser localizado através de seu identificador único; |
| - | 2. Se o usuário não puder ser localizado pelo identificador, o serviço deve retornar um indicador de que o usuário não foi localizado.

### 2.4. Atualizar um usuário
| *User story* | Critérios de aceite |
| -----------  | ------------------- |
**Como** uma pessoa qualquer<br>**Desejo** atualizar as informações de determinado usuário<br>**Para** ter o registro de suas informações atualizadas | 1. O usuário deve ser localizado através de seu identificador único. |
| - | 2. Caso nenhum usuário seja localizado pelo identificador único, a atualização não deve ser realizada. |
| - | 3. As informações necessárias para atualizar um usuário são: ``nome`` e `email`. |
| - | 4. O formato aceito de e-mail segue o padrão `nomeUtilizador@dominio`.<br>Exemplo: ``nome@email.com``.<br>Se o e-mail informado possuir um formato inválido, a operação de atualização deverá ser cancelada. |
| - | 5. Não deve ser possível atualizar o e-mail de um usuário para um e-mail que já está em uso por **outro** usuário registrado. |
| - | 6. Se houver a tentativa de atualizar um usuário para tenha um e-mail que já está em uso por **outro** usuário registrado, o processo deverá ser bloqueado com a mensagem: ``E-mail already in use.`` | 
| - | 7. Não deve ser possível atualizar o nome para que tenha mais de 100 caracteres. |
| - | 8. Não deve ser possível atualizar o e-mail para que tenha mais de 60 caracteres. | 

### 2.5. Remover um usuário
| *User story* | Critérios de aceite |
| -----------  | ------------------- |
| **Como** uma pessoa qualquer<br>**Desejo** remover um usuário<br>**Para** que suas informações não estejam mais registradas |  1. O usuário a ser removido deve ser localizado através de seu identificador único. |
| - | 2. Se um usuário não for localizado pelo identificador informado, o sistema deverá se comportar como se houvesse removido as informações do usuário. |

### 2.6. Pesquisar usuário
| *User story* | Critérios de aceite |
| -----------  | ------------------- |
| **Como** uma pessoa qualquer<br>**Desejo** pesquisar usuário por nome ou e-mail<br>**Para** ser capaz de encontrar um usuário cadastrado facilmente | 1. Um texto deve ser informado para que a pesquisa seja realizada. |
| - | 2. Devem ser apresentados para o cliente todas as informações dos usuários que possuem em seu ``nome`` ou ``email`` o conteúdo pesquisado. | 
