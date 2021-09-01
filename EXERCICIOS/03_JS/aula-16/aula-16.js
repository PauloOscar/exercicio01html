var celular = {
    tela: 4.7,
    marca: 'samsung',
    memoria: '124 giga',
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
var iphone = {
    tela: 5.7,
    marca: 'apple',
    memoria: '164 giga',
    cameras:[
        {
            resolucao: '200px',
            zoom: 80
        }
    ]
}
function demonstrar(produto) {
console.log('demonstrando o produto ' + produto.marca)
    for (var indice = 0; indice < produto.cameras.length; indice++) {
    console.log('demonstrando a camera ' + produto.cameras[indice].resolucao + '/' + produto.cameras[indice].zoom)
    }
}
demonstrar(celular)

demonstrar(iphone)