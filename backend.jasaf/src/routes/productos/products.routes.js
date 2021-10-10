/**
 * productos.js : Contiene los servicios REST
 * expuestos mediante express router para
 * el modulo de productos
 */
const express = require('express');

const ProductSchema = require('../../models/mongo/schemas/product.model');

const router = express.Router();

// Metodo que sirve para retornar todos los productos disponibles
router.get('/products', (request, response) => {
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
});

router.get('/products/serials/:serialId', (req, res) => {
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
});

router.get('/products/names/:productName', (req, res) => {
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
});

//Metodo que sirve para la creación de un producto nuevo
router.post('/products', (req, res) => {
    const {
        name,
        serial, description,
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
            response.status(500).json({ message: err.message });
        });

});

// Metodo que sirve para la actualización de un producto existen
router.put('/products/:productId', (req, res) => {
    console.log(req.body);
    console.log(req.params.productId);
    res.json({ message: "Producto ACTUALIZADO correctamente" });
});

module.exports = router;




