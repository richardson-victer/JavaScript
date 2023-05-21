//function scope

let subject = "stuped"
let elements = "ice"

function createThink(subject){
    return subject ='Study'
}

console.log (createThink(subject))

//Nesse exemplo a variável subject definida dentro do scope function foi atribuida ao console.log


console.log (subject)

//Esse console log apesar de estar puxando o subject, ele esta pegando do scope total, de fora.

function createElement(){
    return elements = "fire"
}

console.log (elements) // Esse primeiro retornou ice porque o valor do elements já tinha sido atribuida
console.log (createElement(elements)) //Esse console log fez a primeira reatribuição do elements para fire
console.log (elements) //Esse console retornou novamente o fire.
//Esse tipo de cuidado devemos ter para não reatribuir valor a uma variavel de scope diferente. Para determinar uma variável de "mesmo nome" porém de funções diferentes: recrie ela dentro da function =:> function createElement (elements){}  Desta forma ele esta simbolizando um elements de dentro do próprio scope


