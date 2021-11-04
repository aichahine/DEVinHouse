// [M1S02] - Ex 8 - Pergunte o ano atual e o ano de nascimento, exiba na tela a idade
// Faça 2 prompts ao usuário: 
// 1. no primeiro, pergunte o ano de nascimento;
// 2. no segundo, pergunte o ano atual. 
// Em seguida, exiba na tela um “alert” contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário, caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.
// Dica:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math

var nascimento = prompt("Qual é o ano do seu nascimento?");
if (isNaN(nascimento) || nascimento <= 0 || nascimento > 2021) {
    alert("Entrada inválida!")
}

var atual = prompt("Qual é o ano atual?");
if (isNaN(atual) || atual != 2021) {
    alert("Entrada inválida!")
}

alert("Sua idade é: " + (atual - nascimento) + " anos - caso você já tenha feito aniversário neste ano ou \n" + (atual - nascimento - 1) + " anos - caso você ainda não tenha aniversariado neste ano")


// [M1S02] - Ex 7
// var sobrenome = prompt("Qual é o seu ÚLTIMO nome?");
// alert("Olá, " + sobrenome.toUpperCase() + ". O seu último nome contém: " + sobrenome.length + " letras.");


// [M1S02] - Ex 6
// var sobrenome = prompt("Qual é o seu SOBRENOME?");
// var nome = prompt("Qual é o seu primeiro nome?");
// alert("O seu nome completo é: " + nome + " " + sobrenome)


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