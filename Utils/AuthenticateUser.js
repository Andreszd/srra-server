const modelUser = require('../models/User')
class AuthenticateUser{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    async authUser (){
        const userExist = await this.findUser()
        let flag = false
        if(userExist){
            this.verifyPassword(userExist) ?  flag = true : flag
        }else{
            flag = false
        }
        return flag
    }
    async findUser(){
        return  await modelUser.findOne(this.email)
    }
    async verifyPassword(user){
        return user.methods.passwordVerify(this.password)
    }   
}
module.exports = AuthenticateUser