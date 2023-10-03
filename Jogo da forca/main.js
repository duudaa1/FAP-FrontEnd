const palavraAleatoria = "bicicleta"
const palavraSplitted = palavraAleatoria.split("")
console.log(palavraSplitted);


let tentativas = 6
const letraPressionada ="i"

const letrasReveladas = Array(palavraSplitted.length).fill("")

function encontrarLetra(letra){
    console.log(`Letra Pressionada: ${letra}`)
    let encontrada = false

    for(let index=0; index < palavraSplitted.length; index++){
        const element = palavraSplitted[index];
        if(element == letra){
            letrasReveladas[index] = letra;
            encontrada = true            
        }

        if(encontrada == false){
            tentativas--
        }
    }

    console.log(letrasReveladas)
    encontrarLetra('i')
    console.log(`Tentativas: ${tentativas}`)

    console.log(letrasReveladas)
    encontrarLetra('n')
    console.log(`Tentativas: ${tentativas}`)

}