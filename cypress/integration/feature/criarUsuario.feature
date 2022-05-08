Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Scenario Outline: Preencher dados corretamente
        Given acessei a pagina de novo usuário
        When preencho o formulário
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
        Given acessei a pagina de novo usuário
        When preencho o formulário
        | nome  | <nome> |
        | email | <email>|
        And envio o formulário
        Then vejo a mensagem de validação de campo "<mensagem>"

        Examples:
            | nome                    | email                                  | mensagem                       |
            |                         | allieverwantedwaslove@chromatica.gaga  | O campo nome é obrigatório.    |
            | I want your stupid love |                                        | O campo e-mail é obrigatório.  |

    Scenario Outline: Preencher dados com formato inválido
        Given acessei a pagina de novo usuário
        When preencho o formulário
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
            
