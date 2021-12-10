function verify() {
    console.log('click')
    var país = document.getElementById('nacionalidade')
    var p2 = país.value 
    console.log(p2)
    if (p2 != 'Brasil'){
        console.log('gringo')
        var R = document.getElementById("resultado")
        R.innerHTML ='<h1>Você é estrangeiro<h1>'
    } else {
        console.log('BR')
        var R = document.getElementById("resultado")
        R.innerHTML ='<h1>Você é brasileiro<h1>'
    }

    

}