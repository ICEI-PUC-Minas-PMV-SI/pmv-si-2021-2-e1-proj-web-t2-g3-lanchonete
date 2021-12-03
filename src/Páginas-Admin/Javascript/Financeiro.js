var products = [
    {pedido:'X-burguer', value:2.30, data:'20-11-2020'}, 
    {pedido:'X-bacon', value:13.40, data:'20-11-2020'}, 
    {pedido:'X-Salada', value:1.2, data:'20-11-2020'},
    {pedido:'X-burguer', value:2.30, data:'20-11-2020'}, 
    {pedido:'X-bacon', value:13.40, data:'20-11-2020'}, 
    {pedido:'X-Salada', value:1.2, data:'20-11-2020'},
    {pedido:'X-burguer', value:2.30, data:'20-11-2020'}, 
    {pedido:'X-bacon', value:13.40, data:'20-11-2020'}, 
    {pedido:'X-Salada', value:1.2, data:'20-11-2020'},
    {pedido:'X-burguer', value:2.30, data:'20-11-2020'}, 
    {pedido:'X-bacon', value:13.40, data:'20-11-2020'}, 
    {pedido:'X-Salada', value:1.2, data:'20-11-2020'},
    {pedido:'X-burguer', value:2.30, data:'20-11-2020'}, 
    {pedido:'X-bacon', value:13.40, data:'20-11-2020'}, 
    {pedido:'X-Salada', value:5.80, data:'20-11-2020'}
  ]
  localStorage.setItem('produtos', JSON.stringify(products))
  


 
var total = products.reduce(getTotal, 0);
function getTotal(total, item) {
return total + (item.value);
}
var vendasHoje = document.getElementById('valor2')
valor2.innerHTML = 'R$ ' + total.toFixed(2)
console.log(valor2.value)
now = new Date
document.write (now.getDay() + now.getDate() + now.getMonth() + now.getFullYear() )
console.log(now)