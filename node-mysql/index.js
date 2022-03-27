const express = require('express');
const db = require("./db.js");
const cors = require('cors');
const { use } = require('express/lib/application');

const app = express();
const port = 3000; //porta padrão

app.use(express.json());

app.use((req, res, next) => {
    console.log('Acessou o Middlewere!');
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({
    message: 'Funcionando!',
    criador: 'Rodrigo Luigi',
}));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

// verbos HTTP
// GET -> Receber dados de um Resource
// POST -> Enviar dados ou informações para serem processador por um Resource.
// PUT -> Atualizar os dados de um resource
// DELETE -> deletar dados de um resource

// GET 'veiculos' traz toda a lista de veiculos cadastrado no DB
app.get('/veiculos', async function (req, res) {
    const veiculos = await db.selectVehicles();
    res.json(veiculos);
});

// GET 'veiculos/:id' traz os dados do veiculo pelo 'id' cadastrado no DB
app.get('/veiculos/:id', async function (req, res) {
    const {
        id
    } = req.params;
    const veiculos = await db.selectVehicle(id);

    if (!veiculos[0]) {
        return res.status(204).json();
    }

    res.json(veiculos);
});

//POST faz postagem de um novo veiculo  na lista de 'veiculos' pegando como parâmetro "placa, chassi, renavam, modelo, marca, ano"
app.post('/veiculos', async function (req, res) {
    const {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano
    } = req.body;

    //salvar novo veiculo
    await db.insertVehicle({
        placa: placa,
        chassi: chassi,
        renavam: renavam,
        modelo: modelo,
        marca: marca,
        ano: ano
    });

    res.json({
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano
    })
});

//PUT atualiza dados do veiculo pegando como parametro o 'id'
app.put('/veiculos/:id', async function (req, res) {
    const {
        id
    } = req.params;
    const veiculo = await db.selectVehicle(id);

    if (!veiculo[0]) return res.status(204).json();

    const {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano
    } = req.body;

    await db.updateVehicle(id, {
        placa: placa,
        chassi: chassi,
        renavam: renavam,
        modelo: modelo,
        marca: marca,
        ano: ano
    });

    res.json(veiculo);

});

//DELETE apaga os dados do veiculo no DB passando o 'id' como parâmetro
app.delete('/veiculos/:id', async function (req, res) {
    const {
        id
    } = req.params;
    const veiculo = await db.selectVehicle(id);

    if (!veiculo[0]) return res.status(204).json();

    await db.deleteVehicle(id);

    res.json(veiculo);
});

module.exports = app;