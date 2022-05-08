/// <reference types="cypress" />
import { criarUsuario } from "../pages/criarUsuario.po";

/* -------------- Given's -------------- */

Given("acessei a pagina de novo usuário", () => {
    cy.visit("/users/novo");
    var url = Cypress.env("CRUD_API_URL") + "/users";
    cy.intercept({
        method: "POST", 
        url: url
    }, { statusCode:201, fixture: "usuarioCadastrado.json"});
})

/* -------------- When's -------------- */
When("preencho o formulário", (dadosUsuario) => {
    var dados = dadosUsuario.rowsHash();
    criarUsuario.preencherFormulario(dados.nome, dados.email);
});
When("envio o formulário", () => {
    criarUsuario.enviarFormulario();
});

/* -------------- Then's -------------- */
Then("vejo a mensagem {string}", (mensagem) => {
    criarUsuario.verificarMensagem(mensagem);
});

Then("vejo a mensagem de validação de campo {string}", (mensagem) => {
    criarUsuario.verificarMensagemValidacaoCampo(mensagem);
});