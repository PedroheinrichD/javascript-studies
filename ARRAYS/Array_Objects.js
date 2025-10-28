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







// FUNÇÕES DENTRO DE OBJETOS 
let pessoa = {
    nome: 'Pedro',
    sobrenome: 'Dias',
    idade: 19,
    nomeCompleto: function() {
        return this.nome +' '+ this.sobrenome // o THIS acessa o proprio objeto 
    }
}

console.log(pessoa.nomeCompleto());










// MANIPULAÇÃO DE ARRAY

let fruits =['banana','maçã','uva','melancia']

fruits.push('melão') // push() -> adiciona mais um item no final do array 

fruits.pop() // pop() -> remove o ULTIMO item do array

fruits.shift() // shift() -> remove o PRIMEIRO item do array

fruits.join('/') // join() --> Eles são concatenados em uma string com um separador especificado, EXEMPLO = maçã / uva / melancia

fruits.sort() // --> altera a ordem dos itens do array 

fruits.reverse() // reverte a ordem dos itens do array, ordem decrescente   


let bigFruits = fruits.filter( (item) => {return item.length > 4}) // filter() --> filtra retornando um novo array, podemos fazer com Value, Index ou array



let everyFruits = fruits.every((value) => {return value.length > 3 }) // every() --> Só retorna TRUE caso todos os itens do array estejam de acordo com a verificação
if(everyFruits){
    console.log(`Todos os itens do array são maiores que 3`);
} else{
    console.log(`algum item não satifaz a verificação`);
}



let someFruits = fruits.some((value) => {return value.length > 3 }) // some() --> retorna TRUE caso UM dos itens do array estejam de acordo com a verificação
if(everyFruits){
    console.log(`Todos os itens do array são maiores que 3`);
} else{
    console.log(`algum item não satifaz a verificação`);
}


if(fruits.includes('uva')){ // includes() --> procura dentro o array, como se fosse um filtro para achar o que quer
    console.log(`tem uva SIM`);
} else{
    console.log(`tem uva NAO`);
}




// exemplo do sort()
let cars = [
    {brand: 'Chevrolet', year: '2015' },
    {brand: 'Fiat', year: '2022' },
    {brand: 'hyundai', year: '2018' }
]

// comparando dois itens por vez e reorganizando o array com base no valor retornado (1, -1 ou 0).
cars.sort(
    function (a,b){
        if(a.year > b.year){
            return 1
        }else if(a.year < b.year){
            return -1
        }else {
            return 0
        }
    }
)

console.log(cars);
