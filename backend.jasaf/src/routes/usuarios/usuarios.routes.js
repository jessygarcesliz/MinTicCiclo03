const express = require('express');

const userController = require('../../controllers/user.controller');
 
const router = express.Router();

// crear usuario
router.post("/users",userController.creatUser);
// get all user
 router.get("/users",userController.getAllUsers);
//get a user for id
router.get("/users/dins/:userId",userController.filterUserById);
router.get("/users/numDocumentos/:NumDocument", userController.filterUserByNumDocument);
router.get("/users/rols/:typeUser", userController.filterUserByType);
router.get("/users/estados/:stateUser", userController.filterUserByTState);

// update a user
router.put("/users/:userId",userController.updateUser);



module.exports =router;