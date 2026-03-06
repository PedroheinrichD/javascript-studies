let input = document.querySelector('input') // selecionando elemento input do HTML
let ul = document.querySelector('ul') // selecionando elemento ul(lista) do HTML
input.addEventListener('keyup', enter) // adicioando evento de tecla

function enter(event) { // funcão para adicionar lista

    // .trim() ->  remove espaços no começo e no final do texto.
    if (event.code === 'Enter' && input.value.trim() !== '') { // se a tecla enter for pressionada
        let newLi = document.createElement('li') // cria elemento <li></li>
        let checkbox = document.createElement('input') // cria elemento de input
        checkbox.type = 'checkbox' // muda o type para checkbox

        let span = document.createElement('span'); // cria o elemento span 
        span.innerText = input.value;

        newLi.appendChild(checkbox) // adiciona checkbox no <li>
        newLi.appendChild(span); // adiciona o span no <li>  
        ul.appendChild(newLi) // newLi é add na lista

        checkbox.addEventListener('change', function () { // função para riscar checkbox marcado
            if (this.checked) {
                span.style.textDecoration = 'line-through'
                span.style.color = '#888'
            } else {
                span.style.textDecoration = 'none'
                span.style.color = '#000'
            }
        })

        input.value = '' // limpa o campo do input
    }
}
// assim temos a lista com checkbox