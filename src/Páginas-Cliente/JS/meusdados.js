
// Buscar usuario no bancode dados JSON  foi feito no login

//Exibir nome do usuario no menu do cliente


//Exibir dados do cadastro do cliente no formulario
var usuarioCorrente = localStorage.getItem('usuarioCorrente', JSON.parse(usuarioCorrente))


document.getElementById.("nome").innerHTML= usuario.nome
document.getElementById("nascimento").innerHTML= usuario.nascimento
document.querySelector("sexo").innerHTML= usuario.sexo
document.getElementById("cpf").innerHTML= usuario.cpf
document.getElementById("rua").innerHTML= usuario.rua
document.getElementById("numero").innerHTML= usuario.numero
document.getElementById("bairro").innerHTML= usuario.bairro
document.getElementById("complemento").innerHTML= usuario.complemento
document.getElementById("referencia").innerHTML= usuario.referencia
document.getElementById("cep").innerHTML= usuario.cep
document.getElementById("cidade").innerHTML= usuario.cidade
document.getElementById("telefone").innerHTML= usuario.telefone
document.getElementById("email1").innerHTML= usuario.email
document.getElementById("email2").innerHTML= usuario.confirmarEmail
document.getElementById("senha").innerHTML= usuario.senha


//Excluir dados do cliente
function deletarDadosCliente ()

localStorage.removeItem ('usuario');
