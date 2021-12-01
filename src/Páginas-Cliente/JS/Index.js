function enviarDados(){
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

