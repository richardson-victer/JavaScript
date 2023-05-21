
// 1. Declare uma variavel e nome wight

    let weight

// 2. Que tipo de dado é a variável acima?

    console.log(typeof weight) //undefined


/*
    3. Declare uma varável e atribua valores para cada um dos dados:
        name: String
        age: Number (integer)
        stars: Number (float)
        isSubscribed: Boolean
*/ 
    let name = "Rick"
    let age = 27
    let stars = 4.8
    let isSubscribe = true
    

    console.log()

/*
    4. A variável student abaixo é de que tipo de dados?

    Objeto

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
    */ 

    let student = {
        name: "Rick",
        age: 27,
        weight: 80,
        isSubscribe: true,
    }

    console.log(student)
    
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`) // Precisa usar a cráse se não ele da erro :)
/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

    let students =[]

/*
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir nele o array)
*/ 

    students = [
        student
    ] //Aqui eu não preciso usar o Let porque ele já foi declarado em cima. Uso apenas o students = recebe = student

    console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima  
    */ 

    console.log (students[0])

    /*
        8. Crie um novo student e coloque na posição 1 do Array students
    */

   const jhon ={
    name: "jhon",
    age: 23,
    weight: 75.8,
    isSubscribe: true,
   }

   students = [ //Aqui foi reatribuido as variáveis dentro de uma outra variável "mestre" student variável 0, jhon variável 1
    student,
    jhon
   ]
    
   console.log (students)
   
    /*
        9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.

        console.log (a)
        var a = 1
    */

    // a = undefined (o valor foi atribuido após a impressão)

    console.log (a)
    var a = 1

    //Ele só aparece undefined por causa do hoisting. A variável A sobe sem atribuição, se fosse um Let ou Const ia dar erro de referência.
