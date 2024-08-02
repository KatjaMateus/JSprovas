const autor = document.querySelector("#autor")
const titulo = document.querySelector("#titulo")
const genero = document.querySelector("#genero")
const ano = document.querySelector("#ano")
// const botao = document.querySelector("#botao")
const form_pesquisar = document.querySelector("#form_pesquisar")
const input_pesquisar = document.querySelector("#input_pesquisar")
const pesquisar = document.querySelector("#pesquisar")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")

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
<h2>Titulo: ${livro.titulo}</h2>
<p>Autor: ${livro.autor}</p>
<p>Gênero: ${livro.genero}</p>
<p>Ano de publicação: ${livro.ano}</p>
`
resultado.appendChild(card)
ano.value=""
titulo.value=""
autor.value=""
genero.value=""
autor.focus()


})
function exibir_livros(){
    const lista_livros = JSON.parse(localStorage.getItem("biblioteca")) || []
    lista_livros.forEach(livro_da_vez => {
        const card = document.createElement("div")
card.innerHTML = `
<h2>Titulo: ${livro_da_vez.titulo}</h2>
<p>Autor: ${livro_da_vez.autor}</p>
<p>Gênero: ${livro_da_vez.genero}</p>
<p>Ano de publicação: ${livro_da_vez.ano}</p>
`
resultado.appendChild(card)
    });
}
exibir_livros()

function pesquisar(){
    const lista_livros = JSON.parse(localStorage.getItem("biblioteca")) || []
    lista_livros.forEach(livro_da_vez => {
        if(livro_da_vez.titulo.value){
            
        }
}
    )}
   
//         localStorage.setItem("dados_cliente", JSON.stringify(usuario))
// })
// function buscarDadosLocalStorage(){
//     const dados_do_local_storage = JSON.parse(localStorage.getItem("dados_cliente"))

// }

//     usuarios.push(usuario)
//     nome_digitado.value = ""
//     fone_digitado.value = ""
//     nome_digitado.focus()
// })
// botao.addEventListener("click", () =>{
//     
//     usuarios.forEach((nome_da_vez)=>{
        
        
   
