// TODO ARRAY COMEÇA A CONTAGEM DO 0 --> [0] , [1] , [2]...

//           [0]      [1]       [2]
let cores = ['azul', 'verde', 'vermelho'] // lista com varios itens --> array = [] 
console.log(cores);

console.log(cores[2]); // exibe vermelho


// array com ingredientes
let ingredientes = [
    'farinha',
    'ovo',
    'fermento',
    'leite'
]
// E se eu quiser adicionar mais um? Temos alguns jeitos diferentes com os mesmos resultados

ingredientes[4] = 'arroz' // irá adicionar na posição 5 um item
console.log(ingredientes); // ficará ---> (5) ['farinha', 'ovo', 'fermento', 'leite', 'arroz']


//ou podemos usar o .push()
ingredientes.push('cebola') // . push adiciona mais um elemento na array ---> É A FORMA MAIS CORRETA DE SE ADICIONAR UM NOVO ITEM DENTRO DE UM ARRAY
console.log(ingredientes); // o ARRAY VAI FICAR ---> (6) ['farinha', 'ovo', 'fermento', 'leite', 'arroz', 'cebola']


console.log(`Total de ingredientes: ${ingredientes.length}`); // exibe (Total de ingredientes: 6)




// OBJETO --> Um objeto em JavaScript é uma caixinha que guarda pares de nome e valor (chave → valor) para organizar dados.

let personagem = {
    nome: 'pedro',
    idade: 19,
    caracteristicas: { cabelo: 'preto', olhos: ['castanhos', 'amarelo'] } // objeto dentro de objeto com arrays
}

console.log(`Nome do personagem é: ${personagem.nome}`);
console.log(`acessando objeto dentro de objeto kkkk -> O ${personagem.nome} tem olhos ${personagem.caracteristicas.olhos[0]}`);


personagem.idade = 99 // Podemos mudar o valor do objeto 
console.log(personagem.idade);


// Adicionando características no objeto com array
let personagem2 = {
    carros: [
        { modelo: 'Uno', cor: 'preto' },// [0]
        { modelo: 'Onix', cor: 'vermelha' },// [1]
        { modelo: 'M.Benz', cor: 'azul' }// [2]
    ]
};
// EXIBE -->  Seu carro será: Onix da cor vermelha
console.log(`Seu carro será: ${personagem2.carros[1].modelo} da cor ${personagem2.carros[1].cor}`);



