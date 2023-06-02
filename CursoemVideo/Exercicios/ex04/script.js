
function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('iano') //Formulario
    let res = document.getElementById('res')

    if(fano.value.length == 0 || Number (fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        let idade = ano - Number(fano.value)
        let sexo = document.getElementsByName('rsex')//Formulario
        let genero = ''
        let img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //Criança  
                img.setAttribute('src','imagens/homem-crianca.jpg')
            } else if (idade < 18){
                // Adolescente
                img.setAttribute('src','imagens/homem-adolescente.jpg')
            } else if (idade < 30){
                //Jovem
                img.setAttribute('src','imagens/homem-jovem.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src','imagens/homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src','imagens/homem-idoso.jpg')
            }
        
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //Criança   
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
            } else if (idade < 18){
                // Adolescente
                img.setAttribute('src','imagens/mulher-adolescente.jpg')
            } else if (idade < 30){
                //Jovem
                img.setAttribute('src','imagens/mulher-jovem.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src','imagens/mulher-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src','imagens/mulher-idosa.jpg')
            }
        }
        res.innerHTML= `Detectamos ${genero} com ${idade} anos`  
        res.appendChild(img)
    }
}