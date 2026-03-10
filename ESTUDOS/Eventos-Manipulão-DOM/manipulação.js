// manipulação de elementos do DOM usando JavaScript. InnerHTML e OuterHTML abordados.
function clicou() {
    // .children exibirá um [array] de elementos dentro do pai
    console.log(container.children);// retorna os filhos em forma de array
    console.log(container.children[0].children);// entra na div , retorna os elementos dentro em forma de array. Em seguida entra na primeira posição do array e mostra os elementos dentro da primeira posição do array 


    // InnerHTML
    console.log(ul.innerHTML); // mostra em forma de string os conteúdos dentro

    // podemos adicionar um elemento HTML tbm usando o innerHTML exemplo:
    // ul.innerHTML = '<li>item adicionado com innerHTML</li>'

    // alterando item com children e innerHTML juntos!
    ul.children[0].innerHTML = '<li>conteudo na posição 1 do elemento pai (alterado usando innerHTML) </li>'

    // jeito CORRETO de se alterar um conteudo que ja tem (modificar) 'interpreta como string'
    ul.children[1].append(" (alterado usando o append)")


    let newLi = document.createElement('li') // criamos a VAR que guarda o elemento <li></li>
    newLi.innerHTML = 'item adicionado (novo)' // adicionando o texto dentro do <li></li>
    ul.appendChild(newLi) // adicionando o <li></li> dentro do ul sem alterar o conteudo, usando o appendchild
    // usar appendChild caso queira adicionar conteúdos dentro de um elemento (forma certa)

    // agora usando o preppend
    ul.prepend(newLi) // adiciona no inicio do elemento , ao contrario do appendChild


    let botao = document.createElement('button')
    botao.innerHTML = 'botao adicionado before'

    // adicionando conteudo em torno (em volta) do elemento
    ul.after(botao) // depois
    ul.before("oi") // antes


    // criando uma nova lista 
    let newUl = document.createElement('ul')

    for (let i = 0; i < 5; i++) {
        let liNew = document.createElement('li')
        liNew.innerHTML = 'item adicionado depois(after) do ul ' + (i + 1)
        newUl.appendChild(liNew)
    }
    ul.after(newUl)



    //------------------------------------------------------------------

    //manipulando CLASSES --- 03
    let divUL = container.children[3] // guardando o ul na posição 3 do nosso container
    console.log(divUL.classList); // retorna um array de classes que tem dentro -> DOMTokenList(2) ['lista', 'listafoda', value: 'lista listafoda']

    // conseguimos adicionar classes pelo classList tbm
    divUL.classList.add('none')

    //ou removemos a classe
    divUL.classList.remove('none')

    // adicionando e removendo classes
    divUL.classList.toggle('block') // -> adiciona a classe block ao ser clicado , quando é clicado novamente ele remove a classe... e assim por diante

    // melhor fazer um if else !!! EXEMPLO:
    if (divUL.classList.contains('lista')) { // contains significa contêm , se nas classes comtêm 'lista'  
        divUL.classList.replace('lista', 'listaNova') // troca o primeiro valor pelo segundo
    } else {
        divUL.classList.replace('listaNova', 'lista')
    }



}


function manipulandoInput() {
    //manipulando input
    let input = document.querySelector('input')
    let inputButton = document.querySelector('#inputButton')

    // como pegar atributos -> atributos = placeholder , name , type...
    console.log(input.getAttribute('type')); // usamos o getAttribute('') para pegar o atributo

    // agora retorna true or false dependendo se tem ou nao
    console.log(`tem o atributo name?? -> ${input.hasAttribute('name')}`); // has se usa para saber se tem aquele atributo retornando verdadeiro ou falso

    // podemos trocar os atributos por outros ex:
    input.setAttribute('placeholder', 'alterei o placeholder...'); // dois valores , o primeiro qual atributo a ser trocado e o outro é o conteudo dele


    // mostrando a senha com verificação com getAttribute e setAttribute('','')
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text') // mudando o atributo type de password para text , assim mostrando a senha
        inputButton.innerText = 'OCULTAR SENHA' // mundando o text do button quando clicado
    } else {
        input.setAttribute('type', 'password') // mudando o atributo type de text para password , assim ocultando a senha
        inputButton.innerText = 'mostrar Senha'// mundando o text do button quando clicado
    }
}



function manipularCor() {
    // manipulando CSS -> usamos a var que queremos junto com dois pontos, o primeiro tem que ser o style e o segundo o que a gente quer trocar 
    h2.style.backgroundColor = 'blue' // trocando o background do texto ao ser clicado
    h2.style.color = '#bfbB'
}
h2.addEventListener('click', manipularCor)





// MANIPULAÇAO DE TECLADOS

function apertou(event) {// KeyDown
    console.log(event.code); // parâmetro.code -> o code mostra qual key foi acionada EX: apertou a letra 'A' do teclado -> KeyA
    console.log(event.key); // parâmetro.key -> o key é bem simplório e mostra qual key foi acionada literal EX: apertou a letra 'a' do teclado -> a 
}

let input2 = document.querySelector('#campo2')
input2.addEventListener('keydown', apertou)







button.addEventListener('click', clicou)
inputButton.addEventListener('click', manipulandoInput)