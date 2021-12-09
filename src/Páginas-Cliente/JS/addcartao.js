function cadastroCartao(){
  var numerocartao = document.getElementById("numero")
  var validadecartao = document.getElementById("validade")
  var cvccartao = document.getElementById("cvc")
  var nomecartao1 = document.getElementById("nomecartao")
  var cpfcartao = document.getElementById("cpftitular")

  var dadoscartao = JSON.parse(localStorage.getItem("DadosCartao"))

  if(dadoscartao == null) {
  localStorage.setItem("DadosCartao", "[]");
  dadoscartao = [];
}
  var auxRegistro = {
   numero: numero.value,
   validade: validade.value,
   cvc: cvc.value,
   nome: nomecartao1.value,
   cpf:cpftitular.value
 }

  dadoscartao.push(auxRegistro);
  localStorage.setItem("dadoscartao", JSON.stringify(dadoscartao));
}





function acao(){
  let container1 = document.getElementById('container')

  container1.style.display = 'block'
}