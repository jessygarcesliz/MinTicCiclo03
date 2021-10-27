const express = require("express");

const authController = require("../../controllers/auth.controller");

const router = express.Router();

router.post("/auth/users",authController.googleAuth);


module.exports = router;
