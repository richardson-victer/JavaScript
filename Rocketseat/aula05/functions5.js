//arrow function

//const sayMyName = () => {//Esta setinha indica que é um arrow function, geralmente atribuida á uma constante.
    //console.log ('Rick')
//}

//sayMyName()

// callback function

function sayMyName(name){
    console.log('Antes de executar a função callback')

    name() //Recebe o sayMyName de baixo

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log ('Estou em uma callback')
    }
)