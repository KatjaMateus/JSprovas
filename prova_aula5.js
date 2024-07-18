const lista_Joe = ["passear com cachorro", "lavar louça"];
const lista_Kevin = ["varrer a casa", "lavar roupa"];
const lista_Nick = ["lavar o carro", "cozinhar"];

const nome = prompt("Quem deseja acessar a lista: Joe, Kevin ou Nick?");
let lista;

if (nome === "Joe") {
    lista = lista_Joe;
} else if (nome === "Kevin") {
    lista = lista_Kevin;
} else if (nome === "Nick") {
    lista = lista_Nick;
} else {
    alert("Nome inválido!");
}

if (lista) {
    const menu = prompt(`Olá ${nome}! O que deseja fazer? 1 = visualizar, 2 = adicionar, 3 = remover, 4 = atualizar`);
    if (menu === "1") {
        document.write(lista.join("<br>"));
    } else if (menu === "2") {
        const nova_tarefa = prompt("Escreva a tarefa que quer adicionar: ");
        lista.push(nova_tarefa);
        document.write(lista.join("<br>"));
    } else if (menu === "3") {
        const remover = prompt("Escreva qual tarefa quer remover: ");
        const index = lista.indexOf(remover);
        if (index !== -1) {
            lista.splice(index, 1);
            document.write(lista.join("<br>"));
        } else {
            alert("Escolha uma tarefa da sua lista");
        }
    } else if (menu === "4") {
        const atualizar = prompt("Escreva qual tarefa quer atualizar: ");
        const index = lista.indexOf(atualizar);
        if (index !== -1) {
            const nova_tarefa = prompt("Escreva a nova tarefa: ");
            lista[index] = nova_tarefa;
            document.write(lista.join("<br>"));
        } else {
            alert("Escolha uma tarefa da sua lista");
        }
    } else {
        alert("Opção inválida!");
    }
}