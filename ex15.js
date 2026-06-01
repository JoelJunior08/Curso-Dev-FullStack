// 15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
// principal são iguais a 1 e os demais são nulos.

const n = 7

let MI = []

for (let i = 1; i <= n; i++) {
    MI[i] = [] 

    for (let j = 1; j <= n; j++) {
        MI[i][j] = (i === j) ? 1 : 0
    }
}
console.log("Matriz Identidade [1..7][1..7]")
for (let i = 1; i <= n; i++) {
    let linha = ""
    for (let j = 1; j <= n; j++) {
        linha += MI[i][j] + " "
    }

    console.log(linha.trim())
}