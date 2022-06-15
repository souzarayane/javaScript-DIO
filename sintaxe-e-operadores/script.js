
var n1 = 1, n2 = 1

/* function comparacao(n1,n2){
    if(n1 === n2){
        console.log ("são iguais")
    }else{
        console.log ("são diferentes")
    }
} */
//comparacao()

function comparacao(){
    resultado = n1 + n2

/*     if(n1 === n2){
        return ("São iguais")
    } */

    if(resultado > 10 && resultado < 20){
        console.log(`Sua soma é ${resultado}, que é maior que 10 e menor que 20. `)
    }else{
        console.log(`Sua soma é ${resultado}, que é menor que 10 e menor que 20. `)
    }
}
comparacao()