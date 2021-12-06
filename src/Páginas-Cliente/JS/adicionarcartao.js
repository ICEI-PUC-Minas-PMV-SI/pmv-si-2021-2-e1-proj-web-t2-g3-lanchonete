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


            
    // Obtem os dados do formulário
    let numero = document.getElementById('numero').value
    let validade = document.getElementById('validade').value
    let cvc = document.getElementById('cvc').value
    let nomeTitular = document.getElementById('nomeTitular').value
    let cpf = document.getElementById('cpf').value

    function adicionarCartao(){

    // cria banco de dados para novo Cartao
    var db_novoCartao = {}

    //adiciona no banco de dados
    adicionar(
        numero,
        validade,
        cvc,
        nomeTitular,
        cpf

        alert ('Cartão adicionado com sucesso !')
    )

    //cria o objeto cartao
    let cartao = {
        numero: numero,
        validade: validade,
        cvc: cvc,
        nomeTitular: nomeTitular,
        cpf: cpf
    }


        // Inclui o novo cartao no banco de dados baseado em JSON
        db_novoCartao.cartao.push(cartao)

        // Salva o novo banco de dados com o novo usuário no localStorage
        localStorage.setItem('db_novoCartao', JSON.stringify(db_novoCartao))

        window.location.href = '../../Páginas-Cliente/Html/cartao.html'

    

