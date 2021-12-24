/**DEIXAR CARD ATIVO */
let star = document.querySelectorAll('.product__card .product__card-item .card-star');
for (let a = 0; a < star.length; a++){
    star[a].onclick = function(){
        var b = 0;
        while(b < star.length){
            star[b++].className = 'check';
        }
        star[a].className = 'check active'
    }
}

let balls = document.querySelectorAll('.product__card .product__card-item .card-balls');
for (let c = 0; c < balls.length; c++){
    balls[c].onclick = function(){
        var d = 0;
        while(d < balls.length){
            balls[d++].className = 'check';
        }
        balls[c].className = 'check active'
    }
}

let acessory = document.querySelectorAll('.product__card .product__card-item .card-acessory');
for (let e = 0; e < acessory.length; e++){
    acessory[e].onclick = function(){
        var f = 0;
        while(f < acessory.length){
            acessory[f++].className = 'check';
        }
        acessory[e].className = 'check active'
    }
}

let light = document.querySelectorAll('.product__card .product__card-item .card-light');
for (let g = 0; g < light.length; g++){
    light[g].onclick = function(){
        var h = 0;
        while(h < light.length){
            light[h++].className = 'check';
        }
        light[g].className = 'check active'
    }
}


/**TROCAR IMAGEM */
function imgStar(anything){
    document.querySelector('.img__product-star').src = anything;
}

function imgBalls(anything){
    document.querySelector('.img__product-balls').src = anything;
}

function imgAcessory(anything){
    document.querySelector('.img__product-acessory').src = anything;
}

function imgLight(anything){
    document.querySelector('.img__product-light').src = anything;
}

/**BACKGROUND NO HEADER */
const header = document.getElementById('header')
const finish = document.getElementById('finish')
const backStar = document.getElementById('backStar')
const cart = document.getElementById('cart')
const checkout = document.getElementById('checkout')

finish.onclick = function(){
    header.classList.add('header__payment')
}
cart.onclick = function(){
    header.classList.add('header__payment')
}
backStar.onclick = function(){
    header.classList.remove('header__payment')
}
checkout.onclick = function(){
    header.classList.remove('header__payment')
}