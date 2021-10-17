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
    let tyoeUser = req.params.typeUser;
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
    .then((data)=>{res.json(data);})
    .catch((error)=>res.json({message:error})) ;  
 };
 
 // Metodo que sirve para la actualización de un producto existen
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
 
 
 