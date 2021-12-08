/*window.onloadstart = verificar()
function verificar(){
    if (localStorage.getItem('login') != '00000000000' && localStorage.getItem('senha') != '12345678'){
    window.location.pathname = 'testeLogin2.html'
}
}*/
//função dos dados Principais

//pegar dados do html
var nome = document.getElementById('nomePrincipal')
var cpf = document.getElementById('cpfPrincipal')
var rua = document.getElementById('ruaPrincipal')
var number = document.getElementById('numberPrincipal')
var bairro = document.getElementById('bairroPrincipal')
var complemento = document.getElementById('complementoPrincipal')
var referencia = document.getElementById('referenciaPrincipal')
var cep = document.getElementById('cepPrincipal')
var cidade = document.getElementById('cidadePrincipal')

//transformar objeto do local storage
var dados = JSON.parse(localStorage.getItem('dadosPrincipais'))

//substituir dados do formulário do admistrador
nome.value = dados.nome
cpf.value = dados.cpf
rua.value = dados.rua
number.value = dados.number
bairro.value = dados.bairro
complemento.value = dados.complemento
referencia.value = dados.referencia
cep.value = dados.cep
cidade.value = dados.cidade

//executar função de enviar dados para o localStorage
function salvarPrincipal(){
    
    //enviar objeto com os dados preenchidos
    var dadosPrincipais = {
        nome: nome.value,
        cpf: cpf.value,
        rua: rua.value,
        number: number.value,
        bairro: bairro.value,
        complemento: complemento.value,
        referencia: referencia.value,
        cep: cep.value,
        cidade: cidade.value
    }

    //função para acrescentar ao array
    localStorage.setItem('dadosPrincipais', JSON.stringify(dadosPrincipais))
    alert('Dados salvos com sucesso!')
}

//função dos dados empresariais

var cnpj = document.getElementById('cnpj')
var rSocial = document.getElementById('razaoSocial')
var ruaEmpresa = document.getElementById('ruaEmpresa')
var numberEmpresa = document.getElementById('numberEmpresa')
var bairroEmpresa = document.getElementById('bairroEmpresa')
var complementoEmpresa = document.getElementById('complementoEmpresa')
var cepEmpresa = document.getElementById('cepEmpresa')
var cidadeEmpresa = document.getElementById('cidadeEmpresa')

//transformar objeto do local storage
var dadosEmpresa = JSON.parse(localStorage.getItem('dadosEmpresariais'))

cnpj.value = dadosEmpresa.cnpj
rSocial.value = dadosEmpresa.rSocial
ruaEmpresa.value = dadosEmpresa.ruaEmpresa
numberEmpresa.value = dadosEmpresa.numberEmpresa
bairroEmpresa.value = dadosEmpresa.bairroEmpresa
complementoEmpresa.value = dadosEmpresa.complementoEmpresa
cepEmpresa.value = dadosEmpresa.cepEmpresa
cidadeEmpresa.value = dadosEmpresa.cidadeEmpresa

function salvarEmpresa(){
    
    //enviar objeto com os dados preenchidos
    var dadosEmpresariais = {
        cnpj: cnpj.value,
        rSocial: rSocial.value,
        ruaEmpresa: ruaEmpresa.value,
        numberEmpresa: numberEmpresa.value,
        bairroEmpresa: bairroEmpresa.value,
        complementoEmpresa: complementoEmpresa.value,
        cepEmpresa: cepEmpresa.value,
        cidadeEmpresa: cidadeEmpresa.value
    }

    //função para acrescentar ao array
    localStorage.setItem('dadosEmpresariais', JSON.stringify(dadosEmpresariais))
    alert('Dados salvos com sucesso!')
}

//função dos dados de login

var login = document.getElementById('email-login')
var confirmarLogin = document.getElementById('confirmarEmail')
var senha = document.getElementById('senhaLogin')
var confirmarSenha = document.getElementById('confirmarSenha')

//transformar objeto do local storage
var dadosLogin = JSON.parse(localStorage.getItem('dadosLog'))

login.value = dadosLogin.email
confirmarLogin.value = dadosLogin.confirmarEmail
senha.value = dadosLogin.senha
confirmarSenha.value = dadosLogin.confirmarSenha

function salvarLogin(){
    
    //enviar objeto com os dados preenchidos
    var dadosLog = {
        email: login.value,
        confirmarEmail: confirmarLogin.value,
        senha: senha.value,
        confirmarSenha: confirmarSenha.value,
        
    }

    //função para acrescentar ao array
    localStorage.setItem('dadosLogin', JSON.stringify(dadosLog))
    alert('Dados salvos com sucesso!')
}

//função dos dados bancários

var agencia = document.getElementById('numberAg')
var operacao = document.getElementById('numberOp')
var cc = document.getElementById('numberConta')
var pix = document.getElementById('pix')

//transformar objeto do local storage
var dadosBancarios = JSON.parse(localStorage.getItem('dadosBanc'))
console.log(agencia.value)
agencia.value = dadosBancarios.agencia
operacao.value = dadosBancarios.operacao
cc.value = dadosBancarios.cc
pix.value = dadosBancarios.pix

function salvarBanc(){
    
    //enviar objeto com os dados preenchidos
    var dadosBancarios2 = {
        agencia: agencia.value,
        operacao: operacao.value,
        cc: cc.value,
        pix: pix.value,
        
    }

    //função para acrescentar ao array
    localStorage.setItem('dadosBanc', JSON.stringify(dadosBancarios2))
    alert('Dados salvos com sucesso!')
}


