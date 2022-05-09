Feature: Listar Usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: Visualizar lista de usuários na página inicial
        Given existem usuários cadastrados
        When acesso o CRUD Front-end
        Then vejo a página inicial 
        And vejo os dados dos usuários 
    
    Scenario:  Visualizar página inicial sem usuários
        Given não existem usuários cadastrados
        When acesso o CRUD Front-end
        Then vejo a mensagem "Ops! Não existe nenhum usuário para ser exibido."
        And vejo uma opção para cadastrar um novo usuário com o texto "Cadastre um novo usuário"