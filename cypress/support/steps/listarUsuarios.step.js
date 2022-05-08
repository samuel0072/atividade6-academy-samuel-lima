/// <reference types="cypress" />
import {listarUsuarios} from "../pages/listarUsuarios.po";

/* ------------------------- Given's ------------------------- */

Given("existem usuários cadastrados", () => {
    var url = Cypress.env("CRUD_API_URL") + "/users";
    cy.intercept({
        method: "GET",
        url: url
    }, {
        fixture: "usuarios.json"
    }); 
});

Given("não existem usuários cadastrados", () => {
    var url = Cypress.env("CRUD_API_URL") + "/users";
    cy.intercept({
        method: "GET",
        url: url
    }, []);//sem usuários
});

/* ------------------------- When's ------------------------- */

When("acesso o CRUD Front-end", () => {
    listarUsuarios.visitar();
});

/* ------------------------- Then's ------------------------- */
Then("vejo a página inicial", () => {
    cy.url().should('eq', Cypress.config("baseUrl") + "/users");//verifica se está na rota certa
});

Then("vejo os dados dos usuários", () => {
    cy.fixture('usuarios.json').then((usuarios) => {

        cy.get(listarUsuarios.divCardsUsuarios).should("be.visible");
    
        cy.get(listarUsuarios.cardsUsuarios).should("be.visible");
        
        cy.get(listarUsuarios.cardsUsuarios).should((cards) => {
            expect(cards).to.have.length
            .within(listarUsuarios.minQuantItensPagina, listarUsuarios.maxQuantItensPagina);
        });

        /*usuarios.forEach((usuario) => {
            cy.get(listarUsuarios.nomeUsuario).should("be.visible").should("have.text", usuario.name);
            cy.get(listarUsuarios.emailUsuario).should("be.visible");
        });*/// TODO: verificar os dados dos usuários na página 

    });
});

Then("vejo a mensagem {string}", (mensagem) => {
    //Como se trata de uma mensagem, eu preferi verificar se ela está
    //presente e visível na tela da aplicação em si
    listarUsuarios.verificarMensagem(mensagem);
});

Then("e uma opção para cadastrar um novo usuário com o texto {string}", (mensagem) => {
    //verifico se tem o texto e se é um link para a página de criar usuário
    listarUsuarios.verificarMensagemComLink(mensagem, "/users/novo");
});