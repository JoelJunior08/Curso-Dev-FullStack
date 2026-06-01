// 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 150 },
    { vendedor: "João", valor: 200 },
    { vendedor: "Maria", valor: 300 },
    { vendedor: "João", valor: 250 },
    { vendedor: "João", valor: 100 }
];

function sumarizarVendas(vendas) {
    let resultado = {};
    for (let venda of vendas) {
        resultado[venda.vendedor] = (resultado[venda.vendedor] || 0) + venda.valor; // Incrementa o total de vendas para o vendedor correspondente, ou inicializa com o valor da venda se ainda não existir
    }
    return resultado;
}

console.log(sumarizarVendas(vendas));