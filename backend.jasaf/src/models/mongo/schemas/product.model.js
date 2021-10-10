/**
 * product.js: define el esquema del modelo de mongodb 
 * para la colección de productos
 */
const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProductSchema = new Schema({
  name : { type: String, required: true},
  serial : { type: String, required: true},
  description : { type: String, required: true}, 
  brand : { type: String, required: true},
  characteristics: { type: String, required: true},
  price: { type: Number, required: true},
  creationDate : { type: Date, required: false, default: Date.now}
});

module.exports = mongoose.model('product', ProductSchema);