const express = require('express')
const routes = express.Router()
const { verifyToken  } = require('../middlewares/auth')
const { userAuthenticate } = require('../controllers/userController')
routes.get('/api/auth',verifyToken, userAuthenticate)

module.exports = routes