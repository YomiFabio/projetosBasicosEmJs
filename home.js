let nac= document.querySelector('img.img')
let nac_txt =document.querySelector('p')
let day = document.getElementById('img1')
let daytxt = document.getElementById('txt1')
let year = document.getElementById('img2')
let yeartxt = document.getElementById('txt2')
let pa = document.getElementById('img3')
let patxt = document.getElementById('txt3')
let tab = document.getElementById('img4')
let tabtxt = document.getElementById('txt4')
let vetor = document.getElementById('img5')
let vetortxt = document.getElementById('txt5')

function entrar(a,b){

    a.style.filter = "brightness(50%)"
    b.style.opacity = '1'
}

function sair(a,b){
    a.style.filter = "brightness(100%)"
    b.style.opacity = '0'
}