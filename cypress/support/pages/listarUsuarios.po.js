class ListarUsuarios {
    divCardsUsuarios = "#listaUsuarios";
    cardsUsuarios    = "#userData";
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

    apertarBotaoExcluir(emailUsuario) {
        //seleciona o card que tem o email do usuário especifico
        //como o email é único para cada usuário
        //esse contains deve retornar somente um card
        cy.contains(this.cardsUsuarios, emailUsuario).within(() => {
            cy.get(this.botaoExcluir).click();
        });
    }

    apertarBotaoConfirmarExclusao() {
        //obtem o modal de exclusão
        cy.contains(this.root, "Deseja realmente remover este usuário ?").within(() => {
            cy.contains("button", "Confirmar").click();
        }).should("be.visible");
    }
}

export var listarUsuarios = new ListarUsuarios();