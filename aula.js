 function ladosDoDado(){
    numerododado = Number(document.getElementById('numerododado').value)
    girardado = Math.floor(Math.random() * numerododado )+1
    document.getElementById("resultado").innerHTML = "O seu numero sorteado foi:"+girardado
    if(girardado == 1){
       document.getElementById("resultado").innerHTML = "O seu numero sorteado foi:"+girardado+".<br> Erro crítico"
    }
    if(girardado == numerododado){
      document.getElementById("resultado").innerHTML = "O seu numero sorteado foi:"+girardado+".<br> Acerto crítico"
    }
 }