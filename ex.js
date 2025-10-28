/*Par ou ímpar
Crie uma função que recebe um número e retorna se ele é par ou ímpar.
*/
function verificadorP(n) {
    if (n % 2 === 0) {
        console.log(`Este numero : ${n} é PAR`);
    } else {
        console.log(`Este numero : ${n} é ÍMPAR`);
    }
}
verificadorP(2)



/*Contador de letras
Peça uma palavra e mostre quantas letras ela tem.
*/
let palavra = 'JavaScript'
console.log(`${palavra} tem ${palavra.length} <-- Letras (caracteres)`);




/*Tabuada
Crie uma função que recebe um número e retorna a tabuada dele de 1 a 10.*/
function tabuada(nT) { // nt = numero tabuada
    console.log(`
        ${nT} * 1 = ${nT * 1},
        ${nT} * 2 = ${nT * 2},
        ${nT} * 3 = ${nT * 3},
        ${nT} * 4 = ${nT * 4},
        ${nT} * 5 = ${nT * 5},
        ${nT} * 6 = ${nT * 6},
        ${nT} * 7 = ${nT * 7},
        ${nT} * 8 = ${nT * 8},
        ${nT} * 9 = ${nT * 9},
        ${nT} * 10 = ${nT * 10}
`);

}
tabuada(2)



/*
Maior número da lista
Crie uma função que recebe um array de números e retorna o maior deles.*/

function numeroA() {
    numeros = [4, 7, 1, 9, 3]
    let maiorNumero = Math.max(...numeros)
    console.log(`O maior deles ${numeros} é: ${maiorNumero} `); // exibe (O maior deles 4,7,1,9,3 é: 9 )
}
numeroA()



/*Validador de senha
Crie uma função que receba uma senha e verifique se ela é forte.

Pelo menos 8 caracteres

Deve ter letras e números

Deve ter pelo menos um caractere especial (!@#$%&*)*/


function verificadorSenha(senha) {

    caractereEspecial = ["!", "@", "#", "$", "%", "&"]
    temEspecial = caractereEspecial.some(simbolo => senha.includes(simbolo))


    if (senha.length >= 8 && temEspecial) {
        console.log(`Senha forte`);
    } else {
        console.log(`Senha fraca`);
    }
}
verificadorSenha('Pedro@!#')


/*O .some() vai testar cada simbolo da lista: "!", "@", "#", etc.

Dentro do teste, usamos senha.includes(simbolo) → isso verifica se a senha contém aquele símbolo.

Se encontrar pelo menos um, .some() já retorna true.*/







/*Criar um objeto aluno e faz o seguinte no teu código:

1- define nome, nota1, nota2;

2- cria uma função dentro do objeto que calcula e retorna a média;

3- testa no console mostrando o nome do aluno e sua média.*/



let aluno = {
    nome: 'Pedro',
    nota1: 2,
    nota2: 10,
    media: function () {
        return (this.nota1 + this.nota2) / 2
    }
}


console.log(`a média da aluno é: ${aluno.media()}`);




/*🧩 Desafio prático: Sistema de alunos

O usuário quer que:

1- Tenha vários alunos, cada um com nome e duas notas;

2- Calcule a média de cada um;

Mostre no console o nome e se ele passou ou não, considerando média ≥ 6 como aprovado.
*/
let alunos = [
    {   nome: 'Pedro', nota1: 5, nota2: 8,
        media: function () {return (this.nota1 + this.nota2) / 2}},

    {   nome: 'Maria', nota1: 7, nota2: 10,
        media: function () {return (this.nota1 + this.nota2) / 2}},

    {   nome: 'João', nota1: 8, nota2: 9,
        media: function () {return (this.nota1 + this.nota2) / 2}},

    {   nome: 'Lucas', nota1: 10, nota2: 0,
        media: function () {return (this.nota1 + this.nota2) / 2}},

    {   nome: 'Kauã', nota1: 2, nota2: 5,
        media: function () {return (this.nota1 + this.nota2) / 2}}

]


for(i = 0 ;  i < alunos.length ; i++){
    if(alunos[i].media() >= 6){
        console.log(`Aluno: ${alunos[i].nome} foi APROVADO com a média: ${alunos[i].media().toFixed(1)} nesse bimestre!`);
    }else{
        console.log(`Aluno: ${alunos[i].nome} foi REPROVADO nesse bimestre :( com a média: ${alunos[i].media().toFixed(1)}  , porfavor agendar uma nova prova.)`);
    }
    
}





// Crie um array - produtos
let produtosLoja = [
    {nome: 'Camiseta Básica Algodão', preco: 49.90, categoria: 'Vestuário - Camisetas'}, 
    {nome: 'Calça Jeans Skinny', preco: 129.99, categoria: 'Vestuário - Calças'}, 
    {nome: 'Boné Aba Curva', preco: 35.50, categoria: 'Acessórios - Cabeça'}, 
    {nome: 'Jaqueta Corta-Vento', preco: 199.90, categoria: 'Vestuário - Agasalhos'}
];

produtosLoja.sort( (a,b) => {
    if(a.preco > b.preco){
        return 1
    }else if(a.preco < b.preco) {
        return -1
    }else{
        return 0
    }
});

for (let i = 0; i < produtosLoja.length; i++) {
    console.log(`Produto: ${produtosLoja[i].nome} | Categoria: ${produtosLoja[i].categoria} | Preço: R$ ${produtosLoja[i].preco}`);
}




