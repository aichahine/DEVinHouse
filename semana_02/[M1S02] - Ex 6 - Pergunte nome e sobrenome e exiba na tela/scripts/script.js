// [M1S02] - Ex 6 - Pergunte nome e sobrenome e exiba na tela
// Faça 2 prompts ao usuário: 
// 1. no primeiro, pergunte o seu sobrenome; 
// 2. no segundo, pergunte o seu nome. 
// Em seguida, exiba na tela um “alert”, contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome).
// Dica:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
// https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt

var sobrenome = prompt("Qual é o seu SOBRENOME?");
var nome = prompt("Qual é o seu primeiro nome?");
alert("O seu nome completo é: " + nome + " " + sobrenome)


// [M1S02] - Ex 5
// var nome = prompt("Qual é o seu nome?");
//
// var idade = prompt("Qual é a sua idade?");
//
// var esporte = confirm("Gosta de praticar algum esporte?");
// if (esporte == true) {
//     esporte = 'você GOSTA de praticar esporte.'
// }
// else
// {
//     esporte = 'você NÃO gosta de praticar esporte.'
// }
//
// window.alert("O seu nome é: " + nome + ", a sua idade é: " + idade + " e " + esporte)


// [M1S02] - Ex 4
// var nome = prompt("Qual é o seu nome?");
// window.alert("O seu nome é: " + nome);


// [M1S02] - Ex 3
// if (window.confirm("Mas você tem certeza disso?")) {
//     window.alert("Confirmado!");
// }


// [M1S02] - Ex 2
//window.alert("Hello world!");