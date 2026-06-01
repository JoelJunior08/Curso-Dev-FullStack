let numeros = [2, 4, 6, 8] //Vetor
//valor  2 4 6 8
//indice 0 1 2 3
let frutos = ["maçã", "banana", "uva"]
let vazio = []
vazio[1] = 5 //Adiciona o valor na posição do indice indicado
vazio[0] = 50
vazio.push(30) //Adiciona o valor no fim do vetor
console.log(numeros)
console.log(frutos)
console.log(vazio)
frutos.pop() //Remove o último elemento do vetor
console.log(frutos)
frutos.unshift("laranja") //Adiciona um elemento no início do vetor
console.log(frutos)
frutos.shift() //Remove o primeiro elemento do vetor
console.log(frutos) 