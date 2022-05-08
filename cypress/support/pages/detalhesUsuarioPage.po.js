class DetalhesUsuarioPage {
    inputId = 'input[name="id"]';
    inputNome = 'input#userName';
    inputEmail = 'input#userEmail';

    botaoVoltar = '';

    clicarBotaoSalvar() {
        return cy.contains("button", "Salvar").click();
    }

    clicarBotaoEditar() {
        return cy.contains("button", "Editar").click();
    }

    clicarBotaoCancelar() {
        return cy.contains("button", "Cancelar").click();
    }

    preencherFormulario(nome, email) {
        if(nome != "") {
            var botao = cy.get(this.inputNome);
            botao.clear();
            botao.type(nome);
        }
        if(email != "") {
            var botao = cy.get(this.inputEmail);
            botao.clear();
            botao.type(email);
        }
    }
}

export var detalhesUsuarioPage = new DetalhesUsuarioPage();