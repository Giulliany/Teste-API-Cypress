import * as DELETEUsuarios from '../requests/DELETEUsuarios.request';
import * as GETUsuarios from '../requests/GETUsuarios.request';
import * as POSTUsuarios from '../requests/POSTUsuarios.request';

describe('DELETE Usuarios', () => {
    it('Deleta um usuario', () => {
        GETUsuarios.allUsuarios().then((resAllUsuarios) => {
            console.log(resAllUsuarios.body.data[0].id);
            DELETEUsuarios.deleteUsuarios(resAllUsuarios.body.data[0].id).should((resDeleteUsuarios) => {
                expect(resDeleteUsuarios.status).to.eq(204); // verifica se o status retornado é igual a 204
            });
        });
    });

    it.only('Adiciona e Deleta um usuario', () => {
        POSTUsuarios.addUsuarios().then((resAddUsuarios) => {
            console.log(resAddUsuarios.body.id);
            DELETEUsuarios.deleteUsuarios(resAddUsuarios.body.id).should((resDeleteUsuarios) => {
                expect(resDeleteUsuarios.status).to.eq(204); // verifica se o status retornado é igual a 204
            });
        });
    });
});