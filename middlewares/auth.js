const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next)=>{
    try {
        const token = req.headers["x-access-token"]

        if(!token) return res.status(403).json({message: 'token invalid'})

        const decoded = jwt.verify(token, process.env.SECRET_KEY)    

        req.user = decoded
        
        next()
    } catch (error) {
        console.log(error)
    }
} 