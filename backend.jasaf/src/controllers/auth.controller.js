const {OAuth2Client}= require("google-auth-library");
const jwt = require('jsonwebtoken');


googleAuth= (req, res) => {
    const {token} = req.body;
    const client = new OAuth2Client(process.env.CLIENT_ID);
    client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    }) .then(response => {
        console.log(response);
        const {name, email}= response.payload;
        let user = {
            name:name, 
            email:email, 
            rol: 'Vendedor'
        }
        let jwtToken = jwt. sign(user, process.env.CLAVE_JWT);
        let data = {
            rol : user.rol,
            token : jwtToken
        }
        res.json(data);
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json ({ message:"Se presento un ERROR verificando el token"})
    });
}
    

module.exports = {googleAuth};