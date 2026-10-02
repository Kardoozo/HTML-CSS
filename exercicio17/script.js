function verificar() {
    let c = document.getElementById('campoN')
    let t = document.getElementById('tabuada')

    let numero = Number(c.value)

    t.innerHTML = ''

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i

        let item = document.createElement('option')
        item.text = `${numero} x ${i} = ${resultado}`

        t.appendChild(item)
    }
}