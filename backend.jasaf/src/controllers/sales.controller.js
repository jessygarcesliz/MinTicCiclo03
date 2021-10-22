const salesRecordSchema = require("../models/mongo/schemas/sales.model");

getAllsales = (request, response) => {
  // realizo la busqueda por medio del ProductSchema sin filtros
  let emptyFilter = {};
  ProductSchema.find(emptyFilter)
    //exito
    .then((salesrecords) => {
      if (salesrecords.length > 0) {
        response.json(salesrecords);
      } else {
        response.json({ message: "No se encontraron ventas registradas" });
      }
    })
    //error
    .catch((err) => {
      response.status(500).json({ message: err.message });
    });
};

filterSaleBySeller = (req, res) => {
  let seller = req.params.seller;
  ProductSchema.find({ sellerName: seller })
    .then((salesrecords) => {
      if (salesrecords.length > 0) {
        res.json(salesrecords);
      } else {
        res.json({ message: "No se encontraron ventas con este vendedor" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: err.message });
    });
};

filterSaleByClient = (req, res) => {
  let clientName = req.params.clientName;
  ProductSchema.find({ client: client })
    .then((salesrecords) => {
      if (salesrecords.length > 0) {
        res.json(salesrecords);
      } else {
        res.json({ message: "No se encontraron ventas con este cliente" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  getAllsales,
  filterSaleBySeller,
  filterSaleByClient,
};
