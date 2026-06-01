let numeros = [1, 2, 3, 4, 5, 6]
let pares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + " é par")
        pares++
    }
}
console.log("Quantidade de números pares: " + pares)