// Carregar dado do usuario logado no banco de dados JSON  foi feito no login

//armazena a id do usuario
usuarioCorrente.id = usuario.id

//Editar dados do cadastro do cliente no formulario

let nome = document.getElementById('nome').value
let nascimento = document.getElementById('nascimento').value
let sexo = document.querySelector('input[name=sexo]:checked').value
let cpf = document.getElementById('cpf').value
let rua = document.getElementById('rua').value
let numero = document.getElementById('numero').value
let bairro = document.getElementById('bairro').value
let complemento = document.getElementById('complemento').value
let referencia = document.getElementById('referencia').value
let cep = document.getElementById('cep').value
let cidade = document.getElementById('cidade').value
let telefone = document.getElementById('telefone').value
let email = document.getElementById('email').value
let confirmarEmail = document.getElementById('emailConfirmar').value
let senha = document.getElementById('senha').value

  if (email != confirmarEmail) {
    alert('Os emails estam diferentes. Digite novamente')
  }
  
  // Altera om objeto de usuario 
    let id = id = usuario.id
    let usuario = {
      id: id,
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
  

// Envia as  alteracoes do  usuario no banco de dados JSON
db_usuarios.usuarios.push(usuario)

// Salva as alteracoes do usuario no banco de dados no localStorage
localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios))

window.location.href = '../../Páginas-Cliente/Html/Index.html'




