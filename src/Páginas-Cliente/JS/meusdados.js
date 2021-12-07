
//armazena usuario logado
var usuario1 = JSON.parse(localStorage.getItem('usuarioCorrente'))


//mostra nome do usuario no menu do cliente

let exibirNome = document.getElementById('nomeUsuario')
exibirNome.innerHTML = `  
<li> <p id="nomeUsuario"> ${usuario1.nome} </p></li>
`
//mostrar dados do cadastro do cliente no formulario

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

//Logout e voltar para pagina index

function logout() {
    confirm('Deseja sair?')
    if (confirm = true) {
        
        localStorage.removeItem(JSON.stringify(usuario))
        window.location.href = "../../Páginas-Cliente/Html/Index.html"
    }
}

//Excluir dados do cliente

//converte os dados do usuarioCorrente para o usuario
var usuario = JSON.parse(localStorage.getItem('usuarioCorrente'))

//converte os dados do ususario para o db_usuarios
var db_usuarios = JSON.parse(localStorage.getItem('usuario'))

function excluirUsuario() {
    confirm('Seus dados serão excluídos permanentemente. Deseja continuar ?')
    if(confirm = true){
    window.location.href = "www.google.com"
     
    } else {
        console.log('ok')
    }
  }




