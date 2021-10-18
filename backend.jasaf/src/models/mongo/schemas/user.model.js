const mongoose = require("mongoose");
// sirve para generar un esquema de usuario
const { Schema } = mongoose;
const userSchema = new Schema({
  din: {
    type: Number,
    require: true,
  },
  tipoUsuario: {
    type: String,
    require: false,
  },
  tipoDocumento: {
    type: String,
    require: false,
  },
  numDocumento: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    unique: true,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  razon: { type: String, require: false },
  sexo: {
    type: String,

    require: false,
  },
  fechaNacimineto: {
    type: String,
    require: false,
  },
  ciudad: {
    type: String,
    require: true,
  },
  direccion: {
    type: String,
    require: true,
  },
  barrio: {
    type: String,
    require: false,
  },
  correo: {
    type: String,
    require: true,
  },
  telefono: {
    type: String,
    require: false,
  },
  movil: {
    type: String,
    require: true,
  },
  estado: {
    type: String,
    require: true,
  },
  rol: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("User", userSchema);
