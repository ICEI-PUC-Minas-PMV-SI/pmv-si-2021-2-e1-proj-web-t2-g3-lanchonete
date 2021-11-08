// INSERIR PRODUTOS COM JAVASCRIPT

var listaProdutos = ''

for (i = 0; i < db.dados.length; i++) {
  var produto = `
  <div class="box-produto">
    <div class="image">
      <img src="${db.dados[i].imagem}" alt="${db.dados[i].titulo}"/>
    </div>
    <div class="produto">
      <div>
        <h3 class="nome-produto">${db.dados[i].titulo}</h3>
        <p class="descricao-produto">${db.dados[i].descricao}</p>
      </div>
      <div class="precos">
        <p class="preco-novo-produto">R$ ${db.dados[i].preco}</p>
      </div>
    </div>
    <div>
      <a href="#">
        <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" />
      </a>
    </div>
  </div>
  `
  listaProdutos += produto
}

document.getElementById('produtosJSON').innerHTML = listaProdutos

// API CLIENTES

const url = `https://randomuser.me/api/?results=12`

fetch(url)
  .then(response => response.json())
  .then(dados => {
    // console.log(dados)
    // "dados" possui as informações da API em formato de objeto
    inserirDados(dados)
  })

function inserirDados(data) {
  var listaClientes = ''
  let dados = data.results
  // console.log(data.results)
  // "data.results" é um array que possui o objeto de cada pessoa

  for (i = 0; i < dados.length; i++) {
    let cliente = `
    <div class="cliente" style="width: 300px">
      <img src="${dados[i].picture.medium}">
      <p>Nome: ${dados[i].name.first} ${dados[i].name.last}</p>
      <p>Telefone: ${dados[i].phone}</p>
      <p>${dados[i].location.city} - ${dados[i].location.state}</p>
    </div>
    `
    listaClientes += cliente
  }
  document.getElementById('box-clientes').innerHTML = listaClientes
}
