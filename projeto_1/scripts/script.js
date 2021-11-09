let novaAtividade = document.querySelector("input")
let inserir = document.querySelector("button")
let listaDeAtividades = [];

inserir.onclick = function () {
    listaDeAtividades.push(novaAtividade.value);
    alert(listaDeAtividades); //provisorio
    document.getElementById("lista").innerHTML = listaDeAtividades;
}