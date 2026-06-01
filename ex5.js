// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let peso = 79
let altura = 1.80

let imc = peso / (altura * altura)
if (imc < 18.5) {
    console.log(`imc: ${imc} - Baixo peso`)
} 
else if (imc >= 18.5 && imc < 25) {
    console.log(`imc: ${imc} - Peso normal`)
}
else if (imc >= 25 && imc < 30) {
    console.log(`imc: ${imc} - Sobrepeso`)
}
else {
    console.log(`imc: ${imc} - Obesidade`)
}