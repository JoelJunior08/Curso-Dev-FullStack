// 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
// seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// ○ Matrícula:
// ○ Nome:
// ○ Salário bruto:
// ○ Dedução INSS:
// ○ Salário líquido:
// ○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
// redução do INSS).

const PROMPT = require("prompt-sync")()
let matricula = 0
let nome = ""
let salariob = 0
let inss = 0
let salariol = 0
let vetor = []
let contracheque = []

for (let i = 0; i < 80; i++){
    matricula = Number(PROMPT("Digite o número da matrícula: "))
    nome = PROMPT("informe o nome do funcionário: ")
    salariob = Number(PROMPT("Informe o salário bruto: "))
    inss = (12 / 100) * salariob
    salariol = salariob - inss

    vetor.push("N° da matrícula: " + matricula)
    vetor.push(`Nome do funcionário: ${nome}`)
    vetor.push(`Salário bruto: R$${salariob},00`)
    vetor.push(`12% de desconto do inss: R$${inss},00`)
    vetor.push(`Salário líquido: R$${salariol},00`)
    contracheque.push(vetor)
    vetor = []

}
console.log("/n CONTRACHEQUE /n")
console.log(contracheque)
