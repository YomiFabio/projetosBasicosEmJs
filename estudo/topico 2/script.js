function carregar(){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()
msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
if(hora >=0 && hora <12){
    img.src = 'img/fotomanha.png'
    document.body.style.background ='var(--manha)'
} else if(hora >=12 && hora < 18){
    img.src ='img/fototarde.png'
    document.body.style.background = 'var(--tarde)'
} else{
    img.src = 'img/fotonoite.png'
    document.body.style.background ='var(--noite)'
}
}