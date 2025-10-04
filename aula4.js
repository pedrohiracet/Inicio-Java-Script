function numero(){
    tarefa = Number(document.getElementById('numero').value)

     document.getElementById('saida').innerHTML = tarefa

     if( tarefa > 0 ){        //O numero é maior que 0?
        alert('positivo')

     }else if(numero < 0){    // se não, se o numero for menor que 0: 
        alert('Negativo')
     }else{                     // Se não:
        alert('Neutro')   
     }

 }