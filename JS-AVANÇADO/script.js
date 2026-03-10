

/*
     o que é OO? 
     É uma abordagem de programação onde os códigos são agrupados em objetos 
     que se comunicam entre si.


     OOP -> Object Oriented Programming 

     this -> se refere ao proprio objeto 
*/


// criando um "molde" -> class


class Person { // class é um conjunto de atributos e métodos que definem um objeto

    steps = 0; // criando passos 

    constructor(name) { // construindo
        this.name = name
    }

    //Ações
    takeAStep() {
        this.steps++
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {
            this.age = newAge
        }else{
            console.log(`Número inválido`);
            
        }
    }

}

// criando a instância
const p1 = new Person("Pedro");
p1.setAge(20); // adicionando a idade pela função 

const p2 = new Person("joão");
p2.setAge(22); // adicionando a idade pela função 


const p3 = new Person("Alberto")
p3.takeAStep() // executando ação de passos
p3.takeAStep() // executando ação de passos




console.log(`${p1.name} tem ${p1.age} anos de idade`);
console.log(`${p2.name} tem ${p2.age} anos de idade`);
console.log(`${p3.name} tem ${p3.age} anos de idade e deu ${p3.steps} PASSOS`);

