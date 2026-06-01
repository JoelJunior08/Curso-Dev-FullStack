        // Exercício 1
let vendas = [390, 280, 300, 365, 440]
let tVendas = 0

for (let i = 0; i < vendas.length; i++) {
    console.log(`Vendas do dia ${i + 1}: ${vendas[i]}`)
    tVendas += vendas[i]

}
console.log(`Total de vendas: ${tVendas}`)