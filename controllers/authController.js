const modelUser = require('../models/User')
const AuthenticateUser = require('../Utils/AuthenticateUser')
exports.authenticateUser = (req, res, next) =>{

}
exports.loginUser = (req, res) =>{
    const { email, password } = req.body
    try {
        const auth = new AuthenticateUser(email, password)
        if(auth.authUser()){
            res.json({
                msg:'user authenticate'
            })
        }else{
            throw new Error('error')
        }    
    } catch (error) {
        console.log(error, error.message)
    }
    
}
exports.registerUser = async (req, res) =>{
    console.log(req.body)
    try {
        const newUser = await modelUser.create(req.body)
        res.json({
            msg: 'user created',
            user: newUser
        }).status(200)
    } catch (error) {
        console.log(error)        
    }    
} 