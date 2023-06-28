let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
var a = document.getElementById("putz");
function putz(id){
    
    var a = document.getElementById(id);
    a.style.display = 'flex';
}

function fecharPutz(id){
    var a = document.getElementById(id);
    a.style.display = 'none';
}

$('#ParentContainer').scroll(function() { 
    $('#FixedDiv').animate({top:$(this).scrollTop()});
});

function carrinho(){
    var j = 0
    j++
    if(j > 0){
        $("#carrinho").animate({height:'100%'},500);
        j = 0
    } else {
        $("#carrinho").animate({height:'0%'},500);
    }
    
    
 

}

function mandarCarrinho(nome,preco){
    
    var nuevoElemento =  nome + preco;
    
    $("#carrinho").append(nuevoElemento);
    var metadeImagem1 = $("<div>", { class: "metadeImagem" });
    var h4 = $("<h4>").text(nome);
    var p = $("<p>").text(preco);


}

