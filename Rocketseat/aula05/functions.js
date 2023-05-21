/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const rick = new Person("Rick")
const joao = new Person ("João")
console.log (rick.walk())
console.log (joao.walk())