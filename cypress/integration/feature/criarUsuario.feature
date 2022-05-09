Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a página de novo usuário
        Given acessei a pagina de novo usuário

    Scenario Outline: Preencher dados corretamente
        When preencho o formulário com os novos dados
        | nome  | <nome> |
        | email | <email>|
        And envio o formulário
        Then vejo a mensagem "Usuário salvo com sucesso!"
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
   
    Scenario Outline: Preencher dados faltantes
        When preencho o formulário com os novos dados
        | nome  | <nome> |
        | email | <email>|
        And envio o formulário
        Then vejo a mensagem de validação de campo "<mensagem>"

        Examples:
            | nome                    | email                                  | mensagem                       |
            |                         | allieverwantedwaslove@chromatica.gaga  | O campo nome é obrigatório.    |
            | I want your stupid love |                                        | O campo e-mail é obrigatório.  |

    Scenario Outline: Preencher dados com formato inválido
        When preencho o formulário com os novos dados
        | nome  | <nome> |
        | email | <email>|
        And envio o formulário
        Then vejo a mensagem de validação de campo "<mensagem>"

        Examples:
            | nome        | email                        | mensagem                    |
            | akjs;       | sourcandy.chromatica.gaga    | Formato do nome é inválido. |
            | akjs@976$%  | sourcandy.chromatica.gaga    | Formato do nome é inválido. |
            | open minded | aaa@                         | Formato de e-mail inválido  |
            | open minded | aaa,@email.com@email.com     | Formato de e-mail inválido  |
            | open minded | aaa@email.comaaa@email.com   | Formato de e-mail inválido  |
            | open minded | aaa#@email.com               | Formato de e-mail inválido  |
            | open minded | aaa@email.c               | Formato de e-mail inválido  |
            
    Scenario Outline: Preencher com dados de comprimento inválido
        When preencho o formulário com os novos dados
        | nome  | <nome> |
        | email | <email>|
        And envio o formulário
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
        
    Scenario: Criar usuário com email já existente
        And existe um usuário cadastrado
        When informo os dados deste usuário
        | nome  | nome de teste  |
        | email | email@email.com|
        And envio o formulário
        Then vejo a mensagem de erro "Este e-mail já é utilizado por outro usuário."
    