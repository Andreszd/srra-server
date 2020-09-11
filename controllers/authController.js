const modelUser = require('../models/User')

exports.registerUser = async (req, res) =>{
    console.log(req.body)
    try {
        const newUser = modelUser.build(req.body)
        await newUser.save()
        res.json({
            msg: 'user created'
        }).status(200)
    } catch (error) {
        console.log(error)
        
    }
    
} 