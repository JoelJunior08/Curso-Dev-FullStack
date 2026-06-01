// 10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const PROMPT = require(`prompt-sync`)()
let nomes = []


for (let i = 0; i < 7; i++){
    let nome = (PROMPT(`Digite o ${i + 1}° nome: `))
    nomes.unshift(nome)

}
console.log(nomes)