

// Trazendo valores de input do html e acao do botao
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");
const botaoEnviar = document.getElementById("botaoEnviar");


// Instanciando variaveis e atribuindo undefined para que nao sejam nulas
let nomeValido = undefined;
let emailValido = undefined;
let senhaValido = undefined;
let confirmaSenhaValido = undefined;


// arrow function nao precisa da palavra function
// funcoes com apenas uma instrucao dispensam o return
// tudo depois da arrow e assumido como retorno

// 'event' foi criado dentro da function (poderia ser qualquer nome)
// poderia ter sido inserido um 'onclick' no html e chamado aqui
botaoEnviar.addEventListener('click', event => {
    validar()

    if (nomeValido !== true ||
        emailValido !== true || senhaValido !== true || confirmaSenhaValido !== true) {
        event.preventDefault(); //parar a propagacao do evento atraves do DOM.
        console.log('Dados não conferem')
    }
})


function validar() {
    // Eliminando espacos desnecessarios
    const valorNome = nome.value.trim();
    const valorEmail = email.value.trim();
    const valorSenha = senha.value.trim();
    const valorConfirmaSenha = confirmaSenha.value.trim();

    // se o atributo required tivesse sido utilizado, esta etapa de validacao nao seria necessaria
    if (valorNome === "") {
        seterror(nome, "Informe o Nome*")
        nomeValido = false;
    } else {
        setnoerror(nome)
        nomeValido = true;
    }

    if (valorEmail === "") {
        seterror(email, "Informe o Email*")
        emailValido = false;
    } else if (!remail(valorEmail)) {
        seterror(email, "Informe um E-mail válido")
        emailValido = false;
    } else {
        setnoerror(email)
        emailValido = true;
    }

    if (valorSenha === "") {
        seterror(senha, "Informe a Senha*")
        senhaValido = false;
    } else {
        setnoerror(senha)
        senhaValido = true;
    }

    if (valorConfirmaSenha === "") {
        seterror(confirmaSenha, "Informe a Senha*")
        confirmaSenhaValido = false;
    } else if (valorSenha !== valorConfirmaSenha) {
        seterror(confirmaSenha, "Senhas não conferem")
        confirmaSenhaValido = false;
    } else {
        setnoerror(confirmaSenha)
        confirmaSenhaValido = true;
    }
}


// Definicao da documentacao (W3Schools)
// parentElement retorna o elemento pai do elemento que foi especificado


// input.parentElement retorna para a variavel o pai do input (que, neste caso, e a div que esta encapsulando o elemento)
// neste caso, a classe 'formulario error' e acrescentada a div que ja contem formulario como classe


function seterror(input, message) {
    // especificando qual input (parent) para que as acoes desta function sejam validas para child
    // criando variavel formulario e atribuindo a ela o pai do input (que foi recebi pela funcao)
    const formulario = input.parentElement;
    // Essa classe foi referenciadas na folha de estilo
    // atribuindo classe
    // adicionando classe 'formulario error' para esse input
    formulario.className = 'formulario error';
    // querySelector busca o primeiro elemento de acordo com o parentElement acima
    // o input de parentElement e getElementById conforme a atribuicao no inicio do script
    const small = formulario.querySelector('small')
    small.innerText = message;
}


function setnoerror(input) {
    const formulario = input.parentElement;
    formulario.className = 'formulario noerror';
}


function remail(valorEmail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valorEmail)
}