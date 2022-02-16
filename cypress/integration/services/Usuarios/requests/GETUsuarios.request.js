// verbo/metodo - endpoint . motivo (request) . extensao

/// <reference types="cypress" />

function allUsuarios(){

    // cy.request - client http
    return cy.request({
        method: 'GET', 
        url: 'api/users?page=2',
        failOnStatusCode: false,
    })
}

export { allUsuarios };