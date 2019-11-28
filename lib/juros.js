const jurosSimples = (c, i, t) => c * i * t

const montanteSimples = ({ jurosSimples }) => (c, i, t) => c + jurosSimples(c, i, t)

// M = c * (1 + i)^n
const montanteJurosCompostos = (c, i, t) => c * Math.pow((1 + i), t)

const jurosCompostos = ({ montanteJurosCompostos }) => (c, i, t) => montanteJurosCompostos(c, i, t) - c

module.exports = {
    jurosSimples,
    montanteSimples: montanteSimples({ jurosSimples }),
    montanteJurosCompostos,
    jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
    pure: {
        montanteSimples, 
        jurosCompostos
    }
}