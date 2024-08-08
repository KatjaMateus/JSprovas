const autor = document.querySelector("#autor")
const titulo = document.querySelector("#titulo")
const genero = document.querySelector("#genero")
const ano = document.querySelector("#ano")

const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")

const form_pesquisar = document.querySelector("#form_pesquisar")
const input_pesquisar = document.querySelector("#input_pesquisar")

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault()

const lista_livros = JSON.parse(localStorage.getItem("biblioteca")) || []

    const livro = {
        autor: autor.value,
        titulo: titulo.value,
        genero: genero.value,
        ano: ano.value
    }

lista_livros.push(livro)
localStorage.setItem("biblioteca",JSON.stringify(lista_livros))

const card = document.createElement("div")
card.innerHTML = `
<h3>Titulo: ${livro.titulo}</h2>
<p>Autor: ${livro.autor}</p>
<p>Gênero: ${livro.genero}</p>
<p>Ano de publicação: ${livro.ano}</p>
`
resultado.appendChild(card)
formulario.reset()
autor.focus()
})

function exibir_livros(){
    resultado.innerHTML=""
    const lista_livros = JSON.parse(localStorage.getItem("biblioteca")) || []
    lista_livros.forEach(livro => {
    const card = document.createElement("div")
    card.innerHTML = `
    <h3>Titulo: ${livro.titulo}</h2>
    <p>Autor: ${livro.autor}</p>
    <p>Gênero: ${livro.genero}</p>
    <p>Ano de publicação: ${livro.ano}</p>
    `
    resultado.appendChild(card)
    })
}
exibir_livros()

form_pesquisar.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    const procurando = input_pesquisar.value.toLowerCase()
    const lista_livros = JSON.parse(localStorage.getItem("biblioteca")) || []

    resultado.innerHTML = ""

    let found = false

    lista_livros.forEach(livro => {
        if (livro.titulo.toLowerCase().includes(procurando)) {
            const card = document.createElement("div")
            card.innerHTML = `
                <h3>Título: ${livro.titulo}</h3>
                <p>Autor: ${livro.autor}</p>
                <p>Gênero: ${livro.genero}</p>
                <p>Ano de publicação: ${livro.ano}</p>
            `
            resultado.appendChild(card)
            found = true
        }
    })

    if (!found) {
        resultado.textContent = "Título não encontrado. Cadastre o livro ou verifique a grafia do título."
    }

    input_pesquisar.value = ""
})
    
