/*
Desafio — Sistema de Temperatura

Crie um sistema que representa uma temperatura em Celsius.

Regras do sistema:
    •	A temperatura não pode ser menor que -273.15 (zero absoluto).
    •	Se alguém tentar definir um valor menor que isso, o valor não deve mudar.

Você também precisa conseguir consultar a temperatura em Fahrenheit.

A conversão é:

C × 9 / 5 + 32

⸻

Comportamento esperado

Situação inicial:

temperatura = 0°C

Depois:

temperatura definida como 25

Agora quando alguém consultar:

temperatura em Celsius → 25

temperatura em Fahrenheit → 77

⸻

Se alguém tentar fazer:

temperatura = -500

O valor deve continuar sendo 25.
*/



class Temp {
    _c = 0


    set c(c) {
        if (typeof c === 'number' && c >= -273.15) {
            this._c = c
        }
    }

    get c() {
        return this._c
    }

    get f() {
        return this._c * 9 / 5 + 32
    }
}

const temperatura = new Temp();
temperatura.c = 25// Celsius
temperatura.c = -500// Celsius


console.log(`temperatura em Celsius → ${temperatura.c}°C`);
console.log(`temperatura de Celsius para temperatura em Fahrenheit → ${temperatura.f}°F`);
