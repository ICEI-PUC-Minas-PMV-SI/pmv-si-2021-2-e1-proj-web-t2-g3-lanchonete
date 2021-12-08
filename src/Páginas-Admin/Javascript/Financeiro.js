 var arr = [
    {pedido:'X-burguer', valor:2.30, dia:8, mes:5, ano:2021}, 
    {pedido:'X-bacon', valor:13.40, dia:8, mes:11, ano:2021}, 
    {pedido:'X-Salada', valor:1.25, dia:9, mes:11, ano:2021},
    {pedido:'X-burguer', valor:2.30, dia:10, mes:11, ano:2021}, 
    {pedido:'X-bacon', valor:13.40, dia:18, mes:5, ano:2021}, 
    {pedido:'X-Salada', valor:1.2, dia:18, mes:11, ano:2021},
    {pedido:'X-burguer', valor:2.30, dia:20, mes:5, ano:2021}, 
    {pedido:'X-bacon', valor:13.40, dia:15, mes:11, ano:2021}, 
    {pedido:'X-Salada', valor:1.2, dia:15, mes:5, ano:2021},
    {pedido:'X-burguer', valor:2.30, dia:15, mes:5, ano:2021}, 
    {pedido:'X-bacon', valor:13.40, dia:15, mes:11, ano:2021}, 
    {pedido:'X-Salada', valor:1.2, dia:15, mes:5, ano:2021},
    {pedido:'X-burguer', valor:2.30, dia:15, mes:11, ano:2021}, 
    {pedido:'X-bacon', valor:13.40, dia:15, mes:5, ano:2021}, 
    {pedido:'X-Salada', valor:10.80, dia:15, mes:5, ano:2021}
  ]
  var soma2 = 0
  for(var k = 0; k<arr.length; k++){
    var hoje2 = new Date();
    var data2 = hoje2.getDate();
    var arra = arr[k].dia

    if(data2 == arra){
    soma2 += parseFloat(arr[k].valor)
    var atual = document.getElementById('valor2')
    console.log(atual)
    atual.value = 'R$ ' + soma2.toFixed(2)

  }}

  var soma3 = 0
  for(var i = 0; i<arr.length; i++){
    var hoje3 = new Date();
    var data3 = hoje3.getMonth();
    var arra1 = arr[i].mes

    if(data3 == arra1){
    soma3 += parseFloat(arr[i].valor)
    var atual2 = document.getElementById('valor1')
    console.log(atual2)
    atual2.value = 'R$ ' + soma3.toFixed(2)

  }}
