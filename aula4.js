function numero(){
    tarefa = Number(document.getElementById('numero').value)

     document.getElementById('saida0').innerHTML = tarefa

     if( tarefa > 0 ){        //O numero é maior que 0?
        alert('positivo')

     }else if(tarefa < 0){    // se não, se o numero for menor que 0: 
        alert('Negativo')
     }else{                     // Se não:
        alert('Neutro')   
     }
}

function validarsenha(){
   senha = document.getElementById('senha').value

   if(senha == 'super123'){
      document.getElementById('saida').innerHTML = "<p class='acerto'>ACESSO LIBERADO</p>"
   }else{
      document.getElementById('saida').innerHTML = "<p class='erro'>ACESSO NEGADO</p>"
   }
}