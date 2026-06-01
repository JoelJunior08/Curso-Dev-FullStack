class Pilha{
    constructor(){
        this.itens = []
    }

    push(elemento){
        this.itens.push(elemento)
    }
    print(){
        console.log(this.itens)
    }
    pop(){
        if(this.isEmpty()){
            return "A pilha está vazia!"
        }
        return this.itens.pop()
    }
    isEmpty(){
        return this.itens.length === 0
    }
}

const pilha = new Pilha
pilha.push('10')
pilha.print()
pilha.push('eu')
pilha.print()
pilha.push('estou')
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
console.log(pilha.pop())