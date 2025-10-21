function bichoQueVoceMatou(){
    goblins = Number(document.getElementById('goblins').value)
    esqueleto = Number(document.getElementById('esqueleto').value)
    boss = Number(document.getElementById('boss').value)
    goblin = goblins*1
    esqueletopontos = esqueleto*2
    bosspontos = boss*5

    pontostotal = goblin+esqueletopontos+bosspontos
    document.getElementById('saidadeinformacao').innerHTML = 'A sua pontuação foi '+pontostotal
}