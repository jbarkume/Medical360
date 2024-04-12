const AuthController = require("../controllers/auth-controller")
const express = require("express")

const router = express.Router()

// Handles ask if user logged in request
router.get('/loggedIn', AuthController.loggedIn)

// Handles existing user login requests
router.post('/login', AuthController.login)

// Handles logout user requests
router.get('/logout', AuthController.logout)

// Handle's new user registration requests
router.post('/register', AuthController.register)

// Handles password reset requests
router.post('/reset-password', AuthController.resetPassword);


module.exports = router