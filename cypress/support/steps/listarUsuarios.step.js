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

        usuarios.forEach((usuario, index) => {
            //supondo que o site do CRUD FRONT-END exibe os usuários
            //conforme aparecem no json
            //então quando o index(que começa do 0) for um multiplo de itens da página
            //clico para ir pra próxima página
            //que é onde estão os demais usuários
            if((index != 0) && (index % listarUsuarios.itensPorPagina == 0)) {
                listarUsuarios.avancarPagina();
            }

            listarUsuarios.verificarDadosUsuario(usuario.name, usuario.email);
        });
    });
});

Then("vejo a mensagem {string}", (mensagem) => {
    //Como se trata de uma mensagem, eu preferi verificar se ela está
    //presente e visível na tela da aplicação em si
    listarUsuarios.verificarMensagem(mensagem);
});

Then("vejo uma opção para cadastrar um novo usuário com o texto {string}", (mensagem) => {
    //verifico se tem o texto e se é um link para a página de criar usuário
    listarUsuarios.verificarMensagemComLink(mensagem, "/users/novo");
});