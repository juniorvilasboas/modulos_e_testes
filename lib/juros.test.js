const juros = require('./juros')

test('juroSimples', () => {
    const C = 2500
    const I = 0.10
    const T = 1
    const jurosEsperado = 250
    const jurosSimples = juros.jurosSimples(C,I,T) 
    expect(jurosSimples).toBe(jurosEsperado)
})

test('Montante Simples', () => {
    const C = 2500
    const I = 0.10
    const T = 1
    const montanteEsperado = 2750
    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 250)
    const montanteSimples = juros.pure.montanteSimples({ jurosSimples })
    const montante = montanteSimples(C,I,T)
    expect(jurosSimples.mock.calls[0]).toEqual([C,I,T])
    //const montante = juros.montanteSimples(C,I,T) 
    expect(montante).toBe(montanteEsperado)
})

test('montanteCompostos', () => {
    const C = 2500
    const I = 0.10
    const T = 1
    const montanteCompostosEsperado = 2750
    const montanteJurosCompostos = juros.montanteJurosCompostos(C,I,T) 
    expect(montanteJurosCompostos).toBe(montanteCompostosEsperado)
})

test('jurosCompostos', () => {
    const C = 1000
    const I = 0.10
    const T = 2

    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => C+(C*I*T))

    const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
    const jurosCalc = jurosCompostos(C,I,T)

    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C,I,T])
    expect(jurosCalc).toBe(200)
})