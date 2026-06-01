let aluno = [           //Array de objetos
    {
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
    },
    {
    nome: "Julia",
    idade: 25,
    matriculado: true,
    curso: "Engenharia de Software",
    notas: [9, 10, 8],
    endereco: {
        rua: "Rua almirante Barroso",
        numero: 93,
        cidade: "São Paulo"
        }
    },
    {
    nome: "Gabriel",
    idade: 22,
    matriculado: true,
    curso: "Engenharia de Software",
    notas: [7, 8, 9],
    endereco: {
        rua: "rua das rosas",
        numero: 19,
        cidade: "São Paulo"
        }
    }
]
for(let propriedade of aluno){
    console.log(`nome: ${propriedade.nome}`)      // console.log(`${propriedade}: ${aluno[propriedade]}`)
    console.log(`idade: ${propriedade.idade}`)
    console.log(`matriculado: ${propriedade.matriculado}`)
}