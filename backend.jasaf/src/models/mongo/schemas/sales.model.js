const mongoose = require("mongoose");

const salesRecordSchema = new mongoose.Schema({
  date: { type: Date },
  sellerCode: { type: Number },
  sellerName: { type: String },
  clientID: { type: Number },
  client: { type: String },
  product: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  total: { type: Number },
});

module.exports = mongoose.model("salesrecords", salesRecordSchema);
