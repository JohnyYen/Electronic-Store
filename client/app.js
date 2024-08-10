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

let addPRoductWindow = document.getElementById("add-product-menu");
let addProductBtn = document.getElementsByClassName("add-product");
let addProductOption = document.getElementById("add-product");
let selectPhotoBtn = document.getElementById("photo-input");
let photoInput = document.getElementById("input");

selectPhotoBtn.addEventListener('click', ()=>{
    photoInput.click();
});

function mostrarInformacion(slideIndex) {
    alert('Mostrando información para el slide ' + slideIndex);
}


function loadCategories(i){
    const catList = document.getElementById("wm-options");
    axios.get('http://localhost:3000/types')
    .then(res => {
        res.data.forEach(element => {
            let li = document.createElement("li");
            li.classList = "wm-options-item";
            li.id = `category-${i}`
            li.innerHTML = `<a href=${element.name_type}>${element.name_type}<\a>`
            i++; 
            catList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('No se pudo obtener las categorias', error);
    });
}

function loadProducts(){
    const products = document.getElementById("product-container");
    axios.get('http://localhost:3000/catalog')
    .then(res => {
        res.data.forEach(element =>{
            let container = document.createElement("div");
            container.classList = "slide";
            let image = document.createElement("img");
            image.src = `${element.upload}`;
            image.alt = `${element.name}`;
            let name = document.createElement("p");
            name.innerHTML = `<b>${element.name}</b>`;
            name.classList = "ap-name";
            container.appendChild(image);
            container.appendChild(name);

            products.appendChild(container);
        })
        .catch(error => {
            console.error('No se pudo obtener las categorias', error);
        });
    })
}

function loadProductsByCategories(){
    let section = document.createElement('section');
    section.id = "products-by-category";
    let body = document.getElementsByTagName('body');

    axios.get('http://localhost:3000/types')
    .then(res => {
        res.data.forEach(element => {
        })
    })  
}

loadCategories();
loadProducts();
loadProductsByCategories();