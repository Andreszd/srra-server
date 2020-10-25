const Sequelize  = require('sequelize')
const connectionDB = require('../config/db')
const bcrypt = require('bcrypt')

const UserRol = require('./user_rol')
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
    hooks:{
        
        beforeCreate : async function(user){
            const { dataValues } = user
            const { password } = dataValues
            console.log(user)
            const salt = await bcrypt.genSalt(10)
            const passwordHash = await  bcrypt.hash(password, salt)
            user.password = passwordHash
        }
    },
    freezeTableName: true,
})
User.prototype.passwordVerify = function(password){
    return bcrypt.compareSync(password, this.password)
}
User.hasMany(UserRol)
module.exports = User