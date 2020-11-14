const express = require('express')
const routes = express.Router()
const {signUp, signIn} = require('../controllers/authController')

//routes.post('/api/register-user',registerUser)
routes.post('/login-user', signIn)
routes.post('/register-user', signUp)
module.exports = routes
