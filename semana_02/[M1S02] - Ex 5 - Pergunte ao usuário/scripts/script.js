// [M1S02] - Ex 5 - Pergunte ao usuário
// Para realizar esse exercício, utilize o console do navegador.
// Pergunte ao usuário: 
// 1. nome (prompt); 
// 2. idade (prompt); 
// 3. gosta de praticar algum esporte? (confirm) 
// Crie 3 variáveis para guardar as respostas do usuário: 
// 1. deve receber um valor textual (string); 
// 2. deve receber um valor numérico (number); 
// 3. deve receber um valor de verdadeiro ou falso (boolean). 
// Faça com que esses 3 valores sejam exibidos no console do navegador.
// Dica:
// https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt
// https://developer.mozilla.org/pt-BR/docs/Web/API/window/confirm


//window.alert("Hello world!");


// if (window.confirm("Mas você tem certeza disso?")) {
//     window.alert("Confirmado!");
// }


// var nome = prompt("Qual é o seu nome?");
// window.alert("O seu nome é: " + nome);


let nome = prompt("Qual é o seu nome?");

let idade = prompt("Qual é a sua idade?");
if (isNaN(idade)) {
    alert("Idade inválida!")
}

let esporte = confirm("Gosta de praticar algum esporte?");
if (esporte == true) {
    esporte = 'você GOSTA de praticar esporte.'
}
else
{
    esporte = 'você NÃO gosta de praticar esporte.'
}

console.log("O seu nome é: " + nome + ", a sua idade é: " + idade + " e " + esporte)