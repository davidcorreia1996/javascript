var agora = new Date ()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora >= 6){
    console.log('Bom dia!')

    } else if (hora <= 18 && hora >= 12){
        console.log('Boa tarde!')
    } else if (hora <= 23.59 && hora >=18) {
        console.log('Boa Noite!')
    } else if (hora <= 5.59 && hora >= 0){
        console.log('Boa madrugada!')
    }else {
        console.log('Erro!')
    }
