        // Exercício 3

let valores = [10, 20, 30, 40, 50]
let valorEncontrado = false

for (let i = 0; i < valores.length; i++) {
    if (valores[i] === 20) {
        valorEncontrado = true
        console.log("Valor encontrado!")
        break
    }
}
if (valorEncontrado === false) {
    console.log("Valor não encontrado!")
}