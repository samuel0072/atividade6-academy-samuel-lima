/// <reference types="cypress" />
class CriarUsuario {
    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";
    botaoSalvar = "button[type='submit']";
    formulario = "form";

    root = "#root";

    preencherFormulario(nome, email) {
        //o type da um erro com strings vazias, que é a mesma coisa que não digitar
        if(nome != "") {
            cy.get(this.inputNome).type(nome);
        }
        if(email != "") {
            cy.get(this.inputEmail).type(email);
        }
    }

    enviarFormulario() {
        cy.get(this.botaoSalvar).click();
    }

    verificarMensagem(mensagem) {
        cy.contains(this.root, mensagem).should("be.visible");
    }

    verificarMensagemValidacaoCampo(mensagem) {
        //verifica o formulário possui a mensagem
        cy.contains(this.formulario, mensagem).should("be.visible");
    }

}

export var criarUsuario = new CriarUsuario();