const {OAuth2Client}= require("google-auth-library");
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/mongo/schemas/user.model');

googleAuth= (req, res) => {
    const {token} = req.body;
    const client = new OAuth2Client(process.env.CLIENT_ID);
    client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    }) .then(response => {
        const {name, email} = response.payload;
        UserSchema.find({ correo: email })
         .then(users => {
             if (users.length > 0) {
                let user = {
                    name:name, 
                    email:email, 
                    rol: users[0].rol
                }
                let jwtToken = jwt. sign(user, process.env.CLAVE_JWT);
                let data = {
                    rol : user.rol,
                    token : jwtToken
                }
                res.json(data);
             } else {
                 res.status(401).json({ message: "Por favor Verificar los datos del usuario"});
             }
         })
         .catch(error => {
             res.status(500).json({ message: err.message });
         })
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json ({ message:"Se presento un ERROR verificando el token"})
    });
}
    

module.exports = {googleAuth};