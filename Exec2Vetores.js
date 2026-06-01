        // Exercício 2

let notas = [8, 10, 7]
let media = 0

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`)
    media += notas[i]

}
media /= notas.length
console.log(`Média das notas: ${media}`)
