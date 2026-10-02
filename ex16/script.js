function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")


//o lenght é quantas letras tem dentro!

    if(ini.value.length == 0 || fim.Value.length == 0 || passo.value.length == 0){
        alert("[erro] faltam dados!")
    }else{
        alert("tudo ok")

    }
}