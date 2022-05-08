class ListarUsuarios {
    divCardsUsuarios = "#listaUsuarios";
    cardsUsuarios    = ".sc-dIouRR";
    nomeUsuario      = "p[data-test='userDataName']";
    emailUsuario     = "p[data-test='userDataEmail']";
    botaoExcluir = "button[data-test='userDataDelete']";
    botaoVerDetalhes = "#userDataDetalhe";
    
    linkRaro = "a[href='/']";
    
    linkNovoUsuario = "a[href='/users/novo']";
    
    botaoPaginacaoVoltar = "#paginacaoVoltar";
    botaoPaginacaoProximo = "#paginacaoProximo";
    liPaginacaoAtual = "#paginacaoAtual";
    
    itensPorPagina = 6;
    minQuantItensPagina = 1;
    maxQuantItensPagina = 6;

    visitar() {
        cy.visit("");
    }
}

export var listarUsuarios = new ListarUsuarios();