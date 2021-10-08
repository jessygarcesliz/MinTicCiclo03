/**
 * productos.js : Contiene los servios REST
 * expuestos mediante express router para
 * el modulo de productos
 */
const express = require('express');
const router = express.Router();

// Metodo que sirve para retornar todos los productos disponibles
router.get('/products', (req, res) => {
    res.json({message:"no tengo productos"});
});

//Metodo que sirve para la creación de un producto nuevo
router.post('/product',(req, res) => {
    res.json({message:"Producto almacenado correctamente"});
});

// Metodo que sirve para la actualización de un producto existen
router.put('/products/:productId', (req, res) => {
    console.log(req.body);
    console.log(req.params.productId);
    res.json({message:"Producto ACTUALIZADO correctamente"});
});

module.exports = router;




