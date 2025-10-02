// TODO ARRAY COMEÇA A CONTAGEM DO 0 --> [0] , [1] , [2]...

//           [0]      [1]       [2]
let cores = ['azul', 'verde', 'vermelho'] // lista com varios itens --> array = [] 
console.log(cores);

console.log(cores[2]); // exibe vermelho






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





