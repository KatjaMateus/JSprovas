const formulario = document.querySelector("#formulario")
const anotacao = document.querySelector("#anotacao")
const resultado = document.querySelector("#resultado")

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    
    const nova_anotacao = document.createElement("li")

    const span = document.createElement("span")
    span.textContent = anotacao.value
    span.className="span"
    
    const button = document.createElement("button")
    button.className="interno"
    button.textContent = "Excluir"

    button.addEventListener("click", ()=>{
        resultado.removeChild(nova_anotacao)
    })

    nova_anotacao.append(span, button)
    
    resultado.appendChild(nova_anotacao)

    anotacao.value = ""
    anotacao.focus()
})