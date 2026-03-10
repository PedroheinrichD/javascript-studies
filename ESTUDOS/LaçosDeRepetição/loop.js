// Acessando produtos com o loop for
let produtos = ['macarrão','feijao','arroz','farinha']


/*Como funciona um Loop for?
O loop for é como preencher um formulário com três partes:

Início::Onde começa? --> criando a VAR i que recebe 0 
Condição: Até quando repetir? --> enquanto o i for menor que os itens do array 
Incremento: Como avançar? --> passando de 1 em 1
*/
for(i = 0; i < produtos.length ;i++){
   i = produtos
   console.log(i);
}



//LOOP while significa ENQUANTO , enquanto tal condição for verdadeira...


let j = 0
while(j < 10){
    console.log(j);
    j++
}
