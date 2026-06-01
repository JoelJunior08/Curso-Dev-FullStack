// 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.

const prompt = require ('prompt-sync')()
let pessoa = {
    nome: prompt("Digite um nome: "),
    idade: Number(prompt("Digite a idade: "))
}

console.log(`A idade dessa pessoa é: ${pessoa.idade} anos`)

if (pessoa.nome != "" || pessoa.idade != 0 ){
    pessoa.email = prompt("Digite o e-mail: ")
}