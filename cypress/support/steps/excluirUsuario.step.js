/// <reference types="cypress" />

import {listarUsuarios} from "../pages/listarUsuarios.po";

/* ------------------------- Given's ------------------------- */
Given("acessei a página inicial", () => {
    cy.visit("");
});

Given("existem usuários cadastrados", () => {
    var url = Cypress.env("CRUD_API_URL") + "/users";
    cy.intercept({
        method: "GET",
        url: url
    }, {
        statusCode: 200,
        fixture: "usuarios.json"
    }); 

    //exclusao com sucesso
    cy.intercept({
        method: "DELETE",
        url: url + "/*"
    }, {
        statusCode: 204
    }); 
});

/* ------------------------- When's ------------------------- */

When("aperto no botão de excluir o usuario com email {string}", (email) => {
    listarUsuarios.apertarBotaoExcluir(email);
});

When("aperto em confirmar exclusão", () => {
    listarUsuarios.apertarBotaoConfirmarExclusao();
});

/* ------------------------- Then's ------------------------- */

Then("vejo a mensagem de sucesso {string}", (mensagem) => {
    listarUsuarios.verificarMensagem(mensagem);
})