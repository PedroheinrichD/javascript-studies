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
*/


let porcentagem = 30
let valor = 200

function calcPct(porcentagem, valor) {
    let resultC = (valor * porcentagem) / 100
    return resultC.toFixed(2) + "%"
}



let calcResult = calcPct(30, 200)
console.log(`${porcentagem}% de ${valor} é : ${calcResult} `);



/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
*/

//Valor base do m2 = R$ 3.000 (custo de CADA m²)
let m2 = 3000

function precoImovel(metragem, quartos) {
    let multplicador

    switch (quartos) {
        case 1:
            multplicador = 1.0
            break;
        case 2:
            multplicador = 1.2
            break;
        case 3:
            multplicador = 1.5
            break

        default:
            console.log(`Não há uma regra definida para ${quartos} quartos.`);
            break;
            return
    }


    let precoFinalImovel = (m2 * metragem) * multplicador

    console.log(`Imóvel de ${metragem}m² com ${quartos} quartos: R$ ${precoFinalImovel.toFixed(2)}`);
}

precoImovel(122, 2) // exibe --> Imóvel de 122m² com 2 quartos: R$ 439200.00




/*
Crie uma funcão que valide usuário e senha
Usuário correto : pedro
senha correta: 123
*/

function validar(usu, senha) {
    if (usu === 'Pedro' && senha === 123) {
        console.log(`Usuario e senha CORRETOS!`);
    } else {
        console.log(`Acesso NEGADO`);
    }
}


validar('Pedro', 123)




// ARROW FUMCTIONS  () => {}

const somaar = (x, y) => x + y
console.log('resultado: ' + somaar(2, 2));




// MAIS EXEMPLOS DE FUNÇÕES



function addRaiz(a, b) {
    const raizQuadrada = (x) => {
        return x * x
    }

    return raizQuadrada(a) + raizQuadrada(b)
}

console.log(addRaiz(2, 2));
