/* Definições das VAR (Let , Const e Var */

// var --> é uma variável que pode ser usada em qualquer contexto (Pode ser modificado)

// let --> é usada em uma variável especifica (Pode ser modificado)

// const --> variável constante , ou seja , um valor que não pode ser modificado (mudado)


/*Criação da variável (let , const , var)  */
let idade = 90  // let irá criar uma variavel 
let nome = 'Pedro' // texto fica entre 'aspas'

console.log(nome); // exibe (Pedro)



/* Tipos (types) */
let sobrenome = 'Dias' // type = string 
let nascimento = 2005 // type = number
let logado = true // type = boolean --> recebe V ou F
let lista = ['arroz','macarrão'] // array guarda vários valores , string , number , etc
let nomeCompleto = { nome:'Pedro' , sobrenome:'Dias'} // Objeto guarda variáveis 

/*como ver o type da var ?*/
console.log(typeof logado); // exibe (boolean)
console.log(typeof nome); // exibe ('string')
console.log(typeof idade); // exibe (number)
console.log(typeof nomeCompleto); // exibe (Object)


/* `Tamplate String` */

// vantagens da tamplate string : não precisa concatenar usando operações

// nomeCompleto = nome + ' ' +sobrenome
nomeCompleto = `${nome} ${sobrenome}`


let idadeString = 90
console.log(`Idade: ${idade} anos`); // exibe {Idade: 90 anos}




