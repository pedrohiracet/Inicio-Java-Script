function contagem(){
    inicio = Number(document.getElementById('inicio').value)
    final = Number(document.getElementById('termino').value)
    passo = Number(document.getElementById('passo').value)
    document.getElementById('retorno').innerHTML = ' '
    for(i=inicio; i<=final; i+=passo){
document.getElementById('retorno').innerHTML += i+'<br>'
}
}