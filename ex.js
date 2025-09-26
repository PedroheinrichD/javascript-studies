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