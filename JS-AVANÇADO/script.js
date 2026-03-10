/*
    GETTER /  roda o getter sempre que o valor é pedido ex: p1.age
     alguém pede o valor -> getter executa -> getter retorna algo

     SETTER / roda o setter sempre que o valor é atribuido ex: p1.age = (valor)
     alguém define o valor -> setter executa -> setter decide o que fazer com esse valor 
*/


// criando um "molde" -> class
class Person { // class é um conjunto de atributos e métodos que definem um objeto

    steps = 0; // criando passos 
    _age = 0; // criando idade

    constructor(FirstName, LastName) { // construindo
        this.FirstName = FirstName
        this.LastName = LastName
    }

    // USANDO GETTER 
    get fullName() { // nome completo ex:
        return `${this.FirstName + this.LastName}`
    }

    get age(){ //  
        return this._age // _age é uma variavel interna -> acessando o valor 
    }


    // USANDO O SETTER -> Setter é usado para definir ou modificar valores.
    set age(x) { // x = 20
        if (typeof x == 'number') {
            this._age = x // this._age = 20 --> o 20 vai ser armazenado em (_age)
        }
    }

}

// criando a instância
const p1 = new Person("Pedro", " DIAS");
p1.age = 20 // executando o setter. Toda vez que temos um valor sendo atribuído SEMPRE CAIRÁ NO SETTER

const p3 = new Person("Alberto", " Miranda")
p3.age = 55 // executando o setter. Toda vez que temos um valor sendo atribuído SEMPRE CAIRÁ NO SETTER




//chamando a função fullName   
// p1.age -> VAI CAIR NO GET , ou seja , o getter entrega vaçor para quem pediu o valor -> nesse caso o console.log()
console.log(`${p1.fullName} tem ${p1.age} anos de idade`);
console.log(`${p3.fullName} tem ${p3.age} anos de idade e deu ${p3.steps} PASSOS`);

