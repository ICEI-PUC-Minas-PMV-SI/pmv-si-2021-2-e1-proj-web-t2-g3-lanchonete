// PEGAR ARQUIVO JSON
const urlCardapioJSON = `http://localhost:3000/cardapio`

fetch(urlCardapioJSON)
  .then(response => response.json())
  .then(listaProdutos => {
    inserirProdutos(listaProdutos)
  })

// INSERIR PRODUTOS COM JAVASCRIPT

function inserirProdutos(produtos) {
  console.log(produtos)
  var arrayLanches = produtos[0].lanches
  var arrayLanchesFit = produtos[1].lanchesFit
  var arrayBebidas = produtos[2].bebidas
  var arraySobremesas = produtos[3].sobremesas
  var arrayPromocoes = produtos[4].promocoes

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

  document.getElementById('produtosLanches').innerHTML = listaProdutosLanches

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

  document.getElementById('produtosLanchesFit').innerHTML =
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

  document.getElementById('produtosBebidas').innerHTML = listaProdutosBebidas

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

  document.getElementById('produtosSobremesas').innerHTML =
    listaProdutosSobremesas

  //===================================================================

  // ADICIONAR PROMOÇÕES
  var listaProdutosPromocoes = ''

  for (i = 0; i < arrayPromocoes.length; i++) {
    let produto = `
    <div class="box-produto">
      <div class="image">
        <img src="${arrayPromocoes[i].imagem}" alt="${arrayPromocoes[i].titulo}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${arrayPromocoes[i].titulo}</h3>
          <p class="descricao-produto">${arrayPromocoes[i].descricao}
          </p>
        </div>
        <div class="precos">
          <div class="caixa-preco-antigo">
            <img src="../midia/cardapio/icons/line-icon.png" alt="Ícone linha" class="line-icon"/>
            <p class="preco-antigo-produto">R$ ${arrayPromocoes[i].precoAntigo}</p>
          </div>
          <p class="preco-novo-produto">R$ ${arrayPromocoes[i].precoNovo}</p>
        </div>
      </div>
      <a href="#"><img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon"/></a>
    </div>
    `
    listaProdutosPromocoes += produto
  }

  document.getElementById('produtosPromocoes').innerHTML =
    listaProdutosPromocoes
}
