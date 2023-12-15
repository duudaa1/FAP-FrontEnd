// Variaveis para calculo.
let soma1 = 2;
let soma2 = 2;
let mult1 = 5;
let mult2 = 3;

// Função sem parâmetro.
function helloworld() {
    console.log("Resultados da Soma e da Multiplicação.");
    // Console.log só para pular linha.
    console.log()
  }
  
  // Função com parâmetros para fazer a soma.
  function soma(a, b) {
    return a + b;
  }
  
  // Função arrow com parâmetros para fazer a multiplicação.
  const multiplicar = (a, b) => a * b;
  
  // Chamando as funções para serem exibidas.
  helloworld();
  console.log(soma1, '+',soma2,'=', soma(soma1, soma2));
  console.log(mult1, '*',mult2,'=', multiplicar(mult1, mult2));
  // Fim.