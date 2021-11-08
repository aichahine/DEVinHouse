// [M1S03] - Ex 2 - Construa uma calculadora simples
// Faça uma página HTML contendo 2 campos de texto (dica: input type number), para que o usuário possa inserir, em cada um, o valor que deseja calcular. Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão. Adicione um outro campo de texto, apenas leitura (readonly). Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos pelo usuário e exibir o resultado no campo de texto readonly.
// Programe essa interatividade utilizando JavaScript.


const primeiroNumero = document.getElementById("firstNumber");
const segundoNumero = document.getElementById("secondNumber");


funcao.addEventListener('click', evento => {
    operacoes()

    switch(input)
    { // inicio switch-case
        case 'soma':
            resultado = primeiroNumero += segundoNumero;
            resultado.value;
            break;

        case 'subtracao':
            resultado = primeiroNumero -= segundoNumero;
            break;

        case 'multiplicacao':
            resultado = primeiroNumero *= segundoNumero;
            break;
        
        case 'divisao':
            if (primeiroNumero == 0 || segundoNumero == 0) {
                alert('Não é possível dividir por zero!')
            } else {
                resultado = primeiroNumero /= segundoNumero;
                break;
            }
    } // fim switch-case

});

function operacoes(input) {
    const operacoes = input.parentElement;
}
