//Manipulando strings e arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray =  phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
//phraseWithUnderscore é apenas o nome da variável que significa "Frase com Underscore ou underline"
