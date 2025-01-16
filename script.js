// Esta função é responsável por adicionar uma nova tarefa à lista.
function adicionarTarefa() {
    // recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    const mensagem = document.getElementById("mensagem");

    // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
    if (tarefa == "") {
        // mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!";
        mensagem.textContent = mensagemErro;   
        mensagem.style.color = "red";

        // Limpa a mensagem após 1 segundo
        setTimeout(() => {
            mensagem.textContent = "";
        }, 1000);
    } else {
        // mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "green";

        // Limpa a mensagem após 1 segundo
        setTimeout(() => {
            mensagem.textContent = "";
        }, 1000);

        // cria novo item (li) e insere na (lista ul)
        const listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;

        // Adiciona o botão de excluir à nova tarefa
        novaTarefa.innerHTML += `<button onclick="excluirTarefa(this)">Excluir</button>`;
        
        listaTarefas.appendChild(novaTarefa);
    }

    // limpa o input do usuário
    inputTarefa.value = "";
}

function excluirTarefa(button) {
    if (confirm("Você tem certeza que deseja excluir esta tarefa?")) {
        let tarefa = button.parentNode;
        tarefa.remove();
    }
}
