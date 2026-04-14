/*
    COMO A API(Application programming interface) FUNCIONA

    O que é API?
    Uma API (Interface de Programação de Aplicações) permite que programas se comuniquem entre si,
    de forma semelhante a uma rede de computadores. Uma API define um conjunto de regras de usos em comum.

    Operação assíncrona:
    Uma operação assíncrona(async) é uma operação que ocorre em paralelo com outras operações.

    Operação sincrona:
    Uma operação sincrona(sync) ocorre de maneira sequencial, em ordem.
    
    
    o que é CALLBACK?
    Um callback (chamada de volta) é uma função que recebe como argumento outra função.

    oque é uma requisição?
    uma requisição (request) é uma operação assíncrona, que envia dados para um servidor e espera uma resposta de volta.

    
    O que é fetch?
    R= fetch É uma função do JavaScript que faz requisições HTTP. Ela "vai até um endereço" e traz algo de volta (ou tenta).

    o que é o .then?
    R= O .then() é uma maneira de lidar com o resultado de uma requisição HTTP. Ou seja, é um método que espera a resposta chegar para executar alguma coisa
    
*/


// callback é uma função que recebe outra funcao como argumento

function clicou() {

    // fetch -> faça uma requisição HTTP, e então execute a funcao que estiver dentro do .then 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { // retorna uma RESPOSTA da REQUISIÇÃO HTTP / 
            console.log(response)// dados retornados --> Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}

            // vamos transformar a resposta que vem em texto em um JSON(objeto)
            return response.json() // retorna em forma de OBJETO
        })
        .then((dados) => {
            let id = dados[0].id
            console.log(`o ID DO PRIMEIRO PERFIL --> ${id}`);

            console.log(dados);
            
            
            

        })

        // catch serve para retornar o erro caso a requisição falhe
        .catch((error) => {
            console.log(error);
        })  
}

document.querySelector('#enviar').addEventListener('click', clicou)


