const prompt = require ('prompt-sync')();

let nota1, nota2, nota3;

nota1 = Number(prompt("Informe a primeira nota:"));
nota2 = Number(prompt("Informe a segunda nota:"));
nota3 = Number(prompt("Informe a terceira nota:"));

if (nota1 < 0 || nota1 > 10) {
  console.log("A nota deve ser entre 0 e 10.");
  return;
}
if (nota2 < 0 || nota2 > 10) {
  console.log("A nota deve ser entre 0 e 10.");
  return;
}
if (nota3 < 0 || nota3 > 10) {
  console.log("A nota deve ser entre 0 e 10.");
  return;
}

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
  console.log("Insira apenas numeros.");
} else {
  let media = (nota1 + nota2 + nota3) / 3;

console.log("A média é de", media);
}


