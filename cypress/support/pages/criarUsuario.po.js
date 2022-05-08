/// <reference types="cypress" />
class CriarUsuario {
    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";
    botaoSalvar = "button[type='submit']";

    root = "#root";

    preencherFormulario(nome, email) {
        cy.get(this.inputNome).type(nome);
        cy.get(this.inputEmail).type(email);
    }

    enviarFormulario() {
        cy.get(this.botaoSalvar).click();
    }

    verificarMensagem(mensagem) {
        cy.contains(this.root, mensagem).should("be.visible");
    }

}

export var criarUsuario = new CriarUsuario();