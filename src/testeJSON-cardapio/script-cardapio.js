// INSERIR PRODUTOS COM JAVASCRIPT

// LANCHES
var listaProdutosLanches = ''

for (i = 0; i < db.lanches.length; i++) {
  let produto = `
  <div class="box-produto">
    <div class="image">
      <img src="${db.lanches[i].imagem}" alt="${db.lanches[i].titulo}"/>
    </div>
    <div class="produto">
      <div>
        <h3 class="nome-produto">${db.lanches[i].titulo}</h3>
        <p class="descricao-produto">${db.lanches[i].descricao}</p>
      </div>
      <div class="precos">
        <p class="preco-novo-produto">R$ ${db.lanches[i].preco}</p>
      </div>
    </div>
    <div>
      <a href="#">
        <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" />
      </a>
    </div>
  </div>
  `
  listaProdutosLanches += produto
}

document.getElementById('produtosJavaScriptLanches').innerHTML =
  listaProdutosLanches

//===================================================================

// LANCHES FIT
var listaProdutosLanchesFit = ''

for (i = 0; i < db.lanchesFit.length; i++) {
  let produto = `
    <div class="box-produto">
      <div class="image">
        <img src="${db.lanchesFit[i].imagem}" alt="${db.lanchesFit[i].titulo}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${db.lanchesFit[i].titulo}</h3>
          <p class="descricao-produto">${db.lanchesFit[i].descricao}</p>
        </div>
        <div class="precos">
          <p class="preco-novo-produto">R$ ${db.lanchesFit[i].preco}</p>
        </div>
      </div>
      <div>
        <a href="#">
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" />
        </a>
      </div>
    </div>
    `
  listaProdutosLanchesFit += produto
}

document.getElementById('produtosJavaScriptLanchesFit').innerHTML =
  listaProdutosLanchesFit

//===================================================================

// BEBIDAS
var listaProdutosBebidas = ''

for (i = 0; i < db.bebidas.length; i++) {
  let produto = `
  <div class="box-produto">
    <div class="image-vertical">
      <img src="${db.bebidas[i].imagem}" alt="${db.bebidas[i].titulo}"/>
    </div>
    <div class="produto">
      <div>
        <h3 class="nome-produto">${db.bebidas[i].titulo}</h3>
        <p class="descricao-produto">${db.bebidas[i].descricao}</p>
      </div>
      <div class="precos">
        <p class="preco-novo-produto">R$ ${db.bebidas[i].preco}</p>
      </div>
    </div>
    <div>
      <a href="#">
        <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" />
      </a>
    </div>
  </div>
  `
  listaProdutosBebidas += produto
}

document.getElementById('produtosJavaScriptBebidas').innerHTML =
  listaProdutosBebidas

//===================================================================

// SOBREMESAS
var listaProdutosSobremesas = ''

for (i = 0; i < db.sobremesas.length; i++) {
  let produto = `
  <div class="box-produto">
    <div class="image-vertical">
      <img src="${db.sobremesas[i].imagem}" alt="${db.sobremesas[i].titulo}"/>
    </div>
    <div class="produto">
      <div>
        <h3 class="nome-produto">${db.sobremesas[i].titulo}</h3>
        <p class="descricao-produto">${db.sobremesas[i].descricao}</p>
      </div>
      <div class="precos">
        <p class="preco-novo-produto">R$ ${db.sobremesas[i].preco}</p>
      </div>
    </div>
    <div>
      <a href="#">
        <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" />
      </a>
    </div>
  </div>
  `
  listaProdutosSobremesas += produto
}

document.getElementById('produtosJavaScriptSobremesas').innerHTML =
  listaProdutosSobremesas

//===================================================================

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
  let listaClientes = ''
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
