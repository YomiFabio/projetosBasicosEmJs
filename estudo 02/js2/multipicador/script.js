function tabuada(){
    var num =  document.getElementById('num')
    var n = Number(num.value)
    var tab = document.getElementById('tab')
    if(num.value.length == 0){
        alert("Insira um número:")
    } else{
        tab.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            console.log(n*i)
            r = n*i
            var item = document.createElement('option')
            item.text = `${n}x${i}=${r}`
            item.value = `tab${n}`
            tab.appendChild(item)
        }
    }

}