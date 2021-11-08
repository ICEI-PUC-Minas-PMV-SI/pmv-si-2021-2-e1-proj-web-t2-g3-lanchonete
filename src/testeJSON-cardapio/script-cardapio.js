var listaProdutos = ''

for (i = 0; i < db.dados.length; i++) {
  var produto = `
  <div class="box-produto">
    <div class="image">
      <img src="${db.dados[i].imagem}"/>
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
