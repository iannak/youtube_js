// Desafio 1: Um professor acidentalmente passou apenas 3 a 4 notas no sistema para um aluno
// Pra corrigir: precisamos adicionar a nota 7 e fazer o calculo da média corretamente.

// length é uma propriedade de um objeto função, e indica quantos argumentos a função espera.

// push() = empurrar, inserir na lista

const notas = [10, 6, 8]; // elementos/valores/itens
               0   1  2  // indices/posicoes

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas);
console.log(media);

// const notas = [10, "oi", true, false]
