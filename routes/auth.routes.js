const express = require('express')
const routes = express.Router()
const { registerUser, signIn } = require('../controllers/authController')

routes.post('/api/register-user',registerUser)
routes.post('/api/login-user', signIn)
module.exports = routes