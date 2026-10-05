let num =[1,5,3,4,8,7,0,2,6]
/*  
num.push(9)
num.sort()
console.log(num)


console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)  */





/*
for(let pos in num){
    console.log(`A Posição ${pos} tem o Valor ${num[pos]}`)
}
*/

let pos = num.indexOf(8)

if(pos ==-1){
    console.log(`não existe essa posição`)
}else{
    console.log(`o valor esta na posição ${pos}`)
}