const pegaNota = document.querySelector("#boxText");
const pegaBotao = document.querySelector("#adicionar");
const adicionar = document.getElementById("lista");

pegaBotao.addEventListener('click', () => {
    const addLista = document.createElement('li');
    const addButton = document.createElement('button');
    
    // Verificar se a caixa está vazia
    if(pegaNota.value.length === 0){
        alert('[ERRO] Caixa de notas esta vázia')
    }else{
        addLista.innerHTML = pegaNota.value;
        addButton.innerHTML = '<i class="fa-sharp fa-solid fa-circle-xmark"></i>';
        
        // Adicionar estilo no bloco das notas e botão
        addButton.style.position = 'absolute'
        addButton.style.left = '64.7dvw'
        addButton.style.padding = '0.3dvh'
        addButton.style.width = '2.2dvw'
        addButton.style.fontSize = '1rem'
        addButton.style.background = '#051D37'
        addButton.style.color = '#708A8F'
        addButton.style.border = 'none'
        addButton.style.borderRadius = '4px'



        // Adiciona os elementos à lista
        addLista.appendChild(addButton);
        adicionar.appendChild(addLista);

        // Limpa o campo de entrada
        pegaNota.value = '';

        // Adiciona um evento de clique ao botão para remover o item da lista
        addButton.addEventListener('click', () => {
            adicionar.removeChild(addLista);
            alert('Excluido com sucesso!!')
        });
    }
})


