if (localStorage.getItem('db_produtosSelecionados')) {
    let produtosSelecionados = JSON.parse(
      localStorage.getItem('db_produtosSelecionados')
    )
    let listaProdutos = document.getElementById('resumop')
    listaProdutos.innerHTML = ''
  
    let precos = []
  
    for (produto of produtosSelecionados) {
      listaProdutos.innerHTML += `
      <div id="resumop">
      <p id="descriçãop">${produto.nomeProduto}</p>
      <p id="preçop">R$${produto.precoProduto}</p>
    </div>
      `
      precos.push(parseFloat(produto.precoProduto).toFixed(2))
    }
  
    let soma = 0
    for (preco of precos) {
      soma += parseFloat(preco)
    }
  
    let valorTotal = document.getElementById('valortotal02')
    valorTotal.innerHTML = 'R$' + soma.toFixed(2)
  }




  if (localStorage.getItem('db_produtosSelecionados')) {
    let produtosSelecionados = JSON.parse(
      localStorage.getItem('db_produtosSelecionados')
    )
    let listaProdutos = document.getElementById('resumop')
    listaProdutos.innerHTML = ''
  
    let precos = []
  
    for (produto of produtosSelecionados) {
      listaProdutos.innerHTML += `
      <div id="resumop">
      <p id="descriçãop">${produto.nomeProduto}</p>
      <p id="preçop">R$${produto.precoProduto}</p>
    </div>
      `
      precos.push(parseFloat(produto.precoProduto).toFixed(2))
    }
  
    let soma = 5
    for (preco of precos) {
      soma += parseFloat(preco)
    }
  
    let valorTotal = document.getElementById('valortotal02')
    valorTotal.innerHTML = 'R$' + soma.toFixed(2)

  }




function clique(){
  alert('Seu pedido foi realizado com sucesso, agradecemos a preferência!')
}

  