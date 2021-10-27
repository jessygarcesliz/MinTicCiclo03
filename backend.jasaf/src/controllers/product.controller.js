/**
 * productos.js : Contiene los servicios REST
 * expuestos mediante express router para
 * el modulo de productos
 */

 const ProductSchema = require('../models/mongo/schemas/product.model');
 
 // Metodo que sirve para retornar todos los productos disponibles
getAllProducts = (request, response) => {
     // realizo la busqueda por medio del ProductSchema sin filtros
     let emptyFilter = {};
     ProductSchema.find(emptyFilter)
         //exito
         .then((products) => {
             if (products.length > 0) {
                 response.json(products);
             } else {
                 response.json({ message: "No se encontraron productos" });
             }
         })
         //error
         .catch((err) => {
             response.status(500).json({ message: err.message });
         })
 };
 
 filterProductBySerial = (req, res) => {
     let serialId = req.params.serialId;
     ProductSchema.find({ serial: serialId })
         .then(products => {
             if (products.length > 0) {
                 res.json(products);
             } else {
                 res.json({ message: "No se encontraron productos con ese serial" });
             }
         })
         .catch(error => {
             res.status(500).json({ message: err.message });
         })
 };
 
 filterProductByName =(req, res) => {
     let productName = req.params.productName;
     ProductSchema.find({ name: productName })
         .then(products => {
             if (products.length > 0) {
                 res.json(products);
             } else {
                 res.json({ message: "No se encontraron productos con ese nombre" });
             }
         })
         .catch(error => {
             res.status(500).json({ message: err.message });
         })
 };
 
 //Metodo que sirve para la creación de un producto nuevo
 createProduct =(req, res) => {
     const {
         name,
         serial, 
         description,
         characteristics,
         price,
         brand
     } = req.body;
 
     let newProduct = new ProductSchema({
         name, serial, description,
         characteristics, price, brand
     });
 
     newProduct.save()
         .then(() => {
             res.json({ message: "Producto almacenado correctamente" });
         })
         .catch(err => {
             res.status(500).json({ message: err.message });
         });
 };
 
 // Metodo que sirve para la actualización de un producto existen
 updateProduct = (req, res) => {
     let {brand, name, description, characteristics, price} = req.body;
     let productId = req.params.productId;
     ProductSchema.findByIdAndUpdate(
         {"_id" :productId},
         {"brand": brand,
          "name": name,
          "description": description,
          "characteristics": characteristics,
          "price": price
         }
     ).then((product) => {
         res.json({ message: "Producto actualizado correctamente"});
     })
     .catch(err => {
         res.status(500).json({ message: "Se presento un error actualizando el producto" + err });
     });
 };
 
 module.exports = {getAllProducts, filterProductByName, filterProductBySerial, createProduct, updateProduct};
 
 
 
 
 