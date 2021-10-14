const express = require('express');

const userSchema =require('../../models/mongo/schemas/user.model');
const router = express.Router();

// crear usuario
router.post("/users",(req,res)=>{
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

    
});
// get all user
 router.get("/users",(req,res)=>{
   
  let emptyFilter = {};
 userSchema.find(emptyFilter)

    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error})) ;    

    
});
//get a user for id
router.get("/users/:id",(req,res)=>{

  const{id}=req.params;
//   let serialId = req.params.id;
// userSchema.find({ serial: serialId })

    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error})) ;    

    
 });
// update a user
router.put("/users/:id",(req,res)=>{
    const{id}=req.params
    const{name,lastname,rol,estado} =req.body;
    
        userSchema
        .findOneAndUpdate ({_id:req.params.id},{$set:{name:req.body.name,lastname:req.body.lastname,rol,estado}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error})) ;    
    
        
    });
//     // remove user
//     router.delete("/users/:id",(req,res)=>{
//         const{id}=req.params
              
//             userSchema
//             .remove({_id:id})
//             .then((data)=>res.json(data))
//             .catch((error)=>res.json({message:error})) ;    
        
            
//         });


module.exports =router;