// INSERIR PRODUTOS COM JAVASCRIPT

// PEGAR ARQUIVO JSON
const urlCardapioJSON = `http://localhost:3000/cardapio`

fetch(urlCardapioJSON)
  .then(response => response.json())
  .then(listaProdutos => {
    inserirProdutos(listaProdutos)
  })

function inserirProdutos(produtos) {
  // console.log(produtos)
  var arrayLanches = produtos[0].lanches
  var arrayLanchesFit = produtos[1].lanchesFit
  var arrayBebidas = produtos[2].bebidas
  var arraySobremesas = produtos[3].sobremesas

  // ADICIONAR LANCHES
  var listaProdutosLanches = ''

  for (i = 0; i < arrayLanches.length; i++) {
    let produto = `
    <div class="box-produto">
      <div class="image">
        <img src="${arrayLanches[i].imagem}" alt="${arrayLanches[i].titulo}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${arrayLanches[i].titulo}</h3>
          <p class="descricao-produto">${arrayLanches[i].descricao}</p>
        </div>
        <div class="precos">
          <p class="preco-novo-produto">R$ ${arrayLanches[i].preco}</p>
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

  // ADICIONAR LANCHES FIT
  var listaProdutosLanchesFit = ''

  for (i = 0; i < arrayLanchesFit.length; i++) {
    let produto = `
      <div class="box-produto">
        <div class="image">
          <img src="${arrayLanchesFit[i].imagem}" alt="${arrayLanchesFit[i].titulo}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${arrayLanchesFit[i].titulo}</h3>
            <p class="descricao-produto">${arrayLanchesFit[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${arrayLanchesFit[i].preco}</p>
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

  // ADICIONAR BEBIDAS
  var listaProdutosBebidas = ''

  for (i = 0; i < arrayBebidas.length; i++) {
    let produto = `
    <div class="box-produto">
      <div class="image-vertical">
        <img src="${arrayBebidas[i].imagem}" alt="${arrayBebidas[i].titulo}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${arrayBebidas[i].titulo}</h3>
          <p class="descricao-produto">${arrayBebidas[i].descricao}</p>
        </div>
        <div class="precos">
          <p class="preco-novo-produto">R$ ${arrayBebidas[i].preco}</p>
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

  // ADICIONAR SOBREMESAS
  var listaProdutosSobremesas = ''

  for (i = 0; i < arraySobremesas.length; i++) {
    let produto = `
    <div class="box-produto">
      <div class="image-vertical">
        <img src="${arraySobremesas[i].imagem}" alt="${arraySobremesas[i].titulo}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${arraySobremesas[i].titulo}</h3>
          <p class="descricao-produto">${arraySobremesas[i].descricao}</p>
        </div>
        <div class="precos">
          <p class="preco-novo-produto">R$ ${arraySobremesas[i].preco}</p>
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
}

//===================================================================

// API CLIENTES

const urlUsuarios = `https://randomuser.me/api/?results=12`

fetch(urlUsuarios)
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
