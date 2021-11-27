//buscar usuario logado foi feito no login

//armazena valor do id no do cliente no HTML
let nome = document.getElementById('nomeUsuario')

//armazena valores dos ids de cadastro do cliente no HTML

let nome = document.getElementById('nome')
let nascimento = document.getElementById('nascimento')
let sexo = document.querySelector('input[name=sexo]:checked')
let cpf = document.getElementById('cpf')
let rua = document.getElementById('rua')
let numero = document.getElementById('numero')
let bairro = document.getElementById('bairro')
let complemento = document.getElementById('complemento')
let referencia = document.getElementById('referencia')
let cep = document.getElementById('cep')
let cidade = document.getElementById('cidade')
let telefone = document.getElementById('telefone')
let email = document.getElementById('email')
let confirmarEmail = document.getElementById('emailConfirmar')
let senha = document.getElementById('senha')

// busca dados do cliente no local storage e converte os valores
var dadosUsuario = localStorage.getItem('usuarioCorrente');
let mostrar = JSON.parse(dadosUsuario)

//armazena no localstorage a id do usuario
usuarioCorrente.id = usuario.id

//armazena os dados 
email.value = mostrar.email
confirmarEmail.value = mostrar.confirmarEmail
nome.value = mostrar.nome
senha.value = mostrar.senha
cpf.value = mostrar.cpf
telefone.value = mostrar.telefone
nascimento.value = mostrar.nascimento
sexo.value = mostrar.sexo
cep.value = mostrar.cep
cidade.value = mostrar.cidade
rua.value = mostrar.rua
numero.value = mostrar.numero
bairro.value= mostrar.bairro
complemento.value = mostrar.complemento
referencia.value = mostrar.referencia


//Logout e voltar para pagina index
alert('Retornando para a página inicial')
function logout() {
    if (usuarioCorrente.id == usuario.id) {
        dadosUsuario = localStorage.clear();
        window.location.href = "../../Páginas-Cliente/Html/Index.html"
    }
}

//Excluir dados do cliente

alert('Os dados do(a) usuário(a) foram apagados com sucesso !')

function excluirUsuario() {
    if (usuarioCorrente.id == usuario.id) {
        localStorage.removeItem('db_usuarios.usuario');
        window.location.href = '../../Páginas-Cliente/Html/Index.html'

    }