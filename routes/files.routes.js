const express = require('express')
const routes = express.Router()
const {fileUpload} = require('../controllers/fileController')
routes.post('/upload', fileUpload)

module.exports = routes
