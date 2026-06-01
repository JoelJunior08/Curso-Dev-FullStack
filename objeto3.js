let aluno = {
    nome: "João",                       // valor do tipo string
    idade: 20,
    nota: 8.5,
    atualizarNota: function(novaNota){
        this.nota =  novaNota
    }
}
console.log(aluno.nota)
aluno.atualizarNota(9.5)
console.log(aluno.nota)