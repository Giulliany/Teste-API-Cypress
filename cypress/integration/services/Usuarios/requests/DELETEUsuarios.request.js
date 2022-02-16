/// <reference types="cypress" />
 
function deleteUsuarios(idUsuario){

    // cy.request - client http
    return cy.request({
        method: 'DELETE', 
        url: '/api/users/${idUsuario}',
        failOnStatusCode: false,
    })
}

export { deleteUsuarios };