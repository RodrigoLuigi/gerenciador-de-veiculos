const chai = require('chai');
const app = require('../../../index');
const chaiHttp = require('chai-http');

expect = chai.expect;

chai.use(chaiHttp)

describe('Teste de API deve retornar Status: 200 OK', () => {
  it('Verifica status - DELETE route: /veiculos ', function (done) {
    chai.request(app).delete('/veiculos/:id')

      .end((err, res) => {
        expect(res).to.have.status(204);
        expect(res.body).to.be.a('object');
        expect(res.ok).to.be.equal(true);
        done();
        console.log("Status:", res.status)
      });
  });
});