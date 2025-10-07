function mensagem(){
   
    // Entrada de informações
    nome = document.getElementById('nome').value
    idade = Number(document.getElementById('idade').value)
    cidade = document.getElementById('cidade').value
    genero = document.getElementById('genero').value

    // Saída de informações
    document.getElementById('texto').innerHTML = 
    '<b>Informações do usuário:</b>'+
    '<br>Nome: '+nome+
    '<br>Idade: '+idade+
    '<br>Cidade: '+cidade+
    '<br>Gênero: '+genero
}

function somar(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)
    soma = n1+n2
    document.getElementById('resultado').innerHTML = soma
}

function subtrair(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)  
    subtracao = n1-n2
    document.getElementById('resultado').innerHTML = subtracao
}

function multiplicar(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)  
    multiplicacao = n1*n2
    document.getElementById('resultado').innerHTML = multiplicacao
}

function dividir(){
   n1 = Number(document.getElementById('n1').value)
   n2 = Number(document.getElementById('n2').value)
   divisao = n1/n2
   document.getElementById('resultado').innerHTML = divisao
}

function potencia(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value) 
    potenciacao = n1**n2
    document.getElementById('resultado').innerHTML = potenciacao
}

function porcentagem(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value) 
    porcento = (n1/100)*n2
    document.getElementById('resultado').innerHTML = porcento
}