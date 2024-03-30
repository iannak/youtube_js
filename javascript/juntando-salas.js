// Desafio 5
// # **Juntando as salas**
// Haverá uma palestra sobre padrões de projetos para estudantes
//das salas de JavaScript e Python.Nossa missão é juntar ambas
// as salas em uma única lista que exiba o nome de todas as pessoas.
// Em resumo, temos duas listas e precisamos juntá-las.

const salaJS = ['Melissa', 'Helena', 'Jonas', 'Julia'];
const salaPython = ['Amanda', 'Lara', 'Isis'];

const salasUnificadas = salaPython.concat(salaJS);

console.log(salasUnificadas);
