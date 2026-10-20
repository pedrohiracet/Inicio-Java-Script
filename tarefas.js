function calcular(){
    texto = document.getElementById('texto').value.trim()
    tamanho = texto.length
    prima = texto.charAt(0)
    ult = texto.charAt(tamanho-1)
    vogais = texto.match(/[a,e,i,o,u]/gi).length
    document.getElementById('p').innerText = 'O tamanho do texto é ' + tamanho + ', a primeira letra é ' + prima + ', a última letra é ' + ult + ' e a quantidade de vogais é ' + vogais
}