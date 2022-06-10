"use strict"
import { article } from './data.js';
import { filter, find } from './Filtros.js'

function generateCardsArticle(articleArray) {
    let html = '';
    for(let i = 0; i < articleArray.length; i++) {
        html += `<div class="col-4">
                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                        <img src="${articleArray[i].Imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${articleArray[i].Name}</h5>
                        <p class="card-text">${articleArray[i].Description}</p>
                        <p class="card-text">${articleArray[i].Color}</p>
                        <p class="card-text text-end">${articleArray[i].Precio}</p>
                        <a href="#" class=" btn btn-primary agregar-carrito" data-id="1">Agregar al carrito</a>
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