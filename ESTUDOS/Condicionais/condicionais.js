/*
== → Igualdade (compara só os valores, ignora o tipo)
=== → Igualdade estrita (compara valor e tipo)
!= → Diferença (só compara valor, ignora o tipo)
!== → Diferença estrita (valor e tipo precisam ser diferentes)
> → Maior que
< → Menor que
>= → Maior ou igual a
<= → Menor ou igual a
&& → E lógico (true só se as duas condições forem verdadeiras)
|| → OU lógico (true se pelo menos uma condição for verdadeira)
! → NÃO lógico (negação)
*/






/* (if) e (else) */

// if --> signifca 'se'
// else --> caso contrário 
// se a condição for atendida ->  beleza , caso contrário  -> executa outra alternativa

// verificação se a pessoa é maior de idade
idade = 19

if (idade >= 18) { // (condição)
    console.log(`Maior de idade , sua idade é ${idade} `);
} else {
    console.log(`NÃO é maior de idade, pois você tem ${idade} anos`);
}

// Se a idade for maior ou igual a 18 , o console vai exibir ("Maior de idade , sua idade é...")
// Caso contrário ("NÃO é maior de idade pois você tem... anos")



/*=================================================================================================*/

/* Condicional == e === */

// == significa IGUAL ==  --> a string pode ser identificada 
idade = 20;
// ou
idade = "20";

if (idade == 20) {
    console.log("Você tem 20 anos !!")
}


// === iginifica IGUAL só que rigoroso === --> A string NÃO é usada

idade = 20

if (idade === 20) {
    console.log("Você tem 20 anos !!")
}


/*=================================================================================================*/



// USANDO && e if e else if

if (idade >= 18 && idade < 60) {
    console.log(`Você é um adulto`);
} else if (idade >= 60) {
    console.log(`Você é um idoso`);
}


// um pouco diferente mas segue o mesmo principio
var verificacao = idade > 18

if (verificacao) {
    console.log('simmmmm');
} else {
    console.log('não');
}



// preco está caro? PS: até 45 está barato

let preco = 66
if (preco <= 45) {
    console.log('ta barato demais...');
} else {
    console.log('carooooo');

}



// Condicional Ternário --> boolean em uma linha só ? :

let isMember = true;
let shipping = isMember ? 20 : 5 // depois do ? 'é o que vai ser passado se a condição for (true)' : 'caso contrario outro valor (false)'
console.log(shipping); // exibe 20
console.log(isMember ? 'Você é um membro!!' : 'não é um membro');



// verificando o valor do frete
let freteGratis = 22
let valorFrete = 12.99
let calc = (freteGratis >= 21 ? 'Frete grátis !' : 'Valor do frete: ' + valorFrete)
console.log(calc);



// SWTICH --> são multiplos casos 
let profession = 'policial'
console.log('Profissão: ' + profession);


switch (profession) {
    case 'fiscal': console.log('Camiseta da Profissão: cinza')
        break;
    case 'policial': console.log('Camiseta da Profissão: azul')
        break;
    case 'bombeiro': console.log('Camiseta da Profissão: vermelho')
        break;
    default: console.log('Sua camisa será: branca')
        break;
}



