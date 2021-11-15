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

    if (produtos[i].categoria == 'Lanches') {
      let produto = `
      <div class="box-produto">
        <div class="image">
          <img src="${produtos[i].imagem}" alt="${produtos[i].titulo}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].titulo}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
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

    // ADICIONAR LANCHES FIT

    if (produtos[i].categoria == 'Lanches Fit') {
      let produto = `
      <div class="box-produto">
        <div class="image">
          <img src="${produtos[i].imagem}" alt="${produtos[i].titulo}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].titulo}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
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

    // ADICIONAR BEBIDAS

    if (produtos[i].categoria == 'Bebidas') {
      let produto = `
      <div class="box-produto">
        <div class="image-vertical">
          <img src="${produtos[i].imagem}" alt="${produtos[i].titulo}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].titulo}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
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

    // ADICIONAR SOBREMESAS

    if (produtos[i].categoria == 'Sobremesas') {
      let produto = `
      <div class="box-produto">
        <div class="image-vertical">
          <img src="${produtos[i].imagem}" alt="${produtos[i].titulo}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].titulo}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
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

    // ADICIONAR PROMOÇÕES

    if (produtos[i].categoria == 'Promoções') {
      let produto = `
      <div class="box-produto">
      <div class="image">
        <img src="${produtos[i].imagem}" alt="${produtos[i].titulo}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${produtos[i].titulo}</h3>
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
      <a href="#"><img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon"/></a>
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
