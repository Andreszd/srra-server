const modelUser = require('../models/User')
const modelRol = require('../models/Rol')
const modelUserRol = require('../models/user_rol')
class AuthenticateUser{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    async authUser (){
        try {
            const userExist = await this.findUser()
            let flag = false
            if(userExist){
                this.verifyPassword(userExist) ?  flag = true : flag
            }else{
                flag = false
            }
            return flag
        } catch (error) {
            console.log(error)
        }
    }
    async findUser(){
        try {
            return  await modelUser.findOne({ where : { email: this.email }})
        } catch (error) {
            console.log(error)
        }
    }
    async verifyPassword(user){
        try {
            return user.passwordVerify(this.password)
        } catch (error) {
            console.log(error)
        }
    }   
    async findRol(){
        try {
            const user = await modelUser.findOne({ where : {email: this.email} })
            const queryRol = await modelUserRol.findOne({ where: { userId : user.id }})
            
            const idrol = await modelRol.findOne({ where: {id :queryRol.rolId} })
            
            return idrol.name_rol
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = AuthenticateUser