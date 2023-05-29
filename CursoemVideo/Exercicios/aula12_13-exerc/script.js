function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if(hora >= 0 && hora <12){
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#A2AD90'

    } else if (hora >=12 && hora <=18){
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#D77727'
        
    } else {
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#5D4B77'
    }
    
}
