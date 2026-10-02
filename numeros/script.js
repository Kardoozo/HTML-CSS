
    let num = document.getElementById('num')
    let gerar = document.getElementById('gerar')
    let res = document.getElementById('res')
    let valores = []

    function isnumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }else{
            return false
        }
    }

    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        } else false
    }



    function verificar(){
    if(isnumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `Valor ${num.value} Adicionado`
        gerar.appendChild(item)
    }else{
        alert('Valor Inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.lenght == 0){
        alert('Adicione Números antes de Finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
        if (valores[pos] > maior)
            maior=valores [pos]
        if(valores[pos] <menor)
            menor = valores[pos]
        }
        media = soma/ tot
        res.innerHTML = ''
        res.innerHTML += `<p> Temos ${tot} números cadastrado. </p>`
        res.innerHTML +=`<p> O Maior Valor Informado foi ${maior}</p>`
        res.innerHTML +=`<p> O Menor Valor Informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando Todos os valores, Temos ${soma}.</p>`
        res.innerHTML += `<p> A Média Dos Valores Digitado é ${media}</p>`
    }
}
