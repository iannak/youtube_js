// Desafio: Dessa vez, um dos professores acidentalmente lançou 5 notas no sistema para um aluno, estamos usando o desafio similiar a aula anterior.
// pop() = Ele remove o ultimo elemento do array e o retorna.

const notas = [10, 6, 5.5, 10];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

notas.pop();

console.log(`A média é ${media}`);
console.log(notas);
