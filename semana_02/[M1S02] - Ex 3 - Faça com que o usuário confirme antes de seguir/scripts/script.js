// [M1S02] - Ex 3 - Faça com que o usuário confirme antes de seguir
// Utilizando Javascript, peça a confirmação do usuário ao clicar em algum botão, perguntando se ele deseja realmente realizar essa ação.

// Dica: Lembre-se da estrutura “scripts” criada no exercício anterior.
// https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert


//window.alert("Hello world!");

function funcao() {
    if ((confirm('Deseja realmente realizar essa ação?')) == true) {
        alert('Confirmado!')
    } 
    else
    {
        alert('Cancelado!')
    }
}
