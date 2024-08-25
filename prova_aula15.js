const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#nome")
const telefone = document.querySelector("#telefone")
const email = document.querySelector("#email")
const resultado = document.querySelector("#resultado")
const botao = document.querySelector("#botao")

const meus_contatos = JSON.parse(localStorage.getItem("meus_contatos")) || []
let id_contador = meus_contatos.length ? meus_contatos[meus_contatos.length - 1].id + 1 : 1

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    if(botao.textContent.trim() === "Editar"){
        const lista_contatos = JSON.parse(localStorage.getItem("meus_contatos")) || []
        const id_do_editado = JSON.parse(localStorage.getItem("id_do_editado"))
        lista_contatos.forEach((element) => {
            if(id_do_editado === element.id){
                element.nome = nome.value
                element.telefone = telefone.value
                element.email = email.value
                localStorage.setItem("meus_contatos", JSON.stringify(lista_contatos))
                window.location.reload()
                botao.textContent = "Cadastrar"
                limparCampos()
            }
        })
    } else {
        const contato = {
            id: id_contador,
            nome: nome.value,
            telefone: telefone.value,
            email: email.value
        }
        id_contador++
        meus_contatos.push(contato)
        localStorage.setItem("meus_contatos", JSON.stringify(meus_contatos))
        adicionarContatoNaTela(contato)
        limparCampos()
    }
})

function adicionarContatoNaTela(contato) {
    const nova_div = document.createElement("div")
    nova_div.className="card"
    

    const novo_nome = document.createElement("h2")
    novo_nome.textContent = `Nome: ${contato.nome}`

    const novo_telefone = document.createElement("p")
    novo_telefone.textContent = `Telefone: ${contato.telefone}`

    const novo_email = document.createElement("p")
    novo_email.textContent = `Email: ${contato.email}`

    const botao_editar = document.createElement("button")
    botao_editar.textContent = "Editar"
    botao_editar.className="interno"

    botao_editar.addEventListener("click", () =>{
        nome.value = contato.nome
        telefone.value = contato.telefone
        email.value = contato.email
        botao.textContent = "Editar"
        localStorage.setItem("id_do_editado", contato.id)
    })

    const botao_excluir = document.createElement("button")
    botao_excluir.textContent = "Excluir"
    botao_excluir.className="interno"

    botao_excluir.addEventListener("click", () =>{
        resultado.removeChild(nova_div)
        const lista_contatos = JSON.parse(localStorage.getItem("meus_contatos")) || []
        const index = lista_contatos.findIndex(element => element.id === contato.id)
        if (index > -1) {
            lista_contatos.splice(index, 1)
            localStorage.setItem("meus_contatos", JSON.stringify(lista_contatos))
        }
    })

    nova_div.append(novo_nome, novo_telefone, novo_email, botao_editar, botao_excluir)
    resultado.appendChild(nova_div)
}

function visualizar_contatos(){
    resultado.innerHTML = ""
    meus_contatos.forEach(adicionarContatoNaTela)
}

function limparCampos() {
    nome.value = ""
    telefone.value = ""
    email.value = ""
    nome.focus()
}

visualizar_contatos()