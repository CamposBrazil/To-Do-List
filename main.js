function addTask() {
    let message = "Task added with success!";
    let writeTask = document.querySelector("#writetask");
    let task = writeTask.value.trim();

    if (task === "") return;

    let messageBox = document.querySelector("#message");
    messageBox.textContent = message;
    messageBox.classList.remove("fade-out"); // Garante que a mensagem aparece visível

    let list = document.getElementById("list");
    let newList = document.createElement("li");
    newList.textContent = task;
    list.appendChild(newList);

    writeTask.value = "";


    //botão de criar lixeira//
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn")

    //evento de clique para remover a tarefa
    deleteBtn.onclick = function()
    {
        list.removeChild(newList);
    }

    // Espera 2 segundos, depois inicia o fade-out
    setTimeout(() => {
        messageBox.classList.add("fade-out");
    }, 2000);

    // Depois de mais 500ms (tempo do fade), limpa o conteúdo
    setTimeout(() => {
        messageBox.textContent = "";
        messageBox.classList.remove("fade-out"); // Reseta para próxima vez
    }, 2500);
}
