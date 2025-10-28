function bichoQueVoceMatou(){
    goblins = Number(document.getElementById('goblins').value)
    esqueleto = Number(document.getElementById('esqueleto').value)
    gorc = Number(document.getElementById('gorc').value)
    boss = Number(document.getElementById('boss').value)
    goblin = goblins*1
    esqueletopontos = esqueleto*2
    gorcs = gorc*3
    bosspontos = boss*5

    pontostotal = goblin+esqueletopontos+gorcs+bosspontos
    document.getElementById('saida').innerHTML = 'A sua pontuação foi '+pontostotal

    if(pontostotal >= 60){
        document.getElementById('saidadeinformacao').innerHTML = '<b>Sua nota foi: '+'S'+' Você é muito bom.</b>'
    }else if(pontostotal >= 54){
        document.getElementById('saidadeinformacao').innerHTML = '<b>Sua nota foi: '+'A'+' Muito bem.</b>'
    }else if(pontostotal >= 48){
        document.getElementById('saidadeinformacao').innerHTML = '<b>Sua nota foi: '+'B'+' Você é bom.</b>'
    }else if(pontostotal >= 42){
        document.getElementById('saidadeinformacao').innerHTML = '<b>Sua nota foi: '+'C'+'  Melhore sua pontuação.</b>'
    }else if(pontostotal >= 36){
        document.getElementById('saidadeinformacao').innerHTML = '<b>Sua nota foi: '+'D'+'  Melhore sua pontuação.</b>'
    }else if(pontostotal >= 30){
        document.getElementById('saidadeinformacao').innerHTML = '<b>Sua nota foi: '+'E'+'  Melhore sua pontuação.</b>'
    }else{
        document.getElementById('saidadeinformacao').innerHTML = '<b>Sua nota foi: '+'F'+'  Melhore sua pontuação, tente mais vezes, você tem que estudar mais esse jogo para ganhar mais pontos.</b>'
    }
    }
