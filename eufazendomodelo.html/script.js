function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementsByName("txtano")[0];
    var res = document.getElementById("res");
    if(fano.value.length == 0 || Number(fano.value > ano)) {
        res.innerHTML = "Ano inválido!";
    }else{
        var fsex = document.getElementsByName('radsex');
        var genero = "";
        var idade = ano - Number(fano.value);
        img = document.createElement("img");
        img.setAttribute("id", "foto");
        if(fsex[0].checked){
            genero = "Homem";
            if(idade < 12){
                img.setAttribute("src", "fotoHC.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Criança!`;
                }
            } else if (idade <21){
                img.setAttribute("src", "fotoHJ.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Jovem!`;
                }
            } else if (idade <50){
                img.setAttribute("src", "fotoHA.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Adulto!`;
                }
            }else if (idade <90){
                img.setAttribute("src","fotoHV.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Idoso!`;
                }
            }
        }
         if(fsex[1].checked){
            genero = "Mulher";
            if(idade < 12){
                img.setAttribute("src", "fotoMC.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Criança!`;
                }
            } else if (idade <21){
                img.setAttribute("src", "fotoMJ.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Jovem!`;
                }
            }else if (idade <50){
                img.setAttribute("src", "fotoMA.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Adulta!`;
                }
            }else if (idade <90){
                img.setAttribute("src","fotoMV.png");{
                    res.innerHTML = `Detectamos ${genero} com ${idade} Anos. Idosa!`;
                }
            }
        }res.style.textAlign = "center"

    }res.appendChild(img)
}