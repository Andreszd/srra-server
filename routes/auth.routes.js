const express = require('express')
const routes = express.Router()
const { registerUser } = require('../controllers/authController')

routes.post('/api/register-user',registerUser)

module.exports = routes