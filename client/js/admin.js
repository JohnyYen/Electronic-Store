
let addPRoductWindow = document.getElementById("add-product-menu");
let addProductBtn = document.getElementsByClassName("add-product");
let addProductOption = document.getElementById("add-product");
let selectPhotoBtn = document.getElementById("photo-input");
let photoInput = document.getElementById("input");

selectPhotoBtn.addEventListener('click', ()=>{
    photoInput.click();
});

let mobileOptionBtn = document.querySelector("#menu-icon-container button");
let mobileOptionWindow = document.getElementById("window-menu");

mobileOptionBtn.onclick = function(){
    if(mobileOptionWindow.style.display == "flex"){
        mobileOptionWindow.style.display = "none";
    }
    else
        mobileOptionWindow.style.display = "flex";
    
}


document.getElementById('edit-button').addEventListener('click', ()=>{
    /*Falta que los datos en la ventana de editar/agregar sean los del elemento seleccionado*/
    document.getElementById('add-product-menu').style.display = 'flex';
});

function loadCategorySelection(){
    let comboBox = document.getElementById('category');

    axios.get('http://localhost:3000/types')
    .then(res =>{
        res.data.forEach(element => {
            let select = document.createElement('option');
            select.value = `${element.name_type}`;
            select.text = `${element.name_type}`;

            comboBox.appendChild(select);
        });
    })
    .catch(error => {
        console.error('No se pudo mirrey :(', error);
    })
}

loadCategorySelection();

photoInput.addEventListener('change', function(event) {
    var img = document.getElementById('preview-img');
    var file = event.target.files[0];
    
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  addProductOption.addEventListener('click', function(){
    addPRoductWindow.style.display = 'flex';
    mobileOptionWindow.style.display = 'none';
  });

   function addNewCategory(){
    let input = document.getElementById('category-name');
    let string = input.value;

    if(input.value != ""){
        axios({
            method: 'post',
            url: 'http://localhost:3000/admin/types',
            data: {
                name_type: `${string}`
            }
        });

        let comboBox = document.getElementById('category');

        let select = document.createElement('option');
        select.value = `${input.textContent}`;
        select.text = `${input.textContent}`;
        
        comboBox.appendChild(select);
    }
    else{
        alert("No introduzca una categoria vacia");
    }
  }

  document.getElementById('add-new-category').addEventListener('click', addNewCategory);

  document.getElementById('add-category').addEventListener('click', ()=>{
    mobileOptionWindow.style.display = 'none';
    document.getElementById('create-category').style.display = 'flex';
  })

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


    document.getElementById('cancel-deletion').addEventListener('click', ()=>{
        document.getElementById('delete-modal').style.display = 'none';
    })

loadProducts();