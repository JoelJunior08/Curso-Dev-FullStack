//16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
//quantidade de elementos negativos da linha correspondente de M.
const PROMPT = require ('prompt-sync')()
const linhas = 6
const colunas = 8

let m = []


for (let i = 1; i <= linhas; i++) {
    m[i] = []
    for (let j = 1; j <= colunas; j++) {
        m[i][j] = Number(PROMPT(`M[${i}][${j}]: `))
    }
}

const C = []

for (let i = 1; i <= linhas; i++) {
    let contador = 0

    for (let j = 1; j <= colunas; j++) {
        if (m[i][j] < 0) {
            contador++
        }
    }

    C[i] = contador
}


console.log("\nResultado (negativos por linha):")
for (let i = 1; i <= linhas; i++) {
    console.log(`C[${i}] = ${C[i]} negativo(s)`)
}