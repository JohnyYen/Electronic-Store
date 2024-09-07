
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
 document.querySelector('.prev').onclick = () => {
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


const loadCategories = () => {
    const catList = document.getElementById("wm-options");
    axios.get('http://localhost:3000/types')
    .then(res => {
        res.data.forEach((element, i) => {
            let li = document.createElement("li");
            li.classList = "wm-options-item";
            li.id = `category-${i}`
            li.innerHTML = `<a href=${element.name_type}>${element.name_type}<\a>`
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
    })
    .catch(error => {
        console.error('No se pudo obtener las categorias', error);
    });
}


let productContainer = document.getElementById("products-container");

function loadProductsByCategories(){
    axios.get('http://localhost:3000/types')    
    .then(res => {
        res.data.forEach(element => {
            let div = document.createElement('div');
            div.classList = 'card';
            let catTitle = document.createElement('h3');
            catTitle.innerText = `${element.name_type}`;
            catTitle.id = `category-${element.name_type}`;

            div.appendChild(catTitle);
            productContainer.appendChild(div);

        })
    })  
    .catch(error => {
        console.error('No se pudo mi rey :(', error);
    })
}


loadCategories()
loadProducts();
loadProductsByCategories();

//Slider de categorias