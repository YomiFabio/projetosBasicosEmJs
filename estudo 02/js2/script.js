function count(){
    var inicio = document.getElementById('begin')
    var fim = document.getElementById('end')
    var passo = document.getElementById('step')
    var contar = document.getElementById('contar')
    

    if(inicio.value.length == 0){
        alert('insira um valor válido!')
    } else {
        if(passo.value == 0 || passo.value == 0 || fim < 0){
            alert("Valor inválido! Começaremos a partir do passo 1")
            passo = 1
            for(var i = Number(inicio.value);i <= Number(fim.value); i += passo){
                console.log(i)
                contar.innerHTML += `${i} \u{25B6}`
            }
            
        } else if(inicio.value < fim.value){
            for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
                console.log(i)
                contar.innerHTML += `${i} \u{25B6}`
            }
        }
        else{
                for(var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)){
                    contar.innerHTML += `${i} \u{25B6}`
                }
        }
    }contar.innerHTML += `\u{1F3C1}`


}