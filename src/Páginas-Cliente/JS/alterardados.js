
//armazena usuario logado
var usuario1 = JSON.parse(localStorage.getItem('usuarioCorrente'))


//mostra nome do usuario no menu do cliente

let exibirNome = document.getElementById('nomeUsuario')
exibirNome.innerHTML = `  
<li> <p id="nomeUsuario"> ${usuario1.nome} </p></li>
`

//Editar dados do cadastro do cliente no formulario 

let nome = document.getElementById('nome')
nome.value = usuario1.nome

let nascimento = document.getElementById('nascimento')
nascimento.value = usuario1.nascimento

let cpf = document.getElementById('cpf') 
cpf.value = usuario1.cpf

let rua = document.getElementById('rua') 
rua.value = usuario1.rua

let numero = document.getElementById('numero')
 numero.value = usuario1.numero

let bairro = document.getElementById('bairro') 
bairro.value = usuario1.bairro

let complemento = document.getElementById('complemento') 
complemento.value = usuario1.complemento

let referencia = document.getElementById('referencia') 
referencia.value = usuario1.referencia

let cep = document.getElementById('cep')
cep.value = usuario1.cep

let cidade = document.getElementById('cidade')
cidade.value = usuario1.cep

let telefone = document.getElementById('telefone')
telefone.value = usuario1.telefone

let email = document.getElementById('email')
email.value = usuario1.email

let confirmarEmail = document.getElementById('confirmarEmail')
confirmarEmail.value = usuario1.confirmarEmail

let senha = document.getElementById('senha')
senha.value = usuario1.senha

let sexo = document.getElementById('sexo') 
sexo.value = usuario1.sexo

   
  // Altera om objeto de usuario 
    
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

    
// converte as alteracoes do usuario para o banco de dados
var db_usuarios = JSON.parse(localStorage.getItem('usuario1'))

 // Envia as  alteracoes do  usuario no banco de dados JSON
db_usuarios.usuarios.push(usuario)

// Salva as alteracoes do usuario no banco de dados no localStorage
localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios))

window.location.href = '../../Páginas-Cliente/Html/Index.html'




