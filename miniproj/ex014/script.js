function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8
        msg.innerHTML =`Agora são ${hora} horas.` 
    if (hora >= 0 && hora <12)  {
        img.src = './img/fotomanha.png'
        img.src = fotomanha.png
        img.src = "fotomanha.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = './img/fototarde.png'
        img.src = fototarde.png
        img.src = "fototarde.png"
        document.body.style.background = '#b9846f'

    } else {
        img.src = './img/fotonoite.png'
        img.src = fotonoite.png
        img.src = "fotonoite.png"
        document.body.style.background = '#515154'
    }


}
