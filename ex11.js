// 11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const PROMPT = require('prompt-sync')()
let idade = 0
let nome = ""
let vetor = []
let menores = []

for (let i = 0; i < 9; i++){
    nome = PROMPT(`Digite o ${i + 1}° nome: `)
    idade = Number(PROMPT("Digite a idade: "))

    if(idade < 18){
        vetor.push(nome)
        vetor.push(idade)
        menores.push(vetor)
        vetor = []
    
    }

}
console.log(menores)