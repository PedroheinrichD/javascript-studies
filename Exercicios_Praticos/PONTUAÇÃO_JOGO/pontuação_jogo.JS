/*
Desafio — Sistema de Pontuação de Jogo

Crie um sistema que controla a pontuação de um jogador.

Regras:
    •	A pontuação começa em 0 👍
    •	Só é permitido adicionar pontos positivos 
    •	Pontos negativos devem ser ignorados

Agora existe um conceito chamado nível do jogador.

O nível depende da pontuação total.

⸻

Regras de nível

0 até 99 pontos → Nível Iniciante

100 até 499 → Nível Intermediário

500 ou mais → Nível Avançado

⸻

Comportamento esperado

Situação inicial:

pontuação = 0
nível = Iniciante

Depois:

adicionar 50 pontos

nível = Iniciante

Depois:

adicionar 100 pontos

pontuação = 150
nível = Intermediário

Depois:

adicionar 400 pontos

pontuação =  
nível = Avançado

⸻

Se alguém tentar adicionar:

-20 pontos

Nada deve mudar.
*/


class Game {

    _score = 0


    constructor(name) {
        this.name = name
    }

    get score() {
        return this._score
    }
    set score(score) {
        if (typeof score === 'number' && score >= 0) {
            this._score += score
        }
    }


    // level calculando quando é chamado -> propriedade derivada
    get level() {
        if (this._score <= 99) {
            return "INICIANTE"
        } else if (this._score <= 499) {
            return "INTERMEDIÁRIO"
        } else if (this._score >= 500) {
            return "AVANÇADO"
        }
    }


}


const player1 = new Game('Akashi');
player1.score = 0
player1.score = 50
player1.score = 100
player1.score = 400
player1.score = -255


console.log(`Jogador ${player1.name} tem a pontuação: ${player1.score} de nível ${player1.level}`);
