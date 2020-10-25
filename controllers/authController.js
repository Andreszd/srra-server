const modelUser = require('../models/User')
const AuthenticateUser = require('../Utils/AuthenticateUser')
exports.authenticateUser = (req, res, next) =>{

}
exports.loginUser = async (req, res) =>{
    const { email, password } = req.body
    try {
        const auth = new AuthenticateUser(email, password)
        const userExist = await auth.authUser()
        if(userExist){
            const rol = await auth.findRol()
            if(!rol) return res.status(400).json({message: 'rol not found'})
            res.status(200).json({
                msg:'user authenticate',
                user: req.body,
                rol
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