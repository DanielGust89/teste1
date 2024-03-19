

const calculo = (num1, num2) => {


    
    if (!isNaN(num1) && !isNaN(num2)) {
        console.log(`Olá! Esta é a fórmula para calcular com todos os sinais da matemática.`);
        
   
        let menos = num1 - num2;
        let mais = num1 + num2;
        let divisao = num1 / num2;
        let multiplicação = num1 * num2;

      
        let resultado = `Todos os cálculos foram feitos: \n subitração: ${menos}  \n adição: ${mais}  \n divisão: ${divisao}  \n multiplicação: ${multiplicação}`;
        return resultado;
    } else {
        console.log(`Ops, algo deu errado. Por favor, insira números válidos.`);
        return null; 
    }
}

console.log(calculo(8, 6));
