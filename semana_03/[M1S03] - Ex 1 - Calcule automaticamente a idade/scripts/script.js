// [M1S03] - Ex 1 - Calcule automaticamente a idade -->
// Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.

button.onclick = function() {

    var dataAtual = Date.now();
    
    var dataNascimento = document.getElementById("dataNascimento");

    var calcula = Math.abs(dataAtual.getTime() - Date.parse(dataNascimento).getTime());
    var idade = Math.ceil(calcula / (1000 * 60 * 60 * 24));

    alert(idade);
    resultado.innerHTML(idade);

}