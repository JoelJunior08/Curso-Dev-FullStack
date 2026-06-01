// 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
// sobre salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até
// R$350,00.

const prompt = require("prompt-sync")()
let salario = 0
let vsalario = []
let nfilhos = 0
let vnfilhos = []
let medias = 0
let mediaf = 0
let maiorsalario = 0
let salario350 = []
let percentual = 0

for (let i = 0; i < 5; i++){
    salario = Number(prompt("Digite o slário: "))
    nfilhos = Number(prompt("Digite a quantidade de filhos: "))
    vsalario.push(salario)
    vnfilhos.push(nfilhos)
    
}

    //Calculos
for (let a = 0; a < 5; a++){
    if (vsalario[a] > maiorsalario){
        maiorsalario = vsalario[a]
    }
    if (vsalario[a] < 350){
        salario350.push(vsalario[a])
    }
    medias += vsalario[a]
    mediaf += vnfilhos[a]

}
medias /= vsalario.length
mediaf /= vnfilhos.length
percentual = (salario350.length * 100) / vsalario.length


console.log(`O maior salário é: ${maiorsalario},00`)
console.log(`A média de salário é: R$${medias},00`)
console.log(`A média da quantidade de filhos é: ${mediaf} filhos por pessoa`)
console.log(`${percentual}% das pessoas tem um de salário de até R$350,00`)