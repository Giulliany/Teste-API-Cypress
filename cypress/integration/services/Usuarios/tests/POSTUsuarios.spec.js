import * as POSTUsuarios from '../requests/POSTUsuarios.request';

describe('POST Usuarios', () => {
    it('Adiciona novo usuario', () => {
        POSTUsuarios.addUsuarios().should((response) => {
            expect(response.status).to.eq(201); // verifica se o status retornado é igual a 201
            expect(response.body).to.be.not.null; // verifica se os dados é diferente de null
            expect(response.body.name).to.eq("morpheus"); //Verifica se o nome é igual ao parametro passado
            expect(response.body.job).to.eq("leader"); //Verifica se o emprego é igual ao parametro passado 
        })
    });
});