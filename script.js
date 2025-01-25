let tarefas = []; 
let tarefa = ""; 
const mensagem = document.getElementById("mensagem");

function adicionarTarefa() {
  let inputTarefa = document.getElementById("inputTarefa");
  tarefa = inputTarefa.value.trim();

  if (tarefa !== "") {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;

    tarefas.push(tarefa);
    renderizarTarefa();
  } else {
    let mensagemErro = "Nenhuma tarefa adicionada!";
    mensagem.textContent = mensagemErro;
  }

  inputTarefa.value = "";
}

function renderizarTarefa() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i); 

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i); 
    
    novaTarefa.appendChild(botaoEditar);
    novaTarefa.appendChild(botaoRemover);
    listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefa();
  mensagem.textContent = "Tarefa removida com sucesso!";
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Editar tarefa:");

  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefa();
    mensagem.textContent = "Tarefa editada com sucesso!";
  } else {
    let mensagemErro = "Nenhuma tarefa adicionada!";
    mensagem.textContent = mensagemErro;
  }
}

function limparTarefas() {
  tarefas.length = 0;
  renderizarTarefa();
  mensagem.textContent = "Tarefas removidas com sucesso!";
}