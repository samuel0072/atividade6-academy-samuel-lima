class DetalhesUsuarioPage {
    inputId = 'input[name="id"]';
    inputNome = 'input#userName';
    inputEmail = 'input#userEmail';
    formulario = 'form';

    botaoVoltar = '';

    root = "#root"

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

    mensagemValidacaoInput(mensagem) {
        cy.contains(this.formulario, mensagem).should("be.visible");
    }

    verificarMensagemErro(mensagem) {
        cy.contains(this.root, mensagem).should("be.visible");
    }
}

export var detalhesUsuarioPage = new DetalhesUsuarioPage();