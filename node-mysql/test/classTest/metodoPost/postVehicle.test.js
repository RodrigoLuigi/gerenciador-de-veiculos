const chai = require('chai');
const app = require('../../../index');
const chaiHttp = require('chai-http');

expect = chai.expect;

chai.use(chaiHttp)

describe('Teste de API deve retornar Status: 200 OK', () => {
  it('Verifica status - POST route: /veiculos ', function (done) {
    chai.request(app).post('/veiculos')
      .send({
        placa: 'Teste',
        chassi: 'teste',
        renavam: 000000,
        modelo: 'teste',
        marca: 'teste',
        ano: 0000
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.placa).to.be.an("string");
        expect(res.ok).to.be.equal(true);

        done();
        console.log("Status:", res.status)
      });
  });
});