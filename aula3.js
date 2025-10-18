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
    document.getElementById('resultadodassomas').innerHTML = soma
}

function subtrair(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)  
    subtracao = n1-n2
    document.getElementById('resultadodassomas').innerHTML = subtracao
}

function multiplicar(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)  
    multiplicacao = n1*n2
    document.getElementById('resultadodassomas').innerHTML = multiplicacao
}

function dividir(){
   n1 = Number(document.getElementById('n1').value)
   n2 = Number(document.getElementById('n2').value)
   divisao = n1/n2
   document.getElementById('resultadodassomas').innerHTML = divisao
}

function potencia(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value) 
    potenciacao = n1**n2
    document.getElementById('resultadodassomas').innerHTML = potenciacao
}

function porcentagem(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value) 
    porcento = (n1/100)*n2
    document.getElementById('resultadodassomas').innerHTML = porcento+'%'
}

function resultado(){
    numero1 = Number(document.getElementById('n1').value)
    numero2 = Number(document.getElementById('n2').value) 
    soma = numero1+numero2
    document.getElementById('resultado').innerHTML += soma+'<br>'
    subtracao = numero1-numero2
    document.getElementById('resultado').innerHTML += subtracao+'<br>'
    multiplicacao = numero1*numero2
    document.getElementById('resultado').innerHTML += multiplicacao+'<br>'
    divisao = numero1/numero2
    document.getElementById('resultado').innerHTML += divisao+'<br>'
    potenciacao = numero1**numero2
    document.getElementById('resultado').innerHTML += potenciacao+'<br>'
    porcento = (numero1*100)/numero2
    document.getElementById('resultado').innerHTML += porcento+'%<br>'
}
function calcular(){
    number1 = Number(document.getElementById('number1').value)
    number2 = Number(document.getElementById('number2').value)

    adicao = number1+number2
    subtracao = number1-number2
    multiplicacao = number1*number2
    divisao = number1/number2
    potenciacao = number1**number2
    porcento = (number1*100)/number2
    document.getElementById('calculado').innerHTML =
    'adição: '+adicao+
    '<br>subtração: '+subtracao+
    '<br>multiplicação: '+multiplicacao+
    '<br>divisão: '+divisao+
    '<br>potenciação: '+potenciacao+
    '<br>porcentagem: '+porcento+'%'
}


