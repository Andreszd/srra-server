const Sequelize  = require('sequelize')
const connectionDB = require('../config/db')
const bcrypt = require('bcrypt')
const User = connectionDB.getConnectionDB().define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        notEmpty: true,
        validate:{
            notEmpty: 'Email is requered'
        }
    },
    password:{
        type: Sequelize.STRING,
        notEmpty:true,
        validate:{
            notEmpty: {
                msg: 'Password is requered'
            }
        }
    }
},{
    instanceMethods:{
        generateHash : function(password){
            return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        }
    },
    freezeTableName: true
})
module.exports = User