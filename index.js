let resultado = classificandoJogador(93,10)
console.log(`O Herói tem de saldo de ${resultado.saldoDeRankeadas} está no nível de ${resultado.classificacaoElo}`)

function classificandoJogador(saldoVitorias,saldoDerrotas){
    let saldoDeRankeadas = saldoVitorias - saldoDerrotas
    let classificacaoElo = ""
    if(saldoVitorias<10){
        classificacaoElo = "Ferro"
    }
    else if(11<=saldoVitorias && saldoVitorias<=20){
        classificacaoElo = "Bronze"
    }
    else if(21<=saldoVitorias && saldoVitorias<=50){
        classificacaoElo = "Prata"
    }
    else if(51<=saldoVitorias && saldoVitorias<=80){
        classificacaoElo = "Ouro"
    }
    else if(81<=saldoVitorias && saldoVitorias<=90){
        classificacaoElo = "Diamante"
    }
    else if(91<=saldoVitorias && saldoVitorias<=100){
        classificacaoElo = "Lendário"
    }
    else{
        classificacaoElo = "Imortal"
    }
    return {saldoDeRankeadas,classificacaoElo}
}