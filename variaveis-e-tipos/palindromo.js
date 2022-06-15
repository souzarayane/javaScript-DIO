//Solução 01
function verificaPalindromo(string){
    if(!string) return "String Inexistente"

    return string.split("").reverse().join("") === string
}

//Solução 02
function verificaPalindromo02(string){
    if(!string) return "String Inexistente"

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false
        }
    }
    return true
}
console.log(verificaPalindromo02("abba"))