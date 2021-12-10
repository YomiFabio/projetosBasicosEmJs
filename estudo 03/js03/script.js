let num = document.getElementById("vlr")
let lista = document.getElementById('add')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `número ${num.value} adicionado`
        add.appendChild(item)
        console.log(valores)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
}
 function final (){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
        media = soma/tot
        if (valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados </p>`
    res.innerHTML += `<p>O maior número é ${maior} </p>`
    res.innerHTML += `<p>O menor número é ${menor} </p>`
    res.innerHTML += `<p>A soma dos números é ${soma} </p>`
    res.innerHTML += `<p>A média é ${media} </p>`
    

 }
