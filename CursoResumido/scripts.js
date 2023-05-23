// Operador lógico e (&&) ****************

//Retorna TRUE se os dois operandos forem TRUE

// console.log(false && true); 

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar)

// Operador lógico ou (||) *****************
// Retornar true se um dos operandos forem true

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log('Pode aplicar:',podeAplicar)


// // Operador NOT (!)


// let candidatoRecusado = !podeAplicar;

// console.log('Candidato recusado:',candidatoRecusado);

// && E ~~~ || OU ~~   
// -----------------------------------------------------------


// Operador lógico não booleano

//Falsy
// undefined
// null
// 0
// false
// ''
// NaN - not a number
// Truthy


// let corPersonalizada ='Vermelho';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao
// console.log(corPerfil) //Exibe o vermelho (Primeiro valor encontrado)

// Trocando valores de variaveis
//-----------------------------------------------------


// LOOP For ~ While ~ Do while ~ For in ~~ For of

// LOOP For ****************

// for (let i = 1;i <=5; i++){
//     console.log('Estou aprendendo', i)
// }

// for (let j = 1;j <=5; j++){ //Mostrando apenas numeros impares
//     if(j % 2 !==0){
//         console.log('Apenas impar',j);
//     }
// }

//LOOP While ******************

// let i = 5; //Nesse caso não somamos, devemos subtrair.

// while (i >= 1){
//     if (i % 2 !==0){
//         console.log (i);
//     }
//     i--;
// }

// LOOP Do.. while *************

// let i = 0;
// do {
//     console.log ('Digitando', i);
//     i++; // Nesse caso ele primeiro executa e depois verifica a condição
// } while(i < 10){ // Aqui esta a condição

// }


// LOOP For in ***********************

// const pessoa = {
//     nome: 'Rick',
//     idade: 27,
// }
// // Key-valeu
// for(let chave in pessoa){
//     console.log(chave, pessoa.nome)
// }


// LOOP For of *********************


// const cores =['vermelho', 'Azul', 'Verde']

// for (let indice in cores) {
//     console.log (indice, cores[indice])
// }

// for ( let cor of cores){
//     console.log (cor)
// }



// Atividade 2 ***-****************************
// Escreva uma função que usa 2 números e retorna o maior entre eles


// let maiorNum = max(1,8)
// console.log(maiorNum)

// function max (number1, number2){
//     if (number1 > number2)
//         return number1
//      return number2
// } 


// let maiorNum = max(11,8)
// console.log(maiorNum)

// function max (number1, number2){
//     return number1 > number2 ? number1: number2
// } 


// let valorMaior = max(5,9)
// console.log (valorMaior)

// function max(numero1, numero2){
//     if (numero1 > numero2)
//         return numero1
//     else return numero2
// }


// Atividade 3 ***************************
// FizzBuzz 


// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não é divisivel por 3 ou 5 => entrada


// const resultado = fizzBuzz()
// console.log(resultado)

// function fizzBuzz(entrada){
//     if (typeof entrada !== 'number')
//         return 'Não é um número;'
//     if (entrada % 3 ===0 && entrada % 5 ===0)
//         return 'FizzBuzz'
//     if (entrada % 3 === 0)
//         return 'Fizz'
//     if (entrada % 5 === 0)
//         return 'Buzz';
//     return entrada
// }

// Atividade 4 *******************************************
// Faça uma função que vá fazer algo similar ao radar, você vai medir a velocidade do veículo e definir a quantidade de pontos que vai tomar na carteira

// Velocidade máxima de até 70 = OK
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Caso os pontos sejam maior que 12 -> "Carteira suspendida"

// verificarVelocidade(130);


// function verificarVelocidade(velocidade){
//     const veloMax = 70 //Variavel dentro da caixa
//     const KmPorPonto =5
//     if (velocidade <= veloMax)
//         console.log('OK')
//     else {
//         const pontos = Math.floor ((velocidade-veloMax)/KmPorPonto)
//         if (pontos >=12)
//             console.log('Carteira suspensa')
//         else 
//             console.log('Pontos', pontos)
//     }
// }
