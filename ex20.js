// 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
// número de vezes que a string aparece no array.

let frutas = ["banana", "maca", "uva", "laranja", "uva", "limao", "uva"];

function obj(frutas){
    let resultado = {};
    for (let chave of frutas){
        resultado[chave] = (resultado[chave] || 0) + 1;  // Incrementa o contador para a chave correspondente, ou inicializa com 1 se ainda não existir
    }
    return resultado;
}
console.log(obj(frutas))
