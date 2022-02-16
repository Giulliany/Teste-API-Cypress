import * as GETUsuarios from '../requests/GETUsuarios.request';

describe('GET Usuarios', () => {
    it('Listar todos os usuarios', () => {
        GETUsuarios.allUsuarios().should((response) => {
            expect(response.status).to.eq(200); // verifica se o status retornado é igual a 200
            expect(response.body).to.be.not.null; // verifica se os dados é diferente de null
        })
    });
});