//Creamos el CRUD
const Product = require('../models/Products');
const {getProduct} = require('./html');
const {productForm} = require('./html');
const {productId} = require('./html');

const ProductControllers = {
    
    async create (req, res) {
        try {
            console.log("Datos recibidos en el backend:", req.body);
            const product = await Product.create(req.body);
            res.status(201).json({ Mensaje: "Producto creado correctamente", product });
        } catch (error) {
            console.error(error)
            res.status(500).send({ Mensaje: "No se ha podido crear el producto"});
        }
    },
    /*async getAllProducts (req, res) {
        try {
            const products = await Product.find();
            res.status(200).json({ Mensaje: "Todos los productos", products });
        } catch (error) {
            console.error('Error al obterner todos los productos', error);
        }
        
    },*/
    async showProductNew (req, res) {
        const form = productForm();
        res.send(form);
        }, 
    async showProducts (req, res) {
        const products = await Product.find();
        const allProducts = getProduct(products);
        const html = allProducts;
        res.send(html);
    },
    /*async showProductById (req, res) {
        const product = await Product.findById(req.params._Id);
        const producto = productId(product);
        res.send(producto);
    },*/
    async showProductById(req, res) {
        try {
          const product = await Product.findById(req.params.productId);
          if (!product) {
            return res.status(404).send("Producto no encontrado");
          }
          const html = productId(product);
          res.send(html);
        } catch (error) {
          console.error(error);
          res.status(500).send("Error al obtener el producto");
        }
      } ,    

    async getProductById (req, res) {
        try {
            const productId = await Product.findById(req.params._id);
            res.status(200).json({ Mensaje: 'Producto encontrado', productId});
        } catch (error) {
            console.error('Error al encontrar el producto', error);
        }
    },
    async deleteProduct (req, res) {
        try {
            const productId = await Product.findByIdAndDelete(req.params._id)
            res.status(200).json({ Mensaje: 'Producto eliminado', productId});
        } catch (error) {
            console.error('Error al eliminar el producto', error);
        }
    }
}

module.exports = ProductControllers;