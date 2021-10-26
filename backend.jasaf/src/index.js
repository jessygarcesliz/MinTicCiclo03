/**
 * Index.js : File para realizar colocar las configuraciones
 * necesarias para la correcta ejecución de el app
 */
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const configs = require("./configs/config");

const app = express();
app.use(cors());
app.use(express.json());

app.set("port", configs.server.port);

require("./database/mongoFactory");

//importamos las rutas definidas para el modulo productos
//y se incluyeron a express
app.use(require("./routes/productos/products.routes"));
//se requiere la ruta para usuarios
app.use(require("./routes/usuarios/usuarios.routes"));
//ruta informe de ventas
app.use(require("./routes/ventas/ventas.routes"));
app.use(require("./routes/autenticacion/auth.route"));

// Realiza la configuracion del puerto del servidor express
app.listen(app.get("port"), () => {
  console.log("Express server running " + app.get("port"));
});
