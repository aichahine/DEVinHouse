// [M1S02] - Ex 9 - Construa uma calculadora
// Faça 3 prompts ao usuário: 
// 1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
// 2. no segundo, pergunte o primeiro valor que deseja calcular;
// 3. no terceiro, o segundo valor que deseja calcular. 
// Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.
// Dica:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math


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


// var sobrenome = prompt("Qual é o seu ÚLTIMO nome?");
// alert("Olá, " + sobrenome.toUpperCase() + ". O seu último nome contém: " + sobrenome.length + " letras.");


// var nascimento = prompt("Qual é o ano do seu nascimento?");
// if (isNaN(nascimento) || nascimento <= 0 || nascimento > 2021) {
//     alert("Entrada inválida!")
// }

// var atual = prompt("Qual é o ano atual?");
// if (isNaN(atual) || atual != 2021) {
//     alert("Entrada inválida!")
// }

// alert("Sua idade é: " + (atual - nascimento) + " anos - caso você já tenha feito aniversário neste ano ou \n" + (atual - nascimento - 1) + " anos - caso você ainda não tenha aniversariado neste ano")


let tipo = prompt("Qual tipo de cálculo você deseja fazer?\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão")

let primeiroValor = prompt("Digite o PRIMEIRO número:")
if (isNaN(primeiroValor)) {
    alert("Entrada inválida!")
}

let segundoValor = prompt("Digite o SEGUNDO número:")
if (isNaN(segundoValor)) {
    alert("Entrada inválida!")
}

switch (tipo) {
    case '1':
        resultado = Number(primeiroValor) + Number(segundoValor)
        break;

    case '2':
        resultado = primeiroValor -= segundoValor
        break;

    case '3':
        resultado = primeiroValor *= segundoValor
        break;

    case '4':
        if (primeiroValor == 0) {
            alert("Não é possível dividir por zero!")
            break;
        }
        else if (segundoValor == 0) {
            alert("Não é possível dividir por zero!")
            break;
        }
        else {
            resultado = primeiroValor /= segundoValor
        }
        break;

    default:
        alert("Entrada inválida!")
        break;
}

if (isNaN(resultado)) {
    alert("Entrada inválida!")
} 
else 
{
    alert(`O resultado do seu cálculo é: ` + resultado)
}
