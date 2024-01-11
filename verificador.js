function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero= 'homem'
        if (idade >=0 && idade < 12) {
            //criança
            img.setAttribute('src', 'criançag.jpg')
        } else if (idade < 21 ) {
            //jovem
            img.setAttribute('src', '1.jpg')
        } else if (idade < 50 ) {
            //adulto
            img.setAttribute('src', '---.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'a.jpg')
        }
       } else if (fsex[1].checked) {
        genero = 'mulher'
        if (idade >=0 && idade < 12) {
            //criança
            img.setAttribute('src', 'criançam.jpg')
        } else if (idade < 21 ) {
            //jovem
            img.setAttribute('src', '2.jpg')
        } else if (idade < 50 ) {
            //adulto
            img.setAttribute('src', 'mulher.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'ih.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}