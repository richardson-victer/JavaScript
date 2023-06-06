//RECURSIVIDADE 

function fatorial(n) {
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

// Se n == 1 o único resultado seria 1. Caso seja outro numero, receberemos esse numero (n) -1 ... ou seja n = 5 então 5(5-1) = 5x4!

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/