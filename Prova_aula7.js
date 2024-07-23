const calcular_gorjeta = () => {
    const valor_conta = parseFloat(document.getElementById('valor_conta').value)
    const servico = document.getElementById('servico').value
    const resultado = document.getElementById('resultado')

    if (valor_conta <= 0) {
        alert("Por favor, insira um valor válido para a conta.")
        return
    }
    const getGorjeta_Porcentagem = (qualidade) => {
        switch (qualidade) {
            case 'bom':
                return 0.20
            case 'regular':
                return 0.10
            case 'ruim':
                return 0
            default:
                return 0
        }
    }
    const gorjeta_porcentagem = getGorjeta_Porcentagem(servico)
    const gorjeta = (valor_conta * gorjeta_porcentagem).toFixed(2)

    resultado.textContent=`Gorjeta é R$ ${gorjeta}.`
}
document.getElementById('botao').addEventListener("click", calcular_gorjeta)
