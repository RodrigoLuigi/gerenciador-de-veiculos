'use strict';

const url = `http://localhost:3000/veiculos`

let editId = null;

/* Exibir veiculos do DB em uma tabela HTML */
const listaVeiculos = async function () {

  const dados = await fetch(url);
  const endereco = await dados.json();

  let tbody = document.getElementById('tbody');

  tbody.innerText = '';

  for (const veiculo of endereco) {

    let tr = tbody.insertRow();

    let td_id = tr.insertCell();
    let td_placa = tr.insertCell();
    let td_chassi = tr.insertCell();
    let td_renavam = tr.insertCell();
    let td_modelo = tr.insertCell();
    let td_marca = tr.insertCell();
    let td_ano = tr.insertCell();
    let td_acoes = tr.insertCell();

    td_id.innerText = veiculo.id;
    td_placa.innerText = veiculo.placa;
    td_chassi.innerText = veiculo.chassi;
    td_renavam.innerText = veiculo.renavam;
    td_modelo.innerText = veiculo.modelo;
    td_marca.innerText = veiculo.marca;
    td_ano.innerText = veiculo.ano;

    let edit = document.createElement('button');
    edit.setAttribute('onclick', 'editar(' + JSON.stringify(veiculo) + ')');
    edit.setAttribute('data-toggle', 'modal');
    edit.setAttribute('data-target', '#ExemploModalCentralizado');
    edit.innerText = 'Editar';
    edit.classList.add('buttonEdit', 'btn', 'btn-success')
    td_acoes.appendChild(edit);

    let btnExcluir = document.createElement('button');
    btnExcluir.setAttribute('onclick', 'excluir(' + veiculo.id + ')');
    btnExcluir.innerText = 'Excluir';
    btnExcluir.classList.add('buttonExcluir', 'btn', 'btn-warning');
    td_acoes.appendChild(btnExcluir);

    console.log(veiculo)
  }
}

/* Função para cadastrar veiculo , atualizar veiculo e validação de inputs*/
function cadastrar() {
  let veiculo = lerDados();

  if (validacao(veiculo)) {
    if (editId == null) {
      addVeiculo(veiculo);
      location.reload();
    } else {
      atualiza(editId, veiculo);
      location.reload();
      editId = null;
    }
  }

}

/* Ler os dados dos inputs */
function lerDados() {
  let veiculo = {};

  veiculo.placa = document.getElementById('inputPlaca').value;
  veiculo.chassi = document.getElementById('inputChassi').value;
  veiculo.renavam = document.getElementById('inputRenavam').value;
  veiculo.modelo = document.getElementById('inputModelo').value;
  veiculo.marca = document.getElementById('inputMarca').value;
  veiculo.ano = document.getElementById('inputAno').value;

  return veiculo;
}

/* Valida dados dos inputs */
function validacao(veiculo) {
  let msg = '';

  if (veiculo.placa == '') {
    msg += 'Digite a placa\n';
  }
  if (veiculo.chassi == '') {
    msg += 'Digite o chassi\n';
  }
  if (veiculo.Renavam == '') {
    msg += 'Digite o renavam\n';
  }
  if (veiculo.Modelo == '') {
    msg += 'Digite o modelo\n';
  }
  if (veiculo.Marca == '') {
    msg += 'Digite a marca\n';
  }
  if (veiculo.Ano == '') {
    msg += 'Digite o ano\n';
  }
  if (msg != '') {
    alert(msg);
    return false;
  }
  return true;
}

/* Adiciona veiculo no DB através da API*/
function addVeiculo(veiculo) {
  fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'asdasdasdasd': 'asdasdasd',
      },
      body: JSON.stringify({
        placa: veiculo.placa,
        chassi: veiculo.chassi,
        renavam: veiculo.renavam,
        modelo: veiculo.modelo,
        marca: veiculo.marca,
        ano: veiculo.ano,
      })
    })
    .then(() => {
      console.log('Veiculo adicionado com sucesso!')
    })

  alert(`Veiculo ${veiculo.placa} cadastrado com sucesso!`)
}

/* Prepara edição preenchendo os inputs com dados do Veiculo a ser editado */
function editar(veiculo) {

  editId = veiculo.id;


  document.getElementById('TituloModalCentralizado').innerText = 'Edição'
  document.getElementById('btn-primary').innerText = 'Atualizar'

  document.getElementById('inputPlaca').value = veiculo.placa;
  document.getElementById('inputChassi').value = veiculo.chassi;
  document.getElementById('inputRenavam').value = veiculo.renavam;
  document.getElementById('inputModelo').value = veiculo.modelo;
  document.getElementById('inputMarca').value = veiculo.marca;
  document.getElementById('inputAno').value = veiculo.ano;
}

/* Atualiza dados da pessoa a ser editada no DB*/
function atualiza(id, veiculo) {
  let urlEdit = `http://localhost:3000/veiculos/${id}`;

  fetch(urlEdit, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'asdasdasdasd': 'asdasdasd',
      },
      body: JSON.stringify({
        placa: veiculo.placa,
        chassi: veiculo.chassi,
        renavam: veiculo.renavam,
        modelo: veiculo.modelo,
        marca: veiculo.marca,
        ano: veiculo.ano,
      })
    })
    .then(() => {
      console.log('Veiculo Editado com sucesso!')
    })
  alert(`Veiculo ${veiculo.placa} atualizado com sucesso!`)
}

/* Exclui os dados do Veiculo no DB e atualiza página*/
function excluir(id) {
  let urlDelete = `http://localhost:3000/veiculos/${id}`;

  if (confirm('Deseja excluir dados do veiculo?')) {
    fetch(urlDelete, {
        method: 'DELETE'
      })
      .then(() => {
        console.log('Veiculo DELETADO com sucesso!')
      })
    location.reload();
  }

}


listaVeiculos();