const converter_distancia = () => {
    const valor_metrico = parseFloat(document.getElementById('valor_metrico').value)
    const imperial = document.getElementById('imperial').value
    const resultado = document.getElementById('resultado')

    if (valor_metrico <= 0) {
        alert("Por favor, insira um valor válido de distância.")
        return
    }
    const getConvesaoImperial = (distancia) => {
        switch (distancia) {
            case 'jardas':
                return 1.094
            case 'pes':
                return 3.281
            case 'polegadas':
                return 39.37
            case 'milhas':
                return 0.000621
            default:
                return 0
        }
    }
    const conversao_imperial = getConvesaoImperial(imperial)
    const distancia_imperial = (valor_metrico * conversao_imperial).toFixed(2)

    resultado.textContent=`Distância de ${valor_metrico} metro(s) em ${imperial} é ${distancia_imperial}.`
    botao.addEventListener("click", (e)=>{    
        e.preventDefault()
})
}
document.getElementById('botao').addEventListener("click", converter_distancia)