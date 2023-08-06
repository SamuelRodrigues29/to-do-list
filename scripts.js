const button = document.querySelector('.button-task') // chama o botão para o javascript
const input = document.querySelector('.input-task')   // chama o input para o javascript 
const listaCompleta = document.querySelector(".list-task")

let minhaListaDeItens = [] // aqui começa a introdução para acrescentar itens na lista


function adicionarNovaTarefa() {         //essa função pega o valor digitado no input
    minhaListaDeItens.push({
        tarefa: input.value, 
        concluida: false
    }) // método para adicionar valores dentro do array minhalistadeitens
   
       mostrarTarefas()
    }

    function mostrarTarefas() {      // todo esse bloco de código é paraadicionar novas tarefas na to-do list
    
    let novaLi = ''

    minhaListaDeItens.forEach((item,posicao) =>{

        novaLi = novaLi +  `

            <li class="task ${item.concluida && "done "} ">
            <img src="./ibagens do to-do list/checked.png" alt="check-na-terefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./ibagens do to-do list/trash.png" alt="tarefa-para-fazer" onclick="deletarItem(${posicao})">
       
    </li> `
    
    })
            
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    console.log(posicao)
    mostrarTarefas() 

}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    
    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa) // ao clicar em adicionar,o valor digitado será pego pela funçaõ