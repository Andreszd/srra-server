const express = require('express')
const routes = express.Router()
const { registerUser, loginUser } = require('../controllers/authController')

routes.post('/api/register-user',registerUser)
routes.post('/api/login-user',loginUser)
module.exports = routes