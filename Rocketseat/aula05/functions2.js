//function expression
//function anonymous

//parâmetros (parameters) Usados para receber os valores dentro da função

const sum = function (number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
sum(2, 3) // arguments

//Se eu executar o console aqui fora ele nãov ai rodar, vai dar erro de referência.

sum (number1, number2)

console.log (`o número 1 é ${number1} `)
console.log (`o numero 2 é ${number2}`)
console.log (`a soma é ${sum(number1, number2)}`)