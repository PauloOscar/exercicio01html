function rolarDado() {
   var aleatorio = Math.floor(Math.random() *6+1)
   return aleatorio 
    }
var resultado = rolarDado()
console.log(".." + resultado)

function criarTabuleiro(casas){
    var tabuleiro = []
    for(var i = 1 ; i <= casas; i++){
        tabuleiro.push({
            posicao: i,
            tipo: 'normal'
        })
    }

return tabuleiro
}

var resultado = criarTabuleiro(20)
console.log(resultado)
