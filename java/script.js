"use strict"
import { article } from './data.js';
import { filter, find } from './Filtros.js'

let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];



function generateCardsArticle(articleArray) {
    let html = '';
    for (let i = 0; i < articleArray.length; i++) {
        html += `<div class="col-lg-4 col-sm-8 col-md-6">
                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                        <img src="${articleArray[i].Imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${articleArray[i].Name}</h5>
                          <p class="card-text">${articleArray[i].Description}</p>
                          <p class="card-text">${articleArray[i].Color}</p>
                           <p class="card-text text-end">$ ${articleArray[i].Precio}</p>
                           <div>
                             <a href="#" class=" btn btn-primary agregar-carrito" data-id="1" onclick="addToCard(${articleArray[i].id})">Agregar al carrito</a>

                             </div>
                        </div>
                    </div>
                </div>`;
    }
    const container = document.getElementById('container-prodcuts');
    container.innerHTML = html;
}
generateCardsArticle(article);

function FilterbyName(element) {
    const input = document.getElementById('find-name');
    // let brand = element.brand.toLowerCase();
    // let value = input.value.toLowerCase();
    // return brand.includes(value);
    return element.Name.toLowerCase().includes(input.value.toLowerCase());
}

function filterBynombre() {
    let articleByName = filter(article, FilterbyName);
    generateCardsArticle(articleByName);
}
window.filterBynombre = filterBynombre;

// AGREGAR AL CARRITO
function generateShopingCart() {
    let ShopCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    let html = '';
    for (let i = 0; i < ShopCart.length; i++) {
        html += `<tr>
                    <th scope="row"> <img src="${ShopCart[i].Imagen}" class="img-carrito" alt=""> </th>
                    <td>${ShopCart[i].Name}</td>
                    <td>${ShopCart[i].Description}</td>
                    <td>$ ${ShopCart[i].Precio}</td>
                    
                   
                    
                </tr>`;
    }
    const container = document.getElementById('container-car');
    container.innerHTML = html;

}


function addToCard(id) {
    function cbFindId(product) {
        return product.id === id
    }
    let articulo = find(article, cbFindId)
    shoppingCart.push(articulo);
    JSON.stringify(localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart)))


    const alert = document.querySelector('.alert')

    setTimeout(function () {
        alert.classList.add('hide')
    }, 2000)
    alert.classList.remove('hide')

}

//funcion  Eliminar
function deletearticleArray (id){
  console.log(id);
}




window.deletearticleArray = deletearticleArray;
window.addToCard = addToCard;
window.generateShopingCart = generateShopingCart;


