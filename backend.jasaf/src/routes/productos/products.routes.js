/**
 * productos.js : Contiene los servicios REST
 * expuestos mediante express router para
 * el modulo de productos
 */
const express = require("express");

const productController = require("../../controllers/product.controller");

const router = express.Router();

// Metodo que sirve para retornar todos los productos disponibles
router.get("/products", productController.getAllProducts);

router.get(
  "/products/serials/:serialId",
  productController.filterProductBySerial
);

router.get(
  "/products/names/:productName",
  productController.filterProductByName
);

//Metodo que sirve para la creación de un producto nuevo
router.post("/products", productController.createProduct);

// Metodo que sirve para la actualización de un producto existen
router.put("/products/:productId", productController.updateProduct);

module.exports = router;
