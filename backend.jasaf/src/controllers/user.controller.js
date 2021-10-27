const userSchema = require('../models/mongo/schemas/user.model');
 
 // return user in database
getAllUsers = (req, res) => {
    let emptyFilter = {};
 userSchema.find(emptyFilter)

    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error})) ;   
    
 };
 
 filterUserById = (req, res) => {
    const{id}=req.params;


    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error})) ;    

 };
 
 filterUserByNumDocument =(req, res) => {
     //UserSchema.find({name: { $regex: '.*' + name + '.*' } }).limit(5);
     let NumDocument = req.params.NumDocument;
     userSchema.find({ numDocumento: NumDocument })
         .then(users => {
             if (users.length > 0) {
                 res.json(users);
             } else {
                 res.json({ message: "usuario no registrado con ese nombre " });
             }
         })
         .catch(error => {
             res.status(500).json({ message: err.message });
         })
 };
 
 filterUserByType =(req, res) => {
    //UserSchema.find({name: { $regex: '.*' + name + '.*' } }).limit(5);
    let typeUser = req.params.typeUser;
    userSchema.find({ rol: typeUser })
        .then(users => {
            if (users.length > 0) {
                res.json(users);
            } else {
                res.json({ message: "usuario no registrado con ese tipo " });
            }
        })
        .catch(error => {
            res.status(500).json({ message: err.message });
        })
};
filterUserByTState =(req, res) => {
    //UserSchema.find({name: { $regex: '.*' + name + '.*' } }).limit(5);
    let stateUser = req.params.stateUser;
    userSchema.find({ estado: stateUser })
        .then(users => {
            if (users.length > 0) {
                res.json(users);
            } else {
                res.json({ message: "usuario no registrado con ese estado " });
            }
        })
        .catch(error => {
            res.status(500).json({ message: err.message });
        })
};
 //Metodo que sirve para la creación de un producto nuevo
 creatUser =(req, res) => {
    const {
      din,
      tipoUsuario,
      tipoDocumento,
      numDocumento,
      name,
      lastname,
      razon,
      sexo,
      fechaNacimineto,
      ciudad,
      direccion,
      barrio,
      correo,
      telefono,
      movil,
      estado,
      rol        } = req.body;

    let newUser= new userSchema({
        din,
        tipoUsuario,
      tipoDocumento,
      numDocumento,
      name,
      lastname,
      razon,
      sexo,
      fechaNacimineto,
      ciudad,
      direccion,
      barrio,
      correo,
      telefono,
      movil,
      estado,
      rol    
    });
 
    newUser.save()//save user create in mongodb
    .then(()=>{res.json({message:"usuario creado correctamente"});})
    .catch((error)=>res.json({message:error})) ;  
 };
 
 // Metodo que sirve para la actualización usuario existen
 updateUser = (req, res) => {
     let {tipoUsuario,
        tipoDocumento,
        numDocumento,
        name,
        lastname,
        razon,
        sexo,
        fechaNacimineto,
        ciudad,
        direccion,
        barrio,
        correo,
        telefono,
        movil,
        estado,
        rol    
             } = req.body;
     let userId = req.params.userId;
   userSchema.findByIdAndUpdate(
         {"_id" :userId},
         { "tipoUsuario":  tipoUsuario,
           "tipoDocumento":tipoDocumento,
           "numDocumento":numDocumento,
           "name":name,
           "lastname":lastname,
          "razon":razon,
          "sexo":sexo,
          "fechaNacimineto":fechaNacimineto,
          "ciudad":ciudad,
          "direccion":direccion,
          "barrio":barrio,
          "correo":correo,
          "telefono":telefono,
          "movil":movil,
          "estado":estado,
          "rol": rol    
         
         }
     ).then((user) => {


         res.json({ message: "usuario actualizado correctamente" });
     })
     .catch(err => {
         res.status(500).json({ message: "Se presento un error actualizando el producto" });
     });
 };
 
 module.exports = {getAllUsers , filterUserById,filterUserByNumDocument, filterUserByType, filterUserByTState,creatUser, updateUser  };
 
 
 
