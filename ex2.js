// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

let idade = 30

if (idade <= 12) {
    console.log("A pessoa é uma criança.")
} else if (idade > 12 && idade <= 17) {
    console.log("A pessoa é um adolescente.")
} else if (idade > 17 && idade <= 59) {
    console.log("A pessoa é um adulto.")
} else {
    console.log("A pessoa é um idoso.")
}