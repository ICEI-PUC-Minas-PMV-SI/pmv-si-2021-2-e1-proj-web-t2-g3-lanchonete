if (localStorage.getItem('db_produtosSelecionados')) {
    let produtosSelecionados = JSON.parse(
      localStorage.getItem('db_produtosSelecionados')
    )
    let listaProdutos = document.getElementById('lista-produtos')
    listaProdutos.innerHTML = ''
  
    let precos = []
  
    for (produto of produtosSelecionados) {
      listaProdutos.innerHTML += `
      <div>
        <p id="descrição" >${produto.nomeProduto} </p>
      </div>
      <div>
        <p id="total1" >R$${produto.precoProduto}</p>
      </div>
      `
      precos.push(parseFloat(produto.precoProduto).toFixed(2))
    }
  
    let soma = 0
    for (preco of precos) {
      soma += parseFloat(preco)
    }
  
    let valorTotal = document.getElementById('valor-total')
    valorTotal.innerHTML = 'R$' + soma.toFixed(2)
  } else {
    alert('Não há produtos selecionados')
  }
  