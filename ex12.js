// 12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
// eretorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
// ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const PROMPT = require("prompt-sync")()
let altura = 0
let sexo = ""
let pesoideal = 0

altura = Number(PROMPT("Digite a sua altura: "))
sexo = PROMPT("Digite o seu sexo( 'm' para Masculino e 'f' para Feminino.): ")

if (sexo = "m"){
    pesoideal = 72.7 * altura - 58
}
else if (sexo = "f"){
    pesoideal = 62.1 * altura - 44.7
}
else{
    console.log("ERRO!!")
}
console.log(`O seu peso ideal é: ${pesoideal}kg`)