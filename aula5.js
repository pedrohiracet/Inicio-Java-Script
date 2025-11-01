function editarCaixa(){
    caixa = document.getElementById('caixa')

    texto = document.getElementById('texto').value
    caixa.innerText = texto

    largura = Number(document.getElementById('largura').value)
    caixa.style.width = largura+'px'

    cor = document.getElementById('cor').value
    caixa.style.backgroundColor = cor
    
    altura = Number(document.getElementById('altura').value)
    caixa.style.height = altura+'px'

    radius = Number(document.getElementById('radius').value)
    caixa.style.borderRadius = radius+'px'

    grossura = Number(document.getElementById('grossura').value)


    tipo = document.getElementById('tipo').value

    cor2 = document.getElementById('cor2').value

    caixa.style.border = grossura+'px '+tipo+' '+cor2

    tempo = Number(document.getElementById('tempo').value)
    caixa.style.transition = tempo+'s'
    
}