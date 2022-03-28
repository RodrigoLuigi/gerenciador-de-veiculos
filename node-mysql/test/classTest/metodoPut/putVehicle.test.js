const chai = require('chai');
const app = require('../../../index');
const chaiHttp = require('chai-http');

expect = chai.expect;

chai.use(chaiHttp)

describe('Teste de API deve retornar Status: 204 No Content', () => {
  it('Verifica status - POST route: /veiculos/:id ', function (done) {
    chai.request(app).put('/veiculos/:id')
      .send({
        placa: 'Teste',
        chassi: 'teste',
        renavam: 000000,
        modelo: 'teste',
        marca: 'teste',
        ano: 0000
      })
      .end((err, res) => {
        expect(res).to.have.status(204);
        expect(res.body).to.be.a('object');
        expect(res.ok).to.be.equal(true);

        done();
        console.log("Status:", res.status)
      });
  });
});