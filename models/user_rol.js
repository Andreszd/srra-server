const Sequelize = require('sequelize')  
const connectionDB = require('../config/db')

const userRol = connectionDB.getConnectionDB().define('user_rol',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = userRol
