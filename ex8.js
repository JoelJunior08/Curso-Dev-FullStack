// 8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
// um loop for ou while.

const PROMPT = require(`prompt-sync`)()
let num = 0
let fatorial = 0

console.log("-Cálculo de Fatorial-")

num = Number(PROMPT(`Digite um número: `))
fatorial = num
for(let i = 1; i < num; i++){
    fatorial *= i
}
console.log(num + "! = " + fatorial)