/**
 * mongoFactory.js: Permite establecer la conexión con la BD MongoDB
 */
const mongoose = require('mongoose');
const config = require('../configs/config')

const mongoUrl = config.database.protocol + '://' + 
                 config.database.server + ':' + 
                 config.database.port + '/' +
                 config.database.name;

mongoose.connect(mongoUrl)
        .then(db => console.log("mongodb connected"))
        .catch(err => console.error(err));
