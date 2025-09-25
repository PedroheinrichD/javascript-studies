// FUNÇÕES 
/*Uma função em programação é como uma receita de cozinha. Ela tem um nome único, recebe ingredientes (parâmetros),
realiza passos específicos (corpo da função) e fornece um resultado (valor de retorno) quando é chamada.
Funções ajudam a organizar o código, torná-lo reutilizável e mais fácil de entender.*/


// function name(params) {}


function gravidade() {
    console.log('a gravidade é: ' + 9.8);
}

gravidade()



function somar(x, y) {
    let soma = x + y
    console.log('resultado da soma: ' + soma);
}
somar(2, 2)



//  USANDO O RETURN
/*Quando uma função termina, ela pode devolver um valor pra quem a chamou. 
Esse valor volta no lugar onde você chamou a função.

// ENTRADA --> PROCESSAMENTO --> SAÍDA
*/
function nomeCompletoU(nome, sobrenome) {
    return `seu nome é: ${nome} ${sobrenome}`;
}

let usuario = nomeCompletoU("Pedro", "Heinrich") // armazenando o resultado na var (usuario)
console.log(usuario);



// FUNÇÕES COM RETORNO CONDICIONAL
// recebe a idade -> retorna se é maior de idade

idade = 18
function verificadorIdade() {
    if (idade >= 18) {
        return `você é maior de idade`
    } else {
        return `você não é maior de idade`
    }
}

let result = verificadorIdade()
console.log(result);






/*Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
*/


let porcentagem = 30
let valor = 200

function calcPct(porcentagem, valor) {
   let resultC = (valor * porcentagem) / 100
   return resultC.toFixed(2) + "%"
}



let calcResult = calcPct(30,200)
console.log(`${porcentagem}% de ${valor} é : ${calcResult} `);



