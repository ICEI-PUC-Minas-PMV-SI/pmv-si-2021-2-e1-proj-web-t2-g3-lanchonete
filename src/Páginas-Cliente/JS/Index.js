/*function enviarDados(){
    let comentario = document.getElementById('cmt')
    localStorage.setItem('comentario' , comentario.value)
    exibir()
}

function exibir(){
    var caixa = localStorage.getItem("comentario")
    var comentario03 = document.getElementById('comentario03')
    comentario03.innerHTML = `
    <br><br>
    <br><br>
    <br><br>
    <div id="comentario01" >
    <h2>Jéssica Soares</h2>
    <img src="../midia/home/icons/user.icon.png" alt="user">
    <p>${caixa}</p>
    <img id="cmt01" src="../midia/home/icons/avaliacao.png" alt="avaliacao">
  </div>`
}
*/

/*let dados = localStorage.getItem(typeof("usuarioCorrente"))
console.log(dados)
if (dados == ''){
  let esconder = document.getElementById('adcomentario')
  esconder.style.display = 'none'
}
*/

function enviarComentario() {
  let text = localStorage.getItem("usuarioCorrente")
  let objeto = JSON.parse(text)
  let comentario = document.getElementById('cmt')
  localStorage.setItem('comentario', comentario.value)
  

  let nota = document.getElementById('nota')
  const novoCmt = document.createElement('div')

  novoCmt.innerHTML = `
  <div id="comentario" >
    <h2>${objeto.nome}</h2>
    <img src="../midia/home/icons/user.icon.png" alt="user">
    <p>${comentario.value}</p>
    <input id= "nota1" type= "text" value= "NOTA ${nota.value}">
  </div>
  `
  
  const vazia = document.createTextNode('')
  novoCmt.appendChild(vazia)
  
  const element = document.getElementById('caixa-cmt')
  element.appendChild(novoCmt)

  let esconder = document.getElementById('adcomentario')
  esconder.style.display = 'none'
}