window.onload = resgatarTexto

function resgatarTexto(){
    texto = localStorage.getItem('texto')
    if(texto){
        document.getElementById('saida').innerHTML = texto


    }
}
function salvarTexto(){
    texto = document.getElementById('texto').value
    localStorage.setItem('texto',texto)
    document.getElementById('saida').innerHTML = texto
}