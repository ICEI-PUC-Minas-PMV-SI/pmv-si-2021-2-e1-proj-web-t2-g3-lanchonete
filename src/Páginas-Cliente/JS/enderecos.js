var filtro = document.getElementById('cep');
var tabela = document.getElementById('tabela');
filtro.onkeyup = function() {
    var nomeFiltro = filtro.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
};
var filtrar = document.getElementById('bairro');
var tabela2 = document.getElementById('tabela');
filtrar.onkeyup = function() {
    var nomeFiltrar = filtrar.value;
    for (var i = 1; i < tabela2.rows.length; i++) {
        var conteudoCelula2 = tabela.rows[i].cells[1].innerText;
        var corresponde2 = conteudoCelula2.toLowerCase().indexOf(nomeFiltrar) >= 0;
        tabela.rows[i].style.display = corresponde2 ? '' : 'none';
    }
};