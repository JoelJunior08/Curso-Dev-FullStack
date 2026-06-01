class Fila{
    constructor(){
        this.itens = []
    }
    enfileirar(elemento){
        this.itens.push(elemento)
    }
    
    imprimirFila(){
        console.log(this.itens.join(' - '))
    }
    
    desenfileirar(){
        if(this.vazio()){
            return "A fila está vazia"
        }
        return this.itens.shift()
    }
    
    vazio(){
        return this.itens.lenght === 0
    }
    
    proximo(){
        if(this.vazio()){
            return "A fila está vazia!"
        }
        return this.itens
    }
    
}

const fila = new Fila
fila.enfileirar('a')
fila.enfileirar('b')
fila.enfileirar('c')
fila.imprimirFila()
console.log(fila.desenfileirar())
console.log(fila.desenfileirar())
console.log(fila.desenfileirar())
console.log(fila.desenfileirar())
