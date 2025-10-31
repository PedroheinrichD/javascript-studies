//Eventos de clique e Manipulação de elementos 
let ul = document.querySelector("#teste1 ul") // guardando o elemento HTML em uma VAR
let button = document.querySelector(".button")  // guardando o elemento HTML em uma VAR


function mudarLista() {
    ul.children[2].innerHTML = '<li>Mudouuu</li>' // alterando o item 2 do UL
    // A propriedade children é usada para acessar o elementos [Filho] --> exibe em um array 
    // ul -> pai , li -> filho

    // append funciona tanto para texto, tanto para outros tipos de elementos
    ul.children[0].append(` adicionou sem modificar`)// o append é quando eu quero adiconar um conteudo junto ou dentro de um conteudo sem modifica-lo/(remove-lo) 


    // adicionando um novo item a minha lista sem alterá-la
    let newLi = document.createElement("li") // criando o HTML </li>        
    newLi.innerText = 'Novo li' // guardando valor no novo </li>
    ul.appendChild(newLi) // adicionando na lista </ul>



    // o prepend() funciona igual , só que ele adiciona no primeiro item e não no ultimo 
}
// innerHTML -> exibe um texto com o conteúdo dentro, ou fazer alterações
button.addEventListener("click", mudarLista) // evento de click que chama a função (mudarLista) quando for acionado 

