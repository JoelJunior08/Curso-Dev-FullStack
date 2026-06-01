function saudacao(){
    console.log("Olá, bem-vindo ao nosso sistema!")
}
saudacao()

function calculo(a, b){
    return {
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        divisao: a / b
    };
}
let resultado = calculo(50, 10)
console.log(resultado)