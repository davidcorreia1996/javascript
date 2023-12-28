function verificar (){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked){
            gênero = 'Homem'
            if(idade < 10){
                img.setAttribute('src', 'adolecenteM.png')

            } else if (idade < 21){
                img.setAttribute('src', 'adultoM.png')

               
            } else if (idade < 50){
                img.setAttribute('src','adultoM.png')

            } else {
                img.setAttribute('src', 'idosoM.png')

            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
      
    if(idade < 10){
        img.setAttribute('src', 'adolecenteF.png')

    } else if (idade < 21){
        img.setAttribute('src','adultaF.png')

    } else if (idade < 50){
        img.setAttribute('src','adultaF.png')

    } else {
        
        img.setAttribute('src','idosaF.png')
    }
}
res.style.textAlign = 'center'
 res.innerHTML = `Detectamos ${gênero} com ${idade}anos.`
 res.appendChild(img)
}
}