/**
 * Index.js : File para realizar colocar las configuraciones
 * necesarias para la correcta ejecución de el app
 */

const express = require("express");
const app = express();
require('./database/mongoFactory');

//importamos las rutas definidas para el modulo productos 
//y se incluyeron a express
app.use(require('./routes/productos/productos'));

// Realiza la configuracion del puerto del servidor express
app.listen(8080, () => {
  console.log("Express server running on 6060");
});
