const chai = require('chai');
const app = require('../../../index');
const chaiHttp = require('chai-http');

expect = chai.expect;

chai.use(chaiHttp)

describe('Teste de API deve retornar Status: 200 OK', () => {
  it('Verifica status - GET route: / ', function (done) {
    chai.request(app).get('/') //
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.ok).to.be.an('boolean');
        expect(res.ok).to.be.eql(true);

        done();
        console.log('Status:', res.status);
      });
  });

  it('Verifica status - GET route: /veiculos ', function (done) {
    chai.request(app).get('/veiculos') //
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        expect(res.ok).to.be.an('boolean');
        expect(res.ok).to.be.eql(true);

        done();
        console.log('Status:', res.status);
      })
  });

  it('Verifica status - GET route: /veiculos/:id ', function (done) {
    chai.request(app).get('/veiculos/:id') //
      .end((err, res) => {
        expect(res).to.have.status(204);
        expect(res.body).to.be.a('object');
        expect(res.ok).to.be.an('boolean');
        expect(res.ok).to.be.eql(true);

        done();
        console.log('Status:', res.status);
      })
  });
});