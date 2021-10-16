function carregar()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHour()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa Noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'

    }