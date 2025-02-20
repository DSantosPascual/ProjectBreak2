//todos los HTML 
const { products } = require('../models/Products'); 

function productForm() {
    
    return `
        <form action="/products/new" method="POST">  
        <label for="nombre">Nombre del producto:</label>
        <input type="text" id="nombre" name="nombre" required>
        
        <label for="description">Descripción:</label>
        <textarea id="description" name="descripcion" required></textarea>
        
        <label for="price">Precio:</label>
        <input type="number" id="price" name="precio" step="0.01" required>
        
        <label for="image">Imagen:</label>
        <input type="file" id="image" name="imagen" accept="image/*" required>
        
        <button type="submit">Crear Producto</button>
        </form>
    `;   
};

function getProduct(products) {
let html = '';
    for (let product of products) {
        html += `
        <div class="product">
        <h2>${product.nombre}</h2>
        <a href="/products/${product._id}">Ver detalle</a>
        </div>
        `;
    }
    return html;
    };

function productId(product) {
    return `
        <div class="product-detail">
        <h2>${product.nombre}</h2>
        <p>${product.descripcion}</p>
        <p>Precio: ${product.precio}€</p>
        </div>
        `;
        } 

module.exports = { getProduct, productForm, productId };