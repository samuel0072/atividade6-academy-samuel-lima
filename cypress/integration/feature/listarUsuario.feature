Feature: Listar Usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: 
        Given existem usuários cadastrados
        When acesso o CRUD Front-end
        Then vejo a página inicial 
        And vejo os dados dos usuários 