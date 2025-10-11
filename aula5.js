function mudarLargura(){
    largura = Number(document.getElementById('largura').value)
    document.getElementById('caixa').style.width = largura+'px'
}

function mudarCor(){
    cor = document.getElementById('cor').value
    document.getElementById('caixa').style.backgroundColor = cor
}