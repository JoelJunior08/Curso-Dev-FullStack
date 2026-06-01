let idade = 18
let autorizacao = "sim"

if(idade >= 14 && autorizacao == "sim"){
    console.log("Acesso Permitido")
}else if((idade >=12 && idade <=13) && autorizacao == "sim"){
    //if((idade == 12 || idade == 13) && autorizacao == "sim")
        console.log("Acesso Permitido com responsavel")
}else if(idade < 12 || autorizacao !== "sim"){
        console.log("Acesso Negado")
}