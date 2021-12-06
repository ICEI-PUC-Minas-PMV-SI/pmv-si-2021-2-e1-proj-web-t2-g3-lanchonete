//armazena usuario logado
var usuario1 = JSON.parse(localStorage.getItem('usuarioCorrente'))


//Editar dados do cadastro do cliente no formulario

let exibirNome = document.getElementById('nomeUsuario')
exibirNome.innerHTML = `  
<li> <p id="nomeUsuario"> ${usuario1.nome} </p></li>
`


//Logout e voltar para pagina index

function logout() {
    confirm('Deseja sair?')
    if (confirm = true) {
        
        localStorage.removeItem(JSON.stringify(usuario1))
        window.location.href = "../../Páginas-Cliente/Html/Index.html"
    }
}

