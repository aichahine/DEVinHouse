// [M1S02] - Ex 11 - Construa uma calculadora de P.A.
// Ao entrar na página, seu script deve realizar 2 prompts ao usuário: 
// 1. um solicitando um “valor inicial”; 
// 2. outro um valor para a “raíz”. 
// Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela. 
// Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. 
// Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.
// Dica:
// https://matematicabasica.net/progressao-aritmetica/
// https://www.javascriptprogressivo.net/2018/12/progressao-aritmetica-pa-em-javascript.html


// Instanciando a variavel que define a quantidade de termos
const termos = 10;

// Inicializando o contador
let i = 0;

// Array para armazenar as somas
let pa = []

// Instanciando variaveis globais
let valorInicial;
var raiz;

// Prompt para receber o valor inicial
do {
    valorInicial = Number(prompt("Digite o valor inicial:"))   
} while (isNaN(valorInicial) || valorInicial == "");

// Prompt para receber a raiz
do {
    raiz = Number(prompt("Digite a raiz:"))
} while (isNaN(raiz) || raiz == "");

// Iniciando o array com o conteudo de valorInicial
pa[0] = valorInicial

for(valorInicial, i; i<termos; valorInicial = valorInicial + raiz, i++)
{
    console.log(i+1 + "º termo = " + valorInicial)
    pa[i] = i+1 + "º termo: " + valorInicial + "\n";
}

alert("Progressão aritmética de 10 termos:\n" + pa)


// [M1S02] - Ex 10
// let data = new Date();
// let hora = data.getHours();
// let min = data.getMinutes();
// alert("Horário no momento de acesso: " + hora + ":" + min)


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


// [M1S02] - Ex 6
// var sobrenome = prompt("Qual é o seu ÚLTIMO nome?");
// alert("Olá, " + sobrenome.toUpperCase() + ". O seu último nome contém: " + sobrenome.length + " letras.");


// [M1S02] - Ex 5
// var sobrenome = prompt("Qual é o seu SOBRENOME?");
// var nome = prompt("Qual é o seu primeiro nome?");
// alert("O seu nome completo é: " + nome + " " + sobrenome)


// [M1S02] - Ex 4
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


// [M1S02] - Ex 3
// var nome = prompt("Qual é o seu nome?");
// window.alert("O seu nome é: " + nome);


// [M1S02] - Ex 2
// if (window.confirm("Mas você tem certeza disso?")) {
//     window.alert("Confirmado!");
// }


 // [M1S02] - Ex 1
//window.alert("Hello world!");