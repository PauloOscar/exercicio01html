

function consultarCotacaoDoDolar(callback){
    setTimeout(function()){
        return (5.25)
    },3000)
}
function converterParaReais(valorEmDolar, callback){
    consultarCotacaoDoDolar(function(cotacao){
        var resultado = valorEmDolar * cotacao
        callback(resultado)
    })
}
var valorEmDolar = 100
converterParaReais(valorEmDolar, function(resultado){
    console.log('Valor em Dolar:' + valorEmDolar)
    console.log('Valor em Reais:' + resultado)
})