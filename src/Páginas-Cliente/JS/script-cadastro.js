let btnCadastrar = document.getElementById('btn-cadastrar')
btnCadastrar.addEventListener('click', cadastrar)

function cadastrar(event) {
  // Cancela a submissão do formulário para tratar sem fazer refresh da tela
  event.preventDefault()

  // Obtem os dados do formulário
  let email = document.getElementById('email').value
  let confirmarEmail = document.getElementById('email-confirmar').value
  let nome = document.getElementById('nome').value
  let senha = document.getElementById('senha').value
  let cpf = document.getElementById('cpf').value
  let telefone = document.getElementById('telefone').value
  let nascimento = document.getElementById('nascimento').value
  let sexo = document.querySelector('input[name=sexo]:checked').id
  let cep = document.getElementById('cep').value
  let cidade = document.getElementById('cidade').value
  let rua = document.getElementById('rua').value
  let numero = document.getElementById('numero').value
  let bairro = document.getElementById('bairro').value
  let complemento = document.getElementById('complemento').value
  let referencia = document.getElementById('referencia').value

  if (email != confirmarEmail) {
    alert('Os emails informados não conferem.')
    return
  } else if (
    email == '' ||
    confirmarEmail == '' ||
    nome == '' ||
    senha == '' ||
    cpf == '' ||
    telefone == '' ||
    cep == '' ||
    cidade == '' ||
    rua == '' ||
    numero == '' ||
    bairro == ''
  ) {
    alert('Preencha todos os campos obrigatórios')
  } else if (senha.length < 8) {
    alert('A senha deve conter no mínimo 8 caracteres')
  } else {
    // Adiciona o usuário no banco de dados
    addUser(
      email,
      confirmarEmail,
      nome,
      senha,
      cpf,
      telefone,
      nascimento,
      sexo,
      cep,
      cidade,
      rua,
      numero,
      bairro,
      complemento,
      referencia
    )
    alert('Usuário cadastrado com sucesso. Proceda com o login. ')
  }
}

function addUser(
  email,
  confirmarEmail,
  nome,
  senha,
  cpf,
  telefone,
  nascimento,
  sexo,
  cep,
  cidade,
  rua,
  numero,
  bairro,
  complemento,
  referencia
) {
  // Cria um objeto de usuario para o novo usuario
  let newId = generateUUID()
  let usuario = {
    id: newId,
    email: email,
    confirmarEmail: confirmarEmail,
    nome: nome,
    senha: senha,
    cpf: cpf,
    telefone: telefone,
    nascimento: nascimento,
    sexo: sexo,
    cep: cep,
    cidade: cidade,
    rua: rua,
    numero: numero,
    bairro: bairro,
    complemento: complemento,
    referencia: referencia
  }

  // Inclui o novo usuario no banco de dados baseado em JSON
  db_usuarios.usuarios.push(usuario)

  // Salva o novo banco de dados com o novo usuário no localStorage
  localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios))

  window.location.href = '../../Páginas-Cliente/Html/Index.html'
}
