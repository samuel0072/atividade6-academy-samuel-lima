Feature: Atualizar Usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Scenario Outline: 
        Given estou na tela de detalhes de um usuário
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