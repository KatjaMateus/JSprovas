let numero = Number(prompt("Digite um número para calcular seu fatorial: "))
if(numero < 0){
    console.log("O fatorial não está definido para números negativos.")
}else{
    let resultado = 1
    for(let i = 1;i<=numero;i++){
        resultado *= i
    }console.log(`O fatorial de ${numero} é ${resultado}.`)
}
let n = numero
let sequencia = [0,1]
if (n <=0){
    sequencia = []
}else if(n === 1){
    sequencia = [0]
}else{
    for(let i = 2; i < n; i++){
        let novonumero = sequencia [i-1] + sequencia [i-2]
        sequencia.push(novonumero)
    }
}console.log(`Os primeiros ${n} números da sequência da Fibonacci são ${sequencia}`)