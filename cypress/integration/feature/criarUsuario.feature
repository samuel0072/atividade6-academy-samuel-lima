Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Scenario: 
        Given acessei a pagina de novo usuário
        When preencho o formulário com informações corretas
        | nome  | California King Bed |
        | email | loud@rihanna.com    |
        And envio o formulário
        Then vejo a mensagem "Usuário salvo com sucesso!"