const formulario = document.querySelector("#formulario")
const tarefa = document.querySelector("#tarefa")
const resultado = document.querySelector("#resultado")


formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    
    const nova_tarefa = document.createElement("li")
   

    const span = document.createElement("span")
    span.textContent = tarefa.value
    span.className="span"
    
    const input = document.createElement("input")
    input.type = "checkbox"
    
    input.addEventListener("click", ()=>{
        if(input.checked) {
            span.classList.add("riscado")
        }else{
            span.classList.remove("riscado")
        }
    })
  

    const button = document.createElement("button")
    button.className="interno"
    button.textContent = "Excluir"

    button.addEventListener("click", ()=>{
        resultado.removeChild(nova_tarefa)

    })

    nova_tarefa.append(input, span,  button)
    
    resultado.appendChild(nova_tarefa)

    tarefa.value = ""
    tarefa.focus()

})