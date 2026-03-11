/*
Desafio 3 — (Produto com desconto)✅
Agora imagine que você está criando um sistema de produtos de uma loja.

Crie uma classe chamada Produto.

Cada produto possui:

nome ✅
preço ✅
desconto ✅

O desconto começa em 0%. ✅

⸻

1️⃣ Definir preço

Crie um mecanismo para definir o preço do produto.

Regras:
    •	só pode aceitar números ✅
    •	não pode aceitar valores negativos ✅

Se o valor for inválido, o preço não muda.

⸻

2️⃣ Definir desconto

O desconto representa porcentagem.

Ele precisa obedecer a seguinte regra: 

o desconto deve estar entre 0 e 100 ✅

Exemplos válidos:

10
25
50

Exemplos inválidos:

-10
120

Se o valor for inválido, não altera o desconto. ✅

⸻

3️⃣ Preço final do produto

Você precisa criar uma forma de obter o preço final do produto. 

Esse valor não deve ser armazenado.

Ele deve ser calculado automaticamente usando a fórmula:

preço - (preço × desconto / 100)

Exemplo:

preço = 200
desconto = 10

preço final = 180
*/


class Product {
    constructor(name, price, discount = 0) {
        this.name = name
        if (typeof discount === 'number' && discount >= 0 && discount <= 100) {
            this.discount = discount
        } else {
            alert('(Discount error, please enter a valid number.)')
            this.discount = 0
        }

        if (typeof price === 'number' && price > 0) {
            this.price = price
        }else{
            alert('(PRICE error, please enter a valid number.')
            this.price = 0
        }
    }

    

    get priceDiscount() {
        return this.price - (this.price * this.discount / 100)
    }


}


const discountProduct = new Product('Dom Quixote', 200, 10);
console.log(`O livro ${discountProduct.name} está em OFERTA!! De R$${discountProduct.price} Por apenas R$${discountProduct.priceDiscount} (desconto de ${discountProduct.discount}% no PIX!!)`);


