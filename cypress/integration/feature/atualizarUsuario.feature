Feature: Atualizar Usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar a tela de detalhes do usuário
        Given estou na tela de detalhes de um usuário

    Scenario Outline: Atualizar usuário com dados válidos
        When aperto em editar
        And preencho o formulário
        | nome  | <nome>  |
        | email | <email> |
        And aperto em salvar
        Then sou redirecionado para a tela inicial
        And vejo a mensagem de sucesso "Informações atualizadas com sucesso!"

        Examples:
            | nome                | email                                 |
            | chro                | allieverwantedwaslove@chromatica.gaga | 
            | California King Bed | allieverwantedwaslove@chromatica.gaga | 
            | Dra. Laís Caldas    | allieverwantedwaslove@chromatica.gaga | 
            | Dra. Laís Caldas    | a@e.com                               | 
            #99 caracteres no nome
            |chrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochr|a@e.com|
            #100 caracteres no nome
            |chrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochro|a@e.com|
            #59 carateres no email  
            | Dra. Laís Caldas    | chrochrochrochrochrochrochrochrochrochrochrochroc@email.com | 
            #60 caracteres no nome
            | Dra. Laís Caldas    | chrochrochrochrochrochrochrochrochrochrochrochroch@email.com | 
    
    Scenario Outline: Atualizar usuário com dados faltantes
        When aperto em editar
        And preencho o formulário
        | nome  | <nome>  |
        | email | <email> |
        And aperto em salvar
        Then vejo a mensagem de validação de campo "<mensagem>"

        Examples:
            | nome                    | email                                  | mensagem                       |
            |                         | allieverwantedwaslove@chromatica.gaga  | O campo nome é obrigatório.    |
            | I want your stupid love |                                        | O campo e-mail é obrigatório.  |

    Scenario Outline: Atualizar usuário com dados de formato inválido
        When aperto em editar
        And preencho o formulário
        | nome  | <nome>  |
        | email | <email> |
        And aperto em salvar
        Then vejo a mensagem de validação de campo "<mensagem>"

        Examples:
            | nome        | email                        | mensagem                    |
            | akjs;       | sourcandy@chromatica.gaga    | Formato do nome é inválido. |
            | akjs@976$%  | sourcandy@chromatica.gaga    | Formato do nome é inválido. |
            | open minded | aaa@                         | Formato de e-mail inválido  |
            | open minded | aaa,@email.com@email.com     | Formato de e-mail inválido  |
            | open minded | aaa@email.comaaa@email.com   | Formato de e-mail inválido  |
            | open minded | aaa#@email.com               | Formato de e-mail inválido  |
            | open minded | aaa@email.c                  | Formato de e-mail inválido  |

    Scenario Outline: Atualizar usuário com dados de comprimento inválido
        When aperto em editar
        And preencho o formulário
        | nome  | <nome>  |
        | email | <email> |
        And aperto em salvar
        Then vejo a mensagem de validação de campo "<mensagem>"
        
        Examples:
            | nome    | email                       | mensagem                                       |
            | a       | justkeepondancing@smile.katy| Informe pelo menos 4 letras para o nome.       |
            | aa      | justkeepondancing@smile.katy| Informe pelo menos 4 letras para o nome.       |
            | aaa     | justkeepondancing@smile.katy| Informe pelo menos 4 letras para o nome.       |
            | Daisies | a                           | Informe pelo menos 4 caracteres para o e-mail. |
            | Daisies | aa                          | Informe pelo menos 4 caracteres para o e-mail. |
            | Daisies | aaa                         | Informe pelo menos 4 caracteres para o e-mail. |
            #nome de 101 caracteres
            | Chrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochrochroc | justkeepondancing@smile.katy| Informe no máximo 100 caracteres para o nome |
            #email de 61 caracteres
            | Daisies | chrochrochrochrochrochrochrochrochrochrochrochrocho@email.com  | Informe no máximo 60 caracteres para o e-mail |
 
    Scenario: Atualizar usuário com email existente
        And já existe um usuario cadastrado
        When aperto em editar
        And preencho o formulario com o email dele
        | nome  | hanagasakumichi       |
        | email | thecharmpark@email.com|
        And aperto em salvar
        Then vejo a mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: Atualizar usuário que não existe
        And o usuário não existe no sistema
        When aperto em editar
        And preencho o formulário
        | nome  | hanagasakumichi       |
        | email | thecharmpark@email.com|
        And aperto em salvar
        Then vejo a mensagem de erro "As informações não foram atualizadas."