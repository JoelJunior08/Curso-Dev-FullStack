// 19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm
// precedência sobre as do obj1 em caso de conflitos.

let obj1 = {
    nome: "Lucas",
    idade: 19,
    cidade: "São Paulo"
}
let obj2 = {
    estudando: true,
    email: "lucas@email.com"
}
function combinarObjetos(obj1, obj2) {
    let resultado = {}
    for (let chave in obj1) {
        resultado[chave] = obj1[chave]     // Adiciona a propriedade ao resultado  
    }
    for (let chave in obj2) {         // Adiciona as propriedades do obj2 ao resultado, sobrescrevendo as do obj1 em caso de conflito
        resultado[chave] = obj2[chave]
    }
    return resultado
}
console.log(combinarObjetos(obj1, obj2))