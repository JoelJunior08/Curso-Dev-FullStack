// 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

 let dados = {
    aluno: "lucas",
    idade: 19,
    notas: [9.5, 8.0, 7.5]
 }

function filtrarArrays(obj) {
    let resultado = {}
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) { // Verifica se a propriedade é um array
            resultado[chave] = obj[chave] // Adiciona a propriedade ao resultado    
        }
    }
    return resultado
}
console.log(filtrarArrays(dados))