const Sequelize = require('sequelize')  
const connectionDB = require('../config/db')
const UserRol = require('./user_rol')

const Rol = connectionDB.getConnectionDB().define('rol',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_rol:{
        type: Sequelize.STRING   
    }
})
Rol.hasMany(UserRol)
module.exports = Rol