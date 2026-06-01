/*
    let objeto = {
        proptiedade1: valor1,
        proptiedade2: valor2
    }
*/
let aluno = {
    nome: "João",                       // valor do tipo string
    idade: 20,                          // valor do tipo number
    matriculado: true,                  // valor do tipo boolean
    curso: "Engenharia de Software",    // valor do tipo string
    notas: [8.5, 9.0, 7.5],             // valor do tipo array
    endereco: {                         // valor do tipo objeto
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    }
}

let produto = {}
    produto.nome = "Camiseta"
    produto.preco = 49.90
    produto.quantidadeEstoque = 100
    produto.descricao = "Camiseta de algodão"

    console.log(produto)
    console.log("O nome do produto é: " + produto.nome)