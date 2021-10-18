const express = require("express");

const salesController = require("../../controllers/sales.controller");

const router = express.Router();

router.get("/salesrecords", getAllsales);

router.get("/salesrecords/:sellerName", filterSaleBySeller);

router.get("/salesrecords/:client", filterSaleByClient);

module.exports = router;
