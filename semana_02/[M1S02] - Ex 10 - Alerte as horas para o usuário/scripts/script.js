// [M1S02] - Ex 10 - Alerte as horas para o usuário
// Construa um script que alerta o horário no momento de acesso, no formato “23:59” (HH:mm).
// Dica: Lembre-se da estrutura “scripts” criada no exercício anterior.
// https://codare.aurelio.net/2009/04/03/javascript-obter-e-mostrar-data-e-hora/

let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();
alert("Horário no momento de acesso: " + hora + ":" + min)


// [M1S02] - Ex 9
// let tipo = prompt("Qual tipo de cálculo você deseja fazer?\n+ (soma)\n-  (subtração)\n*  (multiplicação)\n/  (divisão)")
//
// let primeiroValor = prompt("Digite o PRIMEIRO número:")
// if (isNaN(primeiroValor)) {
//     alert("Entrada inválida")
// }
//
// let segundoValor = prompt("Digite o SEGUNDO número:")
// if (isNaN(segundoValor)) {
//     alert("Entrada inválida")
// }
//
// switch (tipo) {
//     case '+':
//         resultado = Number(primeiroValor) + Number(segundoValor)
//         break;
//
//     case '-':
//         resultado = primeiroValor -= segundoValor
//         break;
//
//     case '*':
//         resultado = primeiroValor *= segundoValor
//         break;
//  
//     case '/':
//         resultado = primeiroValor /= segundoValor
//         break;
//    
//     default:
//         alert("Entrada inválida!")
// }
//
// alert(`O resultado do seu cálculo é: ` + resultado)


// [M1S02] - Ex 8
// var nascimento = prompt("Qual é o ano do seu nascimento?");
// if (isNaN(nascimento) || nascimento <= 0 || nascimento > 2021) {
//     alert("Entrada inválida!")
// }
//
// var atual = prompt("Qual é o ano atual?");
// if (isNaN(atual) || atual != 2021) {
//     alert("Entrada inválida!")
// }
//
// alert("Sua idade é: " + (atual - nascimento) + " anos - caso você já tenha feito aniversário neste ano ou \n" + (atual - nascimento - 1) + " anos - caso você ainda não tenha aniversariado neste ano")


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