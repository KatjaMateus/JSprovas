const nome = prompt("Digite seu nome: ")
const altura = Number(prompt("Digite sua altura em centímetros: "))
const peso = Number(prompt("Digite seu peso em quilogramas: "))
const altura_metros = altura / 100
const imc = peso / (altura_metros * altura_metros)



if (imc < 16){
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com baixo peso muito grave.`)
}else if(imc >=16 && imc <17){
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com baixo peso grave.`)
}else if(imc >=17 && imc <18.5){
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com baixo peso.`)
}else if(imc >=18.5 && imc < 25){
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`)
}else if(imc >=25 && imc <30){
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`)
}else if(imc >=30 && imc <35){
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 1.`)
}else if(imc >=35 && imc < 40){
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 2.`)
}else{
    console.log(`Olá ${nome}! Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 3.`)
}
