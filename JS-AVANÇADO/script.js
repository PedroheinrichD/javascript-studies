

/*
     o que é OO? 
     É uma abordagem de programação onde os códigos são agrupados em objetos 
     que se comunicam entre si.


     OOP -> Object Oriented Programming 

     this -> se refere ao proprio objeto 
*/


// criando um "molde" -> class


class Person { // class é um conjunto de atributos e métodos que definem um objeto
    constructor(name, age) { // construindo
        this.name = name,
            this.age = age
    }
}

// criando a instância
const p1 = new Person("Pedro", 20);
const p2 = new Person("joão", 22);
const p3 = new Person("José", 19);

console.log(`${p1.name} tem ${p1.age} anos de idade`);
console.log(`${p2.name} tem ${p2.age} anos de idade`);
console.log(`${p3.name} tem ${p3.age} anos de idade`);

