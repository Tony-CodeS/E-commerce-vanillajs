
function changeImage(filename){
    let img = document.getElementById('banner');
    banner.setAttribute( 'src', filename)

}

var quantity = 0

var btn3= document.getElementById('btn3')
function increase(){
    btn3.innerHTML = ++quantity
    if(quantity ===0 ){
        let dis = document.getElementById('btn2').disabled = true;
    }
  
     else{
        let dis = document.getElementById('btn2').disabled = false;
     }
   
}

function decrease(){
    btn3.innerHTML = --quantity
    if(quantity ===0 ){
        let dis = document.getElementById('btn2').disabled = true;
    }
  
     else{
        let dis = document.getElementById('btn2').disabled = false;
     }
   
}

var cart = document.getElementById("add-cart-btn");
// var cimg = document.getElementById("cimg");

cart.addEventListener('click', function(){
    var cimg = document.getElementById("cimg").innerHTML = quantity

})

var icon = document.getElementById("icon");
// var empty = document.getElementById("empty");
icon.addEventListener('click', function(){
    document.getElementById("alert").style.display= 'content'
})

