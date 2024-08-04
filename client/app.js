let mobileOptionBtn = document.querySelector("#menu-icon-container button");
let mobileOptionWindow = document.getElementById("window-menu");

mobileOptionBtn.onclick = function(){
    if(mobileOptionWindow.style.display == "flex"){
        mobileOptionWindow.style.display = "none";
    }
    else
        mobileOptionWindow.style.display = "flex";
    
}

/*Slider */
let currentSlide = 0;
let startX = 0;
let endX = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Eventos de clic para los botones de navegación
document.querySelector('.prev').onclick = function() {
    moveSlide(-1);
}

document.querySelector('.next').onclick = function() {
    moveSlide(1);
}

// Eventos táctiles para la navegación por gestos
const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

sliderContainer.addEventListener('touchmove', function(event) {
    endX = event.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', function() {
    if (startX > endX + 50) {
        moveSlide(1);
    } else if (startX < endX - 50) {
        moveSlide(-1);
    }
});