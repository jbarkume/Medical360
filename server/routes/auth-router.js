const AuthController = require("../controllers/auth-controller");
const express = require("express");

const router = express.Router();

// ask if user logged in request
router.get("/loggedIn/" + ":id", AuthController.loggedIn);

// existing user login requests
router.post("/login", AuthController.login);

// logout user requests
router.get("/logout", AuthController.logout);

router.post("/register", AuthController.register);

// Handles password reset requests
router.post('/reset-password', AuthController.resetPassword);


module.exports = router
