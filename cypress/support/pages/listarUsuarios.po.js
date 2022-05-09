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
    paginaAux = 0;

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

    verificarDadosUsuario(nome, email) {
        cy.contains(this.cardsUsuarios, email).within(() => {
            cy.get(this.nomeUsuario).should("to.contain", nome).and("be.visible");
            //testa os botões de cada usuário
            cy.get(this.botaoExcluir).should("be.visible").and("be.enabled");
            cy.get(this.botaoVerDetalhes).should("be.visible").and("have.attr", "href");
        }).should("be.visible");
    }

    avancarPagina() {
        cy.get(this.botaoPaginacaoProximo).click();
    }

    voltarPagina() {
        cy.get(this.botaoPaginacaoVoltar).click();
    }

    verificarBotaoPaginacaoProximo() {
        cy.get(this.botaoPaginacaoProximo).should("be.visible");
    }

    verificarBotaoPaginacaoVoltar() {
        cy.get(this.botaoPaginacaoVoltar).should("be.visible");
    }
    verificarPaginaAtual(pagina) {
        cy.contains(this.liPaginacaoAtual, pagina).should("be.visible");
    }

    verificarBotaoProximoDesabilitado() {
        cy.get(this.botaoPaginacaoProximo).should("be.disabled").and("be.visible");
    }
}

export var listarUsuarios = new ListarUsuarios();