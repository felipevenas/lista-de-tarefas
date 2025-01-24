function adicionarTarefa() {

  let mensagem = document.getElementById("mensagem")

  // Recebe o valor do input do usuário:
  let inputTarefa = document.getElementById("inputTarefa")
  let tarefa = inputTarefa.value.trim()

  if (tarefa == "") {

    let mensagemErro = "Nenhuma tarefa adicionada!"
    mensagem.textContent = mensagemErro

  } 
  else {

    let mensagemSucesso = "Tarefa adicionada com sucesso!"
    mensagem.textContent = mensagemSucesso

    // Cria um novo elemento 'li' e insere na lista 'ul': 
    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)
  
    // Limpa o input do usuário:
    inputTarefa.value = ""

  }

  

}