var celular ={
    tela: 4.7,
    marca: "samsung",
    memoria: "124 giga",
    cameras:[
{
    resolucao: '16px',
    zoom: 8
    },
    {
      resolucao: '40px',
      zoom: 16
    }
]

}

function demonstrar(produto) {
console.log('demonstrando o produto ' + produto.marca)
console.log('demonstrando o produto ' + produto.cameras[0].resolucao +'/'+ produto.cameras[0].zomm)
console.log('demonstrando o produto' + produto.cameras[1].resolucao +'/'+ produto.cameras[1].zoom)
}
demonstrar(celular)