// DICA: CRIE FUNÇÕES/TESTES PARA VALIDAR SEUS CÓDIGOS.
// VALIDAR PREENCHIMENTO, CLICK, MENSAGEM
// ANTES DE CODAR, VALIDE PARA CONFIRMAR SE TODOS OS DADOS VÃO APARECER INICIALMENTE.

function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if  (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        // alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            p =1
        }
        if(i < f){
            //Contagem crescente
            for (let c=1 ; c<=f ; c+=p){
                res.innerHTML += `${c} \u{1F449}	`
            }
        }else{
            //Contagem decrescente
            for (let c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
    } res.innerHTML += `\u{1F3C1}`
}
    