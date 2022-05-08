/// <reference types="cypress" />

import { detalhesUsuarioPage } from "../pages/detalhesUsuarioPage.po";
import {listarUsuarios} from "../pages/listarUsuarios.po";
/* -------------- Given's -------------- */
Given("estou na tela de detalhes de um usuário", ()=> {
    var id = "id-de-teste";
    var url = Cypress.env("CRUD_API_URL") + "/users/" + id;
    
    cy.intercept({
        method: "GET",
        url: url
    }, {
        fixture: "usuarioParaAtualizar.json"
    });

    //intercept para casos de sucesso   
    var id = "id-de-teste";
    var url = Cypress.env("CRUD_API_URL") + "/users/" + id;
    cy.intercept({
        method: "PUT",
        url: url
    }, {
        statusCode: 200,
        fixture: "usuarioParaAtualizar.json"
    });

    cy.visit("/users/" + id);
});

/* -------------- When's -------------- */
When("aperto em editar", () => {
    detalhesUsuarioPage.clicarBotaoEditar();
});
When("preencho o formulário", (dados) => {
    var dadosUsuarios = dados.rowsHash();
    detalhesUsuarioPage.preencherFormulario(dadosUsuarios.nome, dadosUsuarios.email);
});

When("aperto em salvar", () => {
    detalhesUsuarioPage.clicarBotaoSalvar();
});

/* -------------- Then's -------------- */

Then("sou redirecionado para a tela inicial", ()=> {
    cy.url().should('eq', Cypress.config("baseUrl") + "/users");//verifica se está na rota certa
});

Then("vejo a mensagem de sucesso {string}", (mensagem)=> {
    listarUsuarios.verificarMensagem(mensagem);
});

Then("vejo a mensagem de validação de campo {string}", (mensagem) => {
    detalhesUsuarioPage.mensagemValidacaoInput(mensagem);
});