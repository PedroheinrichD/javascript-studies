let input = document.querySelector('input') // selecionando elemento input do HTML
let ul = document.querySelector('ul') // selecionando elemento ul(lista) do HTML
input.addEventListener('keyup', enter) // adicioando evento de tecla

function enter(event) { // funcão para adicionar lista
    if (event.code === 'Enter') { // se a tecla enter for pressionada
        let newLi = document.createElement('li') // cria elemento <li></li>
        let checkbox = document.createElement('input') // cria elemento de input
        checkbox.type = 'checkbox' // muda o type para checkbox

        let span = document.createElement('span'); // cria o elemento span 
        span.innerText = input.value;

        newLi.appendChild(checkbox) // adiciona checkbox no <li>
        newLi.appendChild(span); // adiciona o span no <li>  
        ul.appendChild(newLi) // newLi é add na lista
        input.value = '' // limpa o campo do input
    }
}
// assim temos a lista com checkbox