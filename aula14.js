const resultado = document.querySelector("#resultado")
const usuario = document.querySelector("#usuario")
const formulario = document.querySelector("#formulario")


formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    fetch(`https://api.github.com/users/${usuario.value}`)
    .then(resposta => resposta.json())

    .then(dados => {
        if (dados.erro) {
            resultado.innerHTML = `
            <p>CEP inválido</p>
            `
        } else {
        resultado.innerHTML = `
        <p>Nome de usuário: ${dados.login}</p>
        <img src="${dados.avatar_url}"/>
        <p>Seguidores: ${dados.followers}</p>
        <p>Segue: ${dados.following}</p>
        `
        }
    })
    .catch(error => resultado.innerHTML = `<p>${error}<p/>`)
    
})

