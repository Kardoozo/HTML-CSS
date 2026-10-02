function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        res.innerHTML = 'Ano de nascimento inválido!'
    }
    else {
        var fsex = document.getElementsByName("radsex")
        var idade =  ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 13){
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Criança.`
                img.setAttribute("src", "fotoHC.png")
                //criança

            } else if(idade <21){
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Jovem.`
                img.setAttribute("src", "fotoHJ.png")
                //jovem
            }else if(idade <50){
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Adulto.`
                img.setAttribute("src", "fotoHA.png")
                //adulto
            } else {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Velho.`
                 img.setAttribute("src", "fotoHV.png") 
                //idoso
            }
        }
         if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 13){
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Criança.`
                //criança
                img.setAttribute("src", "fotoMC.png")
            } else if(idade <21){
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Jovem.`
                img.setAttribute("src", "fotoMJ.png")
            }else if(idade <50){
                //adulto
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Adulta.`
                img.setAttribute("src", "fotoMA.png")   
            } else {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos Velha.`
                //idoso
                img.setAttribute("src", "fotoMV.png")
            }
        }
        res.style.textAlign = "center"
        
        res.appendChild(img)
    }
}