// /**
//  * usuarios.js : Contiene los servicios REST
//  * expuestos mediante express router para
//  * el modulo de usuarios
//  */

//  const userSchema = require('../models/mongo/schemas/user.model');

//  // Metodo que sirve para retornar todos los usuarios disponibles
//  getAlluser = (request, response) => {
//      // realizo la busqueda por medio del UserSchema sin filtros
//      let emptyFilter = {};
//      userSchema.find(emptyFilter)
//          //exito
//          .then((users) => {
//              if (users.length > 0) {
//                  response.json(users);
//              } else {
//                  response.json({ message: "No se encontraron usuarios" });
//              }
//          })
//          //error
//          .catch((err) => {
//              response.status(500).json({ message: err.message });
//          })
//  };

//  filterUserById = (req, res) => {
//      let Id = req.params.Id;
//      userSchema.find({ ID_Usuario: Id })
//          .then(users => {
//              if (users.length > 0) {
//                  res.json(users);
//              } else {
//                  res.json({ message: "No se encontraron usuarios con ese ID" });
//              }
//          })
//          .catch(error => {
//              res.status(500).json({ message: err.message });
//          })
//  };

//  filterUserBynumDocumento =(req, res) => {
//      let usernumDocumento = req.params.usernumDocumento;
//      userSchema.find({ Documento: usernumDocumento })
//          .then(users => {
//              if (users.length > 0) {
//                  res.json(users);
//              } else {
//                  res.json({ message: "No se encontraron usuarios con ese documento" });
//              }
//          })
//          .catch(error => {
//              res.status(500).json({ message: err.message });
//          })
//  };

//  filterUserByrol =(req, res) => {
//     let userrol = req.params.userrol;
//     userSchema.find({ Rol: userrol })
//         .then(users => {
//             if (users.length > 0) {
//                 res.json(users);
//             } else {
//                 res.json({ message: "No se encontraron usuarios con ese rol" });
//             }
//         })
//         .catch(error => {
//             res.status(500).json({ message: err.message });
//         })
// };

// filterUserByestado =(req, res) => {
//     let userestado = req.params.userestado;
//     userSchema.find({ Estado: userestado })
//         .then(users => {
//             if (users.length > 0) {
//                 res.json(users);
//             } else {
//                 res.json({ message: "No se encontraron usuarios con ese estado" });
//             }
//         })
//         .catch(error => {
//             res.status(500).json({ message: err.message });
//         })
// };

//  //Metodo que sirve para la creación de un usuario nuevo
//  createUser =(req, res) => {
//      const {
//          Id,
//          tipoDocumento, 
//          numDocumento,
//          name,
//          lastname,
//          correo,
//          rol,
//          estado
//      } = req.body;

//      let newUser = new userSchema({
//          Id, tipoDocumento, numDocumento,
//          name, lastname, correo, rol, estado
//      });

//      newUser.save()
//          .then(() => {
//              res.json({ message: "Usuario almacenado correctamente" });
//          })
//          .catch(err => {
//              res.status(500).json({ message: err.message });
//          });
//  };

//  // Metodo que sirve para la actualización de un usuario existente
//  updateUser = (req, res) => {
//      let {tipoDocumento, name, lastname, correo} = req.body;
//      let userId = req.params.userId;
//      let userNumDocumento = req.params.usernumDocumento;
//      let userRol = req.params.userRol;
//      let userEstado = req.params.userEstado;
//      userSchema.findByIdAndUpdate(
//          {"Id" :ID_Usuario},
//          {"numDocumento" :Num_Documento},
//          {"Rol" :Rol},
//          {"Estado" :Estado},
//          {"tipoDocumento": Tipo_Documento,
//           "name": Nombre,
//           "lastname": Apellidos,
//           "correo": Correo
//          }
//      ).then((user) => {
//          res.json({ message: "Usuario actualizado correctamente" });
//      })
//      .catch(err => {
//          res.status(500).json({ message: "Se presento un error actualizando el usuario" });
//      });
//  };

//  module.exports = {getAlluser, filterUserById, filterUserBynumDocumento, filterUserByrol, filterUserByestado, createUser, updateUser};

