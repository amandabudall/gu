let navbar = document.querySelector('.navbar');
let quantidade = 0;

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


var j = 0;

function carrinho(){
    
    j++;
    if(j % 2 == 0){
        $("#carrinho").animate({height:'0%'},500);
    } else {
        $("#carrinho").animate({height:'100%'},500);
        j = 1 
    }
}

function mandarCarrinho(nome,preco,imagem){
    
    var carrinhoElement = document.querySelector('.carrinho');
    var newDiv = document.createElement('div');
    newDiv.classList.add('carrinhoItem');
    newDiv.innerHTML = `
    
        <div class="produto"> ${nome}</div>
        <div class="carrinhoItemTabela">
            <div class="quad">PRODUTO</div>
            <div class="quad">PREÇO UNI.</div>
            <div class="quad">QUANTIDADE</div>
            <div class="quad">PREÇO TOTAL</div>
        </div>
                
        <div class="tabela">
            <div class="quad st "> 
                <img src="${imagem}" height="80%" alt=""></img>  
            </div>
            <div class="quad st b">R$ ${preco}</div>
            <div class="quad st c" id="">
                <div class="mais" id="mais" onclick="mudarPreco(${preco})"> + </div>
                <div id="qtd"></div>
            </div>
            <div class="quad st d" id="total"></div>
        </div>
    
    `;
carrinhoElement.appendChild(newDiv);
    
}


function mudarPreco(preco) {
    
    quantidade++;

    var qtd = document.getElementById("qtd");
    var precoD = document.getElementById("total");

    qtd.textContent = quantidade;

    var precoNumber = parseFloat(preco); // Convert preco to a float

    var total = quantidade === 1 ? precoNumber : precoNumber * quantidade;

    precoD.innerHTML = 'R$' + total;
}