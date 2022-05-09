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

    # testa a paginação
    Scenario: Ir para a próxima página da lista de usuários
        Given existem usuários cadastrados para mais de uma página de resultados
        And não estou na última página
        When clico no botão de próxima página
        Then estou na página seguinte de resultados

    Scenario: Ir para a última página da lista de usuários
        Given existem usuários cadastrados para mais de uma página de resultados
        And estou na penultima página
        When clico no botão de próxima página
        Then estou na página seguinte de resultados
        And o botão de próxima página esta desabilitado
