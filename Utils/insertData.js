const userModel = require('../models/User')
const rolModel = require('../models/Rol')
const user_rolModel = require('../models/user_rol')

const createrows = async ()=>{
    await user_rolModel.create({
        userId: 10,
        rolId: 2
    }) 
    /* await rolModel.create({
        name_rol: 'admin'  
    }) */
}
module.exports = createrows
