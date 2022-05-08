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

    root = "#root";
    
    itensPorPagina = 6;
    minQuantItensPagina = 1;
    maxQuantItensPagina = 6;

    visitar() {
        cy.visit("");
    }

    verificarMensagem(mensagem) {
        cy.contains(this.root, mensagem).should("be.visible");
    }

    verificarMensagemComLink(mensagem, link) {
        cy.contains(mensagem).should("have.attr", "href", link).and("be.visible");
    }
}

export var listarUsuarios = new ListarUsuarios();