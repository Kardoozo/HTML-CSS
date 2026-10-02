function Veri(){
var n = document.getElementById('NU').value
var res = document.getElementById('res')

if( n ===""){
    res.innerHTML = ('Você Precisa colocar Um Número')
}else {
    n = Number(n)


if(n === 0){

    res.innerHTML = (`Número 0`)

}else if (n > 0){

    res.innerHTML = ('Número positivo')

}else if(n <0){

res.innerHTML = ('Número negativo')

}
 }
 }res.style.textAlign = "center"