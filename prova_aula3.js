let notas = []
let maior = 0
let menor = 10
let contador = 0
let somanotas = 0
let media = 0

const alunos = Number(prompt("Digite o número total de alunos: "))
while(contador < alunos){
    let nota = Number(prompt("Digite a nota do aluno: "))
    if(nota >0 && nota <=10){
        notas.push(nota)
        somanotas += nota
        if(nota > maior){
        maior = nota
    }
        if(nota < menor){
        menor = nota
    }
    contador ++   
    }else{
        console.log(`Por favor, digite uma nota válida entre 0 e 10.`)
    }
}
if (alunos > 0){
    media = somanotas / alunos
}
    console.log(`A média da turma é ${media.toFixed(2)}, a maior nota é ${maior} e a menor nota é ${menor}. `)


