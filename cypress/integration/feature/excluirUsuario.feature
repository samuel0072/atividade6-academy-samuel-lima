Feature: Excluir Usuário

    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Scenario Outline: Excluir usuário existente
        Given acessei a página inicial
        And existem usuários cadastrados
        When aperto no botão de excluir o usuario com email "<email>"
        And aperto em confirmar exclusão
        Then vejo a mensagem de sucesso "Usuário removido!" 

        #os emails abaixo são do arquivo fixture/usuarios.json
        Examples:
            | email              | 
            | joana@joana.com    | 
            | tchau@tchau.com    | 
            | babalu@ko.com      | 
            | 1989@tv.com        | 
            | 123@123.com        | 
            | oitudobem@ola.com  | 