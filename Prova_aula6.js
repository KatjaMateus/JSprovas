const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

botao.addEventListener("click", ()=>{
    const imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))
    resultado.textContent=`Seu IMC é ${imc.toFixed(1)}`
})