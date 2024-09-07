let mobileOptionBtn = document.querySelector("#menu-icon-container button");
let mobileOptionWindow = document.getElementById("window-menu");

mobileOptionBtn.onclick = function(){
    if(mobileOptionWindow.style.display == "flex"){
        mobileOptionWindow.style.display = "none";
    }
    else
        mobileOptionWindow.style.display = "flex";
    
}

let infoBtn = document.querySelectorAll(".info-btn");
let productInfoWindow = document.querySelector(".product-cards");
let exitBtn = document.querySelector(".exit-button-container button");


infoBtn.forEach(function(boton) {
    boton.addEventListener("click", function(){
            productInfoWindow.style.display = "flex";
    });
});

exitBtn.addEventListener("click", ()=>{
    productInfoWindow.style.display = "none";
});