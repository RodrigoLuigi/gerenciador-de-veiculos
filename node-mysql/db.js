const mysql = require('mysql2/promise');

async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: "3306",
    user: 'root',
    password: '',
    database: 'info-sistemas'
  });

  console.log('conectou no MySql!');
  global.connection = connection;
  return connection;
}

async function selectVehicles() {
  const conn = await connect();
  const [row] = await conn.query('SELECT * FROM veiculos')

  return row;
}

async function selectVehicle(id) {

  const conn = await connect();
  const sql = 'SELECT * FROM veiculos WHERE id=?';
  const [row] = await conn.query(sql, id);

  return row;

}

async function insertVehicle(vehicle) {
  const conn = await connect();
  const sql = 'INSERT INTO veiculos(placa,chassi,renavam,modelo,marca,ano) VALUES(?,?,?,?,?,?);';
  const values = [vehicle.placa, vehicle.chassi, vehicle.renavam, vehicle.modelo, vehicle.marca, vehicle.ano];
  return await conn.query(sql, values);
}

async function updateVehicle(id, vehicle) {
  const conn = await connect();
  const sql = 'UPDATE veiculos SET placa=?, chassi=?, renavam=?, modelo=?, marca=?, ano=? WHERE id=?';
  const values = [vehicle.placa, vehicle.chassi, vehicle.renavam, vehicle.modelo, vehicle.marca, vehicle.ano, id];
  return await conn.query(sql, values);
}

async function deleteVehicle(id) {
  const conn = await connect();
  const sql = 'DELETE FROM veiculos WHERE id=?';
  return await conn.query(sql, id);
}

module.exports = {
  selectVehicles,
  selectVehicle,
  insertVehicle,
  updateVehicle,
  deleteVehicle
}