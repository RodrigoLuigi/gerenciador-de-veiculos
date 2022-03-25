  async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
      return global.connection;

    const mysql = require('mysql2/promise');

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

  async function selectCustomers() {
    const conn = await connect();
    const [row] = await conn.query('SELECT * FROM veiculos')

    return row;
  }

  async function selectCustomer(id) {

    const conn = await connect();
    const sql = 'SELECT * FROM veiculos WHERE id=?';
    const [row] = await conn.query(sql,id);

    return row;
   
  }

  async function insertCustomer(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO veiculos(placa,chassi,renavam,modelo,marca,ano) VALUES(?,?,?,?,?,?);';
    const values = [customer.placa, customer.chassi, customer.renavam, customer.modelo, customer.marca, customer.ano];
    return await conn.query(sql, values);
  }

  async function updateCustomer(id,customer){
    const conn = await connect();
    const sql = 'UPDATE veiculos SET placa=?, chassi=?, renavam=?, modelo=?, marca=?, ano=? WHERE id=?';
    const values = [customer.placa, customer.chassi, customer.renavam, customer.modelo, customer.marca, customer.ano, id];
    return await conn.query(sql, values);
  }

  async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM veiculos WHERE id=?';
    return await conn.query(sql, id);
  }

  module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
  }