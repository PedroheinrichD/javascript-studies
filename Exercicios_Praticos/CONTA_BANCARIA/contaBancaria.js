/*
Desafio 2 — (Conta Bancária)
Você precisa criar uma classe chamada Depósito.✅

A conta deve possuir um saldo interno que começa com valor 0. ✅

Esse saldo não pode ser acessado diretamente fora da classe. ✅

Agora crie duas coisas:
1️⃣ Um mecanismo para depósito

Regras do depósito:
	•	só pode aceitar números ✅
	•	o valor precisa ser maior que 0 ✅
	•	, equando o valor for válidole deve ser somado ao saldo atual ✅
	•	se o valor for inválido, nada acontece ✅

Exemplo de comportamento esperado:

saldo começa em 0

se alguém depositar 100
saldo passa a ser 100

se depois depositar 50
saldo passa a ser 150

se tentar depositar -20
o saldo permanece 150

⸻

2️⃣ Um mecanismo para consultar o saldo

Você precisa de uma forma de ver o saldo atual.

Essa ação:
	•	não pode modificar o saldo ✅
	•	apenas retorna o valor atual ✅
*/


class BankAccount{
    _value = 0;

    set value(value){
        if (typeof value === 'number' && value > 0) {
            this._value += value       
        }
    }

    get value(){
        return this._value
    }

}

const newDeposit = new BankAccount();

newDeposit.value = 100;// SET
newDeposit.value = 50;// SET


console.log(`deposit amount: ${newDeposit.value}`);// GET

