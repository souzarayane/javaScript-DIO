function calculadora(){
    const operacao = Number(prompt('Escolha uma operação: \n 1. Soma + \n 2. Subtração - \n 3. Multiplicação *\n 4. Divisão / \n 5. Resto da divisão % \n 6. Potenciação **'))
    
    if(!operacao || operacao >= 7){
        alert('Erro! Operação Inválida!')
        calculadora()
    }else{

        let n1 = Number(prompt('Insira o primeiro valor'))
        let n2 = Number(prompt('Insira o segundo valor'))
        let resultado = 0

        if(!n1 || !n2){
            alert('Erro - Parâmetros Inválidos!')
            calculadora()
        }else{
                function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }

            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }

            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }

            function divisao(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }

            function restoDaDivisao(){
                resultado = n1 % n2
                alert(`${n1} % ${n2} = ${resultado}`)
                novaOperacao()
            }

            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} ** ${n2} = ${resultado}`)
                novaOperacao()
            }

            function novaOperacao(){
                let opcao = prompt('Deseja fazer uma nova operação?\n 1. Sim \n 2. Não')
                if(opcao == 1){
                    calculadora()
                }else if(opcao == 2){
                    alert('Até mais')
                }else{
                    alert('Opção inválida!')
                    novaOperacao()
                }
            }

            switch(operacao){
                case 1: 
                    soma()
                break
                case 2: 
                    subtracao()
                break
                case 3: 
                    multiplicacao()
                break
                case 4: 
                    divisao()
                break
                case 5: 
                    restoDaDivisao()
                break
                case 6: 
                    potenciacao()
                break
                default:
                alert('Operação Iválida')
                calculadora()
            }

           /*  if(operacao == 1){
                soma()
            }else if(operacao == 2){
                subtracao()
            }else if(operacao == 3){
                multiplicacao()
            }else if(operacao == 4){
                divisao()
            }else if(operacao == 5){
                restoDaDivisao()
            }else{
                potenciacao()
            } */
        }
    }
}
calculadora()

