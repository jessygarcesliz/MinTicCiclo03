/**
 * usuarios.js : Contiene los servicios REST
 * expuestos mediante express router para
 * el modulo de usuarios
 */

 const userSchema = require('../models/mongo/schemas/user.model');

 // Metodo que sirve para retornar todos los usuarios disponibles
 getAlluser = (request, response) => {
     // realizo la busqueda por medio del UserSchema sin filtros
     let emptyFilter = {};
     userSchema.find(emptyFilter)
         //exito
         .then((users) => {
             if (users.length > 0) {
                 response.json(users);
             } else {
                 response.json({ message: "No se encontraron usuarios" });
             }
         })
         //error
         .catch((err) => {
             response.status(500).json({ message: err.message });
         })
 };

 filterUserById = (req, res) => {
     let Id = req.params.Id;
     userSchema.find({ ID_Usuario: Id })
         .then(users => {
             if (users.length > 0) {
                 res.json(users);
             } else {
                 res.json({ message: "No se encontraron usuarios con ese ID" });
             }
         })
         .catch(error => {
             res.status(500).json({ message: err.message });
         })
 };

 filterUserBynumDocumento =(req, res) => {
     let usernumDocumento = req.params.usernumDocumento;
     userSchema.find({ Documento: usernumDocumento })
         .then(users => {
             if (users.length > 0) {
                 res.json(users);
             } else {
                 res.json({ message: "No se encontraron usuarios con ese documento" });
             }
         })
         .catch(error => {
             res.status(500).json({ message: err.message });
         })
 };

 filterUserByrol =(req, res) => {
    let userrol = req.params.userrol;
    userSchema.find({ Rol: userrol })
        .then(users => {
            if (users.length > 0) {
                res.json(users);
            } else {
                res.json({ message: "No se encontraron usuarios con ese rol" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: err.message });
        })
};

filterUserByestado =(req, res) => {
    let userestado = req.params.userestado;
    userSchema.find({ Estado: userestado })
        .then(users => {
            if (users.length > 0) {
                res.json(users);
            } else {
                res.json({ message: "No se encontraron usuarios con ese estado" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: err.message });
        })
};

 //Metodo que sirve para la creación de un usuario nuevo
 createUser =(req, res) => {
     const {
         Id,
         tipoDocumento, 
         numDocumento,
         name,
         lastname,
         correo,
         rol,
         estado
     } = req.body;

     let newUser = new userSchema({
         Id, tipoDocumento, numDocumento,
         name, lastname, correo, rol, estado
     });

     newUser.save()
         .then(() => {
             res.json({ message: "Usuario almacenado correctamente" });
         })
         .catch(err => {
             res.status(500).json({ message: err.message });
         });
 };

 // Metodo que sirve para la actualización de un usuario existente
 updateUser = (req, res) => {
     let {tipoDocumento, name, lastname, correo} = req.body;
     let userId = req.params.userId;
     let userNumDocumento = req.params.usernumDocumento;
     let userRol = req.params.userRol;
     let userEstado = req.params.userEstado;
     userSchema.findByIdAndUpdate(
         {"Id" :ID_Usuario},
         {"numDocumento" :Num_Documento},
         {"Rol" :Rol},
         {"Estado" :Estado},
         {"tipoDocumento": Tipo_Documento,
          "name": Nombre,
          "lastname": Apellidos,
          "correo": Correo
         }
     ).then((user) => {
         res.json({ message: "Usuario actualizado correctamente" });
     })
     .catch(err => {
         res.status(500).json({ message: "Se presento un error actualizando el usuario" });
     });
 };

 module.exports = {getAlluser, filterUserById, filterUserBynumDocumento, filterUserByrol, filterUserByestado, createUser, updateUser};

