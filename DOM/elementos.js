//Eventos de clique

function alertClick(){
    alert('Você clicou no botão ') 
}

let button = document.querySelector(".button")
button.addEventListener("click",alertClick) // evento de click que chama a função (alertClick) quando for acionado 
