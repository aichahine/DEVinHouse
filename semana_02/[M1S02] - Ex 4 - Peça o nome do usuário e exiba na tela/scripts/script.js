// [M1S02] - Ex 4 - Peça o nome do usuário e exiba na tela
// Faça com que o navegador do usuário pergunte o nome dele(a). Utilizando o método “alert”, exiba o nome inserido pelo usuário.

// Dica: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

//window.alert("Hello world!");

// if (window.confirm("Mas você tem certeza disso?")) {
//     window.alert("Confirmado!");
// }

var nome = prompt("Qual é o seu nome?");
window.alert("O seu nome é: " + nome);