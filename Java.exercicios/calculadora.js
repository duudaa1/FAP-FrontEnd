// comando para rodar o prompt no terminal do Visual Studio Code.
const prompt = require('prompt-sync')();


    // Recebe os dois valores e o operador.
    let valor1 = Number(prompt("Digite o primeiro valor:"));
    let valor2 = Number(prompt("Digite o segundo valor:"));
    let operador = prompt("Digite o operador:");  
    let resultado;  
  
    // Realizando a operação.    

    if (operador === "+") {
      resultado = valor1 + valor2;      
      console.log("O resultado da Soma foi: ", resultado)
    }

    if (operador === "-") {
      resultado = valor1 - valor2;      
      console.log("O resultado de Menos foi: ", resultado)
    }

    if (operador === "*") {
      resultado = valor1 * valor2;      
      console.log("O resultado da Multiplicação foi: ", resultado)
    }
  
    if (operador === "/") {
      resultado = valor1 / valor2;      
      console.log("O resultado da divisão foi: ", resultado)
      //Caso tiver sobra esse if vai ser executado.
      if (resultado % 1 !== 0) {
        console.log("Sobra da divisão:", resultado % 1);
      }
    } 