/**
 * mongoFactory.js: Permite establecer la conexión con la BD MongoDB
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jasaf')
        .then(db => console.log("mongodb connected"))
        .catch(err => console.error(err));
