/// <reference types="cypress" />

const payloadADDUsuarios = require('../payloads/add-usuario.json')
 
function addUsuarios(){

    // cy.request - client http
    return cy.request({
        method: 'POST', 
        url: 'api/users',
        failOnStatusCode: false,
        body: payloadADDUsuarios,
    })
}

export { addUsuarios };