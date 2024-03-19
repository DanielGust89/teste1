
function calcular(num1, num2) {
    

    if (!isNaN(num1) || !isNaN(num2)){
        
        let numero = parseFloat(num1, num2);

    let listaDeExecução = 
        [mais=num1+num2];
        [menos=num1-num2];
        [multiplicação=num1*num2];
        [divisão=num1/num2];
    
const mensagem = `ola todo os calculaos basico com os numero ${num1} e ${num2}
são.  Adição:${mais} \n      Subtração:${menos} \n      Multiplicação:${multiplicação} \n      Divisão:${divisão}`
    return mensagem
    } else {
    
        
        return "ops algo deu errado valor revisar os numeros"
    }
} 

console.log(calcular(6, 5));