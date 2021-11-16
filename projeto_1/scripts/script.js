// Javascript: variáveis, arrays, funções, manipulação do DOM (eventos, elementos e seus atributos), manipular objetos (JSON), utilizar o localStorage.


// declarando variaveis globais
var newTask = document.getElementById('newTask');
var button = document.getElementById('button');
var tasksUl = document.getElementById('tasksUl');


// criando array
var listArray = [];


// ligando as funcoes as tags do HTML
button.addEventListener('click', addTask)


// funcao para adicionar a tarefa ao HTML
function addTask() {

    // verificando se a tarefa nao esta vazia
    if (!(newTask.value.length == 0)) {

        // estruturando o objeto
        var item = {
            id: listArray.length,
            subject: newTask.value,
            doneTask: false // "false" porque a caixa de seleção estara desmarcada ao criar a tarefa
        }

        // adicionando a tarefa ao HTML
        var newItem = document.createElement('li')

        // atribuindo id a tarefa
        newItem.id = `item-${item.id}`;

        // escrevendo no HTML
        newItem.innerHTML = `
            <input
                type="checkbox"
                name="checked-${item.id}
                onclick="done(${item.id})"
            />
            <label
                for="checked-${item.id})">
                ${item.subject}
            </label>            
            <button
                onclick="removeTask(${item.id})"/>
                &#x274C
            </button>
        `

        // enviando a tarefa para o HTML
        tasksUl.appendChild(newItem);

        // atualizando o array
        listArray.push(item)

        // convertendo para string
        var jsonList = JSON.stringify(listArray);

        // armazenando no localStorage
        localStorage.setItem('storageList', jsonList)

        // limpando a digitacao
        erase();

    } else {
        // notificando que a tarefa nao foi preenchida
        alert('Digite uma tarefa :)')
    }
}


// buscando conteudo do localStorage
var storageList = localStorage.getItem('storageList');


// funcao para apagar a digitacao
function erase() {
    // atribuindo "vazio" ao valor da variavel
    newTask.value = '';
}


// funcao para apagar uma tarefa
function removeTask(index) {

    // REMOVENDO DO ARRAY
    // criando um novo array para as tarefas que permanecem
    var newArray = [];
    // laco de repeticao para percorrer o array
    for (var i = 0; i < listArray.length; i++) {

        // testando se a tarefa nao foi removida
        // se o contador for diferente do indice
        if (i !== index) { 
            // novo array "empurra" para listAray de acordo com o contador
            newArray.push(listArray[i]);
        }
    }

    // REMOVENDO DO HTML
    // concatenando item e indice
    var remove = document.getElementById(`item-${index}`);
    
    if (confirm('Tem certeza que deseja excluir esta atividade?') === true) {
        tasksUl.removeChild(remove);
    }
    // ATUALIZANDO ARRAY
    // atribuindo o valor do novo array ao primeiro array criado
    listArray = newArray;
}


// funcao para marcar a caixa de selecao
function done(index) {

    // buscando o indice no array
    if (listArray[index]) {
        // trazendo a tarefa da lista
        var item = listArray[index];

        // alterna a marcacao atual (se esta marcado, desmarca / se esta desmarcado, marca)
        item.doneTask = !(item.doneTask)

        // buscando a tarefa no HTML
        var task = document.getElementById(`item-${index}`);

        // atualizando 
        // ternario (substitui if-else)
        // task.className = item.doneTask ? 'doneTask' : ''

        task.className.add("doneTask")
    }
}