// PEGAR ARQUIVO JSON
const urlCardapioJSON = `http://localhost:3000/cardapio`

fetch(urlCardapioJSON)
  .then(response => response.json())
  .then(listaProdutos => {
    inserirProdutos(listaProdutos)
  })

// INSERIR PRODUTOS COM JAVASCRIPT

function inserirProdutos(produtos) {
  // console.log(produtos)

  var listaProdutosLanches = ''
  var listaProdutosLanchesFit = ''
  var listaProdutosBebidas = ''
  var listaProdutosSobremesas = ''
  var listaProdutosPromocoes = ''

  for (i = 0; i < produtos.length; i++) {
    // ADICIONAR LANCHES

    if (produtos[i].categoria.toUpperCase() == 'LANCHES') {
      let produto = `
      <div class="box-produto">
        <div class="image">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosLanches += produto
    }

    // ADICIONAR LANCHES FIT

    if (produtos[i].categoria.toUpperCase() == 'LANCHES FIT') {
      let produto = `
      <div class="box-produto">
        <div class="image">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosLanchesFit += produto
    }

    // ADICIONAR BEBIDAS

    if (produtos[i].categoria.toUpperCase() == 'BEBIDAS') {
      let produto = `
      <div class="box-produto">
        <div class="image-vertical">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosBebidas += produto
    }

    // ADICIONAR SOBREMESAS

    if (produtos[i].categoria.toUpperCase() == 'SOBREMESAS') {
      let produto = `
      <div class="box-produto">
        <div class="image-vertical">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosSobremesas += produto
    }

    // ADICIONAR PROMOÇÕES

    if (produtos[i].categoria.toUpperCase() == 'PROMOÇÕES') {
      let produto = `
      <div class="box-produto">
      <div class="image">
        <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${produtos[i].nome}</h3>
          <p class="descricao-produto">${produtos[i].descricao}
          </p>
        </div>
        <div class="precos">
          <div class="caixa-preco-antigo">
            <img src="../midia/cardapio/icons/line-icon.png" alt="Ícone linha" class="line-icon"/>
            <p class="preco-antigo-produto">R$ ${produtos[i].precoAntigo}</p>
          </div>
          <p class="preco-novo-produto">R$ ${produtos[i].precoNovo}</p>
        </div>
      </div>
        <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].precoNovo}')" />
    </div>
      `
      listaProdutosPromocoes += produto
    }
  }

  document.getElementById('produtosLanches').innerHTML = listaProdutosLanches
  document.getElementById('produtosLanchesFit').innerHTML =
    listaProdutosLanchesFit
  document.getElementById('produtosBebidas').innerHTML = listaProdutosBebidas
  document.getElementById('produtosSobremesas').innerHTML =
    listaProdutosSobremesas
  document.getElementById('produtosPromocoes').innerHTML =
    listaProdutosPromocoes
}

let numeroCarrinho = document.getElementById('numero-carrinho')

function selecionarProduto(nome, preco) {
  if (localStorage.getItem('db_produtosSelecionados')) {
    let array_produtosSelecionados = JSON.parse(
      localStorage.getItem('db_produtosSelecionados')
    )

    numeroCarrinho.innerHTML = array_produtosSelecionados.length + 1
    numeroCarrinho.style.display = 'block'

    let produtosSelecionados = {
      nomeProduto: nome,
      precoProduto: preco
    }

    array_produtosSelecionados.push(produtosSelecionados)

    localStorage.setItem(
      'db_produtosSelecionados',
      JSON.stringify(array_produtosSelecionados)
    )
  } else {
    let array_produtosSelecionados = []

    numeroCarrinho.innerHTML = 1
    numeroCarrinho.style.display = 'block'

    let produtosSelecionados = {
      nomeProduto: nome,
      precoProduto: preco
    }

    array_produtosSelecionados.push(produtosSelecionados)

    localStorage.setItem(
      'db_produtosSelecionados',
      JSON.stringify(array_produtosSelecionados)
    )
  }
}

function limparCarrinho() {
  localStorage.removeItem('db_produtosSelecionados')

  numeroCarrinho.innerHTML = 0
  numeroCarrinho.style.display = 'block'
}
