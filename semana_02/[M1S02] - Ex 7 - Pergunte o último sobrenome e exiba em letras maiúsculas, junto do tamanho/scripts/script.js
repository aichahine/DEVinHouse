// [M1S02] - Ex 7 - Pergunte o último sobrenome e exiba em letras maiúsculas, junto do tamanho
// Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um “alert” contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.
// Dica:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase


//window.alert("Hello world!");


// if (window.confirm("Mas você tem certeza disso?")) {
//     window.alert("Confirmado!");
// }


// var nome = prompt("Qual é o seu nome?");
// window.alert("O seu nome é: " + nome);


// var nome = prompt("Qual é o seu nome?");

// var idade = prompt("Qual é a sua idade?");

// var esporte = confirm("Gosta de praticar algum esporte?");
// if (esporte == true) {
//     esporte = 'você GOSTA de praticar esporte.'
// }
// else
// {
//     esporte = 'você NÃO gosta de praticar esporte.'
// }

// window.alert("O seu nome é: " + nome + ", a sua idade é: " + idade + " e " + esporte)


// var sobrenome = prompt("Qual é o seu SOBRENOME?");
// var nome = prompt("Qual é o seu primeiro nome?");
// alert("O seu nome completo é: " + nome + " " + sobrenome)


var sobrenome = prompt("Qual é o seu ÚLTIMO nome?");
alert("Olá, " + sobrenome.toUpperCase() + ". O seu último nome contém: " + sobrenome.length + " letras.");