const express = require('express')
const routes = express.Router()

routes.get('/API/user',(req, res)=>{
    res.send('ola')
})

module.exports = routes