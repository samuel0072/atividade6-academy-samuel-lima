/// <reference types="cypress" />
import {listarUsuarios} from "../pages/listarUsuarios.po";

Given("existem usuários cadastrados", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "usuarios.json"
    }); 
});

When("acesso o CRUD Front-end", () => {
    listarUsuarios.visitar();
});

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
        });*/

    });
});