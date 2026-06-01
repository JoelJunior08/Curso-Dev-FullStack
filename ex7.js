// 7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
// média aritmética desses números.


const PROMPT = require('prompt-sync')()
let soma = 0
let media
let dnum = 1
let num = []

while (dnum !== 0){
    dnum = Number(PROMPT("Digite um número (0 para sair): "))
    if (dnum !== 0) {
        num.push(dnum)
    }
}

if (dnum === 0 && num.length > 0){
    for(let i = 0; i < num.length; i++){
        soma += num[i]
    }
    media = soma / num.length
    console.log("A média aritmética é:", + media)
} else {
    console.log("Nenhum número foi digitado.")
}