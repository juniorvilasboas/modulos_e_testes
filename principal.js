const simples = require('./lib/juros')

console.log('Juros simples: ', simples.jurosSimples(1000, 0.10, 10).toFixed(2))
console.log('Montante + juros: ', simples.montanteSimples(2500, 0.035, 6).toFixed(2))
console.log('Montante + juros composto: ', simples.montanteJurosCompostos(2500, 0.035, 6).toFixed(2))
console.log('juros composto: ', simples.jurosCompostos(1000, 0.1, 10).toFixed(2))