
function tabuada(){
    let num = document.getElementById('inumero') //String
    let tab = document.getElementById('itabela')

    if (num.value.length==0){
        alert('Digite um número!')
    }else{
        let n = Number(num.value) //Convertendo Number
        let t=1 //Inicio da tabela
        tab.innerHTML='' //Limpar tabela
        while (t<=10){
            let item = document.createElement('option')
            //Criamos um option dinâmico. Ao invés de ir no HTML e adicionar <option>. Ai usamos document.createElement
            item.text = `${n} x ${t} = ${n*t}`
            item.value = `tab${t}` //Atribuindo sentido ao item. No javascript não faz sentido, mas no PHP sim
            tab.appendChild(item)
            //nesse tab.appendChild(item) ele serve pra adicionar um elemento filho que será (item)
            t++
        }
    }
}