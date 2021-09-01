// function esperar(batata){
//     setTimeout(batata, 5000)
// }

// function ola(){
//     console.log('boa noite', new Date())
// }

// function tchau(){
//     console.log('tchau amigos', new Date())
// }

// esperar(ola)
// esperar(tchau)

function consultarCotacaoDoDolar(algoQueVaiAcontecerNoFuturo){
    console.log('consultarCotacaoDoDolar: iniciando a consulta da cotação')
    setTimeout(function(){
        console.log('consultarCotacaoDoDolar: finalizada a consulta da cotação')
algoQueVaiAcontecerNoFuturo(5.25)
       
    }, 5000)
}

function converterParaDolar(valorEmReais, algoQueVaiAcontecerNoFuturo){
consultarCotacaoDoDolar(function(cotacao){
console.log('onverterParaDolar:fui avisado que a consulta foi executada' , cotacao)
var valorEmDolar = valorEmReais * cotacao
algoQueVaiAcontecerNoFuturo(valorEmDolar)

})
}
var valor = 100 + 37*2 - 90
converterParaDolar(valor, function(resultado){
    console.log('principal: fui informado que meu calculo de cotação está pronto', resultado)
})


