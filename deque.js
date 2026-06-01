class Deque{
    constructor(){
        this.itens = []
    }

    //adicione um iten no início do Deque
    adicionarFrente(elemento){
        this.itens.unshift(elemento)
    }

    //adicione no final do Deque
    adicionarFim(elemento){
        this.itens.push(elemento)
    }

    //remove e retorna elemento do início do Deque
    removeFrente(elemento){
        return this.itens.shift()
    }

    //remove e retorna elemento do fim do Deque
    removeFim(elemento){
        return this.itens.pop()
    }
}

const deque = new Deque()