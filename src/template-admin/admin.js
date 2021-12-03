function mostrarMenu(){
    document.getElementById('menuLateral').style.width = '180px';
}
function fecharMenu(){
    document.getElementById('menuLateral').style.width = '0px';
}
function sair(){
    confirm('Deseja sair?')
    if (confirm = true){
        localStorage.removeItem('login')
        localStorage.removeItem('senha')
        window.location.pathname = "src/Páginas-Cliente/Html/Index.html"
    }else{
    }
}